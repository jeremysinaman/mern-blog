const User = require("../models/User");
const Post = require("../models/Post");

//Mon controller me permet de définir les functions à effectuer suivant l'actions de mon utilisateur

// CREATE POST
module.exports.createPost = async (req, res) => {
        const newPost = new Post(req.body);
        try {
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        } catch(err) {
            res.status(500).json(err);
        }

        
    }


// UPDATE POST
module.exports.updatePost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
        try{
            const updatedPost = await Post.findByIdAndUpdate(req.params.id,
            {
                $set:req.body,
            },
            { new:true }
            );
            res.status(200).json(updatedPost)

        }catch(err){
            res.status(500).json(err)
        }
    } else{
        res.status(401).json("You can update only your post ! ")
    }     
 }catch(err){
        res.status(500).json(err)
    }
}

// DELETE POST
module.exports.deletePost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
        try{
            await post.delete();
            res.status(200).json("Post has been deleted ...")

        }catch(err){
            res.status(500).json(err)
        }
    } else{
        res.status(401).json("You can delete only your post ! ")
    }     
 }catch(err){
        res.status(500).json(err)
    }
}

// GET ONE POST
module.exports.getPost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err)
    }
}

//GET ALL POST
module.exports.getAllPost = async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await Post.find({username})
        } else if(catName){
            posts = await Post.find({categories: {
                $in:[catName]
            }})
        } else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
}
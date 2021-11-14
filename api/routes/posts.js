const router = require("express").Router();
const postsController = require("../controllers/posts.controller");


// CREATE POST
router.post("/", postsController.createPost);

// UPDATE POST
router.put("/:id", postsController.updatePost);

// DELETE POST
router.delete("/:id", postsController.deletePost);


// GET ONE POST
router.get("/:id", postsController.getPost);

//GET ALL POST
router.get("/", postsController.getAllPost);


module.exports = router
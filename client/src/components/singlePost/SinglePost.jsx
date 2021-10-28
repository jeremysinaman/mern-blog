import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://i.pinimg.com/474x/15/c7/d1/15c7d10a7f8dbb14c3d8a8059c593509--tokyo-ghoul.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum, dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i class="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Jeremy</b></span>
                    <span className="singlePostDate">Author: 1 hour ago </span>
                </div>
                <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex fuga doloribus velit doloremque dolor voluptatem voluptatum odit cum ipsum distinctio qui excepturi modi labore laborum, sequi id possimus ipsa ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex fuga doloribus velit doloremque dolor voluptatem voluptatum odit cum ipsum distinctio qui excepturi modi labore laborum, sequi id possimus ipsa ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex fuga doloribus velit doloremque dolor voluptatem voluptatum odit cum ipsum distinctio qui excepturi modi labore laborum, sequi id possimus ipsa ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex fuga doloribus velit doloremque dolor voluptatem voluptatum odit cum ipsum distinctio qui excepturi modi labore laborum, sequi id possimus ipsa ratione.</p>
            </div>
        </div>
    )
}

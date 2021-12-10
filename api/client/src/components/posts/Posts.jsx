import Post from "../post/Post"
import "./posts.css"

export default function Posts({posts}) {
    return (
        <div className="posts  row mb-2">
            {posts.map((p) =>(
                 <Post post={p} />
            ))}
        </div>
    );
}

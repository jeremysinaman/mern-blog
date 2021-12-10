import "./post.css"
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.css';

export default function Post({post}) {
    const PF = "http://localhost:5000/images/"
    return (
       
        <div className="post col-md-6 ">
            <div className="card card flex-md-row mb-4 box-shadow h-md-250"> 
        

            <div className="postInfo card-body d-flex flex-column align-items-start">
                
                    {post.categories.map(c=>(
                        <span className="postCat d-inline-block mb-2 text-primary">{c.name}</span>
                    ))}
              
                <Link to={`/post/${post._id}`} className="link  mb-0 "> <span className="postTitle text-dark ">{post.title}
                </span></Link>
               
                <hr/>
                <span className="postDate mb-1 text-muted">{new Date(post.createdAt).toDateString()}</span>
                <p className="postDesc card-text mb-auto">{post.desc}</p>
            </div>
            {post.photo && (
            <img className="postImg card-img-right flex-auto d-none d-md-block" src={PF + post.photo} alt="" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" data-holder-rendered="true"  />
        )}
     
        </div>
        </div>
        
    )
}

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { useLocation } from "react-router";
import fond from "../../img/gohan.jpg"

export default function Home() {
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts"+search);
            setPosts(res.data)
        }
        fetchPosts();
    }, [search]);
    return (
        <>
           
        <Header/>
        <div className="home">
        <div className="jumbotron p-3 p-md-5 text-white rounded  "> 
        <div> 
       <div class=" home__description col-md-6 px-0">
           <h1 className="home__title display-4 font-italic"> Découvrez les articles de nos utilisateurs</h1>
           <p className="home__text lead my-3"> BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA .</p>
           </div>
           </div>
       </div>  
       
        <Posts posts={posts} />
        
        <Sidebar/>
            
            
        </div>
        </>
    );
}

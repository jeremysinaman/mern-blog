import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }

        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.pinimg.com/236x/c4/c7/b0/c4c7b0f1b4e93447b2a6abb4c4d9356c.jpg" alt="" />
                <p>Hello, I'm Jeremy and this is my blog. You will see a lot about my life, my passions. I love Mangas, Animes, Video Games, Football and Food so ... Welcome !  
                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
            {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link"> 
            <li className="sidebarListItem">{c.name}</li>
            </Link>
            ))}
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/Jeiy97" target="_blank" rel="noreferrer"><i className="sidebarIcon fab fa-facebook-square"></i> </a>
        <a href="https://twitter.com/jeremysinaman" target="_blank" rel="noreferrer"><i className="sidebarIcon fab fa-twitter-square"></i></a>
        <a href="https://www.linkedin.com/in/jeremysinaman/" target="_blank" rel="noreferrer"><i className="sidebarIcon fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/jeiy97/" target="_blank" rel="noreferrer"><i className="sidebarIcon fab fa-instagram-square"></i></a>
        <a href="https://github.com/jeremysinaman" target="_blank" rel="noreferrer"> <i className="sidebarIcon fab fa-github-square"></i></a>
        </div>


        </div>
        </div>
    )
}

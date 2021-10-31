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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti tenetur eaque error, blanditiis mollitia expedita soluta commodi 
                laborum officiis excepturi labore laboriosam accusamus veritatis adipisci cumque consequuntur enim porro sequi.
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
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-linkedin"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-github-square"></i>
        </div>


        </div>
        </div>
    )
}

import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti tenetur eaque error, blanditiis mollitia expedita soluta commodi 
                laborum officiis excepturi labore laboriosam accusamus veritatis adipisci cumque consequuntur enim porro sequi.
                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Mangas</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Animes</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Video Games</li>
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

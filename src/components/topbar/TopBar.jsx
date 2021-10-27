import "./topbar.css";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-linkedin"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-github-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                className="topImg"
                src="https://images.pexels.com/photos/9727533/pexels-photo-9727533.jpeg?cs=srgb&dl=pexels-erik-mclean-9727533.jpg&fm=jpg" alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

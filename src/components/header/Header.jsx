import "./header.css"
import fond from "../../img/fond.jpg"
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Hello ! </span>
                <span className="headerTitleLg">Welcome to my World</span>
            </div>
            <img className="headerImg" src={fond} alt="fond" />
        </div>
    )
}

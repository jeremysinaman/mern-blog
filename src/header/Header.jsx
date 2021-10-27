import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Jeremy Sinaman</span>
                <span className="headerTitleLg">Welcome to my World</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/234527/pexels-photo-234527.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
        </div>
    )
}

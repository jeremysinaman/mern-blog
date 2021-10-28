import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label> Profile Picture </label>
                    <div className="settingsPP">
                        <img src="https://imgr.cineserie.com/2020/04/top-des-meilleurs-animes-a-voir-sur-adn-e1588003276478.jpg?imgeng=/f_jpg/cmpr_0/w_1200/h_600/m_cropbox&ver=1" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Jeremy" />
                    <label>Email</label>
                    <input type="email" placeholder="jeremy@gmail.com" />
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
                <Sidebar/>
           </div>
    )
}

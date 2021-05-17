import "./topbar.scss"
import {MailOutline, PersonOutline} from "@material-ui/icons"

export default function Topbar () {
    return (
        <div className="topbar " >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <PersonOutline className="icon"/>
                        <span>+49 175 95723961</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon"/>
                        <span>tb@gmail.com</span>
                    </div>
                </div>
                
                
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
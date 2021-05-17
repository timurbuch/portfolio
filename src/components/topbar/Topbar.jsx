import "./topbar.scss"
import {MailOutline, PersonOutline} from "@material-ui/icons"

export default function Topbar () {
    return (
        <div className="topbar" id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <PersonOutline/>
                        <span>+49 175 95723961</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline/>
                        <span>tb@gmail.com</span>
                    </div>
                </div>
                </div>
                
                <div className="right">
                    
                </div>
            

        </div>
    )
}
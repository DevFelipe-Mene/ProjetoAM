import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <img src={logo} alt="logo" />
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>
            </div>
            <div className="sidebar_menu">
                <div className="sidebar_link active_menu_link">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <a href="#">Dashboard</a>
                </div>
                <br />
                <div className="sidebar_link">
                    <i className="fa fa-money" aria-hidden="true"></i>
                    <a href="#">Detalhes</a>
                </div>
                <br />
                <div className="sidebar_link">
                    <i className="fa fa-user"></i>
                    <a href="#">Account</a>
                </div>
                <br />

                <div className="sidebar_link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
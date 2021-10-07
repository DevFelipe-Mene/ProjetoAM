import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div class={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div class="sidebar_title">
                <div class="sidebar_img">
                    <img src={logo} alt="logo" />
                </div>
                <i class="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>
            </div>
            <div class="sidebar_menu">
                <div class="sidebar_link active_menu_link">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <a href="#">Dashboard</a>
                </div>
                <br />
                <div class="sidebar_link">
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <a href="#">Pagamentos</a>
                </div>
                <br />
                <div class="sidebar_link">
                    <i class="fa fa-user-secret"></i>
                    <a href="#">Account</a>
                </div>
                <br />

                <div class="sidebar_link">
                    <i class="fa fa-exit"></i>
                    <a href="#">Logo ut</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
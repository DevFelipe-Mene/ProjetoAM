import "./Navbar.css";
import avatar from "../../assets/avatar.png";

const Navbar = ({sidebarOpen, openSidebar}) => {
    return(
        <nav class = "navbar">
            <div class = "nav_icon" onClick={() => openSidebar()}>
                <i class = "fa fa-bars"></i>
            </div>
            <div class = "navbar_left">
                <a href= "#" >Dashboard</a>
                <a class = "active_link" href= "#" >About</a>
            </div>
            <div class = "navbar_right">
                <a href = "#" >
                    <i class = "fa fa-search" ></i>
                </a>
                <a href = "#" >
                    <i class = "fa fa-clock-o"></i>
                </a>
                <a href = "#">
                    <img width ="30" src={avatar} alt ="avatar"/>
                </a>
            </div>
        </nav>

    )
}

export default Navbar;
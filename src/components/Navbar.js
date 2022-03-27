import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {SidebarData} from "./SidebarData"
//import { VscThreeBars } from "react-icons/vsc";

 function Navbar() {
     const [sidebar, setSidebar] = useState(false)

     const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars" onClick={showSidebar}>
          menu
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              toggle
            </Link>
          </li>
          {SidebarData.map((item, index) => {
              return(
                  <li key={index} className={item.className}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                  </li>
              )
          })}
        </ul>
      </nav>
    </>
  );
}
export default Navbar;


//  <VscThreeBars />
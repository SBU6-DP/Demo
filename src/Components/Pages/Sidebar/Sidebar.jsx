import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import nexus from '../../../images/Logo/NexusLabs-Logo.png'
import hide_sidebar from '../../../images/icons/left_close.png'

import srm_white_logo from '../../../images/Logo/logo_srm_white.png'

function Sidebar() {
  const [sidebarMenu, setSidebarMenu] = useState([]);
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSidebarMenu(SidebarData);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const active = SidebarData.find((item) =>
      currentPath.startsWith(item.link)
    );
    if (active) {
      setActiveMenu(active.id);
    }
  }, [location]);
  return (
    <>
      <div className="sidebar-top">
       <div className="sidebar-logo-box">
       <img src={srm_white_logo} className="sidebar-logo"/>
       </div>
      </div>
      <section className="sidebar">
       
        <ul className="sidebar-menu">
        <div className="">
          {/* <img src={hide_sidebar} className="hide_side"/> */}
        </div>
          {sidebarMenu?.map((list) => {
            return (
              <Link to={`${list.link}`}>
                <li
                  className={`${
                    list.id === activeMenu ? "active" : ""
                  } sidebar-list`}
                  title={list?.navItem}
                  onClick={() => setActiveMenu(list.id)}
                >
                  <img src={list.img} className="sidebar-icon-img" />
                 <span> {list?.navItem}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Sidebar;

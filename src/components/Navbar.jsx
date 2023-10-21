import React, { Fragment, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import logo from "../../public/images/mainLogo.png";

// window.onload = function(){
  

// }

function Navbar() {

  const mobile_view = useRef();
  
  function menu(e) {
    e.target.classList.toggle(styles["is_active"]);
    mobile_view.current.classList.toggle(styles["is_active"]);
  }

  return (
    <Fragment>
      <nav className={`${styles.container} mt-5`}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img src={logo} alt="" />
          </div>

          <div className={styles.content} >
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Members</a>
            <a href="#">Editorial Board</a>
            <a href="#">Resources</a>
          </div>
          <a href="#" className={styles.joinus}>
            Join Us
          </a>
          <div className={styles.search_space}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search...."
              className={styles.search}
            />
          </div>
          <button className={`${styles.hamburger}`} onClick={menu}>
            <div className={styles.bar}></div>
          </button>
        </div>
      </nav>
      <nav className={styles.mobile_view} ref={mobile_view}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Members</a>
          <a href="#">Editorial Board</a>
          <a href="#">Resources</a>
            <a href="#" className={styles.joinus_a}>
              Join Us
            </a>
          <div className={styles.search_space_a}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search...."
              className={styles.search}
            />
          </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
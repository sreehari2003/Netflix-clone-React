import React from "react";
import "./navbar.scss";
import { BsSearch } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";
function Navbar() {
  const [scroll, setScroll] = useState(false);
  window.onscroll = () => {
    setScroll(window.pageYOffset > 6 ? true : false);
    console.log(scroll);
    return () => (window.onscroll = null);
  };
  const navStyle = {
    backgroundColor: "#000",
  };
  return (
    <>
      <div className="navbar" style={scroll ? navStyle : null}>
        <div className="container">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
              alt="netflix"
            />
            <span>Homepage</span>
            <span>series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <BsSearch className="icon" />
            <span>KID</span>
            <VscBell className="icon" />
            <img
              src="https://image.shutterstock.com/image-vector/kid-try-reach-star-logo-600w-1931547941.jpg"
              alt=""
            />
            <div className="profile">
              <AiOutlineArrowDown className="icon" />
              <div className="options">
                <button>My List</button>
                <button>Settings</button>
                <button>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

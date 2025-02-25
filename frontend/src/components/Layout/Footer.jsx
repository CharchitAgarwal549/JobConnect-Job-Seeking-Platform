import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Charchit Agarwal.</div>
      <div>
        <Link to={"https://www.facebook.com/charchit.agarwal.52"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/@charchitagarwal589"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/charchit-agarwal-579802255/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/_charchit_agarwal/?hl=en"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

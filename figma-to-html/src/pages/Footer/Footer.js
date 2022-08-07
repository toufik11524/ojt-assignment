import React from "react";
import "./Footer.css";
import logo from "../../assets/images/Academy_logo.png";
import youtube from "../../assets/images/youtube_logo.png";
import linkedin from "../../assets/images/Linkedin_logo.png";
import facebook from "../../assets/images/Facebook_logo.png";
import copyright from "../../assets/images/copyright_icon.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__top">
        <img className="footer__top__image" src={logo} alt="BJIT Logo" />

        <div className="footer__top__company">
          <h3 className="footer__top__company__title">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>BJIT website</li>
          </ul>
        </div>

        <div className="footer__top__program">
          <h3 className="footer__top__program__title">Training program</h3>
          <ul>
            <li>Empower fresh talents</li>
            <li style={{ color: "#0961E7", textDecoration: "underline" }}>
              Cross Platform training
            </li>
            <li>Upskill training</li>
          </ul>
        </div>

        <div className="footer__top__get">
          <h3 className="footer__top__get__title">Get in touch</h3>
          <input placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom__line"></div>
        <div className="footer__bottom__content">
          <div className="footer__bottom__content__left">
            Copyright{" "}
            <img
              className="footer__bottom__content__left__image"
              src={copyright}
              alt="Copyright Icon"
            />{" "}
            2022 BJIT Academy Ltd. All rights reserved.
          </div>
          <div className="footer__bottom__content__right">
            <h3 className="footer__bottom__content__right__title">Follow us</h3>
            <img
              className="footer__bottom__content__right__image"
              src={youtube}
              alt="Youtube logo"
            />
            <img
              className="footer__bottom__content__right__image"
              src={linkedin}
              alt="Linkedin logo"
            />
            <img
              className="footer__bottom__content__right__image"
              src={facebook}
              alt="Facebook logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import "./Footer.css";
import LogoRealEstate from "@/img/imgHeader/LogoRealEstate.svg";
import Image from "next/image";
import Button from "../button/Button";
import { Facebook, Instagram, Twitter } from "@/img/imgFooter/index";
import { ArrowWhite } from "@/img";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="footer-up">
          <h1>
            Make your dreams a <span>reality</span>
          </h1>
          <div className="footer-btn">
            <Button imageSrc={ArrowWhite}>Work with us</Button>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <Image
              src={LogoRealEstate}
              alt="Logo Real Estate"
              className="footer-bottom-left-img"
            />
            <div className="footer-bottom-left-icons">
              <Image
                src={Facebook}
                alt="Facebook"
                className="footer-bottom-left-icons-img"
              />
              <Image
                src={Twitter}
                alt="Twitter"
                className="footer-bottom-left-icons-img"
              />
              <Image
                src={Instagram}
                alt="Instagram"
                className="footer-bottom-left-icons-img"
              />
            </div>
          </div>
          <div className="footer-bottom-right">
            <div className="footer-bottom-right-column">
              <h2>Column Heading</h2>
              <p>Link goes here</p>
              <p>Link goes here</p>
              <p>Link goes here</p>
              <p>Link goes here</p>
            </div>
            <div className="footer-bottom-right-column">
              <h2>Column Heading</h2>
              <p>Link goes here</p>
              <p>Link goes here</p>
              <p>Link goes here</p>
              <p>Link goes here</p>
            </div>
            <div className="footer-bottom-right-column">
              <h2>Column Heading</h2>
              <p>Link goes here</p>
              <p>Link goes here</p>
              <p>Link goes here</p>
              <p>Link goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

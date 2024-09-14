import React from "react";
import "./Header.css";
import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import LogoRealEstate from "@/img/imgHeader/LogoRealEstate.svg";
import Image from "next/image";
import Button from "../button/Button";
import { ArrowWhite } from "@/img";

interface HeaderProps {
  isBackgroundTransparent: boolean;
}

const Header: React.FC<HeaderProps> = ({ isBackgroundTransparent }) => {
  return (
    <header
      className={`header ${
        isBackgroundTransparent
          ? "header-background-transparent"
          : "header-background-black"
      }`}
    >
      <div className="header">
        <div className="header-wrap">
          <div className="header-logo">
            <Link className="header-menu-item-link" href={ROUTER.HOME}>
              <Image
                src={LogoRealEstate}
                alt="Logo Real Estate"
                className="header-logo-img"
              />
            </Link>
          </div>
          <div className="header-menu">
            <ul className="header-menu-items">
              <li className="header-menu-item">
                <Link className="header-menu-item-link" href={ROUTER.PROPERTY}>
                  Nav Link
                </Link>
              </li>
              <li className="header-menu-item">Nav Link</li>
              <li className="header-menu-item">Nav Link</li>
              <li className="header-menu-item">Nav Link</li>
            </ul>
            <div className="header-btn">
              <Button imageSrc={ArrowWhite}>Work with us</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

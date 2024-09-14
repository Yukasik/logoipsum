import React from "react";
import "./Button.css";
import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  imageSrc: string;
}

const Button = ({ children, imageSrc }: ButtonProps) => {
  return (
    <button className="btn">
      {children}
      <Image src={imageSrc} alt="arrow" className="btn-img" />
    </button>
  );
};

export default Button;

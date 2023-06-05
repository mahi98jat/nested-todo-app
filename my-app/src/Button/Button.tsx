import React, { FC } from "react";
import "./Button.css";

type ButtonProps = {
  type: "primary" | "secondary";
  children: string | React.ReactNode;
  onClick: (e: any) => void;
};

const Button: FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <button onClick={onClick} className={["button", type].join(" ")}>
      {children}
    </button>
  );
};

export default Button;

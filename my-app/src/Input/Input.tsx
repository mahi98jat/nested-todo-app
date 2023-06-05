import React, { FC } from "react";
import "./Input.css";

type InputProps = {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
};

const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  disabled,
  type,
}) => {
  return (
    <input
      className="input"
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange && onChange}
      disabled={disabled}
    />
  );
};

export default Input;

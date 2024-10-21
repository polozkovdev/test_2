import React from "react";
import SM from "./Button.module.scss";

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick: () => void;
  label: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, label, disabled }) => {
  return (
    <button className={SM.Button} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;

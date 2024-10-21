import React from "react";
import SM from "./Button.module.scss";
import Spinner from "@/shared/ui/Spinner/Spinner";

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({
  label,
  disabled,
  isLoading,
  onClick,
}) => {
  return (
    <button className={SM.Button} onClick={onClick} disabled={disabled}>
      {label}
      {isLoading && (
        <div className={SM.Loading}>
          <Spinner />
        </div>
      )}
    </button>
  );
};

export default Button;

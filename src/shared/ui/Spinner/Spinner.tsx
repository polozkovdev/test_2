import React from "react";
import SM from "./Spinner.module.scss";

const Spinner: React.FC = () => {
  return (
    <div className={SM.Spinner}>
      <div className={SM.SpinnerItem} />
      <div className={SM.SpinnerItem} />
      <div className={SM.SpinnerItem} />
    </div>
  );
};

export default Spinner;

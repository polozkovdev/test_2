import SM from "./Skeleton.module.scss";
import { FC } from "react";

const Skeleton: FC = () => (
  <div className={SM.Skeleton}>
    <div className={SM.Image}></div>
    <div className={SM.Text}>
      <div className={SM.Title} />
      <div className={SM.Text} />
    </div>
  </div>
);

export default Skeleton;

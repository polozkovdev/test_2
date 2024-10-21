import SM from "./DetailSkeleton.module.scss";
import { FC } from "react";

const DetailSkeleton: FC = () => (
  <div className={SM.DetailSkeleton}>
    <div className={SM.Image}></div>
    <div className={SM.Text}>
      <div className={SM.Title} />
      <div className={SM.Text} />
    </div>
  </div>
);

export default DetailSkeleton;

import React from "react";
import SM from "./DetailCard.module.scss";
import { API_IMAGE_URL } from "@/shared/api/api";

interface IDetailCardProps {
  name: string;
  title: string;
  body: string;
}

const DetailCard: React.FC<IDetailCardProps> = ({ name, title, body }) => {
  return (
    <article className={SM.DetailCard}>
      <div
        className={SM.Pick}
        style={{
          backgroundImage: `url(${API_IMAGE_URL})`,
        }}
      />
      <div className={SM.Content}>
        <h2 className={SM.Title}>{title}</h2>
        <p className={SM.Desc}>{body}</p>
        <div className={SM.Footer}>
          <p>{name}</p>
        </div>
      </div>
    </article>
  );
};

export default DetailCard;

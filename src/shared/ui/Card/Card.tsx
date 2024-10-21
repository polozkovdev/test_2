import React from "react";
import { Link } from "react-router-dom";
import SM from "./Card.module.scss";
import { API_IMAGE_URL } from "@/shared/api/api";

interface ICardProps {
  id: number;
  name: string;
  title: string;
  body: string;
}

const Card: React.FC<ICardProps> = ({ id, name, title, body }) => {
  return (
    <section className={SM.Card}>
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
          <Link to={`/posts/${id}`} className={SM.Link}>
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;

import React, { Dispatch } from "react";
import SM from "./AddPost.module.scss";

interface IAddPostProps {
  setIsOpenModal: Dispatch<React.SetStateAction<boolean>>;
}

const AddPost: React.FC<IAddPostProps> = ({ setIsOpenModal }) => {
  return <div className={SM.AddPost} onClick={() => setIsOpenModal(true)} />;
};

export default AddPost;

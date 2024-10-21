import React, {Dispatch} from "react";
import SM from "./AddPost.module.scss";

interface IAddPostProps {
  setIsOpenModal: Dispatch<React.SetStateAction<boolean>>;
}

const AddPost: React.FC<IAddPostProps> = ({setIsOpenModal}) => (
  <div className={SM.AddPost} onClick={() => setIsOpenModal(true)}>
    <div className={SM.Plus}>+</div>
    <div className={SM.Text}>Add new post</div>
  </div>);

export default AddPost;

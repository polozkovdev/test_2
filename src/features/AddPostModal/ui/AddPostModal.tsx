import React, { Dispatch, useState } from "react";
import { postStore } from "@/entities/post";
import SM from "./AddPostModal.module.scss";
import Button from "@/shared/ui/Button/Button";
import Modal from "@/shared/ui/Modal/Modal";

interface IAddPostModalProps {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<React.SetStateAction<boolean>>;
}

const AddPostModal: React.FC<IAddPostModalProps> = ({
  isOpenModal,
  setIsOpenModal,
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async () => {
    try {
      await postStore.addPost({ id: Math.random(), title, body, userId: 1 });
      setTitle("");
      setBody("");
      console.log("Post added successfully");
    } catch (error) {
      console.error("Failed to add post: ", error);
    }
  };

  return (
    <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
      <div className={SM.AddPostModal}>
        <h2 className={SM.Title}>Add New Post</h2>
        <div className={SM.Content}>
          <input
            className={SM.Item}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            className={SM.Item}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Body"
          />
          <Button
            disabled={title.trim().length === 0 && body.trim().length === 0}
            onClick={handleSubmit}
            label="Submit"
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddPostModal;

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
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const payload = { id: Math.random(), title, body, userId: 1 };
      await postStore.addPost(payload);
      setTitle("");
      setBody("");
      setIsOpenModal(false);
      console.log(`Post added successfully`);
    } catch (error) {
      console.error("Failed to add post: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  const isDisabledSubmit =
    title.trim().length === 0 && body.trim().length === 0;
  return (
    <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
      <div className={SM.AddPostModal}>
        <h2 className={SM.Title}>Add New Post</h2>
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
        <div className={SM.Button}>
          <Button
            isLoading={isLoading}
            disabled={isDisabledSubmit}
            onClick={handleSubmit}
            label="Submit"
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddPostModal;

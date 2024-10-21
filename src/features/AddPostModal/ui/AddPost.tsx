import React, { useState } from "react";
import { postStore } from "@/entities/post";
import SM from "./AddPost.module.scss";
import Button from "@/shared/ui/Button/Button";

const AddPost: React.FC = () => {
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
    <div className={SM.AddPost}>
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
  );
};

export default AddPost;

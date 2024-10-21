import React, { useState } from "react";
import SM from "./MainPage.module.scss";
import { PostList } from "@/entities/post";
import { Pagination } from "@/entities/pagination";
import { AddPostModal } from "@/features/AddPostModal";
import { AddPost } from "@/features/AddPost";

const MainPage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className={SM.MainPage}>
      <h1 className={SM.Title}>Blog Posts</h1>
      <AddPost setIsOpenModal={setIsOpenModal} />
      <AddPostModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      <PostList />
      <Pagination />
    </div>
  );
};

export default MainPage;

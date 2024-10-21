import React from "react";
import SM from "./MainPage.module.scss";
import { PostList } from "@/entities/post";
import { Pagination } from "@/entities/pagination";
import { AddPost } from "@/features/AddPostModal";

const MainPage: React.FC = () => {
  return (
    <div className={SM.MainPage}>
      <h1 className={SM.Title}>Blog Posts</h1>
      <AddPost />
      <PostList />
      <Pagination />
    </div>
  );
};

export default MainPage;

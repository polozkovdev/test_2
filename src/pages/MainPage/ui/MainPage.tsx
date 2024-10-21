import React, { useEffect, useState } from "react";
import SM from "./MainPage.module.scss";
import { PostList, postStore } from "@/entities/post";
import { Pagination } from "@/entities/pagination";
import { AddPostModal } from "@/features/AddPostModal";
import { AddPost } from "@/features/AddPost";
import { useParams } from "react-router-dom";

const MainPage: React.FC = () => {
  const { page } = useParams<{ page: string }>();
  const currentPage = page ? parseInt(page, 10) : 1;
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    postStore.fetchPosts(currentPage);
  }, [currentPage]);
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

import React from "react";
import SM from "./Pagination.module.scss";
import Button from "@/shared/ui/Button/Button";
import { observer } from "mobx-react-lite";
import { postStore } from "@/entities/post";
import { useNavigate } from "react-router-dom";

const Pagination = observer(() => {
  const { currentPage, totalPosts } = postStore;
  const navigate = useNavigate();
  const totalPages = Math.ceil(postStore.totalPosts / 10);
  const handlePageChange = (page: number) => {
    navigate(`/page/${page}`);
  };
  return (
    <div className={SM.Pagination}>
      <Button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        label="Previous"
      />
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={postStore.currentPage === i + 1 ? SM.ActivePage : ""}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <Button
        disabled={currentPage * 10 >= totalPosts}
        onClick={() => handlePageChange(currentPage + 1)}
        label="Next"
      />
    </div>
  );
});

export default Pagination;

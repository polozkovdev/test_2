import React from "react";
import SM from "./Pagination.module.scss";
import Button from "@/shared/ui/Button/Button";
import { observer } from "mobx-react-lite";
import { postStore } from "@/entities/post";

const Pagination = observer(() => {
  const { currentPage, totalPosts, fetchPosts } = postStore;

  const handlePrevClick = () => {
    if (currentPage > 1) {
      fetchPosts(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage * 10 < totalPosts) {
      fetchPosts(currentPage + 1);
    }
  };

  return (
    <div className={SM.Pagination}>
      <Button
        disabled={currentPage === 1}
        onClick={handlePrevClick}
        label="Previous"
      />
      <Button
        disabled={currentPage * 10 >= totalPosts}
        onClick={handleNextClick}
        label="Next"
      />
    </div>
  );
});

export default Pagination;

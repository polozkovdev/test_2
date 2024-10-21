import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import { postStore } from "@/entities/post";
import Card from "@/shared/ui/Card/Card";
import SM from "./PostList.module.scss";

const PostList: React.FC = observer(() => {
  console.log("render");
  useEffect(() => {
    postStore.fetchPosts();
  }, []);
  if (postStore.isLoading) {
    return (
      <div className={SM.PostList}>
        {Array.from({ length: 10 })
          .fill("")
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    );
  }
  return (
    <ul className={SM.PostList}>
      {postStore.posts.map((post) => {
        const author = postStore.users.find((user) => user.id === post.userId);
        return (
          <li key={post.id}>
            <Card
              id={post.id}
              name={author?.name ?? "Unknown Author"}
              title={post.title}
              body={post.body}
            />
          </li>
        );
      })}
    </ul>
  );
});

export default PostList;

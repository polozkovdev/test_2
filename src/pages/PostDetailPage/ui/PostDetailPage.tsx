import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { postStore } from "@/entities/post/model/postStore";
import DetailCard from "@/shared/ui/DetailCard/DetailCard";
import DetailSkeleton from "@/shared/ui/DetailSkeleton/DetailSkeleton";

const PostDetailPage: React.FC = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    postStore.fetchPostById(Number(id));
  }, [id]);

  if (postStore.isLoading || !postStore.post) {
    return <DetailSkeleton />;
  }
  const { userId, title, body } = postStore.post;
  const author = postStore.users.find((user) => user.id === userId);
  return (
    <DetailCard
      title={title}
      body={body}
      name={author?.name ?? "Unknown Author"}
    />
  );
});

export default PostDetailPage;

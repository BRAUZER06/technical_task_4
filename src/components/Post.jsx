import React from "react";
import { useParams } from "react-router-dom";
import { instance } from "../instance";

const Post = () => {
  const [post, setPost] = React.useState({});
  const { id } = useParams();
  
  React.useEffect(() => {
    (() => {
      instance.get(`/posts/${id}`).then((res) => setPost(res.data));
    })();
  }, [id]);

  return (
    <div>
      <p>
        <strong>title: </strong>
        {post.title}
      </p>
      <p>
        <strong>body: </strong>
        {post.body}
      </p>
      <div>
        <strong>tags: </strong>
        {post.tags?.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <p>
        <strong>id: </strong>
        {post.id}
      </p>
      <p>
        <strong>reactions: </strong>
        {post.reactions}
      </p>
      <p>
        <strong>userId: </strong>
        {post.userId}
      </p>
    </div>
  );
};

export default Post;

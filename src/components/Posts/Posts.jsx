import { useLoaderData } from "react-router-dom";
import Post from "../post/post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1>Posts: {posts.length} </h1>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

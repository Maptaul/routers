import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  return (
    <div className="body">
      <h4>post of id : {id}</h4>
      <p>Tittle{title}</p>
      <Link to={`/post/${id}`}> Post Details </Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default Post;

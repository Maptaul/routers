import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();
  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="body">
      <h4>post of id : {id}</h4>
      <p>Tittle{title}</p>
      <Link to={`/post/${id}`}> Post Details </Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleShowDetail}>click to see details</button>
    </div>
  );
};

export default Post;

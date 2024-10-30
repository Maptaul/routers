import { Link } from "react-router-dom";

const SingleUser = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="body">
      <h2>{name}</h2>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
      <Link to={`/user/${id}`}> Show details </Link>
      <Link to={`/user/${id}`}>
        <button> Click for Details </button>
      </Link>
    </div>
  );
};

export default SingleUser;

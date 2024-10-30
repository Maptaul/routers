import { useLoaderData } from "react-router-dom";
import SingleUser from "../SingleUser/SingleUser";
import "./user.css";

const User = () => {
  const User = useLoaderData();

  return (
    <div className="body">
      <h1>Our User : {User.length} </h1>
      <div className="grid">
        {User.map((user) => (
          <SingleUser key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default User;

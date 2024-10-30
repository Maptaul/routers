import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <span>My website</span>
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
        <Link to="/contract">Contract Us</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/User">User</Link>
      </nav>
    </div>
  );
};

export default Header;

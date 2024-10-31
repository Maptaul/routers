import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <span>My website</span>
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
        <Link to="/contract">Contract Us</Link>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/User">User</NavLink>
      </nav>
    </div>
  );
};

export default Header;

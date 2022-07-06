import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/todo">Todos</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>

      <li>
        <Link to="/create-todo">Create Todo</Link>
      </li>
    </ul>
  );
};

export default Header;

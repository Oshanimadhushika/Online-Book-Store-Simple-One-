import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-black w-full ">
      <h1 className="flex justify-start  text-white font-semibold text-xl p-3">
        Online Bookstore
      </h1>
      <nav className=" text-white font-semibold p-3 mb-3 text-sm flex justify-end">
        <ul className="flex gap-4">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faBook} /> Book List
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <FontAwesomeIcon icon={faUser} /> Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

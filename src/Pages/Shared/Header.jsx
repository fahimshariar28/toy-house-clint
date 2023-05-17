import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEquals, FaRegTimesCircle } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-9/12 mx-auto mt-5 flex justify-between items-center">
      <h2 className="text-3xl font-bold text-primary">Toy House</h2>

      <div onClick={() => setOpen(!open)} className="text-sky-500 md:hidden">
        <span>
          {open == false ? (
            <FaEquals className="text-orange-500"></FaEquals>
          ) : (
            <FaRegTimesCircle className="text-orange-500"></FaRegTimesCircle>
          )}
        </span>
      </div>

      <nav
        className={`flex flex-col md:flex-row justify-center items-center gap-4 absolute md:static duration-1000 rounded-md ${
          open ? "top-20 right-6" : "-top-56 right-6"
        } z-10`}
      >
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Blog
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

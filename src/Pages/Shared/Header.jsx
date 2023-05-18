import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaEquals, FaRegTimesCircle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };

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
          open ? "top-20 right-6" : "-top-72 right-6"
        } z-10`}
      >
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/allToys"
        >
          Toys
        </NavLink>
        {user && (
          <NavLink
            to="/myToys"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            My Toys
          </NavLink>
        )}
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Blog
        </NavLink>
        {user && (
          <div
            className="avatar tooltip tooltip-bottom tooltip-primary"
            data-tip={user.displayName}
          >
            <div className="w-9 rounded-full  ring-1 ring-primary">
              <img src={user.photoURL} />
            </div>
          </div>
        )}
        {!user ? (
          <Link to="/login">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
            >
              Login
            </button>
          </Link>
        ) : (
          <Link onClick={handleLogout}>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
            >
              Logout
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;

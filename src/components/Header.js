import { LOGO_URL } from "../utils/contants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("useeffect called");
  }, []);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 mb-2 px-2 sm:bg-yellow-50 ">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4  ">
          <li className="px-1">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-1">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-1">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-1">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-1">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

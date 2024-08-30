import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/contants";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg m-2 px-6 py-4 rounded-lg text-white">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img
            className="w-40 h-auto object-contain"
            src={LOGO_URL}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-6">
        <ul className="flex items-center space-x-6">
          <li className="flex items-center space-x-2">
            <span className="text-sm">Online Status:</span>
            <span className={onlineStatus ? "text-green-400" : "text-red-400"}>
              {onlineStatus ? "🟢" : "🔴"}
            </span>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-yellow-300 transition-colors duration-200 flex items-center"
            >
              🛒 Cart
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li>{loggedInUser}</li>
        </ul>

        {/* Login/Logout Button */}
        <button
          className="ml-4 px-4 py-2 bg-yellow-500 text-indigo-600 font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-colors duration-200"
          onClick={() => {
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
          }}
        >
          {btnNameReact}
        </button>
      </nav>
    </header>
  );
};

export default Header;

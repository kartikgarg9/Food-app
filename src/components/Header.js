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
    <header className="flex justify-between items-center bg-white shadow-md py-4 px-6">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/">
          <img className="w-28 h-auto" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-10">
        <ul className="flex items-center space-x-6 text-gray-800 font-medium">
          <li className="flex items-center space-x-2">
            <span className="text-xs">Status:</span>
            <span className={onlineStatus ? "text-green-500" : "text-red-500"}>
              {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </span>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition duration-150"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-500 transition duration-150"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-orange-500 transition duration-150"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="hover:text-orange-500 transition duration-150"
            >
              Grocery
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/cart"
              className="hover:text-orange-500 transition duration-150 flex items-center"
            >
              🛒 Cart
              {cartItems.length > 0 && (
                <span className="ml-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          {loggedInUser && (
            <li className="text-sm text-gray-700">{loggedInUser}</li>
          )}
        </ul>

        {/* Login/Logout Button */}
        <button
          className="ml-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-150"
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

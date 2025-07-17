import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const NavBar = () => {
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  return (
    <div className="flex items-center justify-between py-4 font-medium">
      <Link to={"/"}>
        <img src={assets.logo1} alt="img not found" className="w-64" />
      </Link>

      <ul className="hidden  sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className={"flex flex-col items-center gap-1"}>
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={"/collection"}
          className={"flex flex-col items-center gap-1"}
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className={"flex flex-col items-center gap-1"}>
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className={"flex flex-col items-center gap-1"}>
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="image not found"
          onClick={() => {
            setShowSearch((prev) => !prev);
            navigate("/collection");
          }}
          className="w-5 cursor-pointer"
        />

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 h-6" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square  rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            alt="image not found"
            className="w-5 cursor-pointer"
          />

          {/* Dropdown  */}
          {token && (
            <div className="group-hover:block hidden pt-4 right-0 dropdown-menu absolute">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Log Out
                </p>
              </div>
            </div>
          )}
        </div>
        {/* <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 h-6' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square  rounded-full text-[8px]'>{getCartCount()}</p>
          </Link> */}
      </div>
    </div>
  );
};

export default NavBar;

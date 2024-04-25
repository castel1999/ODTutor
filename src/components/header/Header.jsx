import React, { useEffect, useState } from "react";
import ODTutorLogo from "../../assets/ODTLogo.png";
import { Link, NavLink } from "react-router-dom";
import { CiHome, CiCamera, CiTrophy } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import Auth from "../auth/Auth"

const Header = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (document) {
      document.body.style.overflow = modal ? "hidden" : "auto";
    }
  }, [modal]);

  return (
    <div className="top-0 sticky bg-white">
      <header className="flex flex-row justify-between px-4 py-3 items-center ">
        <Link to="/">
          <img
            src={ODTutorLogo}
            alt="ODTutorLogo"
            className=" w-[240px] object-cover cursor-pointer self-center "
          />
        </Link>
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-blue text-white rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center"
                : "bg-gray-200 rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center hover:text-white hover:bg-blue"
            }
          >
            <CiHome className="size-7" />
          </NavLink>
          <NavLink
            to="/reels"
            className={({ isActive }) =>
              isActive
                ? "bg-blue text-white rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center"
                : "bg-gray-200 rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center hover:text-white hover:bg-blue"
            }
          >
            <CiCamera className="size-7" />
          </NavLink>
          <NavLink
            to="/trophies"
            className={({ isActive }) =>
              isActive
                ? "bg-blue text-white rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center"
                : "bg-gray-200 rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center hover:text-white hover:bg-blue"
            }
          >
            <div>
              <CiTrophy className="size-7" />
            </div>
          </NavLink>
        </div>
        <div className="flex items-center gap-4 ">
          <Link to="https://www.facebook.com" target="_blank">
            <div>
              <FaFacebookF className="bg-gray-200 rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center text-blue hover:text-white hover:bg-blue" />
            </div>
          </Link>
          <div
            onClick={toggleModal}
            className="border rounded-3xl bg-gray-200 p-2 font-semibold cursor-pointer  hover:text-white hover:bg-blue"
          >
            Đăng nhập
          </div>
        </div>
      </header>
      <hr className="h-px w-full bg-gray-200 border-0 dark:bg-gray-200 " />
      <hr className="flex-grow border-t border-gray-300" />
      {modal && <Auth onClose={toggleModal} />}
    </div>
  );
};

export default Header;

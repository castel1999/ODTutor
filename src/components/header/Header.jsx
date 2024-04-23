import React, { useEffect, useState } from "react";
import ODTutorLogo from "../../assets/logoPD.png";
import { Link } from "react-router-dom";
import { CiHome, CiCamera, CiTrophy } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import Login from "./Login";

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
    <>
      <header className="flex flex-row justify-between px-4 py-3 items-center">
        <Link to="/">
          <img
            src={ODTutorLogo}
            alt="ODTutorLogo"
            className="rounded-full h-11 w-11 object-cover cursor-pointer self-center "
          />
        </Link>
        <div className="flex gap-4 ml-[7%]">
          <Link to="/">
            <div>
              <CiHome className="bg-gray-200 rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center hover:text-red-500" />
            </div>
          </Link>
          <Link to="/">
            <div>
              <CiCamera className="bg-gray-200 rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center hover:text-red-500" />
            </div>
          </Link>
          <Link to="/">
            <div>
              <CiTrophy className="bg-gray-200 rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center hover:text-red-500" />
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4 ">
          <Link to="https://www.facebook.com" target="_blank">
            <div>
              <FaFacebookF className="bg-gray-200 rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center hover:text-red-500" />
            </div>
          </Link>
          <div
            onClick={toggleModal}
            className="border rounded-3xl bg-gray-200 p-2 font-semibold cursor-pointer hover:text-red-500"
          >
            Đăng nhập
          </div>
        </div>
      </header>
      <hr className="h-px w-full bg-gray-200 border-0 dark:bg-gray-200" />
      {modal && <Login onClose={toggleModal} />}
    </>
  );
};

export default Header;

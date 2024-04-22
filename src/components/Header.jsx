import React, { useState } from "react";
import ODTutorLogo from "../assets/logoPD.png";
import { Link } from "react-router-dom";
import { CiHome, CiCamera, CiTrophy } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";

const Header = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isCameraHovered, setIsCameraHovered] = useState(false);
  const [isTrophyHovered, setIsTrophyHovered] = useState(false);
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);

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
        <div className="flex gap-4">
          <Link to="/">
            <div
              onMouseEnter={() => setIsHomeHovered(true)}
              onMouseLeave={() => setIsHomeHovered(false)}
            >
              <CiHome
                className="bg-gray-200 rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center "
                style={{ color: isHomeHovered ? "red" : "black" }}
              />
            </div>
          </Link>
          <Link to="/">
            <div
              onMouseEnter={() => setIsCameraHovered(true)}
              onMouseLeave={() => setIsCameraHovered(false)}
            >
              <CiCamera
                className="bg-gray-200 rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center "
                style={{ color: isCameraHovered ? "red" : "black" }}
              />
            </div>
          </Link>
          <Link to="/">
            <div
              onMouseEnter={() => setIsTrophyHovered(true)}
              onMouseLeave={() => setIsTrophyHovered(false)}
            >
              <CiTrophy
                className="bg-gray-200 rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center "
                style={{ color: isTrophyHovered ? "red" : "black" }}
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4 ">
          <Link to="https://www.facebook.com" target="_blank">
            <div
              onMouseEnter={() => setIsFacebookHovered(true)}
              onMouseLeave={() => setIsFacebookHovered(false)}
            >
              <FaFacebookF
                className="bg-gray-200 rounded-full h-11 w-11 p-2 object-cover cursor-pointer self-center "
                style={{ color: isFacebookHovered ? "red" : "black" }}
              />
            </div>
          </Link>
          <div className="border rounded-3xl bg-gray-200 p-2 font-semibold cursor-pointer hover:text-red-500">
            Đăng nhập
          </div>
        </div>
      </header>
      <hr class="h-px w-full bg-gray-200 border-0 dark:bg-gray-200"></hr>
    </>
  );
};

export default Header;

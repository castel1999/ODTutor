import React, { useEffect, useState } from "react";
import ODTutorLogo from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
import { Link, NavLink } from "react-router-dom";
import AuthenticationHeader from "./AuthenticationUserHeader/AuthenticationHeader";
import { useQuery } from "react-query";
import * as UserApi from "../../api/UserApi";

const Header = () => {
  const { data, isLoading, error } = useQuery("myData", UserApi.signIn);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const user = {
    username: "Luong Duyen Duc",
    avatar: null,
    noti: [
      {
        id: 1,
        mess: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex.",
      },
      {
        id: 2,
        mess: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, recusandae. Natus qui corrupti velit repellendus modi veniam cupiditate tempora ut.",
      },
    ],
    wallet: "200",
    role: "user",
  };

  return (
    <div className=" bg-white">
      <header className="flex flex-row justify-between px-4 py-3 items-center ">
        <div className="flex gap-4">
          <Link to="/">
            <img
              src={ODTutorLogo}
              alt="ODTutorLogo"
              className=" size-16 object-cover cursor-pointer self-center "
            />
          </Link>

          <NavLink
            to="/tutor-list"
            className={({ isActive }) =>
              isActive
                ? "bg-theme text-white rounded-lg self-center p-3 font-semibold"
                : "transition ease-in-out delay-150 rounded-lg p-3 cursor-pointer self-center font-semibold hover:text-white hover:bg-theme hover:-translate-y-0 hover:scale-110"
            }
          >
            Học với gia sư
          </NavLink>

          <NavLink
            to="/course"
            className={({ isActive }) =>
              isActive
                ? "bg-theme text-white rounded-lg self-center p-3 font-semibold"
                : "transition ease-in-out delay-150 rounded-lg p-3 cursor-pointer self-center font-semibold hover:text-white hover:bg-theme hover:-translate-y-0 hover:scale-110"
            }
          >
            Học theo lộ trình
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-theme text-white rounded-lg self-center p-3 font-semibold"
                : "transition ease-in-out delay-150 rounded-lg p-3 cursor-pointer self-center font-semibold hover:text-white hover:bg-theme hover:-translate-y-0 hover:scale-110"
            }
          >
            Về chúng tôi
          </NavLink>
        </div>
        <div className="flex items-center gap-4 ">
          {data?.role === "guest" ? (
            <Link
              to="login"
              className="transition ease-in-out delay-150 border-2 border-black rounded-lg text-black py-2 px-4 mb-4 shadow-[rgba(0,0,0,1)_4px_5px_4px_0px] hover:-translate-x-[-6px] hover:-translate-y-[-6px] hover:shadow-none hover:bg-theme hover:text-white duration-300"
            >
              Đăng nhập
            </Link>
          ) : data?.role === "user" ? (
            <AuthenticationHeader data={data} />
          ) : (
            ""
          )}
        </div>
      </header>
      <hr className="h-px w-full bg-gray-200 border-0 dark:bg-gray-200 " />
      <hr className="flex-grow border-t border-gray-300" />
    </div>
  );
};

export default Header;

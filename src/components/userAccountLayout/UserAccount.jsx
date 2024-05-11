import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useQuery } from "react-query";
import * as UserApi from "../../api/UserApi";

const UserAccount = () => {
  const { data, isLoading, error } = useQuery("myData", UserApi.signIn);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex p-3 mt-5 gap-5 w-full h-full ">
      <div className="min-w-52 max-w-80 pl-2 mr-8 fixed">
        <SideBar data={data} />
        <hr className="mt-3 mb-3 border-[1px] border-gray-200" />
        <div className="flex flex-col gap-5">
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 border-theme font-semibold text-theme pl-2"
                : "transition ease-in-out delay-150 cursor-pointer pl-2 hover:border-l-2 hover:font-semibold hover:border-theme hover:text-theme hover:-translate-y-0 hover:scale-110 duration-300"
            }
          >
            Thông tin cá nhân
          </NavLink>
          <NavLink
            to="wallet"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 border-theme font-semibold text-theme pl-2"
                : "transition ease-in-out delay-150 cursor-pointer pl-2 hover:border-l-2 hover:font-semibold hover:border-theme hover:text-theme hover:-translate-y-0 hover:scale-110 duration-300"
            }
          >
            Ví
          </NavLink>
          <NavLink
            to="upgrade"
            className={({ isActive }) =>
              isActive
                ? "border-l-2 border-theme font-semibold text-theme pl-2"
                : "transition ease-in-out delay-150 cursor-pointer pl-2 hover:border-l-2 hover:font-semibold hover:border-theme hover:text-theme hover:-translate-y-0 hover:scale-110 duration-300"
            }
          >
            Năng cấp tài khoản
          </NavLink>
          <Link
            to="/login"
            className="max-w-36 border rounded-lg p-3 bg-red-500 text-white text-center font-bold hover:opacity-80"
          >
            Đăng xuất
          </Link>
        </div>
      </div>
      <div className="ml-[300px]">
        <Outlet context={data} />
      </div>
    </div>
  );
};

export default UserAccount;

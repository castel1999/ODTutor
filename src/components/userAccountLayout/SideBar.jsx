import React from "react";
import ava from "../../assets/ava.png";

const SideBar = ({ data }) => {
  return (
    <div className="flex gap-4 ml-2">
      <div>
        <img
          src={data?.avatar}
          alt=""
          className="object-cover size-12 rounded-full border-2 border-black"
        />
      </div>
      <div className="flex flex-col gap-[2px]">
        <div className="font-bold text-clip overflow-hidden line-clamp-1 max-w-52">
          {data?.username}
        </div>
        <div className="text-sm text-gray-400">{data?.role}</div>
      </div>
    </div>
  );
};

export default SideBar;

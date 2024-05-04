import React, { useState } from "react";
import logo from "../assets/logo.png";
import loginBG from "../assets/loginBG.png";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-bgColor">
      <div className="flex gap-5 bg-white rounded-lg p-3">
        <form className="mt-10 w-[440px] pl-5">
          <img src={logo} alt="" className="mx-auto mb-4 w-20" />
          <div className="text-center text-2xl font-bold mb-4 text-gray-800">
            Chào mừng trở lại
          </div>
          <div className="text-center mb-4">
            Bạn chưa có tài khoản?{" "}
            <Link to="/register" className="underline hover:text-bgColor font-semibold">
              Đăng ký ở đây
            </Link>
          </div>
          <button className="flex justify-center items-center gap-2 border-2 border-black rounded-lg text-black py-2 px-4 mb-4 w-full hover:bg-bgColor hover:text-white">
            <FcGoogle className="size-6" />
            Đăng nhập với Google
          </button>
          <div className="flex justify-center items-center">
            <hr className="w-2/4 my-2 border-[1px] border-black" />
            <div className="mx-2 text-black">Hoặc</div>
            <hr className="w-2/4 my-2 border-[1px] border-black" />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-black text-sm font-bold mb-2"
            >
              Địa chỉ email
            </label>
            <input
              id="email"
              type="email"
              className="border-2 border-black rounded-lg py-2 px-4 w-full outline-none focus:border-bgColor"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-black text-sm font-bold mb-2"
            >
              Mật khẩu
            </label>
            <div className="relative mb-8">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="border-2 border-black rounded-lg py-2 px-4 w-full outline-none focus:border-bgColor"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-4"
              >
                {showPassword ? <IoEyeOutline  className="size-6"/> : <IoEyeOffOutline className="size-6"/>}
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onSubmit={handleSubmit}
              className="border-2 border-black rounded-lg text-black py-2 px-4 mb-4 shadow-md shadow-black hover:bg-bgColor hover:text-white"
            >
              Đăng nhập
            </button>
          </div>
          <div className="text-center">
            <Link to="/reset" className="underline hover:text-bgColor font-semibold">
              Bạn quên mật khẩu?
            </Link>
          </div>
        </form>
        <div className="">
          <img src={loginBG} alt="" className="object-cover w-fit h-fit" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

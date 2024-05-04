import React, { useState } from "react";
import logo from "../assets/logo.png";
import loginBG from "../assets/loginBG.png";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
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
            Tạo tài khoản miễn phí
          </div>
          <div className="text-center mb-4">
            Bạn đã có tài khoản?{" "}
            <Link to="/login" className="underline hover:text-bgColor font-semibold">
              Đăng nhập
            </Link>
          </div>
          <button className="flex justify-center items-center gap-2 border-2 border-black rounded-lg text-black py-2 px-4 mb-4 w-full hover:bg-bgColor hover:text-white">
            <FcGoogle className="size-6" />
            Tiếp tục với Google
          </button>
          <div className="flex justify-center items-center">
            <hr className="w-2/4 my-2 border-[1px] border-black" />
            <div className="mx-2 text-black">Hoặc</div>
            <hr className="w-2/4 my-2 border-[1px] border-black" />
          </div>
          <div className="mb-4">
            <label
              htmlFor="uerName"
              className="text-black text-sm font-bold mb-2"
            >
              Tên của bạn
            </label>
            <input
              id="uerName"
              type="text"
              className="border-2 border-black rounded-lg py-2 px-4 w-full outline-none focus:border-bgColor"
              onChange={handleChange}
            />
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
              className="transition ease-in-out delay-150 border-2 border-black rounded-lg text-black py-2 px-4 mb-4 shadow-md shadow-black hover:-translate-y-1 hover:scale-110 hover:bg-bgColor hover:text-white duration-300"
            >
              Tạo tài khoản
            </button>
          </div>
        </form>
        <div className="">
          <img src={loginBG} alt="" className="object-cover w-fit h-fit" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

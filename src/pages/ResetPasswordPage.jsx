import React, { useState } from "react";
import logo from "../assets/logo.png";
import loginBG from "../assets/loginBG.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
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
      <div className="bg-white rounded-lg p-5">
        <Link to='/login' >
          <IoMdArrowRoundBack className="size-8 text-blue"/>
        </Link>
        <form className=" w-[440px]">
          <img src={logo} alt="" className="mx-auto mb-4 w-20" />
          <div className="text-center text-2xl font-bold mb-4 text-gray-800">
            Đặt lại mật khẩu
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

          <div className="flex justify-center">
            <button
              onSubmit={handleSubmit}
              className="border-2 border-black rounded-lg text-black py-2 px-4 mb-4 shadow-md shadow-black hover:bg-bgColor hover:text-white"
            >
              Tiếp theo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

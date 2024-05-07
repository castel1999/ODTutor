import React, { useState } from "react";
import logo from "../assets/logo.png";
import loginBG from "../assets/loginBG.png";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ErrorPopup from "../components/utils/ErrorPopup";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Không đúng định dạng email")
      .required("Vui lòng nhập email"),
    password: Yup.string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => console.log(data);
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log("GOOGLE");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-theme">
      <div className="flex gap-5 bg-white rounded-lg p-3 relative">
        <form className="mt-6 w-[440px] pl-5">
          <div className="w-fit">
            <Link to="/">
              <IoMdArrowRoundBack className="size-8 text-blue" />
            </Link>
          </div>
          <img src={logo} alt="" className="mx-auto mb-4 w-20" />
          <div className="text-center text-2xl font-bold mb-4 text-gray-800">
            Chào mừng trở lại
          </div>
          <div className="text-center mb-4">
            Bạn chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="underline hover:text-theme font-semibold"
            >
              Đăng ký ở đây
            </Link>
          </div>
          {/* Login with Google */}
          <button
            onClick={handleOnClick}
            className="transition ease-in-out delay-150 flex justify-center items-center gap-2 border-2 border-black rounded-lg text-black py-2 px-4 mb-4 w-full hover:bg-theme hover:text-white"
          >
            <FcGoogle className="size-6" />
            Đăng nhập với Google
          </button>
          <div className="flex justify-center items-center">
            <hr className="w-2/4 my-2 border-[1px] border-black" />
            <div className="mx-2 text-black">Hoặc</div>
            <hr className="w-2/4 my-2 border-[1px] border-black" />
          </div>
          {/* Email */}
          <div className="mb-4 relative">
            <label
              htmlFor="email"
              className="text-black text-sm font-bold mb-2"
            >
              Địa chỉ email
            </label>
            <input
              id="email"
              className="border-2 border-black rounded-lg py-2 px-4 w-full outline-none focus:border-theme"
              {...register("email")}
            />
            {errors.email && <ErrorPopup message={errors.email?.message} />}
          </div>
          {/* Password */}
          <div className="mb-8 relative">
            <label
              htmlFor="password"
              className="text-black text-sm font-bold mb-2"
            >
              Mật khẩu
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="border-2 border-black rounded-lg py-2 px-4 w-full outline-none focus:border-theme"
                {...register("password")}
              />

              <div
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-4 cursor-pointer"
              >
                {showPassword ? (
                  <IoEyeOutline className="size-6" />
                ) : (
                  <IoEyeOffOutline className="size-6" />
                )}
              </div>
            </div>
            {errors.password && (
              <ErrorPopup message={errors.password?.message} />
            )}
          </div>
          {/* Submit btn */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              className="transition ease-in-out delay-150 border-2 border-black rounded-lg text-black py-2 px-4 mb-4 shadow-[rgba(0,0,0,1)_4px_5px_4px_0px] hover:-translate-x-[-6px] hover:-translate-y-[-6px] hover:shadow-none hover:bg-theme hover:text-white duration-300"
            >
              Đăng nhập
            </button>
          </div>
          <div className="text-center">
            <Link
              to="/reset"
              className="underline hover:text-theme font-semibold"
            >
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

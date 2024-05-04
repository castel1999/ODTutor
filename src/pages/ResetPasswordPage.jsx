import React, { useState } from "react";
import logo from "../assets/logo.png";
import loginBG from "../assets/loginBG.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ResetPasswordPage = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Không đúng định dạng email")
      .required("Vui lòng nhập email"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm(formOptions);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center h-screen bg-bgColor">
      <div className="bg-white rounded-lg p-5">
        <Link to="/login">
          <IoMdArrowRoundBack className="size-8 text-blue" />
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
              className="border-2 border-black rounded-lg py-2 px-4 w-full outline-none focus:border-bgColor"
              {...register("email")}
            />
            <div className="text-red-600">{errors.email?.message}</div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSubmit(onSubmit)}
              className="transition ease-in-out delay-150 border-2 border-black rounded-lg text-black py-2 px-4 mb-4 shadow-md shadow-black hover:-translate-y-1 hover:scale-110 hover:bg-bgColor hover:text-white duration-300"
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

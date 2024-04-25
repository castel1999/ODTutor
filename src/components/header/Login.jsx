import React from "react";
import ODTutorLogo from "../../assets/logo.png";
import { BiLogoGmail } from "react-icons/bi";

const Login = ({ onClose, setStatus }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white w-full max-w-md mx-4 rounded-lg p-6 mb-36"
      >
        <img
          src={ODTutorLogo}
          alt="ODTutorLogo"
          className="w-20 mx-auto mb-4"
        />
        <p className="text-center font-semibold text-xl mb-4 text-blue">
          ODTutor
        </p>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none"
        />
        <p
          onClick={() => setStatus("forgotPass")}
          className="text-blue-500 text-sm mb-2 cursor-pointer text-right"
        >
          Quên mật khẩu?
        </p>
        <button className="w-full bg-blue text-white font-semibold py-2 rounded-lg mb-4 hover:opacity-90 focus:outline-none ">
          Đăng nhập
        </button>
        <button className="w-full font-semibold py-2 border border-gray-300 rounded-lg  mb-4 focus:outline-none flex justify-center items-center hover:border-black">
          <BiLogoGmail className="text-red-600 mr-3 text-lg" />
          <span>Đăng nhập bằng Gmail</span>
        </button>

        <p
          className="text-center underline cursor-pointer mt-10 hover:text-blue"
          onClick={() => setStatus("register")}
        >
          Đăng ký tài khoản
        </p>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import ODTutorLogo from "../../assets/logo.png";
import { BiLogoGmail } from "react-icons/bi";

const ForgotPassword = ({ onClose, setStatus }) => {
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
          type="email"
          placeholder="Nhập email để khôi phục mật khẩu"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none"
        />
        <button className="w-full bg-blue text-white font-semibold py-2 rounded-lg mb-4 hover:opacity-90 focus:outline-none ">
          Xác thực
        </button>
        <div className="flex justify-between">
          <span
            className="underline cursor-pointer hover:text-blue"
            onClick={() => setStatus("login")}
          >
            Đăng nhập
          </span>
          <span
            className="underline cursor-pointer hover:text-blue"
            onClick={() => setStatus("register")}
          >
            Đăng ký tài khoản
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

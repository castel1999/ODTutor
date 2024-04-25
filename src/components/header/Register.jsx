import React from 'react'
import ODTutorLogo from "../../assets/logo.png";
import { BiLogoGmail } from "react-icons/bi";

const Register = ({ onClose, setStatus }) => {
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
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none"
          />
          <div className="flex">
            <input
              type="text"
              placeholder="Xác thực email"
              className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-l-lg mb-4 focus:outline-none"
            />
            <button className="bg-blue px-4 py-2 border border-gray-300 rounded-r-lg mb-4 hover:opacity-90 text-white">
              Lấy mã
            </button>
          </div>
          <button className="w-full bg-blue text-white font-semibold py-2 rounded-lg mb-4 hover:opacity-90 focus:outline-none ">
            Đăng ký tài khoản
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
              onClick={() => setStatus("forgotPass")}
            >
              Quên mật khẩu
            </span>
          </div>
        </div>
      </div>
  )
}

export default Register
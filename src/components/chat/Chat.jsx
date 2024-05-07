import React, { useState } from "react";
import chatIcon from "../../assets/chat.svg";
import hideIcon from "../../assets/delete.svg";
import dot from "../../assets/dot.svg";
import defaultAvatar from "../../assets/default-avatar.jpg";

const Chat = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="fixed right-4 bottom-4">
      {!showChat ? (
        <div
          className="h-fit w-fit rounded-lg cursor-pointer border-solid border-2 border-black shadow-button hover:translate-x-1 hover:translate-y-1 hover:shadow-none ease-out duration-500"
          onClick={() => setShowChat(true)}
        >
          <div className="h-full w-full px-[16px] py-[12px] relative">
            <img className="h-6 w-6 " src={chatIcon} />
          </div>

          <div className="h-6 w-6 absolute -right-1 -top-2 p-1 rounded-full bg-red-500 text-white content-center text-center">
            1
          </div>
        </div>
      ) : (
        <div className="h-[500px] w-[800px] shadow-lg flex flex-col rounded-lg border-solid border-2 border-black">
          <div className="flex flex-row w-full h-[10%] justify-between px-[10px] pt-[9px] pb-[5px] bg-[#f5f5f5] rounded-t-lg ">
            <div className="flex flex-row items-center justify-center gap-2 ">
              <img className="h-6 w-6 " src={chatIcon} />
              <div className="font-medium">Tin nhắn</div>
            </div>

            <div className="flex flex-row items-center">
              <div
                className="h-fit w-fit border-solid rounded-full hover:bg-red-600"
                onClick={() => setShowChat(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-black hover:fill-white"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="h-full w-full flex flex-row">
            <div className="flex flex-col h-full w-[35%]  py-1 border-t-2 border-r-2 border-solid border-black">
              <div className="h-fit w-full flex flex-row px-2 py-1 gap-2 items-center">
                <img className="h-10 w-10 rounded-full" src={defaultAvatar} />
                <div className="flex flex-col w-full">
                  <div className=" w-full flex flex-row justify-between">
                    <div className="text-[16px]">Văn An</div>
                    <div className="text-[14px]">3d</div>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <div className="text-[14px] truncate w-[180px]">
                      ajaaaaaaaaaaaaaaaaaaaaaaaaahasldfjkaaskl
                    </div>
                    <img src={dot} />
                  </div>
                </div>
              </div>
              <div className="h-fit w-full flex flex-row px-2 py-1 gap-2 items-center bg-[#E2EAFD]">
                <img className="h-10 w-10 rounded-full" src={defaultAvatar} />
                <div className="flex flex-col w-full">
                  <div className=" w-full flex flex-row justify-between">
                    <div className="text-[16px]">Văn An</div>
                    <div className="text-[14px]">3d</div>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <div className="text-[14px] truncate w-[180px]">
                      ajaaaaaaaaaaaaaaaaaaaaaaaaahasldfjkaaskl
                    </div>
                    {/* <img src={dot} /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[65%] relative flex flex-col border-t-2 border-solid border-black">
              <div className="">

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;

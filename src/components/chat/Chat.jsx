import React, { useState } from "react";
import chatIcon from "../../assets/comments.svg";
import hideIcon from "../../assets/delete.svg";
import defaultAvatar from "../../assets/default-avatar.jpg";

const Chat = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="fixed right-4 bottom-4">
      {!showChat ? (
        <div
          className="h-fit w-fit rounded-full cursor-pointer shadow-lg shadow-gray-300 bg-sky-200"
          onClick={() => setShowChat(true)}
        >
          <div className="h-full w-full p-3 relative">
            <img className="h-10 w-10 " src={chatIcon} />
          </div>
          <div className="h-6 w-6 absolute right-0 -top-1 p-1 rounded-full bg-red-500 text-white content-center text-center">
            1
          </div>
        </div>
      ) : (
        <div className="h-[500px] w-[750px] shadow-lg shadow-gray-300 bg-sky-200 flex flex-col rounded-lg ">
          <div className="flex flex-row w-full h-[10%] justify-between px-[10px] pt-[9px] pb-[5px] bg-[#f5f5f5] rounded-t-lg">
            <div className="flex flex-row items-center justify-center gap-2 ">
              <img className="h-10 w-10 " src={chatIcon} />
              <div>Tin nhắn</div>
            </div>

            <div className="flex flex-row items-center ">
              <div
                className="h-fit w-fit  border-solid border-2 border-gray-200 rounded-full hover:bg-blue"
                onClick={() => setShowChat(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-blue hover:fill-white"
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
          <div className="flex flex-row">
            <div className="flex flex-col h-full w-[30%] px-4 py-2">
              <div className="flex flex-row gap-2">
                <img className="h-10 w-10 rounded-full" src={defaultAvatar}/>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-between">
                    <div>
                      Văn An
                    </div>
                    <div>
                      3d
                    </div>
                  </div>
                  <div className="truncate">
                     awwwasdlfkjasd;lfkjasd;flkasdfj
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;

import React from "react";
const Connect = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center content-center h-screen w-screen"
        id="connect"
      >
        <div className="mx-auto">
          <h1 className="text-center text-[87px] text-core-green-600 font-mono font-extrabold bg-gradient-to-b from-core-green-600 to-darkest-green text-opacity-5 opacity-10 bg-clip-text z-0 mx-auto ">
            Contact
          </h1>
          <div className="z-10 max-w-[290px] text-center relative -top-16 mx-auto">
            <p className="text-core-green-300 text-[10px]">
              Have a question, suggestion, or just want to connect? I{"'"}d love
              to hear from you! I{"'"}m eager to engage with you and explore how
              we can collaborate or discuss anything you have in mind.
            </p>
            <button className="border border-core-green-200 rounded-lg mt-7 text-core-green-300 py-2 px-3 font-semibold text-[10px]">
              Say Hello!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;

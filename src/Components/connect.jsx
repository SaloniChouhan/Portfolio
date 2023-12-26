import React from "react";
const Connect = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center content-center h-screen w-screen"
        id="connect"
      >
        <div className="mx-auto">
          <h1 className="text-center text-[250px] text-core-green-600 font-mono font-extrabold bg-gradient-to-b from-core-green-600 to-darkest-green text-opacity-5 opacity-5 bg-clip-text z-0 mx-auto ">
            Contact
          </h1>
          <div className="z-10 max-w-xl text-center relative -top-44 mx-auto">
            <p className="text-core-green-200 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              totam dolorem quasi laboriosam quo, exercitationem, incidunt
              commodi nobis accusantium aut perspiciatis repellendus distinctio
              cupiditate beatae blanditiis accusamus neque consequuntur nemo
            </p>
            <button className="border border-core-green-200 rounded-lg mt-7 text-core-green-200 py-2 px-3 font-semibold">
              Say Hello!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;

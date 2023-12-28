import React from "react";
const Connect = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center content-center h-96 md:w-full md:h-full md:mt-20 lg:mt-24"
        id="connect"
      >
        <div className="mx-auto">
          <h1 className="text-center text-[78px] sm:text-[140px] md:text-[150px] lg:text-[220px]  text-core-green-600 font-mono font-extrabold bg-gradient-to-b from-core-green-600 to-darkest-green text-opacity-5 opacity-20 sm:opacity-10 bg-clip-text z-0 mx-auto ">
            Contact
          </h1>
          <div className="z-10 max-w-[250px] sm:max-w-[370px] md:max-w-[450px] md:pt-5 pt-2 lg:pt-5 lg:max-w-[650px] text-center relative -top-16 sm:-top-24 md:-top-32 lg:-top-40 mx-auto">
            <p className="text-core-green-300 text-[10px] sm:text-[12px] md:text-[15px] lg:text-[16px]">
              Have a question, suggestion, or just want to connect? I{"'"}d love
              to hear from you! I{"'"}m eager to engage with you and explore how
              we can collaborate or discuss anything you have in mind.
            </p>
            <button className="border border-core-green-100 md:hover:bg-core-green-900/40 lg:hover:bg-core-green-900/40 rounded-lg mt-9 text-core-green-100 py-2 px-3 font-semibold text-[10px] sm:text-[12px] md:text-[15px] lg:text-[16px]">
              <a href="mailto:salonisg1309@gmail.com">Say Hello!</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;

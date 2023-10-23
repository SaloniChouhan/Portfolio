import React from "react";
import { DiHtml5, DiCss3 } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";

const Techstack = () => {
  return (
    <>
      <div className=" bg-core-green-300 py-1 mt-12 px-6 sm:px-6 md:px-10 lg:max-w-7xl">
        <div>
          <h1 className="text-dark-green text-3xl font-extrabold text-center font-mono py-8 mt-12 px-6 sm:px-6 md:px-10 lg:max-w-7xl">
            Crafting digital experiences with
          </h1>
          <ul className="flex flex-wrap mt-8 mb-8 text-center text-base font-medium justify-center  gap-2  align-center ">
            <li className=" ">
              <span className="flex bg-darkest-green px-3 py-2 rounded-lg space-x-1">
                <DiHtml5 className="text-core-green-200 inline-block h-6 w-6  " />{" "}
                <p className="inline-block text-core-green-200 mx-auto font-mono">
                  HTML5
                </p>
              </span>
            </li>
            <li className=" ">
              <span className="flex bg-darkest-green px-3 py-2 rounded-lg space-x-1">
                <DiCss3 className="text-core-green-200 inline-block h-6 w-6  " />{" "}
                <p className="inline-block text-core-green-200  font-mono">
                  CSS3
                </p>
              </span>
            </li>
            <li className=" ">
              <span className="flex content-baseline bg-darkest-green px-3 py-2 rounded-lg space-x-1">
                <BiLogoJavascript className="text-core-green-200 inline-block h-6 w-6  " />{" "}
                <p className="inline-block text-core-green-200  font-mono">
                  JavaScript
                </p>
              </span>
            </li>
            <li className=" ">
              <span className="flex content-baseline bg-darkest-green px-3 py-2 rounded-lg space-x-1">
                <BiLogoJavascript className="text-core-green-200 inline-block h-6 w-6  " />{" "}
                <p className="inline-block text-core-green-200  font-mono">
                  JavaScript
                </p>
              </span>
            </li>
          </ul>
          <br />
        </div>
      </div>
    </>
  );
};

export default Techstack;

import React from "react";
import { DiHtml5, DiCss3, DiMysql } from "react-icons/di";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { IoLogoIonic } from "react-icons/io";
import { SiBulma, SiPhp } from "react-icons/si";

const Techstack = () => {
  return (
    <>
      <div className=" bg-core-green-300 py-1 mt-12 px-6 sm:px-6 md:px-10 w-screen">
        <div className="lg:max-w-7xl">
          <h1 className="text-dark-green text-3xl font-extrabold text-center font-mono py-8 mt-12 px-6 sm:px-6 md:px-10 lg:max-w-7xl">
            Crafting digital experiences with...
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
                <BiLogoReact className="text-core-green-200 inline-block h-6 w-6  " />{" "}
                <p className="inline-block text-core-green-200  font-mono">
                  React JS
                </p>
              </span>
            </li>
            <li className=" ">
              <span className="flex content-baseline bg-darkest-green px-3 py-2 rounded-lg space-x-1">
                <IoLogoIonic className="text-core-green-200 inline-block h-6 w-6  " />{" "}
                <p className="inline-block text-core-green-200  font-mono">
                  Ionic Framework
                </p>
              </span>
            </li>
            <li className=" ">
              <span className="flex content-baseline bg-darkest-green px-3 py-2 rounded-lg space-x-1">
                <BiLogoTailwindCss className="text-core-green-200 inline-block h-6 w-6  " />{" "}
                <p className="inline-block text-core-green-200  font-mono">
                  Tailwind CSS
                </p>
              </span>
            </li>
            <li className=" ">
              <span className="flex content-baseline bg-darkest-green px-3 py-2 rounded-lg space-x-1">
                <SiBulma className="text-core-green-200 inline-block h-5 w-5  " />{" "}
                <p className="inline-block text-core-green-200  font-mono">
                  Bulma Framework
                </p>
              </span>
            </li>
            <li className=" ">
              <span className="flex content-baseline bg-darkest-green px-3 py-2 rounded-lg space-x-1">
                <SiPhp className="text-core-green-200 inline-block h-6 w-6  " />{" "}
                <p className="inline-block text-core-green-200  font-mono">
                  PHP
                </p>
              </span>
            </li>
            <li className=" ">
              <span className="flex content-baseline bg-darkest-green px-3 py-2 rounded-lg space-x-1">
                <DiMysql className="text-core-green-200 inline-block h-6 w-6  " />{" "}
                <p className="inline-block text-core-green-200  font-mono">
                  MySQL
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

import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDoubleDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
//import { NavLink } from "react-router-dom";
import Resume from "../assets/Saloni_Chouhan_CV.pdf";

const NavBar = () => {
  return (
    <>
      <nav className="container flex pt-6 px-6 top-0 mt-2 sm:px-6 md:px-10 mx-auto items-center relative bg-darkest-green lg:max-w-7xl">
        <div className=" flex mx-auto items-center justify-between  w-full  ">
          <h1 className="font-serif text-base md:text-lg lg:text-xl font-medium  text-core-green-300">
            <span className="float-left">
              <p className="px-1 font-serif text-base md:text-lg lg:text-xl font-medium  text-core-green-300 animate-pulse">
                {"<"}
              </p>
            </span>
            S.
            <span className="float-right">
              {/* <p className="font-mono text-base md:text-lg lg:text-xl font-medium text-core-green-200 animate-pulse">
                _
              </p> */}
              <p className="px-0.5 font-serif text-base md:text-lg lg:text-xl font-medium text-core-green-300 animate-pulse">
                {"/>"}
              </p>
            </span>
          </h1>

          <Popover className="sm:hidden text-core-green-200 text-xs font-sans font-medium py-2 px-4 rounded-3xl ring-1 ring-core-green-900  bg-core-green-900/40">
            {/* <div className="text-lg font-sans font-bold md:py-0 py-4 text-core-green bg-darkest-green">
              Logo
            </div> */}
            <Popover.Button class="outline-none">
              <span className="inline-block ">
                <h2 className=" text-sm font-mono">Menu</h2>
              </span>
              <span>
                <ChevronDoubleDownIcon
                  className=" h-5 w-5 font-medium pl-1 inline-block "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
                />
              </span>
            </Popover.Button>
            <Popover.Overlay className="fixed z-5 inset-0 bg-white opacity-100 backdrop-blur-2xl  " />
            <Transition
              enter="transition-opacity duration-500"
              enterFrom="opacity-0 ease-in "
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100  "
              leaveTo="opacity-0"
            >
              <Popover.Panel className="absolute z-10 ">
                <div className="fixed grid inset-x-4 top-7 z-50 origin-top rounded-3xl p-8 ring-1 ring-core-green-800 bg-darker-green  opacity-100 scale-100">
                  {" "}
                  <div className="flex flex-row justify-between">
                    <h6 className="inline-block text-core-green-400 font-mono text-sm">
                      Menu
                    </h6>
                    <Popover.Button
                      class="inline-block"
                      aria-label="Close menu"
                      type="button"
                      data-headlessui-state="open"
                      tabindex="0"
                    >
                      {" "}
                      <XMarkIcon
                        className=" h-5 w-5 font-medium pl-1 text-core-green-400 inline-block "
                        stroke="currentColor"
                        stroke-width="1"
                      />
                    </Popover.Button>
                  </div>
                  <ul className=" mt-4 divide-y divide-core-green-900 font-mono text-base font-normal text-core-green-200 divide-core-green-700/4 ">
                    <li className="text-left">
                      {" "}
                      <a href="#work">
                        <Popover.Button class="pt-3 pb-2">Work</Popover.Button>
                      </a>
                    </li>
                    <li className="text-left">
                      <a href="#projects">
                        <Popover.Button class="pt-3 pb-2">
                          Projects
                        </Popover.Button>{" "}
                      </a>
                    </li>
                    <li className="text-left">
                      <a href="#connect">
                        <Popover.Button class="pt-3 pb-2">
                          Connect
                        </Popover.Button>{" "}
                      </a>
                    </li>
                    <li className="text-left">
                      {" "}
                      <a href={Resume} download>
                        <Popover.Button class="pt-3 pb-2">
                          Resume
                        </Popover.Button>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
            {/* <ul className="md:px-2 font-mono text-core-green ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 bg-darkest-green">
              <li>
                <a href="#" className="flex md:inline-flex p-4 items-center">
                  <span>Work</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex md:inline-flex p-4 items-center ">
                  <span>Projects</span>
                </a>
              </li>
              <li className="relative parent">
                <a
                  href="#"
                  className="flex justify-between md:inline-flex p-4 items-center space-x-2"
                >
                  <span>Connect</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex md:inline-flex p-4 items-center ">
                  <span>Resume</span>
                </a>
              </li>
            </ul> */}
          </Popover>
          <ul className="  hidden sm:flex space-x-7  text-base  ">
            <li className="py-1 px-1  ease-in-out duration-300 font-mono font-medium text-sm">
              <a
                className="group text-core-green-300 hover:text-core-green-600 transition-all duration-300 ease-in-out"
                href="#work"
              >
                <span className="py-2 bg-left-bottom bg-gradient-to-r from-core-green-300 to-core-green-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">
                  Work
                </span>
              </a>
            </li>
            <li className="py-1 px-1  ease-in-out duration-300 font-mono font-medium text-sm">
              <a
                className="group text-core-green-300 hover:text-core-green-600 transition-all duration-300 ease-in-out"
                href="#project"
              >
                <span className="py-2 bg-left-bottom bg-gradient-to-r from-core-green-300 to-core-green-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Project
                </span>
              </a>
            </li>
            <li className="py-1 px-1  ease-in-out duration-300 font-mono font-medium text-sm">
              <a
                className="group text-core-green-300 hover:text-core-green-600 transition-all duration-300 ease-in-out"
                href="#connect"
              >
                <span className="py-2 bg-left-bottom bg-gradient-to-r from-core-green-300 to-core-green-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Connect
                </span>
              </a>
            </li>
            <li className="py-1 px-1  ease-in-out duration-300 font-mono font-medium text-sm">
              <a
                className="group text-core-green-300 hover:text-core-green-600 transition-all duration-300 ease-in-out"
                href={Resume}
                download
              >
                <span className="py-2 bg-left-bottom bg-gradient-to-r from-core-green-300 to-core-green-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Resume
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

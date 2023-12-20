import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { FaLocationDot } from "react-icons/fa6";

const Work = () => {
  return (
    <>
      <div
        id="work"
        className="pt-20 mx-auto mt-20 px-6 sm:px-6 md:px-10 text-center  max-w-7xl "
      >
        <h1 className="lg:text-2xl sm:text-xl md:text-2xl text-xl sm:px-6 md:px-10 text-core-green-600 font-mono font-light mx-auto lg:max-w-7xl text-center px-6">
          Career Highlights
        </h1>
        <h1 className="lg:text-5xl sm:text-4xl md:text-4xl text-3xl sm:px-6 md:px-10 text-core-green-100 font-mono font-extrabold mx-auto lg:max-w-7xl max-w-4xl  py-4 mb-14 px-6 text-center">
          Here is a quick summary of my most recent experiences
        </h1>

        <div className="mx-auto py-12 w-full">
          <div className="mx-auto w-full max-w-3xl  p-2">
            <Disclosure
              as="div"
              className=" ring-1 ring-core-green-900 divide-y divide-core-green-900/80 rounded-lg "
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between  bg-darkest-green px-4 py-2 text-left text-sm font-medium text-core-green-100 hover:bg-core-green-900/40 rounded-lg ">
                    <span className="text-md sm:text-md md:text-base lg:text-lg font-normal font-mono">
                      Software Engineer{" "}
                      <span className="text-core-green-600">@Capgemini</span>
                    </span>
                    <span className="flex justify-end text-md sm:text-md md:text-base lg:text-lg font-normal font-mono ">
                      August 2022 - Present
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-core-green-600 mx-1`}
                      />
                    </span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pb-4 pt-4 text-sm text-core-green-600">
                      <span className="flex px-1 py-2 items-center space-x-1">
                        <FaLocationDot className="text-core-green-200/70 inline-block h-3 w-3  " />{" "}
                        <p className="inline-block text-core-green-200/70 mx-auto font-mono text-xs sm:text-xs md:text-sm lg:text-md font-light">
                          Mumbai, India
                        </p>
                      </span>
                      <ul className="list-disc px-5 py-2 mx-1  text-core-green-100 font-mono">
                        <li className="px-4 py-2 space-x-1">
                          <p className="text-core-green-100 text-left text-sm sm:text-sm md:text-md lg:text-base font-light">
                            Collaborated with cross-functional teams, including
                            UI/UX team, QA team, to ensure seamless integration
                            of requested services.
                          </p>
                        </li>
                        <li className="px-4 pb-1  space-x-1">
                          <p className="text-core-green-100 text-left text-sm sm:text-sm md:text-md lg:text-base font-light">
                            Participated in agile/scrum methodologies,
                            contributing to sprint planning, daily stand-ups,
                            and retrospectives.
                          </p>
                        </li>
                      </ul>
                      <ul className="flex flex-wrap mt-4 mb-4 text-base font-light font-serif justify-start  gap-1 align-left">
                        <li>
                          <p className="flex text-core-green-200/70 mx-auto  text-xs sm:text-xs md:text-sm px-3  ">
                            HTML5
                          </p>
                        </li>
                        <li>
                          <p className="flex text-core-green-200/70 text-xs sm:text-xs md:text-sm mx-auto  px-3 ">
                            CSS3
                          </p>
                        </li>
                        <li>
                          <p className="flex text-core-green-200/70 mx-auto text-xs sm:text-xs md:text-sm  px-3 ">
                            ReactJS
                          </p>
                        </li>
                        <li>
                          <p className="flex text-core-green-200/70 mx-auto text-xs sm:text-xs md:text-sm  px-3">
                            TailwindCSS
                          </p>
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure
              as="div"
              className="mt-4  ring-1 ring-core-green-900 divide-y divide-core-green-900/80 rounded-lg focus:scroll-auto"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between  bg-darkest-green px-4 py-2 text-left text-sm font-medium text-core-green-100 hover:bg-core-green-900/40 rounded-lg">
                    <span className="text-md sm:text-md md:text-base lg:text-lg font-normal font-mono">
                      Java Trainee Intern{" "}
                      <span className="text-core-green-600">@Amstech Inc.</span>
                    </span>
                    <span className="flex justify-end text-md sm:text-md md:text-base lg:text-lg font-normal font-mono">
                      October - October 2019
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-core-green-600 mx-1`}
                      />
                    </span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-core-green-600">
                      <span className="flex px-1 py-2 items-center space-x-1">
                        <FaLocationDot className="text-core-green-200/70 inline-block h-3 w-3  " />{" "}
                        <p className="inline-block text-core-green-200/70 mx-auto font-mono text-xs sm:text-xs md:text-sm lg:text-md font-light">
                          Indore, India
                        </p>
                      </span>
                      <ul className="list-disc px-5 py-2 mx-1 font-mono font-light text-core-green-100">
                        <li className="px-4 py-2 space-x-1">
                          <p className="text-core-green-100 text-left text-sm sm:text-sm md:text-md lg:text-base ">
                            Applied theoretical concepts from Java programming
                            coursework to real-world scenarios, showcasing a
                            excellent command of Java fundamentals and best
                            practices.
                          </p>
                        </li>
                        <li className="px-4 pb-1  space-x-1">
                          <p className="text-core-green-100 text-left text-sm sm:text-sm md:text-md lg:text-base ">
                            Developed and maintained documentation for Java
                            code, ensuring comprehensive understanding and ease
                            of future updates.
                          </p>
                        </li>
                      </ul>
                      <ul className="flex flex-wrap mt-4 mb-4 text-base font-light justify-start font-serif gap-1 align-left">
                        <li>
                          <p className="flex text-core-green-200/70 mx-auto  text-xs sm:text-xs md:text-sm px-3  ">
                            Java
                          </p>
                        </li>
                        <li>
                          <p className="flex text-core-green-200/70 text-xs sm:text-xs md:text-sm mx-auto  px-3 ">
                            Git
                          </p>
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Work;

import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { FaLocationDot } from "react-icons/fa6";

const Work = () => {
  return (
    <>
      <div
        id="work"
        className="pt-20 mx-auto mt-20 px-6 sm:px-6 text-center md:px-10 max-w-7xl "
      >
        <h1 className="lg:text-3xl sm:text-lg md:text-2xl text-lg sm:px-6 md:px-10 text-core-green-600 font-mono font-light mx-auto lg:max-w-7xl text-center px-6">
          Career Highlights
        </h1>
        <h1 className="lg:text-5xl sm:text-3xl md:text-4xl text-3xl sm:px-6 md:px-10 text-core-green-100 font-mono font-extrabold mx-auto lg:max-w-7xl max-w-4xl  py-4 mb-14 px-6 text-center">
          Here is a quick summary of my most recent experiences
        </h1>

        <div className="mx-auto py-12 w-full">
          <div className="mx-auto w-full max-w-3xl  p-2">
            <Disclosure
              as="div"
              className=" ring-1 ring-core-green-900 rounded-lg "
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between  bg-darkest-green px-4 py-2 text-left text-sm font-medium text-core-green-200 hover:bg-core-green-900 hover:text-core-green-100  focus:outline-none focus-visible:ring focus-visible:ring-darker-green-500/75 ring-1 ring-core-green-900 rounded-lg">
                    <span className="text-xs sm:text-xs md:text-sm lg:text-base">
                      Software Engineer @Capgemini
                    </span>
                    <span className="flex justify-end text-xs sm:text-xs md:text-sm lg:text-base">
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
                      <span className="flex px-3 py-2  space-x-1">
                        <FaLocationDot className="text-core-green-200/70 inline-block h-4 w-4  " />{" "}
                        <p className="inline-block text-core-green-200/70 mx-auto font-mono text-xs sm:text-sm md:text-xs ">
                          Mumbai, India
                        </p>
                      </span>
                      <ul className="list-disc px-3 py-2  space-x-1 text-core-green-200">
                        <li className="px-3 py-2 space-x-1">
                          <p className="text-core-green-200 text-left md:text-sm">
                            Collaborated with cross-functional teams, including
                            UI/UX team, QA team, to ensure seamless integration
                            of requested services.
                          </p>
                        </li>
                        <li className="px-3 pb-1  space-x-1">
                          <p className="text-core-green-200 text-left md:text-sm">
                            Participated in agile/scrum methodologies,
                            contributing to sprint planning, daily stand-ups,
                            and retrospectives.
                          </p>
                        </li>
                      </ul>
                      <ul className="flex flex-wrap mt-4 mb-4 text-base font-medium justify-start  gap-1 align-left">
                        <li>
                          <p className="flex text-core-green-200/70 mx-auto font-serif px-3 md:text-xs ">
                            HTML5
                          </p>
                        </li>
                        <li>
                          <p className="flex text-core-green-200/70 md:text-xs mx-auto font-serif px-3">
                            CSS3
                          </p>
                        </li>
                        <li>
                          <p className="flex text-core-green-200/70 mx-auto md:text-xs font-serif px-3">
                            React JS
                          </p>
                        </li>
                        <li>
                          <p className="flex text-core-green-200/70 mx-auto md:text-xs font-serif px-3">
                            Tailwind CSS
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
              className="mt-4  ring-1 ring-core-green-900 rounded-lg focus:scroll-auto"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between  bg-darkest-green px-4 py-2 text-left text-sm font-medium text-core-green-200 hover:bg-core-green-900 hover:text-core-green-100 focus:outline-none focus-visible:ring focus-visible:ring-darker-green-500/75 ring-1 ring-core-green-900 rounded-lg">
                    <span className="text-xs sm:text-xs md:text-sm lg:text-base">
                      Java Trainee Intern @Amstech Inc.
                    </span>
                    <span className="flex justify-end text-xs sm:text-xs md:text-sm lg:text-base">
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus vero omnis amet quam quidem. Aliquam ad,
                      corrupti soluta dolores eligendi ea! Aperiam amet,
                      voluptatem rem ea quaerat deserunt sint reiciendis.
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

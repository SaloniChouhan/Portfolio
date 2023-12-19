import React from "react";
import one from "../assets/onedesk1.png";
import stocks from "../assets/stoxticker (1).png";
import { Disclosure } from "@headlessui/react";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="bg-core-green-300 px-6 sm:px-6 md:px-10 pt-20 mt-20 max-w-screen h-full"
      >
        <p className="text-center lg:text-5xl sm:text-4xl md:text-4xl text-3xl mx-auto font-mono font-extrabold text-dark-green max-w-4xl">
          Explore My Creations
        </p>
        <div className="mx-auto w-full py-12">
          <div className="mx-auto w-full max-w-3xl p-2 ">
            <Disclosure
              as="div"
              className=" ring-1   rounded-lg bg-darkest-green"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex mx-auto w-full justify-between flex-row text-left overflow-hidden max-w-3xl px-4 py-2 text-sm font-medium text-core-green-100 rounded-lg mt-12  max-h-32">
                    <div className="mt-5">
                      <span className="mx-auto max-w-xl">
                        <h1 className="text-sm text-core-green-100">OneDesk</h1>
                        <h3 className="text-xs text-core-green-600">
                          Query resolution platform
                        </h3>

                        <h3
                          className={`${
                            open ? "hidden" : ""
                          }  text-core-green-600 text-xs mt-6`}
                        >
                          Read more...
                        </h3>
                      </span>
                    </div>

                    <div className="">
                      <img
                        className={`${
                          open ? "hidden" : ""
                        } relative -bottom-5 -right-5 h-40 w-35 rounded-lg `}
                        src={one}
                        alt=""
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs text-core-green-100">
                    In response to the challenges posed by the pandemic, we
                    developed a Query Resolution Platform to bridge the
                    communication gap between college students and faculty
                    members across different departments. Designed an intuitive
                    and user-friendly interface accessible to all students and
                    faculty members.
                    <ul className="flex flex-wrap mt-4 mb-4 text-base font-light justify-start gap-1 align-left">
                      <li>
                        <p className="flex text-core-green-200/70 mx-auto font-serif text-xs sm:text-xs md:text-sm px-1  ">
                          BulmaCSS
                        </p>
                      </li>
                      <li>
                        <p className="flex text-core-green-200/70 text-xs sm:text-xs md:text-sm mx-auto font-serif px-3 ">
                          Javascript
                        </p>
                      </li>
                      <li>
                        <p className="flex text-core-green-200/70 mx-auto text-xs sm:text-xs md:text-sm font-serif px-3 ">
                          PHP
                        </p>
                      </li>
                      <li>
                        <p className="flex text-core-green-200/70 mx-auto text-xs sm:text-xs md:text-sm font-serif px-3">
                          MySQL
                        </p>
                      </li>
                    </ul>
                    <a
                      href="https://github.com/SaloniChouhan/OneDesk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub className="text-core-green-100 h-4 w-4 mt-5 mb-8 " />
                    </a>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure
              as="div"
              className="mt-2 ring-1 rounded-lg bg-darkest-green"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex mx-auto w-full justify-between flex-row text-left overflow-hidden max-w-3xl px-4 py-2 text-sm font-medium text-core-green-100 rounded-lg mt-12  max-h-32">
                    <div className="mt-5">
                      <span className="mx-auto max-w-xl">
                        <h1 className="text-sm text-core-green-100">
                          StoxTicker
                        </h1>
                        <h3 className="text-xs text-core-green-600">
                          Stock Market Analysis App
                        </h3>

                        <h3
                          className={`${
                            open ? "hidden" : ""
                          }  text-core-green-600 text-xs mt-6`}
                        >
                          Read more...
                        </h3>
                      </span>
                    </div>

                    <div className="">
                      <img
                        className={`${
                          open ? "hidden" : ""
                        } relative -bottom-5 -right-5 h-40 w-35 rounded-lg `}
                        src={stocks}
                        alt=""
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs text-core-green-100 ">
                    This robust application provides real-time insights into
                    stock trends, equity analysis, and performance metrics for
                    various tickers, empowering users to make informed decisions
                    in the ever-changing stock market landscape. Utilized APIs
                    to fetch real-time stock data, ensuring users have access to
                    the latest market information.
                    <ul className="flex flex-wrap mt-4 mb-4 text-base font-light justify-start gap-1 align-left">
                      <li>
                        <p className="flex text-core-green-200/70 mx-auto font-serif text-xs sm:text-xs md:text-sm px-1  ">
                          React
                        </p>
                      </li>
                      <li>
                        <p className="flex text-core-green-200/70 text-xs sm:text-xs md:text-sm mx-auto font-serif px-3 ">
                          Ionic Framework
                        </p>
                      </li>
                      <li>
                        <p className="flex text-core-green-200/70 mx-auto text-xs sm:text-xs md:text-sm font-serif px-1">
                          Styled Components
                        </p>
                      </li>
                    </ul>
                    <a
                      href="https://github.com/SaloniChouhan/Stox-Ticker"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub className="text-core-green-100 h-4 w-4 mt-5 mb-8 " />
                    </a>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <br />
        <br />
      </section>
    </>
  );
};

export default Projects;

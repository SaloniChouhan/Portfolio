import one from "../assets/onedesk1.png";
import stocks from "../assets/stoxticker (1).png";
import { Disclosure } from "@headlessui/react";
import { FiGithub } from "react-icons/fi";

const Projectcard = (props) => {
  return (
    <>
      <Disclosure
        as="div"
        className="rounded-lg bg-darkest-green sm:w-72 md:w-96 mx-auto  lg:w-96"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="flex  flex-row text-left overflow-hidden justify-between py-0.5  text-sm font-medium w-full text-core-green-100 rounded-lg mt-12 ">
              <div className="mt-6 pl-4 text-left">
                <h1 className="text-lg text-core-green-100 font-semibold font-mono">
                  {props.heading}
                </h1>
                <h3 className="text-xs text-core-green-600 font-mono font-normal pt-1">
                  {props.subheading}
                </h3>

                <button
                  className={`${
                    open ? "hidden" : ""
                  }  text-dark-green bg-core-green-300 px-2 py-0.5 mx-auto font-mono rounded-md text-[9px] mt-8`}
                >
                  Read more
                </button>
              </div>

              <div className="self-end">
                <img
                  className={`${
                    open ? "hidden" : ""
                  } relative -bottom-7 -right-3 h-40 w-39 rounded-lg `}
                  src={props.projimage}
                  alt=""
                />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-1 pt-6 text-xs text-core-green-100">
              {props.content}
              <ul className="flex flex-wrap mt-4 mb-4 pt-3 text-base font-light justify-start gap-1 align-left">
                <li>
                  <p className="flex text-core-green-200/70 mx-auto font-serif text-xs sm:text-xs md:text-sm float-left pr-3  ">
                    {props.li1}
                  </p>
                </li>
                <li>
                  <p className="flex text-core-green-200/70 text-xs sm:text-xs md:text-sm mx-auto font-serif float-left pr-3 ">
                    {props.li2}
                  </p>
                </li>
                <li>
                  <p className="flex text-core-green-200/70 mx-auto text-xs sm:text-xs md:text-sm font-serif float-left pr-3 ">
                    {props.li3}
                  </p>
                </li>
                <li>
                  <p className="flex text-core-green-200/70 mx-auto text-xs sm:text-xs md:text-sm font-serif float-left pr-3">
                    {props.li4}
                  </p>
                </li>
              </ul>
              <a href={props.linktoproj} target="_blank" rel="noreferrer">
                <FiGithub className="text-core-green-100 h-4 w-4 mt-5 mb-8 " />
              </a>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Projectcard;

import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="mt-25  p-4 border-t-[1px] border-dark-green">
        <div>
          <ul className="flex mx-auto w-max font-semibold">
            <li className="inline-block hover:text-core-green-300 text-core-green-100 text-center">
              <a href="#home">Home</a>
            </li>
            <li className="inline-block px-5 hover:text-core-green-300 text-core-green-100 text-center">
              <a href="#work">
                {" "}
                <span className="pr-3">|</span> Work{" "}
                <span className="pl-3">|</span>{" "}
              </a>
            </li>
            <li className="inline-block hover:text-core-green-300 text-core-green-100 text-center">
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <p className="text-core-green-300 text-sm text-center p-2">
            Created by{" "}
            <span className="font-serif ">
              Saloni Chouhan{" "}
              <span className="text-core-green-200 p-2">
                {"("}
                <span className="animate-pulse">{"^"}</span>o
                <span className="animate-pulse">{"^"}</span>
                {")"}
              </span>
            </span>{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

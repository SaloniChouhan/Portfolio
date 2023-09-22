<Popover className="sm:hidden text-darkest-green text-sm font-mono py-2 px-3 rounded-full ring-1 ring-zinc-500/40  bg-neutral-800">
{({ open }) => (
  /* Use the `open` state to conditionally change the direction of the chevron icon. */
  <>
    <Popover.Button className="outline-none">
      <span className="inline-block ">Menu</span>
      <span>
        <ChevronDoubleDownIcon
          className={open ? "rotate-180 transform" : ""}
          stroke="currentColor"
          stroke-width="1"
        />
      </span>
    </Popover.Button>
    <Popover.Overlay className="fixed z-5 inset-0 bg-black/80 opacity-100 backdrop-blur-sm  " />
    <Transition
      enter="transition-opacity duration-500"
      enterFrom="opacity-0 ease-in "
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100  "
      leaveTo="opacity-0"
    >
      <Popover.Panel className="absolute z-10 ">
        <div className="fixed grid inset-x-4 top-7 z-50 origin-top rounded-3xl p-8 ring-1 ring-zinc-500/40 bg-neutral-800  opacity-100 scale-100">
          {" "}
          <div className="flex flex-row justify-between">
            <h6 className="inline-block text-darkest-green">
              Menu
            </h6>
            <Popover.Button
              className="inline-block"
              aria-label="Close menu"
              type="button"
              data-headlessui-state="open"
              tabindex="0"
            >
              {" "}
              <XMarkIcon
                className=" h-5 w-5 font-medium pl-1 text-zinc-400 inline-block "
                stroke="currentColor"
                stroke-width="1"
              />
            </Popover.Button>
          </div>
          <ul className=" mt-4 divide-y divide-zinc-100 font-sans text-base font-normal text-darkest-green divide-zinc-100/5 ">
            <li>
              {" "}
              <a href="#work">
                <Popover.Button classNameName="pt-3 pb-2">
                  Work
                </Popover.Button>
              </a>
            </li>
            <li>
              <a href="#projects">
                <Popover.Button classNameName="pt-3 pb-2">
                  Projects
                </Popover.Button>{" "}
              </a>
            </li>
            <li>
              <a href="#connect">
                <Popover.Button classNameName="pt-3 pb-2">
                  Connect
                </Popover.Button>{" "}
              </a>
            </li>
          </ul>
        </div>
        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Transition>
  </>
)}
</Popover>
<ul className="  px-7 hidden sm:flex  ring-1 ring-zinc-500/40 space-x-6  shadow-md text-base  rounded-full bg-zinc-800 ">
<li className=" block  py-2 transition ease-in-out duration-300 active:text-cyan-200 hover:text-cyan-400 font-sans font-normal text-sm text-zinc-300 ">
  <a href="#work">Work</a>
</li>
<li className=" block py-2 transition active:text-cyan-200 hover:text-cyan-400 ease-in-out duration-300 font-sans font-normal text-sm  text-zinc-300">
  <a href="#projects">Projects</a>
</li>
<li className=" block  py-2 transition ease-in-out duration-300 active:text-cyan-200 hover:text-cyan-400 font-sans font-normal text-sm text-zinc-300 ">
  <a href="#connect">Connect</a>
</li>
</ul>
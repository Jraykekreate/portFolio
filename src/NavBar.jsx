import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import Logo from "./Logo";
import { IoIosContact, IoMdHome, IoMdSchool } from "react-icons/io";
import { LuLaptop } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";

import AboutIcon from "./AboutIcon";

function NavBar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="w-full  sticky top-0 md:opacity-0 transition-all hover:opacity-100  hover:md:shadow-xl font-Inter bg-primaryBackground justify-between items-center p-4 flex  ">
      <Logo></Logo>

      <div className="nav-link-container flex font-Anton  text-xl md:flex justify-end font-bold">
        <div className=" text-slate-700 tracking-widest hidden md:flex gap-16 space-x-4 px-4">
          <a>Home</a>
          <a className="">Projects</a>
          <a>School</a>
          <a>Hire</a>
          <a>About</a>
        </div>
        <div className="flex md:hidden relative z-30 ">
          <Hamburger
            size={30}
            toggled={isOpen}
            toggle={setOpen}
            color="#161C2D"
            hideOutline={true}
          ></Hamburger>
        </div>
      </div>
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="absolute flex w-full z-10 filter blur-sm top-0 left-0 bottom-0 h-[100vh] bg-black opacity-60"></div>

          {/* Sidebar */}
          <div className="absolute z-20   bg-[#F8FBF8] flex flex-col items-center justify-between top-0 right-0 overflow-hidden h-[100vh] shadow-2xl rounded-bl-2xl rounded-tl-2xl">
            {/* Make sure no parent elements have higher z-index */}
            <div className="rounded-3xl p-4 w-full">
              <Logo displayClass={"flex"} />
            </div>
            <div className="gap-8 text-2xl font-bold font-Inter flex flex-col items-center h-3/4 p-8">
              <div className="flex justify-around items-center w-48 ">
                <a className="text-xl">
                  <IoMdHome size={45}></IoMdHome>
                </a>
                <span className="">Home</span>
              </div>
              <div className="flex justify-around w-48  gap-8 items-center ">
                <a className="text-xl">
                  <IoMdSchool size={45}></IoMdSchool>
                </a>
                <span className="">School</span>
              </div>
              <div className="flex w-48 gap-8 justify-around  items-center ">
                <a className="text-xl">
                  <LuLaptop size={45}></LuLaptop>
                </a>
                <span className="">Hire</span>
              </div>
              <div className="flex justify-around  w-48 gap-8 items-center ">
                <a className="text-xl">
                  <GrProjects size={45}></GrProjects>
                </a>
                <span className="">Projects</span>
              </div>
              <div className="flex justify-around  w-48 gap-8 items-center ">
                <a className="text-xl">
                  <IoIosContact size={45}></IoIosContact>
                </a>
                <span className="">Contact</span>
              </div>
              <div className="flex justify-around w-48 ">
                <a>
                  {" "}
                  <AboutIcon></AboutIcon>
                </a>
                <span>Info </span>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;

"use client";
import React, { useState } from "react";
import Group from "../components/Assests/Group.png";
import Profile from "../components/Assests/13.png";
import Image from "next/image";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const menus = [
  { id: "#categories", label: "Categories" },
  { id: "#teach", label: "Teach" },
  { id: "#contact Us", label: "Contact Us" },
  { id: "#about Us", label: "About Us" },
];

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between py-10 md:px-20 px-7">
      <h1 className="uppercase font-bold text-[20px] flex items-center justify-start gap-2">
        <Image src={Group} alt="icon image" />
        Academy
      </h1>
      <nav className="justify-center gap-6 items-center px-10 lg:flex flex-row hidden">
        {menus.map((menu, i) => (
          <div key={i}>
            <Link href={menu.id}>{menu.label}</Link>
          </div>
        ))}
      </nav>
      <div className="pt-2 relative mx-auto text-gray-600 lg:flex hidden">
        <input
          className="border-2 border-gray-300 bg-[#fafafa] h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
          type="search"
          placeholder="Search Anything"
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
      {/* <div className='w-1 bg-blue-500 flex justify-cente gap-3 ml-[-60]'/> */}
      <div className="justify-center gap-2 items-center hidden lg:flex">
        <Image src={Profile} alt="profile image" className="w-[40px]" />
        <div>
          <h3 className="text-[15px] font-bold">Behzad pashaei</h3>
          <p className="text-[10px]">Ui & Ux Designer</p>
        </div>
        <span className="text-blue-500 bg-[#fafafa] p-4 ml-4 rounded-lg">
          <FaBell />
        </span>
      </div>
      <div className="ml-[1rem] lg:hidden relative flex">
        {toggleMenu ? (
          <RiCloseLine
            size={27}
            style={{ color: "blue" }}
            onClick={() => setToggleMenu(false)}
            className="cursor-pointer"
          />
        ) : (
          <RiMenu3Line
            size={27}
            style={{ color: "blue" }}
            onClick={() => setToggleMenu(true)}
            className="cursor-pointer"
          />
        )}
        {toggleMenu && (
          <div
            className="flex justify-end items-end flex-col text-end bg-blue-300 p-[2rem] 
          absolute md:top-[40px] top-[20px] right-0 mt-[1rem] min-w-[230px] rounded-[5px] scale-up-center"
          >
            <div className="">
              {menus.map((menu, i) => (
                <p key={i} className="text-white font_family py-[1rem] px-0">
                  <a href={menu.id}>{menu.label}</a>
                </p>
              ))}
            </div>
            <div className="flex justify-center gap-2 items-center">
              <Image src={Profile} alt="profile image" className="w-[40px]" />
              <div>
                <h3 className="text-[15px] font-bold">Behzad pashaei</h3>
                <p className="text-[10px]">Ui & Ux Designer</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

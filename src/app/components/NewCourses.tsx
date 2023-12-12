"use client";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../slices/userSlice";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {FaFilter,} from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import ten from "../components/Assests/10.png";
import { AppDispatch, RootState } from "../../../store/store";

//fetch data
export default function getItems() {

  const userRef = useRef(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const {entities} = useSelector((state:RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if(userRef.current === false){
      dispatch(fetchUsers())
    }

    return () => {
      userRef.current = true;
    }
    
  },[])

  const menus = [
    { id: "#design", label: "Design" },
    { id: "#development", label: "Development" },
    { id: "#photography", label: "Photography" },
    { id: "#music", label: "Music" },
  ];

  return (
    <section>
      <div className="flex justify-between items-center md:px-20 px-10 mt-24">
        <div>
          <p className="font-bold md:text-[20px] text-[15px] uppercase">
            New Courses (BOOKS)
          </p>
        </div>
        <div>
          <div className="ml-[1rem] lg:hidden relative flex items-center">
            <h1 className="bg-[#fafafa] p-3 font-bold md:text-[15px] text-[10px]">
              All Courses
            </h1>
            {toggleMenu ? (
              <AiOutlineCaretUp
                size={20}
                style={{ color: "black" }}
                onClick={() => setToggleMenu(false)}
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineCaretDown
                size={20}
                style={{ color: "black" }}
                onClick={() => setToggleMenu(true)}
                className="cursor-pointer"
              />
            )}
            {toggleMenu && (
              <div
                className="flex justify-end items-end flex-col text-end bg-blue-300 p-[2rem] 
          absolute md:top-[40px] top-[20px] right-0 mt-[1rem] min-w-[200px] rounded-[5px] scale-up-center"
              >
                <div className="">
                  {menus.map((menu, i) => (
                    <p
                      key={i}
                      className="text-white font_family py-[1rem] px-0"
                    >
                      <a href={menu.id}>{menu.label}</a>
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="lg:flex items-center gap-6 hidden">
            <h1 className="bg-[#fafafa] p-3 font-bold md:text-[15px] text-[10px]">
              All Courses
            </h1>
            {menus.map((menu, i) => (
              <div key={i}>
                <Link href={menu.id}>{menu.label}</Link>
              </div>
            ))}
            <FaFilter className="font-bold text-[15px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row justify-around my-[15px] mx-0 md:px-0 px-7">
        {entities.map((item: any) => (
          <div key={item.id} className="border-2 bg-[#fafafa] mb-7 p-4">
            <div>
              <Image
                src={item.cover_image}
                alt="tutor-image"
                className="flex-wrap md:w-[220px] w-full"
                width={667}
                height={1000}
              />
              <h6 className="flex justify-start text-[10px] font-bold mt-4 m-2">
                {item.author}
              </h6>
              <p className="flex justify-start text-[10px] font-bold mt-4 m-2">
                {item.title}
              </p>
            </div>
          </div>
        ))}
        {entities.length === 0 && <p>There is no open items...</p>}
      </div>
    </section>
  );
}

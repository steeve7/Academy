import React from 'react'
import {
  FaAngleLeft,
  FaAngleRight,
  FaSchool,
  FaUser,
  FaCaretUp,
} from "react-icons/fa";
import { AiTwotoneTrophy } from "react-icons/ai";

import ten from '../components/Assests/18.png'
import four from "../components/Assests/10.png";
import scoreFour from '../components/Assests/Score2.png'
import scoreOne from '../components/Assests/Score.png'
import scoreFive from '../components/Assests/Score5.png'
import scoreThree from '../components/Assests/Score3.png'
import nine from "../components/Assests/09.png";
import twelve from "../components/Assests/12.png";
import Image from 'next/image';

export default function Topcourse() {
  const items = [
    {
      image: ten,
      role: "Learn Figma - UI/UX Design Essential Training",
      lesson: "Lesson : 6",
      profession: "Student : 198",
      level: "Beginner",
      button: "Start Course",
      rate: scoreFour,
    },
    {
      image: four,
      role: "Python for Beginners - Learn Programming from scratch",
      lesson: "Lesson : 6",
      profession: "Student : 198",
      level: "Beginner",
      button: "Start Course",
      rate: scoreOne,
    },
    {
      image: nine,
      role: "Acoustic Guitar and Electric Guitar Started",
      lesson: "Lesson : 6",
      profession: "Student : 198",
      level: "Average",
      button: "Start Course",
      rate: scoreFive,
    },
    {
      image: twelve,
      role: "Mobile App Development with Flutter & Dart (iOS and Android)",
      lesson: "Lesson : 6",
      profession: "Student : 198",
      level: "Advanced",
      button: "Start Course",
      rate: scoreThree,
    },
  ];
  return (
    <section className="mt-32 md:px-20 px-8">
      <div className="flex items-center justify-between px-10">
        <h2 className="font-bold md:text-[25px] text-[15px]">Top Courses</h2>
        <div className="flex justify-center items-center md:text-[30px] text-[18px] gap-6">
          <FaAngleLeft className="bg-[#fafafa] p-1" />
          <FaAngleRight className="bg-[#fafafa] p-1" />
        </div>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row justify-around my-[10px] mx-0 md:mr-[15px] items-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="space-y-4 mb-6 border-2 bg-[#fafafa] p-2 rounded-lg md:w-[23%] w-full"
          >
            <Image
              src={item.image}
              alt="topcourse-image"
              className=" w-full md:w-[220px] mx-auto"
            />
            <h2 className="font-bold text-[10px]">{item.role}</h2>
            <div className="flex items-center justify-between gap-3">
              <p className="flex items-center gap-2 text-[10px]">
                <FaSchool />
                {item.lesson}
              </p>
              <p className="flex items-center gap-2 text-[10px]">
                <FaUser />
                {item.profession}
              </p>
              <p className="flex items-center gap-2 text-[10px]">
                <AiTwotoneTrophy />
                {item.level}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-black p-2 text-white rounded-lg w-[40%] text-[8px] flex items-center gap-3"
              >
                {item.button}{" "}
                <FaAngleRight className="rounded-lg text-[10px]" />
              </button>
              <Image src={item.rate} alt="rate-image" className="w-[25px]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

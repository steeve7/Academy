import React from 'react'
import {FaSchool,
  FaUser,
  FaAngleRight,} from 'react-icons/fa'
  import { AiTwotoneTrophy } from "react-icons/ai";
import one from '../components/Assests/instructor (1).png'
import two from '../components/Assests/instructor (2).png'
import three from '../components/Assests/instructor (3).png'
import four from '../components/Assests/instructor (4).png'
import ten from '../components/Assests/shade (4).png'
import seven from "../components/Assests/shade (2).png";
import eleven from "../components/Assests/shade (1).png";
import six from "../components/Assests/shade (5).png";
import Image from 'next/image'


export default function Courses() {

     const items = [
       {
         image: two,
         role: "Google Ads Training 2021: Profit with Pay",
         lesson: "Lesson : 6",
         profession: "Student : 198",
         level: "Average",
         button: "Let's Go",
         points: "Points : 75/10",
         days: "Day 56",
         imageTwo: ten,
         autor: "Jon Kantner",
         title: "CEO",
       },
       {
         image: three,
         role: "ASO & Mobile App Marketing: Monetize Your App",
         lesson: "Lesson : 6",
         profession: "Student : 198",
         level: "Advanced",
         button: "Let's Go",
         points: "Points : 25/100",
         days: "Day 56",
         imageTwo: seven,
         autor: "Jon Kantner",
         title: "Designer",
       },
       {
         image: four,
         role: "Python for Beginners - Learn Programming from scratch",
         lesson: "Lesson : 6",
         profession: "Student : 198",
         level: "Beginner",
         button: "Let's Go",
         points: "Points : 50/100",
         days: "Day 56",
         imageTwo: eleven,
         autor: "Jon Kantner",
         title: "Designer Teacher",
       },
       {
         image: one,
         role: "Beginner Nikon Digital SLR  Photography",
         lesson: "Lesson : 6",
         profession: "Student : 198",
         level: "Beginner",
         button: "Let's Go",
         points: "Points : 100/100",
         days: "Day 56",
         imageTwo: six,
         autor: "Jon Kantner",
         title: "Photographer",
       },
     ];
  return (
    <section className="md:px-20 mt-20 px-5">
      <div className="flex justify-between items-center m-2 w-full">
        <h1 className="font-bold text-[20px] uppercase">Your Courses</h1>
        <p className="bg-[#fafafa] p-2 font-bold text-[15px]">See All</p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-around my-[10px] mx-0 ">
        {items.map((item, i) => (
          <div
            className="mb-6 border-2 bg-[#fafafa] p-2 rounded-lg flex flex-col md:flex-row items-center justify-around md:w-[48%] w-full"
            key={i}
          >
            <Image src={item.image} alt="courses_image" className="md:w-[200px] w-full" />
            <div className="space-y-5 md:w-[60%] w-full">
              <h2 className="text-[10px] font-bold">{item.role}</h2>
              <div className="flex items-center justify-between">
                <p className="text-[10px] flex items-center gap-2">
                  <FaSchool />
                  {item.lesson}
                </p>
                <p className="text-[10px] flex items-center gap-2">
                  <FaUser />
                  {item.profession}
                </p>
                <p className="text-[10px] flex items-center gap-2">
                  <AiTwotoneTrophy />
                  {item.level}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[10px]">{item.points}</p>
                <p className="text-[7px]">{item.days}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src={item.imageTwo}
                    alt="profile image"
                    className="w-[40px]"
                  />
                  <div className="flex flex-col justify-center ">
                    <h2 className="font-bold text-[10px]">{item.autor}</h2>
                    <p className="text-[10px]">{item.title}</p>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-black p-2 text-white rounded-lg w-full text-[8px] flex items-center gap-3"
                  >
                    Let's Go <FaAngleRight className="rounded-lg text-[10px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react'
import Image from 'next/image'
import {
  FaFilter,
  FaSchool,
  FaUser,
  FaCaretUp,
  FaAngleRight,
} from "react-icons/fa";

import ten from '../components/Assests/10.png'
import nine from '../components/Assests/09.png'
import six from '../components/Assests/06.png'
import four from '../components/Assests/04.png'
import twelve from '../components/Assests/12.png'
import fifteen from '../components/Assests/15.png'
import sixsteen from '../components/Assests/16.png'
import siventeen from '../components/Assests/17.png'
import score from '../components/Assests/Score.png'

//fetch data
 async function getItems(){
        const res = await fetch("https://freetestapi.com/api/v1/books")

        return res.json()
    }

export default async function NewCourses() {
   
    const items = await getItems();
   
    // const items = [
    //     {
    //         "image" : ten,
    //         "role": "Learn Figma - UI/UX Design Essential Training",
    //         "lesson" : "Lesson : 6",
    //         "profession" : "Student : 198",
    //         "level": "Beginner",
    //         "button": "Start Course",
    //         "rate":score,
    //     },
    //     {
    //         "image" : four,
    //         "role": "Learn Figma - UI/UX Design Essential Training",
    //         "lesson" : "Lesson : 6",
    //         "profession" : "Student : 198",
    //         "level": "Beginner",
    //         "button": "Start Course",
    //         "rate":score,
    //     },
    //     {
    //         "image" : nine,
    //         "role": "Learn Figma - UI/UX Design Essential Training",
    //         "lesson" : "Lesson : 6",
    //         "profession" : "Student : 198",
    //         "level": "Beginner",
    //         "button": "Start Course",
    //         "rate":score,
    //     },
    //     {
    //         "image" : twelve,
    //         "role": "Learn Figma - UI/UX Design Essential Training",
    //         "lesson" : "Lesson : 6",
    //         "profession" : "Student : 198",
    //         "level": "Beginner",
    //         "button": "Start Course",
    //         "rate":score,
    //     },
    //     {
    //         "image" : fifteen,
    //         "role": "Learn Figma - UI/UX Design Essential Training",
    //         "lesson" : "Lesson : 6",
    //         "profession" : "Student : 198",
    //         "level": "Beginner",
    //         "button": "Start Course",
    //         "rate":score,
    //     },
    //     {
    //         "image" : sixsteen,
    //         "role": "Learn Figma - UI/UX Design Essential Training",
    //         "lesson" : "Lesson : 6",
    //         "profession" : "Student : 198",
    //         "level": "Beginner",
    //         "button": "Start Course",
    //         "rate":score,
    //     },
    //     {
    //         "image" : six,
    //         "role": "Learn Figma - UI/UX Design Essential Training",
    //         "lesson" : "Lesson : 6",
    //         "profession" : "Student : 198",
    //         "level": "Beginner",
    //         "button": "Start Course",
    //         "rate":score,
    //     },
    //     {
    //         "image" : siventeen,
    //         "role": "Learn Figma - UI/UX Design Essential Training",
    //         "lesson" : "Lesson : 6",
    //         "profession" : "Student : 198",
    //         "level": "Beginner",
    //         "button": "Start Course",
    //         "rate":score,
    //     },
    // ]
  return (
    <section>
      <div className="flex justify-between items-center px-20 mt-24">
        <div>
          <p className="font-bold text-[20px] uppercase">New Courses(BOOKS)</p>
        </div>
        <div>
          <ul className="flex items-center gap-6">
            <li className="bg-[#fafafa] p-3 font-bold text-[15px]">
              All Courses
            </li>
            <li className="font-bold text-[15px]">Design</li>
            <li className="font-bold text-[15px]">Development</li>
            <li className="font-bold text-[15px]">Photography</li>
            <li className="font-bold text-[15px]">Music</li>
            <FaFilter className="font-bold text-[15px]" />
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap justify-around my-[15px] mx-0">
        {items.map((item: any) => (
          <div key={item.id} className="border-2 bg-[#fafafa] mb-7 p-2">
            <div>
              <Image
                src={ten}
                alt="tutor-image"
                className="flex-wrap w-[220px]"
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
        {items.length === 0 && <p>There is no open items...</p>}
      </div>
    </section>
  );
}

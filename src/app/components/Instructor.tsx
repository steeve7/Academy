import React from 'react'
import Image from 'next/image';
import {FaAngleRight} from 'react-icons/fa';
import Arrow from '../components/Assests/arrows.png'
import instructor from '../components/Assests/advertising.png'
import seven from '../components/Assests/shade (2).png'
import ten from '../components/Assests/shade (4).png'
import nine from '../components/Assests/shade (3).png'
import six from '../components/Assests/shade (5).png'
import eleven from '../components/Assests/shade (1).png'
import two from '../components/Assests/shade (6).png'

export default function Instructor() {
 const images = [
   {
     image: seven,
     title: "Jon Kantner",
     desc: "Designer"
   },
   {
     image: ten,
     title: "Debbie LaChusa",
     desc: "SEO",
   },
   {
     image: nine,
     title: "Edwin Daiz",
     desc: "Composer",
   },
   {
     image: six,
     title: "Cassie Evans",
     desc: "programmer",
   },
   {
     image: eleven,
     title: "Erich Andreas",
     desc: "programmer",
   },
   {
     image: two,
     title: "Jason Allen",
     desc: "Accounting",
   },
 ];
  return (
    <section className="flex flex-row justify-between px-20 mt-14 items-center">
      <div className="flex flex-col gap-6 w-1/2 mt-[-20px]">
        <h1 className="font-bold text-[25px]">
          <b className="text-blue-500">Best</b> Instructors
        </h1>
        <p className="px-20 ml-[-80px]">
          At the Academy, we strive to bring together the best professors for
          the best courses
        </p>
        <div className="flex items-center gap-8">
          <button
            type="submit"
            className="bg-black p-4 text-white rounded-lg w-[28%] text-[10px] flex items-center gap-3"
          >
            Start Course Now <FaAngleRight className="rounded-lg text-[15px]" />
          </button>
          <Image src={Arrow} alt="arrow image" />
          <Image src={instructor} alt="instructor image" className='w-16' />
        </div>
      </div>
      <div className="bg-[#fafafa] w-[60%] py-32 rounded-l-[40px] h-2 absolute right-0" />
      <div className="flex flex-wrap justify-around my-[10px] mx-0 z-10 w-[60%]">
        {images.map((image, i) => (
          <div key={i} className="mb-6 border-2 bg-[#fafafa] p-2 rounded-lg">
            <Image src={image.image} alt="images" className="w-[150px]" />
            <div className="flex items-center justify-between mt-3">
              <h1 className="font-bold text-[13px]">{image.title}</h1>
              <p className="font-bold text-[10px]">{image.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

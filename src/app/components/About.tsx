import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image';
import Images from '../components/Assests/image.png'
import score from '../components/Assests/booked.png'

export default function About() {
  return (
      <section className="flex md:flex-row flex-col justify-between md:px-40 px-10 mt-14 items-center">
        <div className="flex flex-col gap-6 md:w-1/2 w-full mt-[-20px]">
          <h5 className="md:w-[79%] w-full md:text-[25px] text-[15px] font-bold tracking-tighter">
            🙌 Hello friends <br />I Am Sofia And We Want To Start
            <b className="text-blue-500"> Web Design</b> Course Together.
            Do You Like It Too 😍 ?
          </h5>
          <div className='flex items-center gap-8'>
            <button
              type="submit"
              className="bg-black p-4 text-white rounded-lg w-full  md:w-[40%] flex justify-center items-center gap-3 md:text-[13px] text-[10px]"
            >
              Start Course Now{" "}
              <FaAngleRight className="rounded-lg text-[15px]" />
            </button>
            <Image src={score} alt="icon-image" className='lg:flex hidden' />
          </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center mt-5 md:mt-0">
          <Image src={Images} alt="about image" />
        </div>
        
      </section>
  );
}

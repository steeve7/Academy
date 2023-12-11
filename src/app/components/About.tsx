import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image';
import Images from '../components/Assests/image.png'
import score from '../components/Assests/booked.png'

export default function About() {
  return (
      <section className="flex flex-row justify-between px-40 mt-14 items-center">
        <div className="flex flex-col gap-6 w-1/2 mt-[-20px]">
          <h5 className="w-full text-[25px] font-bold tracking-tighter">
            🙌 Hello friends <br />I Am Sofia And We Want To Start <br /> A{" "}
            <b className="text-blue-500">Web Design</b> Course Together. <br />{" "}
            Do You Like It Too 😍 ?
          </h5>
          <div className='flex items-center gap-8'>
            <button
              type="submit"
              className="bg-black p-4 text-white rounded-lg w-[40%] flex items-center gap-3"
            >
              Start Course Now{" "}
              <FaAngleRight className="rounded-lg text-[15px]" />
            </button>
            <Image src={score} alt="icon-image" />
          </div>
        </div>

        <div className="w-1/2">
          <Image src={Images} alt="about image" />
        </div>
        
      </section>
  );
}

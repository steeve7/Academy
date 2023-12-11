import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image'
import Vector from '../components/Assests/Vector.png'
import icon from '../components/Assests/icon.png'
import icon2 from '../components/Assests/icon (2).png'

export default function Project() {
  return (
    <section className="flex justify-between px-20">
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          alt="icon image"
          className="bg-[#fafafa] rounded-lg text-[15px]" />
        <p className="bg-[#fafafa] p-4 rounded-lg font-bold">Python</p>
        <p className="bg-[#fafafa] p-4 rounded-lg font-bold">React</p>
      </div>
      <div className="flex items-center gap-4">
        <Image
          src={Vector}
          alt="icon image"
          className="bg-[#fafafa] rounded-lg text-[15px]"
        />
        <p className="bg-[#fafafa] p-4 rounded-lg font-bold">Ui & Ux</p>
        <p className="bg-[#fafafa] p-4 rounded-lg font-bold">Vector</p>
      </div>
      <div className="flex items-center gap-4">
        <Image
          src={icon2}
          alt="icon image"
          className="bg-[#fafafa] rounded-lg text-[15px]" />
        <p className="bg-[#fafafa] p-4 rounded-lg font-bold">After Effect</p>
        <p className="bg-[#fafafa] p-4 rounded-lg font-bold">Lightroom</p>
        <p className="bg-[#fafafa] p-4 rounded-lg font-bold">Photography</p>
        <FaAngleRight className="rounded-lg text-[25px]" />
      </div>
    </section>
  );
}

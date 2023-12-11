import React from 'react'
import Image from 'next/image';
import background from '../components/Assests/background.png'

export default function Newsletter() {
  return (
    <section className=" flex items-center justify-between px-20 mt-32 mb-10">
      <Image
        src={background}
        alt="background-image"
        className="absolute left-0 w-[94%]"
      />
      <div className="w-[60%] z-10">
        <h5 className="font-bold text-[20px]">
          Find Out About The Latest Courses With The{" "}
          <b className="text-blue-500">Academy</b> Newsletter
        </h5>
      </div>
      <div className="pt-2 relative mx-auto text-gray-600 flex justify-center items-center gap-5 mt-7 z-10 w-full">
        <button
          type="submit"
          className="bg-black p-2 text-white rounded-lg gap-3 absolute right-40 top-0 mt-4 mx-auto"
        >
          Submit
        </button>
        <input
          className="border-2 border-white bg-white p-4 shadow-xl rounded-lg text-sm focus:outline-none w-[60%]"
          type="search"
          placeholder="Search Anything"
        />
        <button type="submit" className="absolute top-0 mt-7 mr-8 pl-48" />
      </div>
    </section>
  );
}

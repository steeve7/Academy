import React from "react";

export default function Search() {
  return (
    <section className="w-full md:px-0 px-8">
      <div className="flex justify-center">
        <p className="font-bold md:text-[30px]">
          Search Among <b className="text-blue-600 w-full">58340</b> Courses And
          <span className="flex justify-center">Find Your Favorite Course</span>
        </p>
      </div>

      <form className="pt-2 relative mx-auto text-gray-600 flex flex-col md:flex-row justify-center items-center gap-5 mt-7">
        <input
          className="border-2 w-full md:w-[35%] border-gray-300 bg-[#fafafa] p-4 md:px-36 rounded-lg text-sm focus:outline-none"
          type="search"
          placeholder="Search Anything"
        />
        <button
          type="submit"
          className="bg-black p-2 text-white rounded-lg gap-3 md:absolute md:left-72 w-full md:w-[8%] top-0 md:mt-4 md:ml-8"
        >
          Categories
        </button>
        <button
          type="submit"
          className="absolute top-0 mt-7 md:mr-8 right-[35rem] pl-48 lg:flex hidden"
        >
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
        <p>Or View The Following Courses</p>
      </form>
    </section>
  );
}

import React from 'react'
import Group from "../components/Assests/Group.png";
import Cert from "../components/Assests/last (2).png"
import last from "../components/Assests/last (1).png"
import Image from "next/image";

export default function Footer() {
  return (
    <section className="w-full px-20 mt-32 bg-[#fafafa]">
      <div className="w-full flex items-center justify-between px-14">
        <p className="w-[68%] mt-10 font-bold text-[10px] bg-gray-100 p-10 border-2 rounded-r-[40px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium
        </p>
        <div className="flex flex-col items-center justify-center mt-10">
          <Image src={Group} alt="icon image" className="w-[70px]" />
          <h1 className="font-bold text-[25px] uppercase">Academy</h1>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-14 px-14">
        <div>
          <h1 className="uppercase font-bold text-[15px] mb-7">
            Membership Certificate
          </h1>
          <Image src={Cert} alt="cert-image" className="w-[350px]" />
        </div>
        <div>
          <h1 className="uppercase font-bold text-[15px] mb-7">categories</h1>
          <ul className="">
            <li>Designing</li>
            <li>Programming</li>
            <li>Graphics</li>
            <li>Front End</li>
            <li>Composition</li>
            <li>Tailoring</li>
            <li>Database</li>
            <li>Sports</li>
            <li>Cooking</li>
            <li>Driving</li>
            <li>Photography</li>
            <li>Camera work</li>
          </ul>
        </div>
        <div>
          <h1 className="uppercase font-bold text-[15px] mb-7">Quick Access</h1>
          <ul>
            <li>What We Offer</li>
            <li>Careers</li>
            <li>LeaderShip</li>
            <li>About</li>
            <li>Catelog</li>
            <li>Degrees</li>
            <li>For Enterprise</li>
            <li>For Government</li>
            <li>For Campus</li>
            <li>Become A Partner</li>
            <li>Terms</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h1 className="uppercase font-bold text-[15px] mb-7">New Comment</h1>
          <div className="bg-gray-100 p-4">
            <h1 className="font-bold text-[13px]">ellsmartx</h1>
            <p className="text-[10px]">
              how nice does this look 😍 I feel it should be delicious, thank
              you
            </p>
          </div>
          <div className="bg-gray-100 p-4">
            <h1 className="font-bold text-[13px]">cassia</h1>
            <p className="text-[10px]">
              Take a rest, i'll be cheer up you again in 2 next game go go go
            </p>
          </div>
          <div className="bg-gray-100 p-4">
            <h1 className="font-bold text-[13px]">amanda</h1>
            <p className="text-[10px]">
              you were stunning today, jan! 💗 great match 👍🏽👍🏽
            </p>
          </div>
          <div className="bg-gray-100 p-4">
            <h1 className="font-bold text-[13px]">Denis Simonassi</h1>
            <p className="text-[10px]">
              It was a great match today Janzi! You did great😉🇩🇪
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-gray-100 p-3 mt-10 rounded-lg px-14 mb-10">
        <p className="font-bold text-[10px]">
          privacy policy | terms & conditions
        </p>
        <p className="font-bold text-[10px]">all copyright (c) 2022 reserved</p>
      </div>
    </section>
  );
}

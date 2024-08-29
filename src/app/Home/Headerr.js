'use client';
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsFilterRight } from "react-icons/bs";
import gsap from "gsap";
import Lottie from "lottie-react";
import popcorn from "../Lottie/POPCORN.json"
import { useRef, useState } from "react";
import SplitType from 'split-type';

const menuLinks = [
  {path:"/", label: "HOME"},
  {path:"/search", label: "SEARCH"},
  {path:"/search", label: "TOP RATED"},
  {path:"/trending", label: "TRENDING"},
  {path:"/trending", label: "RELEASED"},
  {path:"/contact", label: "CONTACT"},
  {path:"/nowshowing", label: "NOW SHOWNG"},
]
export default function Header() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const reveal = useRef();
    const container = useRef();
    const cont = useRef();
    const start = useRef();
    const end = useRef();

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};
    useGSAP(() => {
        const revealCurrent = reveal.current;
        const text = new SplitType(revealCurrent, { types: 'chars' })
        gsap.fromTo(text.chars, {y: 160}, {
          visibility: "visible",
            y: 0,
            ease: "power4.inOut",
            stagger: {
                amount: 0.4,
            },
            duration: 1.2,
            opacity: 1,
        })
        gsap.to(cont.current, {
          opacity: 1
        })
    })

    useGSAP(() => {
      gsap.set(end.current, { zIndex: "20", position: "relative" })
      
      ScrollTrigger.create ({
          trigger: [start.current, end.current],
          start: "top top",
          end: 'center' ,
          pin: true,
          pinSpacing: false,
        })
    })
  return (
    <div  className=' flex justify-center items-center flex-col overflow-hidden'>
      <div className="menu-cont z-[200] bg-[#fbfbfb] flex flex-col">
      {isMenuOpen && (
      <div className="menu-overlay h-[96vh] bg-[#bcabae] flex-col absolute top-0 rounded-b-md right-0 w-[55%] font-mango font-bold  flex justify-between items-start z-[2]"  ref={container}>
        <div className="w-full flex flex-row p-10">
          <div className="menu-links w-1/2 text-[#fbfbfb]">
           {menuLinks.map((link, index) => (
                   <div className="menu-link-item w-max" key={index}>
                     <div className="menu-link-item-holder relative  flex flex-col " onClick={toggleMenu}>
                      <Link href={link.path} className="menu-link text-7xl after:content after:relative after:bg-[#0f0f0f] after:h-[1px] after:w-0 after:left-0 hover:text-[#0f0f0f] after:bottom-[1px] after:block after:duration-[0.3s] hover:after:w-full">{link.label}</Link>
                     </div>
                  </div>
                ))}
         </div>
          <div className="menu-preview  flex-[2] flex justify-end gap-2 items-start w-1/6">
            <div className="menu-close cursor-pointer hover:text-[#0F0F0F]" onClick={toggleMenu}>
                <p className="text-[#fbfbfb] text-xl after:content after:relative after:bg-[#0F0F0F] after:h-[1px] after:w-0 after:left-0 hover:text-[#0F0F0F] [-webkit-text-stroke:0.3px] after:bottom-[1px] after:block after:duration-[0.3s] hover:after:w-full font-normal uppercase">Close &#x2715;</p>
               </div>
            </div>
      </div>
      </div>)}
      </div>
      <div ref={start} className="w-screen h-screen relative">
        <div  className="z-20 gap-3 bg-transparent absolute flex justify-between w-full items-start py-6 px-16">
          <div className="text-[#fbfbfb] text-xl font-extrabold font-sans cursor-pointer hover:text-[#887b7d]">LENNY CINEMAS</div>  
          <div className="flex flex-row font-mango uppercase justify-evenly gap-40">
            <div className="text-sm font-medium text-[#fbfbfb]">
              <Link href="" className="after:content after:relative after:bg-[#887b7d] after:h-[1px] after:w-0 after:left-0 hover:text-[#887b7d] after:bottom-[1px] after:block after:duration-[0.3s] hover:after:w-full">Trending Movies</Link>
              <Link href=""  className="after:content after:relative after:bg-[#887b7d] after:h-[1px] after:w-0 after:left-0 hover:text-[#887b7d] after:bottom-[1px] after:block after:duration-[0.3s] hover:after:w-full">Top Rated</Link>
              <Link href=""  className="after:content after:relative after:bg-[#887b7d] after:h-[1px] after:w-0 after:left-0 hover:text-[#887b7d] after:bottom-[1px] after:block after:duration-[0.3s] hover:after:w-full">Newly Released</Link>
         </div>
             <div className="text-sm text-[#fbfbfb] font-medium">
             <Link href=""  className="after:content after:relative after:bg-[#887b7d] after:h-[1px] after:w-0 after:left-0 hover:text-[#887b7d] after:bottom-[1px] after:block after:duration-[0.3s] hover:after:w-full">Search</Link>
             <Link href=""  className="after:content after:relative after:bg-[#887b7d] after:h-[1px] after:w-0 after:left-0 hover:text-[#887b7d] after:bottom-[1px] after:block after:duration-[0.3s] hover:after:w-full">Upcoming</Link>
             <Link href=""  className="after:content after:relative after:bg-[#887b7d] after:h-[1px] after:w-0 after:left-0 hover:text-[#887b7d] after:bottom-[1px] after:block after:duration-[0.3s] hover:after:w-full">Contact Us</Link>
         </div>
         <BsFilterRight onClick={toggleMenu} className="text-6xl text-[#fbfbfb]" />
         </div>
       </div>
         <div className="absolute top-0 left-0 w-full h-screen overflow-hidden bg-[rgba(0,_0,_0,_0.25)] z-10"></div>    
            <video preload="none" playsInline autoPlay loop muted className=" object-cover w-full h-screen z-[-1]" >
              <source src="/wscene.mp4" type="video/mp4" />
        </video>
     </div>
    
      <div ref={cont} className="text-[#fbfbfb] opacity-0 bottom-0 overflow-hidden text-[9rem] font-sans font-extrabold p-3 z-10 absolute w-full h-[40vh] flex justify-center items-end"><p className="" ref={reveal}>LENNY<span>-</span>CINEMAS</p></div>
      <div ref={end} className="h-[83vh] w-full flex  flex-row items-center gap-6 p-1 bg-[#fbfbfb] ">
        <div className="w-3/4 p-10"><p className=" font-medium text-xl uppercase text-[#0f0f0f0]">A filmhouse dedicated to showing you your favourite TV shows and movies at our branches and on your cellphone. Lenny Cinemas prides itself on bringing quality entertainment to it&apos;s customers.</p></div>
        <div className=" w-1/4 "><h2 className=" font-sans font-extrabold text-3xl text-[#0f0f0f] hover:text-[#bcabae]">LENNY CINEMAS</h2></div>
      </div>
    </div>
  )
}
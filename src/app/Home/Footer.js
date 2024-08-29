'use client';
import Lottie from "lottie-react"
import panda from "../Lottie/panda.json"

export default function Footer() {
  return (
    <div className='h-screen w-full flex flex-col'>
        <div className='w-full h-[78vh] p-10 flex flex-col'>
            <div className="flex-row flex items-center"> 
              <div className="w-2/5">
              <Lottie animationData={panda} className=" h-[70vh]" />
              </div>
              <div className="w-3/5 font-medium text-[12px] uppercase text-[#fbfbfb]">
              <ul className="flex  justify-between flex-wrap gap-10">
                <li className=" cursor-pointer hover:text-[#fbfbfb] hover:bg-[#bcabae] transition border-0 bg-[#0f0f0f] p-3 min-w-20 flex items-center justify-center rounded-3xl ">Explore More</li>
                <li className="cursor-pointer hover:text-[#fbfbfb] hover:bg-[#bcabae] transition border-0 bg-[#0f0f0f] p-3 min-w-20 flex items-center justify-center rounded-3xl ">Add Movies To Watchlist</li>
                <li className="bg-[#0f0f0f] p-3 min-w-20 flex items-center justify-center rounded-3xl cursor-pointer hover:text-[#fbfbfb] hover:bg-[#bcabae] transition border-0">Search For a Movie</li>
                <li className="bg-[#0f0f0f] p-3 min-w-20 flex items-center justify-center rounded-3xl cursor-pointer hover:text-[#fbfbfb] hover:bg-[#bcabae] transition border-0">Contact Us</li>
                <li className="bg-[#0f0f0f] p-2 min-w-20 flex items-center justify-center rounded-3xl cursor-pointer hover:text-[#fbfbfb] hover:bg-[#bcabae] transition border-0">Careers</li>
                <li className="bg-[#0f0f0f] p-3 min-w-20 flex items-center justify-center rounded-3xl cursor-pointer hover:text-[#fbfbfb] hover:bg-[#bcabae] transition border-0">Branches</li>
                <li className="bg-[#0f0f0f] p-3 min-w-20 flex items-center justify-center rounded-3xl cursor-pointer hover:text-[#fbfbfb] hover:bg-[#bcabae] transition border-0">Download the Mobile App</li>
                <li className="bg-[#0f0f0f] p-3 min-w-20 flex items-center justify-center rounded-3xl cursor-pointer hover:text-[#fbfbfb] hover:bg-[#bcabae] transition border-0">Developer Options</li>
              </ul>
              </div>
            </div>
            <div className='text-3xl flex font-sans font-bold tracking-tighter justify-center items-center'><p>This Product uses the TDMB API.</p></div>
        </div>
        <div className='w-full flex justify-center items-end p-1'>
        <h1 className='text-[10em] h-[22vh] font-sans font-bold hover:text-[#a18e92]'>LENNY CINEMAS</h1>
        </div>
    </div>
  )
}

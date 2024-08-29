'use client';
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import newRequest from '../utils/newRequest';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation, EffectFlip } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

export default function TopRated() {
  const [data, setData] = useState();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    newRequest.get(`/top_rated`,{ cancelToken: cancelToken.token}).then((res) => {
      setData(res.data)
      console.clear()
      
    }).catch((err) => {
        if(axios.isCancel(err)){
          console.log("cancelled!")
        }else{
          console.log(err)
        }
    });
    return () => {
      cancelToken.cancel();
    };
  },[setData])
  return (
    <div className="h-screen w-full p-10 flex flex-col justify-start items-start bg-[#fbfbfb] mb-10">
        <div className=" text-[#0f0f0f] flex items-start justify-start uppercase"><h2 className="text-4xl">Top Rated</h2></div>
        <div className="p-5 w-full bg-[#0f0f0f] flex justify-center h-screen rounded-lg">
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[ Navigation, FreeMode, EffectFlip]}
        className="mySwiper  w-full h-[70vh]"
      >
       {data && data.results.map((d, index) => (
        <SwiperSlide className="w-1/4 bg-[#2d2e2e] rounded-md flex flex-col justify-between cursor-grabbing" key={index}>
          <div className="w-full h-[40vh]">
          <Image src={`https://image.tmdb.org/t/p/original${d.backdrop_path}`} alt="" width={500} height={10} className="w-full h-[40vh] rounded-t-md object-cover" />
          </div>
          <div className="w-full h-[20vh] p-2 text-sm tracking-tight flex flex-col gap-2 text-[#fbfbfb] uppercase">
            <h2 className=" flex items-center justify-center underline text-base">{d.original_title}</h2>
            <h2>Release Date: {d.release_date}</h2>
            <h2>Vote Average: {d.vote_average}</h2>
          </div>
          <div className="justify-center items-center flex">
            <button className="text-[#0f0f0f] bg-white uppercase p-3 rounded-md w-[85%]">Add to WatchList</button>
          </div>
        </SwiperSlide>
       ))} 
      </Swiper>
        </div>
    </div>
  )
}

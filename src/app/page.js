"use client";
import { useEffect, useState } from "react";
import Page from "./Home/page";
import Loader from "./Home/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5900)
  }, [])
  if (loading) {
    return <Loader />
}
  return (
   <div className="bg-transparent">
    <Page />
   </div>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import Accept from "./components/Accept";
import Reject from "./components/Reject";

export default function Home() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-screen">
        {count == 0 ? (
          <Accept />
        ) : count == 2 ? (
          <Reject />
        ) : (
          <div className="flex items-center flex-col">
            <div className="flex justify-center items-center">
              <Image
                alt="hello"
                width={200}
                height={200}
                src="/img/curious.svg"
              />

              <div className="text-[#000000] sm:text-lg md:text-2xl">
                <span className="text-red-600 sm:text-4xl capitalize md:text-4xl">
                  i love you ❤️
                </span>
                <br /> Do You Love Me..?
              </div>
            </div>
            <div className="flex w-[300px] items-center justify-between">
              <button
                onClick={() => setCount(0)}
                className=" bg-red-500   py-3 text-white capitalize text-xl rounded-full px-10"
              >
                yes
              </button>
              <button
                onClick={() => setCount(2)}
                className=" bg-[#D0A2F7] py-3 text-white capitalize text-xl rounded-full px-10"
              >
                no
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

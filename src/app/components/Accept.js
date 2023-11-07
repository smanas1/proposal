import Image from "next/image";
import React from "react";

const Accept = () => {
  return (
    <>
      <div className="">
        <Image
          height={200}
          width={200}
          alt="happy"
          src="/img/Honesty-rafiki.svg"
        />
      </div>
      <h1 className="text-3xl capitalize ">let&apos;s plan a date 😊</h1>
    </>
  );
};

export default Accept;

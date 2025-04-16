import Image from "next/image";
import React from "react";

export default function Variety() {
  return (
    <>
      <div className="font-extrabold text-5xl text-center justify-center h-[132px] w-full  font-serif">
        {" "}
        Learning can be fun and <br />
        engaging!
      </div>
      <div className="w-full flex px-20 justify-between">
        <Image
          alt="logo"
          src={"/Girlsittingonfloor.svg"}
          width={602.36}
          height={503}
        />
        <div className="flex  justify-center w-[487px] flex-col gap-7">
          <div className="text-4xl font-serif font-bold text-purple-700">
            Variety of subjects and topics to choose from
          </div>
          <div className="text-xl">
            You can test your knowledge on any topic or subject of your choice.
            choose the difficulty you want and get your score in real-time
          </div>
        </div>
      </div>
    </>
  );
}

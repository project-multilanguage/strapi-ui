import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <section className="relative">
      <div className="relative w-full h-screen flex flex-col justify-center items-center gap-[60px] z-10">
        <div className="w-[619px] text-center text-blue-900 text-[48px] font-extrabold">Pengetahuan Film dalam Genggaman Anda</div>
        <div className="w-[470px] text-center text-black text-[24px] font-extrabold">Temukan segala hal film dari A hingga Z dalam genggaman Anda</div>
        <div className="w-[167px] h-[45px] relative">
          <div className="w-[167px] h-[45px] left-0 top-0 absolute bg-teal-500 rounded-3xl"></div>
          <div className="left-[25px] top-[8px] absolute text-center text-white text-[24px] font-medium">Let’s Start</div>
        </div>
      </div>
      <div className="absolute top-9 left-8 bottom-9 right-8">
        <Image src={"/cloud.svg"} alt={"cloud"} width={300} height={300} />
      </div>
      <div className="absolute top-8 right-20">
        <Image src={"/cloud.svg"} alt={"cloud"} width={300} height={300} />
      </div>
      <div className="absolute right-5 bottom-1/2 ">
        <Image src={"/cloud.svg"} alt={"cloud"} width={300} height={300} />
      </div>
      <div className="absolute right-5 bottom-0 ">
        <Image src={"/ilustrasi.svg"} alt={"cloud"} width={300} height={300} />
      </div>
      <div className="absolute -left-5 bottom-0 ">
        <Image src={"/green-cloud.svg"} alt={"cloud"} width={300} height={300} />
      </div>
    </section>
  );
}

{
}

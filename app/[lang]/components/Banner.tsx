import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Banner({paramsLang}: {paramsLang:string}) {
  return (
    <section className="bg-gradient-to-b from-[#E4F2F7] to-[#E8F3F7] overflow-clip">
      <div className="mx-auto lg:max-w-[1100px]">
        <div className="w-full h-screen flex flex-col justify-center items-center gap-[60px] z-10">
          <div className="flex flex-col gap-[60px] items-center relative z-[2]">
            <h1 className="w-[619px] text-center text-blue-900 text-[48px] font-extrabold">
              Pengetahuan Film dalam Genggaman Anda
            </h1>
            <h2 className="w-[470px] text-center text-black text-2xl font-medium relative z-[2]">
              Temukan segala hal film dari A hingga Z dalam genggaman Anda
            </h2>
            <Link
              href={`/${paramsLang}/films`}
              className="bg-teal-500 block font-medium px-[25px] py-2 rounded-3xl text-white w-max"
            >
              Let&#39;s start
            </Link>

            <div className="absolute -left-[430px] -top-[15px]">
              <Image
                className="-scale-x-[1]"
                src={"/cloud.svg"}
                alt={"cloud"}
                width={409}
                height={85.2}
              />
            </div>
            <div className="absolute -right-[95px] -top-[80px] ">
              <Image
                src={"/cloud.svg"}
                alt={"cloud"}
                width={245.71}
                height={51.24}
              />
            </div>
            <div className="absolute -right-[320px] bottom-[155px] ">
              <Image
                src={"/cloud.svg"}
                alt={"cloud"}
                width={245.71}
                height={59.33}
              />
            </div>
            <div className="absolute -right-[285px] -bottom-[245px] z-[1]">
              <Image
                src={"/ilustrasi.svg"}
                alt={"cloud"}
                width={453.11}
                height={431.69}
              />
            </div>
            <div className="absolute -left-[775px] -bottom-[310px]">
              <Image
                src={"/green-cloud.svg"}
                alt={"cloud"}
                width={774}
                height={344.19}
              />
            </div>
            <div className="absolute -right-[1034px] -bottom-[285px]">
              <Image
                src={"/green-cloud.svg"}
                alt={"cloud"}
                width={886}
                height={394}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

{
}

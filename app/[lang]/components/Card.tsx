import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Card {
  title: string;
  text: string;
  href: string;
  paramsLang: string;
}

function Card({ title, text, href, paramsLang }: Card) {
  return (
    <div className="border border-[rgba(255, 255, 255, 0.5)] p-4 rounded-lg">
      <h5 className="font-medium mb-2 text-xl">{title}</h5>
      <p className="mb-2 line-clamp-3">{text}</p>
      <Link href={`/${paramsLang}${href}`}>{paramsLang == "en" ? "Visit" : paramsLang == "id"? "Lihat" : "装载更多"}</Link>
    </div>
  );
}

export default Card;

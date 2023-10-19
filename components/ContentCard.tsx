import Image from "next/image";
import { title } from "process";
import React from "react";

interface Card {
  title: string;
  body: string;
  footerTitle?: string;
}

function Card({ title, body, footerTitle }: Card) {
  return (
    <div className="bg-slate-100 shadow-md rounded-md w-11/12 m-auto my-4 p-4">
      <div className="font-bold text-2xl border-b-2">{title}</div>
      <div>
        <p className="leading-relaxed">{body}</p>
      </div>
      <footer className="p-2">{footerTitle}</footer>
    </div>
  );
}

export default Card;

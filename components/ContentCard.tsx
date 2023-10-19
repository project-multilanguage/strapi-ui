import Image from "next/image";
import React from "react";

function Card({ children }: any) {
  return <div className="bg-slate-100 shadow-md rounded-md w-11/12 m-auto my-4 p-4">{children}</div>;
}

function Tittle({ children }: any) {
  return <div className="font-bold text-2xl border-b-2">{children}</div>;
}

function Body({ text }: any) {
  return (
    <div>
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}

function Footer({ children }: any) {
  return <div className="p-2">{children}</div>;
}

Card.Tittle = Tittle;
Card.Body = Body;
Card.Footer = Footer;

export default Card;

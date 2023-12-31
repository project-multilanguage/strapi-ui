import React from "react";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <nav className="bg-[#E4F2F7] top-0 sticky z-[9999]">
      <div className="px-16 flex justify-between py-3 items-center">
        <h1 className="text-xl font-bold">DarkPedia</h1>
        <ol className="text-xl flex gap-7 font-semibold">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/films">Films</a>
          </li>
          <li>
            <Dropdown />
          </li>
        </ol>
      </div>
    </nav>
  );
}

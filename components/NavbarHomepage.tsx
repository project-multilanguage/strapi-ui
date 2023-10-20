import React from "react";

export default function NavbarHomepage() {
  return (
    <nav className="">
      <div className="px-16 flex justify-between py-3 items-center">
        <h1 className="text-xl font-bold">DarkPedia</h1>
        <ol className="text-xl flex gap-6 font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Films</li>
        </ol>
      </div>
    </nav>
  );
}

import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full bg-white flex justify-between p-5 items-center shadow-lg">
      <div>
        <p className="font-bold text-3xl">DarkPedia</p>
      </div>
      <div className="w-2/4 flex">
        <input type="text" placeholder="Search..." className="w-full rounded-sm p-2 border border-black" />
        <button className="border border-black p-2">Cari</button>
      </div>
      <div>
        <select name="lang" id="" className="p-2 rounded-lg">
          <option value="English">English</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>
    </nav>
  );
}

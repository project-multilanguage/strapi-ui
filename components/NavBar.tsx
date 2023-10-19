import React from "react";

export default function NavBar() {
  return (
    <div className="w-full bg-slate-500 flex justify-between p-5 items-center shadow-lg">
      <div>
        <p className="text-white font-bold text-3xl">DarkPedia</p>
      </div>
      <div className="w-2/4 flex">
        <input type="text" placeholder="Search..." className="w-full rounded-sm p-2" />
        <button className="border border-white p-2 text-white">Cari</button>
      </div>
      <div>
        <select name="lang" id="" className="p-2 rounded-lg">
          <option value="English">English</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {Dropdown} from "./Dropdown";

interface link {
  label: string
  href: string
}

export function Navbar({paramsLang, navigations}: {paramsLang:string, navigations: link[]}) {
  const pathname = usePathname()
  const changeLanguage = [
    {
      label: "English",
      path: "/en",
    },
    {
      label: "Indonesia",
      path: "/id",
    },
    {
      label: "Chinese",
      path: "/zh",
    },
  ];
  

  return (
    <nav className={`bg-[#E4F2F7] top-0 ${pathname === '/'+paramsLang? "fixed w-full" : "sticky"} z-[9999]`}>
      <div className="px-16 flex justify-between py-3 items-center">
        <h1 className="text-xl font-bold">DarkPedia</h1>
        <ul className="text-xl flex gap-7 font-semibold items-center">
          {navigations.map((navigation) => (
            <li key={navigation.label}>
              <Link href={navigation.href}>{navigation.label}</Link>
            </li>
          ))}
          <li>
            <Dropdown links={changeLanguage} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

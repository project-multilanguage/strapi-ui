"use client";
import { useState } from "react";

interface LinkDropdown {
  label: string;
  path: string;
}

export function Dropdown({ links }: { links: LinkDropdown[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  document.body.addEventListener("click", () => {
    setIsOpen(false);
  });

  return (
    <div className="w-full">
      <div className="relative inline-block">
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-700  hover:bg-blue-800 font-medium rounded-lg text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          Language
          <svg
            className="w-2.5 ml-2.5 mt-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      closeDropdown();
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

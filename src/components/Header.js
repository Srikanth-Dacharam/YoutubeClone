import React from "react";
import { Link } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";

export default function Header() {
  return (
    <div className="header flex justify-between bg-blue-200 w-full h-12 px-2 py-2 mx-2">
      <div className="flex gap-10">
        <img
          src="data:image/png;base64,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"
          alt="youtube image"
          className="h-15 w-25"
        />
        <div>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex">
          <input
            type="search"
            placeholder="search"
            className="search-input w-full px-4 py-2 mx-2 border  rounded-lg"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-5">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
          </button>
          <img
            src="data:image/jpeg;base64,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"
            alt="img"
            className="image h-50 rounded-100"
          />
        </div>
      </div>
    </div>
  );
}

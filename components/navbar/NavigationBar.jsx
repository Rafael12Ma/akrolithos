"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const path = usePathname();
  console.log(path);
  return (
    <>
      <nav className="flex gap-5 justify-evenly items-center m-10 bg-emerald-500 p-2 font-bold rounded-2xl text-black font-sans text-2xl">
        <Link
          href="/"
          className={`hover:text-red-500 ${path === "/" && "text-red-500"}`}
        >
          Home
        </Link>
        {path === "/create" ? undefined : (
          <Link
            href="/create"
            className="bg-black text-white p-1 hover:opacity-60 rounded-xl cursor-pointer "
          >
            Create
          </Link>
        )}
      </nav>
    </>
  );
}

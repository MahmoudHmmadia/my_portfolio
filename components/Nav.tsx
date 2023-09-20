/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useTheme } from "next-themes";
import Menu from "./Menu";
import { useState } from "react";
import MenuButton from "./MenuButton";
export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [toggleMenu, setToggleMenu] = useState(false);
  function toggleTheme() {
    //@ts-ignore
    if (theme == "light") setTheme("dark");
    else setTheme("light");
  }
  return (
    <>
      <Menu
        setToggle={setToggleMenu}
        toggle={toggleMenu}
        theme={theme === "light" ? true : false}
      />
      <nav className="py-10 z-40">
        <Container>
          <div className="flex justify-between items-center">
            <Link
              href={"/"}
              className="text-4xl font-bold flex items-center sm:gap-3 gap-1 relative"
              onClick={() => setToggleMenu(false)}
            >
              <img alt="LOGO" src={logo.src} width={50} />
              <div
                className={`bg-[#2f455c] dark:bg-slate-400 h-[45px] w-[3px] transition delay-75 duration-300`}
              >
                <span className="opacity-0">a</span>
              </div>
              <p
                className={`cool-title uppercase font-extrabold sm:text-sm text-xs tracking-tighter transition delay-75 duration-300 text-[#2f455c] dark:text-gray-400
              `}
              >
                Dev Mahmoud
              </p>
            </Link>
            <ul className="flex-1 flex items-center sm:gap-10 gap-5 justify-end">
              <li
                className={`rounded-full border-[3px] border-solid flex w-7 cursor-pointer aspect-square relative overflow-hidden border-[#2f455c] bg-[#2f455c] dark:border-gray-400 dark:bg-gray-400
              `}
                onClick={toggleTheme}
              >
                <div
                  className={`w-1/2 aspect-square transition bg-[#2f455c] dark:bg-gray-400`}
                ></div>
                <div
                  className={`w-1/2 aspect-square transition bg-slate-100 dark:bg-[#1f2c3a]
                `}
                ></div>
              </li>
              <MenuButton toggle={setToggleMenu} isToggled={toggleMenu} />
            </ul>
          </div>
        </Container>
      </nav>
    </>
  );
}

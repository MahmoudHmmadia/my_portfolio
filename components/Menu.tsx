import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import MenuButton from "./MenuButton";
type props = {
  toggle: boolean;
  theme: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};
function Menu({ toggle, setToggle, theme }: props) {
  return (
    <div
      className={`fixed w-full h-full transition-all duration-300 z-40 left-0 flex items-center justify-center ${
        toggle ? "top-0" : "-top-[100%]"
      }`}
    >
      <div
        className={`absolute w-[130%] h-[200%] transition-all duration-500 -z-1 rounded-b-full bg-white dark:bg-gradient_dark left-1/2 -translate-x-1/2 dark:shadow-black shadow-gray-400 shadow-2xl  ${
          toggle ? "top-0" : "-top-[150%]"
        }`}
      ></div>
      <div className="relative flex items-center justify-center gap-3 flex-col w-1/2">
        <Link
          href={"/"}
          className={`uppercase font-bold text-3xl p-4 tracking-widest menu_link light relative w-full text-center flex justify-center ${
            theme ? "light" : "dark"
          }`}
          onClick={() => setToggle(false)}
        >
          <div className="shape"></div>
          <span className="z-10 relative word">Home</span>
        </Link>
        <Link
          href={"/about"}
          className={`uppercase font-bold text-3xl p-4 tracking-widest menu_link light relative w-full text-center flex justify-center ${
            theme ? "light" : "dark"
          }`}
          onClick={() => setToggle(false)}
        >
          <div className="shape"></div>
          <span className="z-10 relative word">about</span>
        </Link>
        <Link
          href={"/contact"}
          className={`uppercase font-bold text-3xl p-4 tracking-widest menu_link light relative w-full text-center flex justify-center ${
            theme ? "light" : "dark"
          }`}
          onClick={() => setToggle(false)}
        >
          <div className="shape"></div>
          <span className="z-10 relative word">contact</span>
        </Link>
        <Link
          href={"/works"}
          className={`uppercase font-bold text-3xl p-4 tracking-widest menu_link light relative w-full text-center flex justify-center ${
            theme ? "light" : "dark"
          }`}
          onClick={() => setToggle(false)}
        >
          <div className="shape"></div>
          <span className="z-10 relative word">works</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;

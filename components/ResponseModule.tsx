import {
  IoCheckmark,
  IoCheckmarkCircle,
  IoCheckmarkDoneCircle,
  IoWarning,
} from "react-icons/io5";
import Button from "./Button";
import { FaCheck } from "react-icons/fa";
import React, { SetStateAction } from "react";

export default function ResponseModule({
  state,
  content,
  setResponse,
}: {
  state: string;
  content: string;
  setResponse: React.Dispatch<
    SetStateAction<undefined | { content: string; type: string }>
  >;
}) {
  return (
    <>
      <div className="overlay w-full h-full fixed left-0 top-0 bg-black opacity-80 z-40"></div>
      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-7/12 w-10/12 p-2 rounded-md dark:bg-alt_dark bg-white shadow-2xl flex flex-col gap-4 items-center">
        <div
          className={`icon flex text-8xl ${
            state == "bad" ? "text-rose-700" : "text-main"
          }`}
        >
          {state === "bad" ? <IoWarning /> : <IoCheckmarkDoneCircle />}
        </div>
        <p className="text-xl uppercase tracking-widest text-center">
          {content}
        </p>
        <Button
          Icon={FaCheck}
          content={`${state === "bad" ? "try again letter" : "ok"}`}
          bg={`${state === "bad" ? "bg-rose-700" : "bg-gradient_sky"}`}
          fn={() => setResponse(undefined)}
        />
      </div>
    </>
  );
}

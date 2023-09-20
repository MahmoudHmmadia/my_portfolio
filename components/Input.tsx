import { RefObject, useEffect, useState } from "react";

type props = {
  id: string;
  type?: string;
  label: string;
  inputRef?: RefObject<HTMLInputElement>;
  textareaRef?: RefObject<HTMLTextAreaElement>;
};
function Input({ id, label, inputRef, type = "text", textareaRef }: props) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div
      className={`input_container relative w-full flex rounded-md border-[2px] ${
        isFocus ? "border-main " : "dark:border-gray-200 border-alt_dark"
      }`}
    >
      {type === "textarea" ? (
        <>
          <label
            htmlFor={id}
            className={`absolute text-xs z-10 uppercase transition-all w-fit -translate-y-1/2 font-bold ${
              isFocus
                ? "top-0 left-4 text-main "
                : "top-[25.5px] left-6 text-inherit"
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[120%] dark:bg-[#131c24] bg-[#f4f4f4] h-1 -z-10"></div>
            {label}
          </label>
          <textarea
            id={id}
            className="outline-none p-3 relative h-full rounded-md bg-transparent resize-none w-full min-h-[100px]"
            onFocus={() => setIsFocus(true)}
            onBlur={() => {
              if (textareaRef?.current?.value) setIsFocus(true);
              else setIsFocus(false);
            }}
            autoComplete="off"
            ref={textareaRef}
            onChange={() =>
              textareaRef?.current?.value === "" && setIsFocus(false)
            }
          />
        </>
      ) : (
        <>
          <label
            htmlFor={id}
            className={`absolute text-xs z-10 uppercase transition-all w-fit -translate-y-1/2 font-bold ${
              isFocus
                ? "top-0 left-4 text-main "
                : "top-1/2 left-6 text-inherit"
            }`}
          >
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[120%] dark:bg-[#131c24] bg-[#f4f4f4] h-1 -z-10"></div>
            {label}
          </label>
          <input
            type={type}
            id={id}
            className="outline-none p-3 relative rounded-md bg-transparent w-full h-full"
            onFocus={() => setIsFocus(true)}
            onBlur={() => {
              if (inputRef?.current?.value) setIsFocus(true);
              else setIsFocus(false);
            }}
            autoComplete="off"
            ref={inputRef}
            onChange={() =>
              inputRef?.current?.value === "" && setIsFocus(false)
            }
          />
        </>
      )}
    </div>
  );
}

export default Input;

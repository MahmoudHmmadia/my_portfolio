import { Dispatch, SetStateAction } from "react";

function MenuButton({
  toggle,
  isToggled,
}: {
  toggle: Dispatch<SetStateAction<boolean>>;
  isToggled: boolean;
}) {
  return (
    <li
      className={`w-8 h-8 flex gap-1 flex-wrap cursor-pointer menu relative z-50 ${
        isToggled ? "toggled" : ""
      }`}
      onClick={() => toggle((prev) => !prev)}
    >
      <div
        className={`w-[8px] aspect-square border-[#2f455c] dark:border-gray-400 border-[3px] border-solid rounded-full`}
      ></div>
      <div
        className={`w-[8px] transition-all  aspect-square border-[#2f455c] dark:border-gray-400 border-[3px] border-solid rounded-full`}
      ></div>
      <div
        className={`w-[8px] aspect-square border-[#2f455c] dark:border-gray-400 border-[3px] border-solid rounded-full`}
      ></div>
      <div
        className={`w-[8px] transition-all aspect-square border-[#2f455c] dark:border-gray-400 border-[3px] border-solid rounded-full`}
      ></div>
      <div
        className={`w-[8px] transition-all aspect-square border-[#2f455c] dark:border-gray-400 border-[3px] border-solid rounded-full`}
      ></div>
      <div
        className={`w-[8px] transition-all aspect-square border-[#2f455c] dark:border-gray-400 border-[3px] border-solid rounded-full`}
      ></div>
      <div
        className={`w-[8px] transition-all aspect-square border-[#2f455c] dark:border-gray-400 border-[3px] border-solid rounded-full`}
      ></div>
      <div
        className={`w-[8px] transition-all aspect-square border-[#2f455c] dark:border-gray-400 border-[3px] border-solid rounded-full`}
      ></div>
      <div
        className={`w-[8px] transition-all aspect-square border-[#2f455c] dark:border-gray-400 border-[3px] border-solid rounded-full`}
      ></div>
    </li>
  );
}
export default MenuButton;

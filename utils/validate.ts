import { RefObject } from "react";

export function messageValidate(
  name: RefObject<HTMLInputElement>,
  message: RefObject<HTMLTextAreaElement>
) {
  if (!name.current?.value) {
    return "Name";
  } else if (!message.current?.value) {
    return "message";
  } else {
    return 1;
  }
}
export function reset(
  name: RefObject<HTMLInputElement>,
  message: RefObject<HTMLTextAreaElement>
) {
  message.current?.classList.remove("error");
  name.current?.classList.remove("error");
  name.current!.value = "";
  message.current!.value = "";
  name.current?.blur();
  message.current?.blur();
}

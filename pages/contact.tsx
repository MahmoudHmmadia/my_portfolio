/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import { TbSend } from "react-icons/tb";
import { contact } from "../data/data";
import PageTransition from "@/components/PageTransition";
import PageTitle from "@/components/PageTitle";
import { sendMessage } from "@/utils/contact";
import { useMutation } from "@tanstack/react-query";
import Loader from "@/components/Loader";
import ResponseModule from "@/components/ResponseModule";
import { messageValidate, reset } from "@/utils/validate";
function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const mutation = useMutation({
    mutationFn: sendMessage,
  });
  const [res, setRes] = useState<
    undefined | { content: string; type: string }
  >();
  const [err, setErr] = useState<undefined | string>(undefined);
  function sendData() {
    if (messageValidate(nameRef, messageRef) === 1) {
      setErr(undefined);
      mutation.mutate({
        name: nameRef.current?.value,
        message: messageRef.current?.value,
      });
      reset(nameRef, messageRef);
    } else if (messageValidate(nameRef, messageRef) == "Name") {
      nameRef.current?.focus();
      nameRef.current?.classList.add("error");
      setErr("Name Is Required");
    } else {
      nameRef.current?.classList.remove("error");
      messageRef.current?.focus();
      messageRef.current?.classList.add("error");
      setErr("Message Is Required");
    }
  }
  useEffect(() => {
    if (mutation.data) {
      setRes(mutation.data);
    } else {
      setRes(mutation.error as typeof res);
    }
  }, [mutation.data, mutation.error]);

  return (
    <PageTransition>
      <header>
        <title>MAHMOUD | CONTACT</title>
      </header>
      {mutation.isLoading && <Loader />}
      {res && (
        <ResponseModule
          content={res.content}
          state={res.type}
          setResponse={setRes}
        />
      )}
      <Container>
        <main className="flex flex-col gap-8">
          <PageTitle content="contact me" />
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="p-9 flex flex-col gap-5 justify-center bg-cool_gradient transition-[color] delay-75 duration-300 text-white dark:text-dark lg:z-0 z-10 order-1 w-full lg:w-fit">
              <h1 className="sm:text-4xl uppercase text-2xl text-center tracking-wider font-extrabold">
                PERSONAL INFO
              </h1>
              <div className="flex-1 flex flex-col gap-5">
                {contact.map((item) => (
                  <div
                    key={item.address}
                    className="text-3xl  flex gap-2 items-center"
                  >
                    <span className="flex">
                      <item.icon />
                    </span>
                    <span
                      style={{
                        color: item.color,
                      }}
                    >
                      |
                    </span>
                    <span className="text-sm font-bold ">{item.address}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center p-9 self-stretch shadow-gray-400 dark:shadow-black shadow-lg bg-opacity-30 drop-shadow-lg backdrop-blur-[160px] md:min-w-[500px] sm:w-auto">
              <h1 className="sm:text-4xl uppercase text-2xl normal-gradient-text z-10 font-extrabold tracking-wider">
                SEND ME A MESSAGE
              </h1>
              {err && <p className="text-sm text-rose-700">{err}</p>}
              <div className="flex md:flex-row items-center flex-col gap-4 w-full">
                <Input id="name" label="your name" inputRef={nameRef} />
              </div>
              <Input
                id="message"
                textareaRef={messageRef}
                label="your message"
                type="textarea"
              />
              <Button
                Icon={TbSend}
                content="send"
                fn={sendData}
                disabled={res ? true : false}
              />
            </div>
          </div>
        </main>
      </Container>
    </PageTransition>
  );
}

export default Contact;

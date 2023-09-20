/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import { motion as m } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import { TbMessage2 } from "react-icons/tb";
import { TbBook2 } from "react-icons/tb";
import devIcon from "@/public/devIcon.png";
import Image from "next/image";
import { social } from "../data/data";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <header>
        <title>MAHMOUD</title>
      </header>
      <main
        className={`flex-1 w-full transition-[color] delay-75 duration-300 IndexPage`}
      >
        <Container>
          <div className="flex justify-center items-center flex-col gap-4 text-center">
            <m.span
              className={`cool-text uppercase sm:text-5xl text-4xl`}
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                stiffness: 100,
                type: "spring",
                delay: 0.6,
              }}
            >
              HEY I'M
            </m.span>
            <m.h1
              className={`gradient-text dark:text-alt_dark sm:text-5xl text-4xl uppercase font-extrabold`}
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                stiffness: 100,
                type: "spring",
                delay: 0.5,
              }}
            >
              Mahmoud Hmmadia
            </m.h1>
            <div className="flex items-center gap-2 flex-col">
              <m.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  stiffness: 100,
                  type: "spring",
                  delay: 0.4,
                }}
              >
                <img alt="dev" src={devIcon.src} />
              </m.span>
              <m.span
                className={`sm:text-3xl text-2xl tracking-tighter cool-title font-bold uppercase text-alt_dark dark:text-white`}
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  stiffness: 100,
                  type: "spring",
                  delay: 0.3,
                }}
              >
                a full stack Web Developer
              </m.span>
            </div>
            <m.p
              className="uppercase tracking-wide max-w-[500px]"
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                stiffness: 100,
                type: "spring",
                delay: 0.2,
              }}
            >
              i'm turning ideas into real life products and web applications
            </m.p>
            <m.div
              className="flex flex-col gap-4 lg:w-1/2 md:w-10/12 w-full"
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                stiffness: 100,
                type: "spring",
                delay: 0.1,
              }}
            >
              <div className="w-full h-[2px] dark:bg-gray-400 bg-dark relative">
                <span className="opacity-0">a</span>
                <span className="absolute left-1/2 px-4 z-10 top-1/2 -translate-x-1/2 tracking-wider uppercase text-xs w-max rounded-full -translate-y-1/2 bg-[#efefef] dark:bg-[#17212b] font-bold">
                  Let's Get In Touch In Social
                </span>
              </div>
              <div className="flex items-center gap-3 flex-wrap justify-center">
                {social.map((social, index) => (
                  <Link
                    className="md:text-4xl text-3xl text-alt_dark dark:text-gray-400"
                    key={index}
                    href={social.address}
                    target="_blank"
                  >
                    <social.icon />
                  </Link>
                ))}
              </div>
            </m.div>
            <m.div
              className="flex flex-wrap w-full sm:flex-nowrap items-center justify-center gap-4 mt-4 max-w-[450px] content-center"
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                stiffness: 100,
                type: "spring",
                delay: 0.1,
              }}
            >
              <Button Icon={TbBook2} content="More About Me" href="/about" />
              <Button Icon={TbMessage2} content="Get In Touch" href="contact" />
            </m.div>
          </div>
        </Container>
      </main>
    </PageTransition>
  );
}

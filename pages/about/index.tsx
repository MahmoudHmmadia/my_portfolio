/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import me from "@/public/5.png";
import { aboutIcons, tools } from "../../data/data";
import Button from "../../components/Button";
import PageTransition from "@/components/PageTransition";
import PageTitle from "@/components/PageTitle";
import ImageRenderer from "@/components/CoolImage";
function About() {
  const [age, setAge] = useState(25);
  useEffect(() => {
    setAge(new Date().getFullYear() - 1998);
  }, []);
  return (
    <PageTransition>
      <header>
        <title>MAHMOUD | ABOUT</title>
      </header>
      <Container>
        <main className="flex flex-col gap-8 items-center">
          <PageTitle content="about me" />
          <div className="flex flex-col md:flex-row items-center gap-12 justify-center ">
            <div className="profile md:w-[300px] w-[250px] aspect-square relative  rounded-full">
              <ImageRenderer url={me} profile />
              <div className="absolute w-[150%] opacity-10 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[200%] opacity-30 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[250%] opacity-10 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[300%] opacity-30 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[350%] opacity-10 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[400%] opacity-30 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[450%] opacity-10 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[500%] opacity-30 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[550%] opacity-10 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[600%] opacity-30 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[650%] opacity-10 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[700%] opacity-30 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[750%] opacity-10 -z-1 aspect-square rounded-full border-[1px] border-solid border-dark dark:border-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="flex flex-col gap-1 relative">
              <div className="gap-8 sm:text-2xl text-lg tracking-wider uppercase text-dark dark:text-gray-200 flex flex-col items-center md:items-start">
                <p className="text-center flex gap-1 items-center flex-wrap justify-center md:justify-start transition-[color] delay-75 duration-300">
                  I'm
                  <span className="cool-text md:text-6xl text-5xl relative">
                    <span className="relative z-10">{age}</span>
                    <span className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 flex text-8xl opacity-40 dark:text-alt text-main">
                      <aboutIcons.calender />
                    </span>
                  </span>
                  years old
                </p>
                <p className="text-center flex items-center gap-1 flex-wrap justify-center md:justify-start transition-[color] delay-75 duration-300">
                  electronic and communication
                  <span className="text-alt cool-title font-bold md:text-5xl text-2xl relative">
                    <span className="absolute md:-right-9 -right-6  text-dark dark:text-white">
                      <aboutIcons.engineer />
                    </span>
                    <span className="relative z-10">engineer</span>
                  </span>
                </p>
                <p className="text-center flex gap-1 items-center flex-wrap justify-center md:justify-start transition-[color] delay-75 duration-300">
                  and
                  <span className="font-extrabold text-main text-2xl md:text-5xl relative">
                    <span className="absolute md:-top-7 -top-4 left-0 text-dark dark:text-white">
                      <aboutIcons.code />
                    </span>
                    <span className="relative z-10">programming</span>
                  </span>
                  is my sweet love
                </p>
                <div className="tools flex lg:flex-row flex-col gap-2 items-center text-base md:text-xl">
                  <p className=" ">The Tools I work with</p>
                  <div className="lg:w-[2px] w-full lg:h-[100%] h-[2px] dark:bg-gray-400 bg-dark">
                    <span className="opacity-0">a</span>
                  </div>
                  <div className="flex gap-2 items-center justify-center flex-wrap">
                    {tools.map((Tool, id) => (
                      <div
                        className="md:text-4xl text-3xl text-dark dark:text-gray-200"
                        key={id}
                      >
                        <Tool />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="z-10 flex justify-center w-full items-center gap-4 flex-wrap sm:flex-nowrap">
                  <a
                    href="/mahmoudHmmadia_cv.pdf"
                    download={"mahmoudHmmadia_cv.pdf"}
                    className="p-3 font-bold transition relative z-10 delay-75 w-full duration-300 flex items-center rounded-lg justify-center gap-3 uppercase text-xs md:text-sm tracking-wide text-white dark:text-dark hover:-translate-y-1 bg-cool_gradient"
                  >
                    <span>Download CV</span>
                    <div className="h-full w-[1px] dark:bg-dark bg-white transition duration-300 delay-70">
                      <span className="opacity-0">a</span>
                    </div>
                    <span className={`flex`}>
                      <aboutIcons.download />
                    </span>
                  </a>
                  <Button
                    Icon={aboutIcons.more}
                    content="See More"
                    href="/about/info"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </PageTransition>
  );
}

export default About;

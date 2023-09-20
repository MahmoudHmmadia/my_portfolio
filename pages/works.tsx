"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import PageTransition from "@/components/PageTransition";
import WorkModule from "@/components/WorkModule";
import { myWorks } from "@/data/data";
import React, { useState } from "react";
import { TbArrowRight } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
function Works() {
  const [isShowenWork, setIsShowenWork] = useState<undefined | string>(
    undefined
  );
  return (
    <PageTransition>
      <header>
        <title>MAHMOUD | WORKS</title>
      </header>
      <Container>
        <main className="flex flex-col gap-8">
          <PageTitle content="my works" />
          {isShowenWork ? (
            <WorkModule
              data={myWorks.filter((e) => e.id === isShowenWork)[0]}
              back={setIsShowenWork}
            />
          ) : (
            <Swiper
              effect={"slide"}
              grabCursor={true}
              slidesPerView={"auto"}
              pagination={true}
              className="mySwiper"
            >
              {myWorks.map((e) => (
                <SwiperSlide
                  key={e.info}
                  className="my-swiper-slide bg-white dark:bg-alt_dark rounded-3xl border-gray-300 dark:border-cyan-900 border-2 overflow-hidden relative"
                >
                  <div
                    className={`absolute top-0 left-4 w-10 sm:h-40 h-28 flex items-center justify-center text-sm font-extrabold text-white dark:text-dark ${
                      e.done ? "bg-main" : "bg-gray-500 dark:bg-gray-200"
                    }`}
                    style={{
                      writingMode: "vertical-lr",
                    }}
                  >
                    <div
                      className={`absolute left-1/2 -bottom-1 -translate-x-1/2 border-b-white dark:border-b-alt_dark border-[20px] w-full ${
                        e.done
                          ? "border-main"
                          : "border-gray-500 dark:border-gray-200"
                      }`}
                    ></div>
                    {e.done ? "DONE" : "IN PROGRESS"}
                  </div>
                  <div className="flex sm:text-9xl text-7xl text-main relative z-10">
                    <e.icon />
                  </div>
                  <h1 className="sm:text-4xl text-2xl text-center uppercase relative z-10 normal-gradient-text pt-4">
                    {e.title}
                  </h1>
                  <p
                    className="uppercase text-center sm:text-sm text-xs relative z-10 flex-1"
                    style={{
                      textShadow: "0 0 2px",
                    }}
                  >
                    {e.mainTitle}
                  </p>
                  <Button
                    Icon={TbArrowRight}
                    content="Reed The Article"
                    fn={() => setIsShowenWork(e.id)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </main>
      </Container>
    </PageTransition>
  );
}

export default Works;

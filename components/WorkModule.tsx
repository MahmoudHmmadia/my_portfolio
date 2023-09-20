import { StaticImageData } from "next/image";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import ImageRenderer from "./CoolImage";
import { work } from "@/data/data";
import Button from "./Button";
import { TbArrowBack, TbBrowser, TbPalette } from "react-icons/tb";

function WorkModule({
  data,
  back,
}: {
  data: work;
  back: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const [showModule, SetShowModule] = useState<undefined | StaticImageData>();
  return (
    <>
      {showModule && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-90 z-40"></div>
          <div
            className="fixed top-10 md:right-10 hover:scale-90 right-1 z-50 md:text-4xl text-2xl cursor-pointer text-rose-700"
            onClick={() => SetShowModule(undefined)}
          >
            <IoCloseCircle />
          </div>
          <div className="fixed top-4 left-1/2 w-10/12 md:w-auto -translate-x-1/2 z-40 h-screen overflow-y-scroll">
            <ImageRenderer url={showModule} />
          </div>
        </>
      )}
      <>
        <div className="flex gap-4 flex-wrap">
          <ul className="flex flex-col gap-4 lg:w-[55%] w-full">
            <h1 className="text-3xl uppercase dark:text-white text-dark font-bold">
              {data.mainTitle}
            </h1>
            <div className="flex items-center gap-2">
              <div className="icon flex text-4xl">
                <data.icon />
              </div>
              <p className="text-main uppercase font-bold text-sm">
                {data.details}
              </p>
              <div className="icon flex text-4xl">
                <data.icon />
              </div>
            </div>
            <p className="text-sm tracking-widest uppercase">{data.info}</p>
            <div className="flex flex-wrap items-center gap-4">
              {data.tools.map((Tool, index) => (
                <div
                  className="md:text-4xl text-3xl text-alt_dark dark:text-gray-400"
                  key={index}
                >
                  <Tool />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {!data.pageLink && !data.pageLinkI && (
                <h1 className="tracking-wider uppercase text-gray-500">
                  There is no Links Yet
                </h1>
              )}
              {data.pageLink && (
                <Button
                  Icon={TbBrowser}
                  href={data.pageLink}
                  content={`view ${data.clientName} in free hosting`}
                  bg="bg-alt"
                  target="blank"
                />
              )}
              {data.pageLinkI && (
                <Button
                  Icon={TbBrowser}
                  href={data.pageLinkI}
                  content={`view ${data.clientNameI} in free hosting`}
                  bg="bg-main"
                  target="blank"
                />
              )}
              <Button
                Icon={TbPalette}
                content={`view ${data.clientName} Design`}
                bg="bg-alt_dark dark:bg-gradient_sunny"
                fn={() => SetShowModule(data.clientFull)}
              />
              <Button
                Icon={TbArrowBack}
                content={`go back`}
                bg="bg-rose-400"
                fn={() => back(undefined)}
              />
            </div>
          </ul>
          <div className="flex flex-col gap-4 flex-1">
            {data.images.map((e) => (
              <div
                key={e.name}
                className="shadow-2xl rounded-3xl overflow-hidden relative work"
              >
                <div className="absolute left-0 top-0 w-full h-full bg-alt_dark opacity-60 z-10"></div>
                <div
                  className="absolute work_image-pattern left-8 h-full flex flex-col justify-center items-center p-4 z-10 bg-gradient_sky text-white uppercase font-extrabold sm:text-sm text-xs"
                  style={{
                    writingMode: "vertical-lr",
                  }}
                >
                  {e.name}
                </div>
                <ImageRenderer url={e.src} />
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
}
export default WorkModule;

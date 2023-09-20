/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from "react";
import classnames from "classnames";
import { useIntersection } from "@/utils/useIntersection";
import Image, { StaticImageData } from "next/image";

const ImageRenderer = ({
  url,
  thumb,
  width,
  height,
}: {
  url: StaticImageData;
  thumb?: string;
  width?: number | string;
  height?: number | string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };
  return (
    <div
      className="w-full bg-transparent overflow-hidden relative"
      ref={imgRef}
    >
      {isInView && (
        <>
          {/* ==> small version of image <== */}
          {/* <img
            className={classnames("cool_image", "thumb", "circle", {
              ["isLoaded"]: !!isLoaded,
            })}
            src={thumb}
            loading="lazy"
            style={{
              filter: "blur(8px)",
            }}
          /> */}
          {/* ==> custom loader <== */}
          <div
            className={classnames(
              "cool_image w-full h-full opacity-0",
              "thumb",
              "",
              {
                ["isLoaded"]: !!isLoaded,
              }
            )}
          >
            <div className="loaderr relative rounded-full w-[40px] aspect-square bg-cool_gradient flex justify-center items-center m-auto top-52">
              <span className="absolute w-full h-full rounded-full bg-cool_gradient"></span>
              <span className="absolute w-full h-full rounded-full bg-cool_gradient"></span>
              <span className="absolute w-full h-full rounded-full bg-cool_gradient"></span>
              <span className="absolute w-full h-full rounded-full bg-cool_gradient"></span>
            </div>
          </div>
          <img
            alt="Alt"
            className={classnames(`cool_image w-full`, {
              ["isLoaded"]: !!isLoaded,
            })}
            src={url.src}
            loading="lazy"
            onLoad={handleOnLoad}
            style={{
              height: height,
              width: width,
            }}
          />
        </>
      )}
    </div>
  );
};

export default ImageRenderer;

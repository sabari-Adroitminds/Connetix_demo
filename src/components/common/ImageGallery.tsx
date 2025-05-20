"use client";
import { FC, useState, useEffect, useRef } from "react";
import clsx from "clsx";
import Image from "next/image";
import IconGalleryButton from "../icons/IconControlButton";
import IconHeart from "../icons/IconHeart";
import IconMagnifier from "../icons/IconMagnifier";
// import dynamic from "next/dynamic";
import "react-inner-image-zoom/lib/styles.min.css";

import InnerImageZoom from "react-inner-image-zoom";

interface ImageGalleryProps {
  images: string[];
  id: string;
  focusColor?: string;
}

const ImageGallery: FC<ImageGalleryProps> = ({
  images,
  id,
  focusColor = "var(--primary, #a855f7)",
}) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [mounted, setMounted] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const triggerZoom = () => {
    if (imageContainerRef.current) {
      const imgElement = imageContainerRef.current.querySelector("img");
      if (imgElement) {
        imgElement.click();
        // imgElement?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        setIsZoomed(!isZoomed);
      }
    }
  };

  // const triggerZoom = () => {
  //   const imgElement = imageContainerRef.current?.querySelector("img");

  //   if (imgElement && imgElement.complete) {
  //     // Image has loaded, safe to dispatch
  //     imgElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  //   } else {
  //     // Retry when the image loads
  //     imgElement?.addEventListener("load", () => {
  //       imgElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  //     }, { once: true });
  //   }
  // }

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThumbnailClick = (index: number) => {
    if (index < 0) {
      index = images.length - 1;
    }

    if (index >= images.length) {
      index = 0;
    }

    setSelectedImage(index);
    setIsZoomed(false);
  };

  const handleWishList = (id: string) => {
    alert("Wishlisted");
    console.log(id);
  };

  return (
    <div className="w-full lg:w-2/3">
      <div className="w-full h-full relative rounded-[20px] bg-white max-h-[827px] mb-4 overflow-hidden">
        <button
          className="absolute cursor-pointer top-5 left-5 z-10 "
          onClick={() => {
            handleWishList(id);
          }}
        >
          <IconHeart color={undefined} />
        </button>

        {mounted ? (
          <div ref={imageContainerRef} style={{ maxHeight: "inherit" }}>
            <InnerImageZoom
              src={images[selectedImage]}
              zoomSrc={images[selectedImage]}
              afterZoomIn={() => setIsZoomed(true)}
              afterZoomOut={() => setIsZoomed(false)}
              zoomType="click"
              zoomScale={1.1}
              zoomPreload={true}
              fullscreenOnMobile={true}
              hideHint={false}
              mobileBreakpoint={640}
              className="w-full h-full"
              imgAttributes={{
                alt: id,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "20px",
                },
              }}
            />
          </div>
        ) : (
          <Image
            src={images[selectedImage]}
            alt={id}
            width={500}
            height={500}
            className="w-full h-full object-contain rounded-[20px]"
          />
        )}

        <button
          className="absolute cursor-pointer bottom-5 right-5 size-12 bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)] rounded-full flex items-center justify-center z-10"
          onClick={() => {
            triggerZoom();
          }}
        >
          <IconMagnifier color="currentColor" />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {images.map((image, index) => (
            <div
              className={clsx(
                "cursor-pointer relative size-12 rounded-[3px] border-4 overflow-hidden hidden md:flex",
                {
                  "border-transparent": selectedImage !== index,
                }
              )}
              onClick={() => handleThumbnailClick(index)}
              key={index}
              style={selectedImage === index ? { borderColor: focusColor } : {}}
            >
              <Image
                src={image}
                alt={`${id}-thumbnail-${index}`}
                width={40}
                height={40}
                className="object-cover w-10 h-10 rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="flex">
          <button
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleThumbnailClick(selectedImage - 1);
            }}
          >
            <IconGalleryButton color={focusColor} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleThumbnailClick(selectedImage + 1);
            }}
            className="cursor-pointer rotate-180"
          >
            <IconGalleryButton color={focusColor} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

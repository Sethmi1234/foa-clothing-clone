"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect fill='%23f3f3f3' width='400' height='500'/%3E%3Ctext fill='%23ccc' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo image%3C/text%3E%3C/svg%3E";

type SafeImageProps = Omit<ImageProps, "onError"> & {
  fallbackSrc?: string;
};

export default function SafeImage({
  src,
  fallbackSrc = PLACEHOLDER,
  alt,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasErrored(false);
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc || fallbackSrc}
      alt={alt}
      onError={() => {
        if (!hasErrored && fallbackSrc && imgSrc !== fallbackSrc) {
          setHasErrored(true);
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
}

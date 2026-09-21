"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/features/products/types/product.types";
import { cn } from "@/lib/utils/cn";

type ProductImagesProps = {
  product: Product;
};

/** US-04 & Figma: Product image gallery matching exact Figma specs (656x600 main, 656x120 thumbs). */
export function ProductImages({ product }: ProductImagesProps) {
  const images = product.images.length > 0 ? product.images : [];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeImage = images[selectedIndex] || images[0];

  if (!activeImage) {
    return (
      <div className="flex h-[380px] w-full max-w-[656px] items-center justify-center rounded-lg bg-[#ebe6de] text-sm text-[#605a54] lg:h-[600px]">
        No product images available
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-[656px] flex-col items-start gap-4">
      {/* Main image container: 656x600 */}
      <div className="relative h-[380px] w-full max-w-[656px] overflow-hidden rounded-lg bg-[#f5f1eb] sm:h-[480px] lg:h-[600px]">
        <Image
          src={activeImage}
          alt={product.name}
          fill
          priority
          className="object-cover transition-opacity duration-300"
          sizes="(min-width: 1024px) 656px, 100vw"
        />
      </div>

      {/* Thumbnails row: 656x120 with gap 16px */}
      {images.length > 1 && (
        <div className="grid w-full grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <button
              key={`${img}-${idx}`}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={cn(
                "relative h-[120px] w-full cursor-pointer overflow-hidden rounded border-2 bg-[#f5f1eb] transition-all",
                selectedIndex === idx
                  ? "border-[#c5a880] ring-1 ring-[#c5a880]"
                  : "border-[#ebe6de] opacity-70 hover:opacity-100",
              )}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${product.name} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 211px, 33vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

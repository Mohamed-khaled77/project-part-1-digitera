"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/features/cart";
import { productPaths } from "@/features/products/paths";
import type { Product } from "@/features/products/types/product.types";
import { formatWholePrice } from "@/features/products/utils/product.utils";

type ProductCardProps = {
  product: Product;
};

/** US-01 & Figma: Product card matching exact Figma specs (302x467, 270x320 image, 39px button). */
export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const image = product.images[0];

  return (
    <article className="flex min-w-0 w-full max-w-[302px] h-[467px] flex-col items-start justify-between gap-4 rounded-lg bg-white p-4 mx-auto transition-shadow hover:shadow-md border border-[#ebe6de]">
      {/* image-container: 270x320 */}
      <Link
        href={productPaths.detail(product.id)}
        className="relative h-[320px] w-full shrink-0 overflow-hidden rounded bg-[#f5f1eb]"
      >
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            className="rounded object-cover transition-transform duration-300 hover:scale-105"
            sizes="(min-width: 1280px) 270px, 100vw"
          />
        ) : (
          <div className="flex size-full items-center justify-center rounded bg-[#faf8f5] text-sm text-[#605a54]">
            No image
          </div>
        )}
      </Link>

      {/* details: 270x99, gap 12px */}
      <div className="flex w-full flex-col items-start gap-3">
        {/* name-price: 270x48 */}
        <div className="flex w-full items-start justify-between">
          <Link
            href={productPaths.detail(product.id)}
            className="flex min-w-0 flex-col items-start gap-1"
          >
            <h2 className="w-full font-[family-name:var(--font-instrument-serif)] text-[22px] font-normal text-[#1a1a1a] truncate">
              {product.name}
            </h2>
            <p className="w-full text-[11px] font-normal uppercase text-[#c5a880] truncate">
              {product.notes}
            </p>
          </Link>
          <p className="shrink-0 text-[15px] font-semibold text-[#1a1a1a]">
            {formatWholePrice(product.price)}
          </p>
        </div>

        {/* add-to-cart-btn: 270x39 */}
        <button
          type="button"
          className="flex h-[39px] w-full cursor-pointer items-center justify-center rounded border border-solid border-[#ebe6de] py-[12px] text-[11px] font-semibold uppercase whitespace-nowrap text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
          onClick={() =>
            addItem({
              productId: product.id,
              name: product.name,
              price: product.price,
              image,
              selectedOptions: {},
            })
          }
        >
          Add to Cart +
        </button>
      </div>
    </article>
  );
}

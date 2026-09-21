"use client";

import { ProductCard } from "@/features/products/components/ProductCard";
import type { Product } from "@/features/products/types/product.types";

type RelatedProductsProps = {
  currentProductId: string;
  products: Product[];
};

export function RelatedProducts({
  currentProductId,
  products,
}: RelatedProductsProps) {
  const related = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  if (related.length === 0) {
    return null;
  }

  return (
    <section aria-label="Related Products" className="mt-16 w-full border-t border-[#ebe6de] pt-12">
      {/* Section Header */}
      <div className="flex w-full flex-col items-center gap-1.5 text-center pb-8">
        <h2 className="font-[family-name:var(--font-instrument-serif)] text-[28px] text-[#1a1a1a] sm:text-[36px]">
          Olfactory Companions
        </h2>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#c5a880]">
          Fragrances of Synonymous Sophistication
        </p>
      </div>

      {/* Grid */}
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

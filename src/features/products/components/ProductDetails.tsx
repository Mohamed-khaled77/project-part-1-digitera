import type { Product } from "@/features/products/types/product.types";
import { formatWholePrice } from "@/features/products/utils/product.utils";

type ProductDetailsProps = {
  product: Product;
  displayPrice?: number;
};

/** US-04 & Figma: Product specifications, header badges, stock status & Scent Anatomy matching exact Figma specs */
export function ProductDetails({
  product,
  displayPrice,
}: ProductDetailsProps) {
  const currentPrice = displayPrice ?? product.price;

  return (
    <div className="flex w-full flex-col gap-8">
      {/* spec-header: Gap 12px */}
      <div className="flex w-full flex-col items-start gap-3">
        {/* tags-row: Gap 8px */}
        <div className="flex flex-wrap items-center gap-2">
          {product.scentFamily && (
            <span className="flex h-[23px] items-center rounded bg-[#ebe6de] px-3 text-[11px] font-semibold uppercase tracking-wider text-[#605a54]">
              Scent Family: {product.scentFamily}
            </span>
          )}
          {product.occasion && (
            <span className="flex h-[23px] items-center rounded bg-[#ebe6de] px-3 text-[11px] font-semibold uppercase tracking-wider text-[#605a54]">
              Occasion: {product.occasion}
            </span>
          )}
        </div>

        {/* Title: Instrument Serif 48px */}
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-[36px] font-normal leading-tight text-[#1a1a1a] sm:text-[48px]">
          {product.name}
        </h1>

        {/* price-status: Price 24px, Status 13px */}
        <div className="flex items-center gap-4">
          <p className="text-[24px] font-semibold text-[#1a1a1a]">
            {formatWholePrice(currentPrice)}
          </p>
          <div className="flex h-[18px] items-center gap-1.5 text-[13px] font-semibold text-[#1a1a1a]">
            <span className="size-2 rounded-full bg-[#52b788]" />
            <span>{product.stockStatusText || "Available in Atelier"}</span>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-[#ebe6de]" />

      {/* Description */}
      {product.description && (
        <p className="text-[14px] leading-relaxed text-[#605a54]">
          {product.description}
        </p>
      )}

      {/* scent-anatomy: Gap 20px */}
      {(product.scentAnatomy || product.scentNotes) && (
        <div className="flex w-full flex-col items-start gap-5">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-[32px] font-normal text-[#1a1a1a]">
            Scent Anatomy
          </h2>

          {product.scentAnatomy && (
            <p className="text-[14px] leading-relaxed text-[#605a54]">
              {product.scentAnatomy}
            </p>
          )}

          {/* notes-pyramid: Gap 12px */}
          {product.scentNotes && (
            <div className="flex w-full flex-col gap-3 pt-2">
              {product.scentNotes.top && (
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between border-b border-[#ebe6de] pb-3 text-[12px]">
                  <span className="font-bold text-[#1a1a1a]">
                    Top Notes
                  </span>
                  <span className="text-[13px] text-[#605a54]">{product.scentNotes.top}</span>
                </div>
              )}
              {product.scentNotes.heart && (
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between border-b border-[#ebe6de] pb-3 text-[12px]">
                  <span className="font-bold text-[#1a1a1a]">
                    Heart Notes
                  </span>
                  <span className="text-[13px] text-[#605a54]">{product.scentNotes.heart}</span>
                </div>
              )}
              {product.scentNotes.base && (
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between border-b border-[#ebe6de] pb-3 text-[12px]">
                  <span className="font-bold text-[#1a1a1a]">
                    Base Notes
                  </span>
                  <span className="text-[13px] text-[#605a54]">{product.scentNotes.base}</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

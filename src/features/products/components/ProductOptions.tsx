"use client";

import type { Product } from "@/features/products/types/product.types";
import { formatWholePrice } from "@/features/products/utils/product.utils";
import { cn } from "@/lib/utils/cn";

type ProductOptionsProps = {
  product: Product;
  selectedOptions: Record<string, string>;
  onChange: (optionId: string, value: string) => void;
};

/** US-04 & Figma: Volume selection size cards & Gift Wrapping toggle switch matching exact Figma specs */
export function ProductOptions({
  product,
  selectedOptions,
  onChange,
}: ProductOptionsProps) {
  const volumeOptions = product.volumeOptions || [
    { size: "30 ml", price: 140 },
    { size: "50 ml", price: 180 },
    { size: "100 ml", price: product.price },
  ];

  const selectedVolume = selectedOptions["volume"] || volumeOptions[volumeOptions.length - 1]?.size || "100 ml";
  const isGiftWrapped = selectedOptions["giftWrapping"] === "yes";

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Volume Selector: Gap 12px */}
      <div className="flex w-full flex-col items-start gap-3">
        <label className="text-[12px] font-bold uppercase tracking-wider text-[#1a1a1a]">
          Select Volume
        </label>
        <div className="grid w-full grid-cols-3 gap-3">
          {volumeOptions.map((opt) => {
            const isSelected = selectedVolume === opt.size;
            return (
              <button
                key={opt.size}
                type="button"
                onClick={() => onChange("volume", opt.size)}
                className={cn(
                  "flex h-[62px] cursor-pointer flex-col items-center justify-center gap-1 rounded border transition-all",
                  isSelected
                    ? "border-[#c5a880] bg-[#fffdfa] ring-1 ring-[#c5a880]"
                    : "border-[#ebe6de] bg-white hover:border-[#c5a880]/50",
                )}
              >
                <span
                  className={cn(
                    "text-[14px] text-[#1a1a1a]",
                    isSelected ? "font-bold" : "font-medium",
                  )}
                >
                  {opt.size}
                </span>
                <span className="text-[11px] font-normal text-[#605a54]">
                  {formatWholePrice(opt.price)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="h-px w-full bg-[#ebe6de]" />

      {/* Gift Wrapping: 560x78 */}
      <div className="flex h-[78px] w-full items-center justify-between rounded-lg border border-[#ebe6de] bg-[#fffdfa] px-4">
        <div className="flex flex-col gap-1 pr-4">
          <p className="text-[13px] font-semibold text-[#1a1a1a]">
            Complimentary Signature Gift Wrapping
          </p>
          <p className="text-[12px] font-normal text-[#605a54]">
            Encased in linen paper box with custom wax seal stamp.
          </p>
        </div>

        {/* switch: 44x24 */}
        <button
          type="button"
          role="switch"
          aria-checked={isGiftWrapped}
          onClick={() => onChange("giftWrapping", isGiftWrapped ? "no" : "yes")}
          className={cn(
            "relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
            isGiftWrapped ? "bg-[#c5a880]" : "bg-[#ebe6de]",
          )}
        >
          <span
            className={cn(
              "pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
              isGiftWrapped ? "translate-x-[20px]" : "translate-x-0",
            )}
          />
        </button>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useToast } from "@/components/ui/Toast";
import { useCart } from "@/features/cart/hooks/useCart";
import { ProductBreadcrumbs } from "@/features/products/components/ProductBreadcrumbs";
import { ProductDetails } from "@/features/products/components/ProductDetails";
import { ProductImages } from "@/features/products/components/ProductImages";
import { ProductOptions } from "@/features/products/components/ProductOptions";
import { RelatedProducts } from "@/features/products/components/RelatedProducts";
import { useProduct } from "@/features/products/hooks/useProduct";
import { useProducts } from "@/features/products/hooks/useProducts";
import type { Product } from "@/features/products/types/product.types";
import { formatWholePrice } from "@/features/products/utils/product.utils";

export type ProductDetailsActionsContext = {
  product: Product;
  selectedOptions: Record<string, string>;
  quantity: number;
  unitPrice: number;
};

type ProductDetailsPageProps = {
  productId: string;
  actions?: (context: ProductDetailsActionsContext) => ReactNode;
};

export function ProductDetailsPage({
  productId,
  actions,
}: ProductDetailsPageProps) {
  const productQuery = useProduct(productId);
  const productsListQuery = useProducts({ page: 1, pageSize: 6 });
  const product = productQuery.data;
  const { addItem } = useCart();
  const { showToast } = useToast();

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({
    volume: "100 ml",
    giftWrapping: "no",
  });

  const resolvedPrice = useMemo(() => {
    if (!product) return 0;
    const selectedVolume = selectedOptions["volume"];
    if (product.volumeOptions && selectedVolume) {
      const optionMatch = product.volumeOptions.find(
        (v) => v.size === selectedVolume,
      );
      if (optionMatch) return optionMatch.price;
    }
    return product.price;
  }, [product, selectedOptions]);

  if (productQuery.isLoading) {
    return (
      <div className="flex min-h-[400px] w-full items-center justify-center bg-[#faf8f5] text-sm text-[#605a54]">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-[400px] w-full items-center justify-center bg-[#faf8f5] text-sm text-[#605a54]">
        Product not found.
      </div>
    );
  }

  const allProducts = productsListQuery.data?.items || [];
  const totalPrice = resolvedPrice * quantity;
  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: resolvedPrice,
      image: product.images[0],
      selectedOptions,
      quantity,
    });
    showToast(`${product.name} added to cart successfully.`);
  };

  return (
    <article className="min-h-screen w-full overflow-x-hidden bg-[#faf8f5] pb-16 text-[#1a1a1a]">
      {/* Breadcrumbs */}
      <ProductBreadcrumbs productName={product.name} />

      {/* Main Content Container: 1440px max width, px-20 */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,656px)_minmax(0,560px)] lg:justify-between lg:gap-12 xl:gap-16">
          {/* Left Column: Image Gallery (656px) */}
          <div className="w-full max-w-[656px]">
            <ProductImages product={product} />
          </div>

          {/* Right Column: Specifications & Options (560px max width, gap 32px) */}
          <div className="flex w-full max-w-[560px] flex-col gap-8">
            <ProductDetails product={product} displayPrice={resolvedPrice} />

            <ProductOptions
              product={product}
              selectedOptions={selectedOptions}
              onChange={(optionId, value) =>
                setSelectedOptions((current) => ({
                  ...current,
                  [optionId]: value,
                }))
              }
            />

            {/* Actions: Quantity Controller (95x50) & Add to Cart Button (449x50) */}
            <div className="flex w-full flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:gap-4">
              {/* Quantity controls: 95x50 */}
              <div className="flex h-[50px] w-full items-center justify-between rounded border border-[#ebe6de] bg-white px-3 sm:w-[95px]">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="cursor-pointer text-[16px] font-normal text-[#605a54] hover:text-[#1a1a1a]"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="text-[14px] font-semibold text-[#1a1a1a]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="cursor-pointer text-[16px] font-normal text-[#605a54] hover:text-[#1a1a1a]"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Primary Button */}
              {actions ? (
                actions({
                  product,
                  selectedOptions,
                  quantity,
                  unitPrice: resolvedPrice,
                })
              ) : (
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex h-[50px] w-full max-w-[449px] cursor-pointer items-center justify-center rounded bg-[#1a1a1a] px-6 text-[12px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#333333] sm:w-[449px]"
                >
                  Add to Cart / {formatWholePrice(totalPrice)}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Olfactory Companions / Related Products Section */}
        <RelatedProducts currentProductId={product.id} products={allProducts} />
      </div>
    </article>
  );
}

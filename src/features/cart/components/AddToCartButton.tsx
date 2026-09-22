"use client";

import { useCart } from "@/features/cart/hooks/useCart";
import type { AddToCartInput } from "@/features/cart/types/cart.types";
import { useToast } from "@/components/ui/Toast";

type AddToCartButtonProps = AddToCartInput;

export function AddToCartButton(props: AddToCartButtonProps) {
  const { addItem } = useCart();
  const { showToast } = useToast();
  const qty = props.quantity && props.quantity > 0 ? props.quantity : 1;
  const totalPrice = props.price * qty;

  const handleAddToCart = () => {
    addItem(props);
    showToast(`${props.name} added to cart successfully.`);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="flex h-[50px] w-full max-w-[449px] sm:w-[449px] cursor-pointer items-center justify-center rounded bg-[#1a1a1a] px-6 text-[12px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#333333]"
    >
      Add to Cart / ${totalPrice}
    </button>
  );
}

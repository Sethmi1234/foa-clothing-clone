import type { CartItem } from "@/types";

export function formatCartPrice(amount: number): string {
  return `Rs ${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function createCartLineId(productId: string, size?: string, color?: string): string {
  return `${productId}::${size ?? "default"}::${color ?? "default"}`;
}

export function getCartSubtotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function getCartItemCount(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.quantity, 0);
}

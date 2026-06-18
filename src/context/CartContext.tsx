"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { createCartLineId, getCartItemCount, getCartSubtotal } from "@/lib/cart";
import type { CartItem } from "@/types";

const CART_STORAGE_KEY = "foa-cart-items";
const ORDER_NOTE_STORAGE_KEY = "foa-order-note";

type AddToCartInput = {
  productId: string;
  name: string;
  image: string;
  price: number;
  href: string;
  size?: string;
  color?: string;
  quantity?: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  orderNote: string;
  isDrawerOpen: boolean;
  termsAccepted: boolean;
  addItem: (input: AddToCartInput) => void;
  removeItem: (lineId: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  clearCart: () => void;
  setOrderNote: (note: string) => void;
  setTermsAccepted: (accepted: boolean) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orderNote, setOrderNoteState] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setItems(readStoredCart());
    setOrderNoteState(window.localStorage.getItem(ORDER_NOTE_STORAGE_KEY) ?? "");
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(ORDER_NOTE_STORAGE_KEY, orderNote);
  }, [orderNote, isHydrated]);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const addItem = useCallback((input: AddToCartInput) => {
    const lineId = createCartLineId(input.productId, input.size, input.color);
    const quantityToAdd = input.quantity ?? 1;

    setItems((current) => {
      const existing = current.find((item) => item.lineId === lineId);

      if (existing) {
        return current.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }

      return [
        ...current,
        {
          lineId,
          productId: input.productId,
          name: input.name,
          image: input.image,
          price: input.price,
          quantity: quantityToAdd,
          size: input.size,
          color: input.color,
          href: input.href,
        },
      ];
    });

    setIsDrawerOpen(true);
  }, []);

  const removeItem = useCallback((lineId: string) => {
    setItems((current) => current.filter((item) => item.lineId !== lineId));
  }, []);

  const updateQuantity = useCallback((lineId: string, quantity: number) => {
    if (quantity < 1) {
      setItems((current) => current.filter((item) => item.lineId !== lineId));
      return;
    }

    setItems((current) =>
      current.map((item) => (item.lineId === lineId ? { ...item, quantity } : item))
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const setOrderNote = useCallback((note: string) => {
    setOrderNoteState(note);
  }, []);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount: getCartItemCount(items),
      subtotal: getCartSubtotal(items),
      orderNote,
      isDrawerOpen,
      termsAccepted,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      setOrderNote,
      setTermsAccepted,
      openDrawer,
      closeDrawer,
    }),
    [
      items,
      orderNote,
      isDrawerOpen,
      termsAccepted,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      setOrderNote,
      openDrawer,
      closeDrawer,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

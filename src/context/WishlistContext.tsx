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

const WISHLIST_STORAGE_KEY = "foa-wishlist";

type WishlistContextValue = {
  items: string[];
  count: number;
  isInWishlist: (productId: string) => boolean;
  toggleItem: (productId: string) => void;
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

function readStoredWishlist(): string[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored) as string[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setItems(readStoredWishlist());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  const isInWishlist = useCallback(
    (productId: string) => items.includes(productId),
    [items]
  );

  const addItem = useCallback((productId: string) => {
    setItems((current) => (current.includes(productId) ? current : [...current, productId]));
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((current) => current.filter((id) => id !== productId));
  }, []);

  const toggleItem = useCallback((productId: string) => {
    setItems((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  }, []);

  const value = useMemo(
    () => ({
      items,
      count: items.length,
      isInWishlist,
      toggleItem,
      addItem,
      removeItem,
    }),
    [items, isInWishlist, toggleItem, addItem, removeItem]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}

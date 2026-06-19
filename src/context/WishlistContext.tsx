"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const WISHLIST_STORAGE_KEY = "foa-wishlist";

export type WishlistToast = {
  id: number;
  productName: string;
  action: "added" | "removed";
};

type WishlistContextValue = {
  items: string[];
  count: number;
  toasts: WishlistToast[];
  isInWishlist: (productId: string) => boolean;
  toggleItem: (productId: string, productName?: string) => void;
  addItem: (productId: string, productName?: string) => void;
  removeItem: (productId: string, productName?: string) => void;
  dismissToast: (id: number) => void;
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
  const [toasts, setToasts] = useState<WishlistToast[]>([]);
  const toastCounter = useRef(0);

  useEffect(() => {
    setItems(readStoredWishlist());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  const showToast = useCallback((productName: string, action: "added" | "removed") => {
    const id = ++toastCounter.current;
    setToasts((prev) => [...prev, { id, productName, action }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const isInWishlist = useCallback(
    (productId: string) => items.includes(productId),
    [items]
  );

  const addItem = useCallback(
    (productId: string, productName?: string) => {
      setItems((current) => {
        if (current.includes(productId)) return current;
        if (productName) showToast(productName, "added");
        return [...current, productId];
      });
    },
    [showToast]
  );

  const removeItem = useCallback(
    (productId: string, productName?: string) => {
      setItems((current) => {
        if (!current.includes(productId)) return current;
        if (productName) showToast(productName, "removed");
        return current.filter((id) => id !== productId);
      });
    },
    [showToast]
  );

  const toggleItem = useCallback(
    (productId: string, productName?: string) => {
      setItems((current) => {
        const isIn = current.includes(productId);
        if (productName) showToast(productName, isIn ? "removed" : "added");
        return isIn
          ? current.filter((id) => id !== productId)
          : [...current, productId];
      });
    },
    [showToast]
  );

  const value = useMemo(
    () => ({
      items,
      count: items.length,
      toasts,
      isInWishlist,
      toggleItem,
      addItem,
      removeItem,
      dismissToast,
    }),
    [items, toasts, isInWishlist, toggleItem, addItem, removeItem, dismissToast]
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

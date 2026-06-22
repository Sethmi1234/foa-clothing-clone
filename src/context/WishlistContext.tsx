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

export type WishlistItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  href: string;
};

type WishlistContextValue = {
  items: WishlistItem[];
  count: number;
  isDrawerOpen: boolean;
  isInWishlist: (productId: string) => boolean;
  toggleItem: (product: WishlistItem) => void;
  addItem: (product: WishlistItem) => void;
  removeItem: (productId: string) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

function readStoredWishlist(): WishlistItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = window.localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);

    if (Array.isArray(parsed)) {
      if (parsed.length > 0 && typeof parsed[0] === "string") {
        window.localStorage.removeItem(WISHLIST_STORAGE_KEY);
        return [];
      }
      const validItems = parsed.filter(
        (item): item is WishlistItem =>
          item &&
          typeof item === "object" &&
          typeof item.id === "string" &&
          typeof item.name === "string" &&
          typeof item.image === "string" &&
          typeof item.price === "number" &&
          typeof item.href === "string"
      );

      if (validItems.length !== parsed.length) {
        window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(validItems));
      }

      return validItems;
    }
    return [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setItems(readStoredWishlist());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  const isInWishlist = useCallback(
    (productId: string) => items.some((item) => item.id === productId),
    [items]
  );

  const addItem = useCallback((product: WishlistItem) => {
    setItems((current) => {
      if (current.some((item) => item.id === product.id)) return current;
      return [...current, product];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((current) => current.filter((item) => item.id !== productId));
  }, []);

  const toggleItem = useCallback((product: WishlistItem) => {
    setItems((current) => {
      const isIn = current.some((item) => item.id === product.id);
      return isIn
        ? current.filter((item) => item.id !== product.id)
        : [...current, product];
    });
  }, []);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const value = useMemo(
    () => ({
      items,
      count: items.length,
      isDrawerOpen,
      isInWishlist,
      toggleItem,
      addItem,
      removeItem,
      openDrawer,
      closeDrawer,
    }),
    [items, isDrawerOpen, isInWishlist, toggleItem, addItem, removeItem, openDrawer, closeDrawer]
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

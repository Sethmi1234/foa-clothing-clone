"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { currencies, type Currency } from "@/data/currencies";

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>(currencies[0]);

  // Optionally, persist to localStorage here
  useEffect(() => {
    const saved = localStorage.getItem("selected_currency");
    if (saved) {
      const found = currencies.find((c) => c.code === saved);
      if (found) setCurrency(found);
    }
  }, []);

  const handleSetCurrency = (curr: Currency) => {
    setCurrency(curr);
    localStorage.setItem("selected_currency", curr.code);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: handleSetCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}

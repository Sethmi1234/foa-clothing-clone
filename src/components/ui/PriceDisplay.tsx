"use client";

import { useCurrency } from "@/context/CurrencyContext";

type PriceDisplayProps = {
  amount: number;
  installment?: boolean;
};

export default function PriceDisplay({ amount, installment = false }: PriceDisplayProps) {
  const { currency } = useCurrency();
  
  const convertedAmount = amount * currency.rate;
  const finalAmount = installment ? convertedAmount / 3 : convertedAmount;
  
  const formatted = finalAmount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <>
      {currency.symbol} {formatted}
    </>
  );
}

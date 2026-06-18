export type Currency = {
  code: string;
  label: string;
  symbol: string;
  rate: number;
};

export const currencies: Currency[] = [
  { code: "LKR", label: "LKR (රු)", symbol: "Rs", rate: 1 },
  { code: "USD", label: "USD ($)", symbol: "$", rate: 0.0033 },
  { code: "EUR", label: "EUR (€)", symbol: "€", rate: 0.0030 },
  { code: "GBP", label: "GBP (£)", symbol: "£", rate: 0.0026 },
  { code: "AUD", label: "AUD ($)", symbol: "$", rate: 0.0051 },
  { code: "CAD", label: "CAD ($)", symbol: "$", rate: 0.0045 },
  { code: "AED", label: "AED (د.إ)", symbol: "د.إ", rate: 0.012 },
  { code: "SGD", label: "SGD ($)", symbol: "$", rate: 0.0045 },
  { code: "INR", label: "INR (₹)", symbol: "₹", rate: 0.28 },
  { code: "JPY", label: "JPY (¥)", symbol: "¥", rate: 0.50 },
  { code: "MYR", label: "MYR (RM)", symbol: "RM", rate: 0.016 },
  { code: "NZD", label: "NZD ($)", symbol: "$", rate: 0.0055 },
  { code: "CHF", label: "CHF (Fr)", symbol: "Fr", rate: 0.0030 },
  { code: "HKD", label: "HKD ($)", symbol: "$", rate: 0.026 },
  { code: "QAR", label: "QAR (ر.ق)", symbol: "ر.ق", rate: 0.012 },
  { code: "SAR", label: "SAR (ر.س)", symbol: "ر.س", rate: 0.012 },
  { code: "CNY", label: "CNY (¥)", symbol: "¥", rate: 0.024 },
  { code: "KRW", label: "KRW (₩)", symbol: "₩", rate: 4.5 },
  { code: "THB", label: "THB (฿)", symbol: "฿", rate: 0.12 },
  { code: "PHP", label: "PHP (₱)", symbol: "₱", rate: 0.19 },
  { code: "IDR", label: "IDR (Rp)", symbol: "Rp", rate: 52 },
  { code: "VND", label: "VND (₫)", symbol: "₫", rate: 84 },
  { code: "BRL", label: "BRL (R$)", symbol: "R$", rate: 0.017 },
  { code: "MXN", label: "MXN ($)", symbol: "$", rate: 0.055 },
  { code: "ZAR", label: "ZAR (R)", symbol: "R", rate: 0.062 },
  { code: "SEK", label: "SEK (kr)", symbol: "kr", rate: 0.035 },
  { code: "NOK", label: "NOK (kr)", symbol: "kr", rate: 0.036 },
  { code: "DKK", label: "DKK (kr)", symbol: "kr", rate: 0.023 },
  { code: "PLN", label: "PLN (zł)", symbol: "zł", rate: 0.013 },
  { code: "TRY", label: "TRY (₺)", symbol: "₺", rate: 0.11 },
];

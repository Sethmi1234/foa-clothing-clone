export type Currency = {
  code: string;
  symbol: string;
  label: string;
  name: string;
  rate: number;
};

export const currencies: Currency[] = [
  { code: "LKR", symbol: "රු", name: "Sri Lankan Rupee", label: "LKR රු", rate: 1 },
  { code: "USD", symbol: "$", name: "US Dollar", label: "USD $", rate: 0.0031 },
  { code: "EUR", symbol: "€", name: "Euro", label: "EUR €", rate: 0.0028 },
  { code: "GBP", symbol: "£", name: "British Pound", label: "GBP £", rate: 0.0024 },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham", label: "AED د.إ", rate: 0.011 },
  { code: "AUD", symbol: "A$", name: "Australian Dollar", label: "AUD A$", rate: 0.0046 },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar", label: "CAD C$", rate: 0.0042 },
];
export type EVoucherDenomination = {
  id: string;
  amount: number;
  label: string;
};

export const eVoucherDenominations: EVoucherDenomination[] = [
  { id: "1000", amount: 1000, label: "Rs 1,000" },
  { id: "2000", amount: 2000, label: "Rs 2,000" },
  { id: "3000", amount: 3000, label: "Rs 3,000" },
  { id: "5000", amount: 5000, label: "Rs 5,000" },
  { id: "10000", amount: 10000, label: "Rs 10,000" },
  { id: "15000", amount: 15000, label: "Rs 15,000" },
  { id: "20000", amount: 20000, label: "Rs 20,000" },
  { id: "25000", amount: 25000, label: "Rs 25,000" },
];

export const eVoucherDescription = `
This E-Gift Card is valid for use only on the foaclothing.com website only and is not allowed to be used at any of the FOA physical in-store locations.

E-Gift Cards must be paid upfront through Credit or Debit Cards. Cash on Delivery is not available for E-Gift Cards.

Your E-Gift Card will be emailed to you as soon as your payment is confirmed. The email will contain your unique E-Gift Card code and instructions on how to redeem it.

E-Gift Cards are valid for 12 months from the date of purchase and cannot be refunded or exchanged for cash.

Please ensure you provide the correct email address at checkout, as the E-Gift Card will be sent to that email address.
`;

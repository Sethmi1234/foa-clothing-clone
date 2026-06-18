export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: "shipping",
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days within Sri Lanka. Express shipping is available for 1-2 business day delivery. International shipping typically takes 7-14 business days depending on the destination.",
  },
  {
    id: "returns",
    question: "What is your return policy?",
    answer: "We accept returns within 14 days of purchase. Items must be unworn, unwashed, and in original packaging with tags attached. Sale items are final sale and cannot be returned unless defective.",
  },
  {
    id: "sizes",
    question: "How do I know my size?",
    answer: "We provide detailed size charts for all our products. You can find the size guide button on each product page. If you're between sizes, we recommend sizing up for a more comfortable fit.",
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express), as well as digital payments through Mintpay, Koko, and bank transfers. Cash on delivery is available for orders within Sri Lanka.",
  },
  {
    id: "tracking",
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive an email with your tracking number. You can use this number to track your package on our website or the courier's website.",
  },
  {
    id: "exchange",
    question: "Can I exchange an item for a different size?",
    answer: "Yes, you can exchange items for a different size within 14 days of purchase, subject to availability. Please contact our customer service team to initiate an exchange.",
  },
];

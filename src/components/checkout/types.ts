import type { DeliveryMethod } from "@/types";

export type CheckoutFormFields = {
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
};

export type CheckoutField = keyof CheckoutFormFields;

export type CheckoutPreferences = {
  deliveryMethod: DeliveryMethod;
  emailOffers: boolean;
  saveInfo: boolean;
};

import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_o7gs71k";
const EMAILJS_TEMPLATE_ID = "template_24uheik";
const EMAILJS_PUBLIC_KEY = "y9IFx7dAqWeUfFOv9";

export async function subscribeEmail(email: string): Promise<void> {
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      subscriber_email: email,
    },
    EMAILJS_PUBLIC_KEY
  );
}
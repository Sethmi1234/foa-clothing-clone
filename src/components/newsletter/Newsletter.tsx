"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_o7gs71k",
        "template_nyvmox5",
        {
          subscriber_email: email,
        },
        "y9IFx7dAqWeUfFOv9"
      );

      alert("Welcome email sent!");

      setEmail("");
    } catch (error) {
      console.error(error);

      alert("Failed to send email");
    }
  };

  return (
    <form
      onSubmit={handleSubscribe}
      className="flex gap-3"
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        className="border px-4 py-2"
      />

      <button
        type="submit"
        className="bg-black text-white px-4 py-2"
      >
        Subscribe
      </button>
    </form>
  );
}
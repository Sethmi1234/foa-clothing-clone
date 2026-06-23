"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      const dismissed = sessionStorage.getItem("foa_popup_dismissed");
      if (!dismissed) {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
      }
    } catch (e) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mounted]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("foa_popup_dismissed", "true");
    } catch (e) {}
    document.body.style.overflow = "unset";
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2147483646,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
            onClick={handleClose}
          />

          {/* Centered Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2147483647,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
            onClick={handleClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 500,
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
                boxShadow:
                  "0 10px 40px rgba(0,0,0,0.12), 0 2px 10px rgba(0,0,0,0.05)",
                cursor: "default",
              }}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  zIndex: 10,
                  cursor: "pointer",
                  width: 28,
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  padding: 0,
                  color: "#000",
                  fontSize: 14,
                  lineHeight: 1,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                }}
                aria-label="Close popup"
              >
                ✕
              </button>

              {/* Left: Content */}
              <div
                style={{
                  flex: 1,
                  padding: "36px 30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  {/* Heading */}
                  <h2
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 24,
                      fontWeight: 700,
                      color: "#111",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      margin: "0 0 8px 0",
                      lineHeight: 1.2,
                    }}
                  >
                    SUBSCRIBE NOW
                  </h2>

                  {/* Subheading */}
                  <p
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#555",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      margin: "0 0 4px 0",
                      lineHeight: 1.5,
                    }}
                  >
                    DON'T MISS OUT ON THE LATEST DROP AND OFFERS.
                  </p>

                  {/* Secondary text */}
                  <p
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 11,
                      fontWeight: 400,
                      color: "#888",
                      margin: "0 0 20px 0",
                      lineHeight: 1.5,
                    }}
                  >
                    Be the first to get notified.
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      width: 36,
                      height: 1,
                      backgroundColor: "#ddd",
                      margin: "0 auto 20px auto",
                    }}
                  />

                  {/* Form */}
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {/* Email input */}
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        border: "1px solid #e0e0e0",
                        borderRadius: 0,
                        backgroundColor: "#f9f9f9",
                        color: "#333",
                        fontSize: 12,
                        fontFamily: "'Prompt', sans-serif",
                        outline: "none",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                        (e.target.style.borderColor = "#111")
                      }
                      onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                        (e.target.style.borderColor = "#e0e0e0")
                      }
                    />

                    {/* Phone input with +94 prefix */}
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        border: "1px solid #e0e0e0",
                        backgroundColor: "#f9f9f9",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      id="phone-wrapper"
                    >
                      <span
                        style={{
                          padding: "11px 0 11px 14px",
                          fontSize: 12,
                          color: "#333",
                          fontFamily: "'Prompt', sans-serif",
                          whiteSpace: "nowrap",
                          userSelect: "none",
                        }}
                      >
                        +94
                      </span>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        style={{
                          width: "100%",
                          padding: "11px 14px 11px 4px",
                          border: "none",
                          borderRadius: 0,
                          backgroundColor: "transparent",
                          color: "#333",
                          fontSize: 12,
                          fontFamily: "'Prompt', sans-serif",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                          const parent =
                            e.target.closest("#phone-wrapper") as HTMLElement | null;
                          if (parent)
                            parent.style.borderColor = "#111";
                        }}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                          const parent =
                            e.target.closest("#phone-wrapper") as HTMLElement | null;
                          if (parent)
                            parent.style.borderColor = "#e0e0e0";
                        }}
                      />
                    </div>

                    {/* Subscribe button */}
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        padding: "12px 20px",
                        border: "none",
                        borderRadius: 0,
                        backgroundColor: "#111",
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        cursor: "pointer",
                        fontFamily: "'Prompt', sans-serif",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) =>
                        ((e.target as HTMLButtonElement).style.opacity = "0.85")
                      }
                      onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) =>
                        ((e.target as HTMLButtonElement).style.opacity = "1")
                      }
                    >
                      SUBSCRIBE
                    </button>
                  </form>
                </div>
              </div>

              {/* Right: Image */}
              <div
                style={{
                  width: 200,
                  flexShrink: 0,
                  minHeight: 320,
                  backgroundImage:
                    "url(https://uc.pop-convert.com/ae9cb82c-03f9-411a-a285-83f3ebb742e6/)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
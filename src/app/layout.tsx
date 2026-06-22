import { Prompt } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { CurrencyProvider } from "@/context/CurrencyContext";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

export const metadata = {
  title: "FOA Clothing | The Lifestyle Brand",
  description:
    "Sri Lanka's finest sports and lifestyle wear. FOA Clothing brings you a wide range of activewear for all your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${prompt.variable} font-[family-name:var(--font-prompt)] antialiased`}>
        <AuthProvider>
          <CurrencyProvider>
            <CartProvider>
              <WishlistProvider>
                <SearchProvider>
                  <SiteShell>{children}</SiteShell>
                </SearchProvider>
              </WishlistProvider>
            </CartProvider>
          </CurrencyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

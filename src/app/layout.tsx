import { Prompt } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/layout/FloatingActions";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
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
        <CurrencyProvider>
          <Header />
          <MainContent>{children}</MainContent>
          <Footer />
          <FloatingActions />
        </CurrencyProvider>
      </body>
    </html>
  );
}

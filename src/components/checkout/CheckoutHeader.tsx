import { Logo } from "@/components/icons/Logo";

const CHECKOUT_HEADER_IMAGE =
  "https://cdn.shopify.com/s/files/1/0750/4415/9772/files/WOMENS_2000x.jpg?v=1686036160";

export default function CheckoutHeader() {
  return (
    <header
      className="relative border-b border-[#dedede] bg-cover bg-center"
      style={{ backgroundImage: `url("${CHECKOUT_HEADER_IMAGE}")` }}
    >
      <div className="absolute inset-0 bg-white/75" />
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-center px-4 py-6 md:py-8">
        <Logo variant="dark" className="[&_img]:h-8 [&_img]:w-auto md:[&_img]:h-10" />
      </div>
    </header>
  );
}

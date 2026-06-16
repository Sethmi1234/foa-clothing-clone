import type { TopLevelCategory } from "@/types/navigation";

export const navigationData: TopLevelCategory[] = [
  {
    id: "cat-mens",
    label: "MENS",
    url: "/collections/men",
    columns: [
      {
        id: "col-mens-clothing",
        title: "CLOTHING",
        items: [
          { id: "item-m-all", label: "MENS ALL", url: "/collections/men" },
          { id: "item-m-tees", label: "TEES", url: "/collections/tees" },
          { id: "item-m-printed-tees", label: "PRINTED TEES", url: "/collections/printed-tees-1" },
          { id: "item-m-tanks", label: "TANKS", url: "/collections/tanks" },
          { id: "item-m-jackets", label: "JACKETS", url: "/collections/jackets" },
          { id: "item-m-shirts", label: "SHIRTS", url: "/collections/shirts" },
          { id: "item-m-hoodies", label: "HOODIES", url: "/collections/hoodies" },
          { id: "item-m-pants", label: "PANTS", url: "/collections/pants" },
          { id: "item-m-shorts", label: "SHORTS", url: "/collections/shorts" },
          { id: "item-m-joggers", label: "JOGGERS", url: "/collections/joggers" },
          { id: "item-m-compression", label: "COMPRESSION", url: "/collections/compression" },
          { id: "item-m-boxers", label: "BOXERS", url: "/collections/boxers" },
          { id: "item-m-denim", label: "DENIM", url: "/collections/denim" },
        ],
      },
      {
        id: "col-mens-footwear",
        title: "FOOTWEAR",
        items: [
          { id: "item-m-shoes", label: "SHOES", url: "/collections/shoes" },
          { id: "item-m-sliders", label: "SLIDERS", url: "/collections/sliders" },
          { id: "item-m-flipflops", label: "FLIP FLOPS", url: "/collections/flip-flops" },
        ],
      },
      {
        id: "col-mens-accessories",
        title: "ACCESSORIES",
        items: [
          { id: "item-m-bags", label: "BAGS", url: "/collections/bags" },
          { id: "item-m-hats", label: "HATS", url: "/collections/hats" },
          { id: "item-m-caps", label: "CAPS", url: "/collections/caps" },
          { id: "item-m-socks", label: "SOCKS", url: "/collections/socks" },
        ],
      },
      {
        id: "col-mens-trending",
        title: "TRENDING",
        items: [
          { id: "item-m-trend-tees", label: "TEES", url: "/collections/tees" },
          { id: "item-m-trend-hoodies", label: "HOODIES", url: "/collections/hoodies" },
          { id: "item-m-trend-shoes", label: "SHOES", url: "/collections/shoes" },
        ],
      },
      {
        id: "col-mens-evoucher",
        title: "E-VOUCHER",
        url: "/collections/e-voucher",
        items: [],
      },
      {
        id: "col-mens-all",
        title: "ALL MENS",
        url: "/collections/men",
        items: [],
      },
    ],
  },
  {
    id: "cat-womens",
    label: "WOMENS",
    url: "/collections/women",
    columns: [
      {
        id: "col-womens-clothing",
        title: "CLOTHING",
        items: [
          { id: "item-w-all", label: "WOMENS ALL", url: "/collections/women" },
          { id: "item-w-tees", label: "TEES", url: "/collections/womens-tees" },
          { id: "item-w-printed-tees", label: "PRINTED TEES", url: "/collections/printed-tees-women" },
          { id: "item-w-jackets", label: "JACKETS", url: "/collections/womens-jackets" },
          { id: "item-w-tops", label: "TOPS", url: "/collections/tops" },
          { id: "item-w-tanks", label: "TANKS", url: "/collections/womens-tanks" },
          { id: "item-w-hoodies", label: "HOODIES", url: "/collections/womens-hoodies" },
          { id: "item-w-dresses", label: "DRESSES", url: "/collections/dresses" },
          { id: "item-w-leggings", label: "LEGGINGS", url: "/collections/leggings" },
          { id: "item-w-shorts", label: "SHORTS", url: "/collections/womens-shorts" },
          { id: "item-w-jeans", label: "JEANS", url: "/collections/womens-jeans" },
          { id: "item-w-skirts", label: "SKIRTS", url: "/collections/skirts" },
          { id: "item-w-pants", label: "PANTS", url: "/collections/womens-pants" },
        ],
      },
      {
        id: "col-womens-accessories",
        title: "ACCESSORIES",
        items: [
          { id: "item-w-bags", label: "BAGS", url: "/collections/bags" },
          { id: "item-w-caps", label: "CAPS", url: "/collections/caps" },
          { id: "item-w-socks", label: "SOCKS", url: "/collections/socks" },
        ],
      },
      {
        id: "col-womens-footwear",
        title: "FOOTWEAR",
        items: [
          { id: "item-w-shoes", label: "SHOES", url: "/collections/shoes" },
          { id: "item-w-sliders", label: "SLIDERS", url: "/collections/sliders" },
          { id: "item-w-flipflops", label: "FLIP FLOPS", url: "/collections/flip-flops" },
        ],
      },
      {
        id: "col-womens-trending",
        title: "TRENDING",
        items: [
          { id: "item-w-trend-tees", label: "TEES", url: "/collections/womens-tees" },
          { id: "item-w-trend-leggings", label: "LEGGINGS", url: "/collections/leggings" },
          { id: "item-w-trend-shoes", label: "SHOES", url: "/collections/shoes" },
        ],
      },
      {
        id: "col-womens-evoucher",
        title: "E-VOUCHER",
        url: "/collections/e-voucher",
        items: [],
      },
      {
        id: "col-womens-all",
        title: "ALL WOMENS",
        url: "/collections/women",
        items: [],
      },
    ],
  },
  {
    id: "cat-accessories",
    label: "ACCESSORIES",
    url: "/collections/accessories",
    columns: [
      {
        id: "col-accessories-products",
        title: "PRODUCTS",
        items: [
          { id: "item-a-all", label: "ACCESSORIES ALL", url: "/collections/accessories" },
          { id: "item-a-bags", label: "BAGS", url: "/collections/bags" },
          { id: "item-a-caps", label: "CAPS", url: "/collections/caps" },
          { id: "item-a-hats", label: "HATS", url: "/collections/hats" },
          { id: "item-a-socks", label: "SOCKS", url: "/collections/socks" },
        ],
      },
      {
        id: "col-accessories-evoucher",
        title: "E-VOUCHER",
        url: "/collections/e-voucher",
        items: [],
      },
      {
        id: "col-accessories-all",
        title: "ALL ACCESSORIES",
        url: "/collections/accessories",
        items: [],
      },
    ],
  },
  {
    id: "cat-footwear",
    label: "FOOTWEAR",
    url: "/collections/footwear",
    columns: [
      {
        id: "col-footwear-products",
        title: "PRODUCTS",
        items: [
          { id: "item-f-all", label: "FOOTWEAR ALL", url: "/collections/footwear" },
          { id: "item-f-flipflops", label: "FLIP FLOPS", url: "/collections/flip-flops" },
          { id: "item-f-shoes", label: "SHOES", url: "/collections/shoes" },
          { id: "item-f-sliders", label: "SLIDERS", url: "/collections/sliders" },
        ],
      },
      {
        id: "col-footwear-evoucher",
        title: "E-VOUCHER",
        url: "/collections/e-voucher",
        items: [],
      },
      {
        id: "col-footwear-all",
        title: "ALL FOOTWEAR",
        url: "/collections/footwear",
        items: [],
      },
    ],
  },
  {
    id: "cat-evoucher",
    label: "E-VOUCHER",
    url: "/collections/e-voucher",
  },
  {
    id: "cat-sale",
    label: "SALE",
    url: "/collections/sale",
    isSale: true,
  },
];

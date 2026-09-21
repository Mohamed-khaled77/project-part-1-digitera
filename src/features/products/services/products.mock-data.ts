import type { Product } from "@/features/products/types/product.types";

export const mockProducts: Product[] = [
  {
    id: "santal-parchment",
    name: "Santal Parchment",
    description: "Warm sandalwood layered with cardamom and dry papyrus notes.",
    notes: "Woody / Sandalwood & Cardamom",
    price: 220,
    images: [
      "/images/products/santal-parchment.png",
      "/images/products/noir-cocoon.png",
      "/images/products/sol-dor.png",
    ],
    category: "pure-extractions",
    scentFamily: "woody",
    occasion: "evening",
    inStock: true,
    stockStatusText: "Available in Atelier",
    scentAnatomy:
      "Santal Parchment wraps around the skin like vintage vellum paper. It opens with bright top notes, shifting to clean papyrus and warm, rich sandalwood that dry down into dry cardamom and amber.",
    scentNotes: {
      top: "Sicilian Bergamot, Pink Pepper",
      heart: "Egyptian Jasmine Sambac, Papyrus",
      base: "West Indian Sandalwood, Cardamom, Amber",
    },
    volumeOptions: [
      { size: "30 ml", price: 140 },
      { size: "50 ml", price: 180 },
      { size: "100 ml", price: 220 },
    ],
    options: [
      {
        id: "volume",
        name: "Volume",
        values: ["30 ml", "50 ml", "100 ml"],
      },
    ],
  },
  {
    id: "fleur-de-lune",
    name: "Fleur de Lune",
    description: "A luminous floral composition of jasmine and white musk.",
    notes: "Floral / Jasmine & White Musk",
    price: 195,
    images: [
      "/images/products/fleur-de-lune.png",
      "/images/products/rose-absolute.png",
    ],
    category: "pure-extractions",
    scentFamily: "floral",
    occasion: "personal-use",
    inStock: true,
    stockStatusText: "In Stock",
    scentAnatomy:
      "Fleur de Lune blooms in the cool night air, releasing ethereal white floral notes suspended over soft, velvety musks.",
    scentNotes: {
      top: "Night Jasmine, Neroli",
      heart: "White Tuberose, Moonflower",
      base: "Clean White Musk, Soft Cedarwood",
    },
    volumeOptions: [
      { size: "50 ml", price: 155 },
      { size: "100 ml", price: 195 },
    ],
    options: [
      {
        id: "volume",
        name: "Volume",
        values: ["50 ml", "100 ml"],
      },
    ],
  },
  {
    id: "noir-cocoon",
    name: "Noir Cocoon",
    description: "An oriental blend of tobacco and amber.",
    notes: "Oriental / Tobacco & Amber",
    price: 240,
    images: [
      "/images/products/noir-cocoon.png",
      "/images/products/santal-parchment.png",
    ],
    category: "private-reserve",
    scentFamily: "oriental",
    occasion: "wedding",
    inStock: true,
    stockStatusText: "Limited Reserve",
    scentAnatomy:
      "A deep, enveloping fragrance that wraps you in rich pipe tobacco leaves, sweet resinous amber, and dark honeyed woods.",
    scentNotes: {
      top: "Spiced Honey, Clove Blossom",
      heart: "Sweet Pipe Tobacco, Tonka Bean",
      base: "Golden Amber, Madagascar Vanilla",
    },
    volumeOptions: [
      { size: "50 ml", price: 190 },
      { size: "100 ml", price: 240 },
    ],
    options: [
      {
        id: "volume",
        name: "Volume",
        values: ["50 ml", "100 ml"],
      },
    ],
  },
  {
    id: "sol-dor",
    name: "Sol d'Or",
    description: "A fresh coastal blend of bergamot and sea salt.",
    notes: "Fresh / Bergamot & Sea Salt",
    price: 185,
    images: [
      "/images/products/sol-dor.png",
      "/images/products/fleur-de-lune.png",
    ],
    category: "pure-extractions",
    scentFamily: "fresh",
    occasion: "personal-use",
    inStock: true,
    stockStatusText: "In Stock",
    scentAnatomy:
      "Capturing the warmth of Mediterranean sunlight reflecting off saline sea breezes and citrus orchards.",
    scentNotes: {
      top: "Calabrian Bergamot, Sea Salt",
      heart: "Sunlit Orange Blossom, Marine Accord",
      base: "Driftwood, White Amber",
    },
    volumeOptions: [
      { size: "50 ml", price: 145 },
      { size: "100 ml", price: 185 },
    ],
    options: [
      {
        id: "volume",
        name: "Volume",
        values: ["50 ml", "100 ml"],
      },
    ],
  },
  {
    id: "atelier-oud",
    name: "Atelier Oud",
    description: "Rich oud deepened with saffron.",
    notes: "Woody / Rich Oud & Saffron",
    price: 310,
    images: [
      "/images/products/atelier-oud.png",
      "/images/products/santal-parchment.png",
    ],
    category: "atelier-oils",
    scentFamily: "woody",
    occasion: "gift-sets",
    inStock: true,
    stockStatusText: "Atelier Exclusive",
    scentAnatomy:
      "Hand-distilled agarwood oil aged with crimson saffron threads and smoky leather accords.",
    scentNotes: {
      top: "Saffron Threads, Cardamom Pods",
      heart: "Smoky Rose, Aged Oud Wood",
      base: "Leather, Birch Tar, Sandalwood",
    },
    volumeOptions: [
      { size: "50 ml", price: 250 },
      { size: "100 ml", price: 310 },
    ],
    options: [
      {
        id: "volume",
        name: "Volume",
        values: ["50 ml", "100 ml"],
      },
    ],
  },
  {
    id: "rose-absolute",
    name: "Rose Absolute",
    description: "Damask rose balanced with cedar.",
    notes: "Floral / Damask Rose & Cedar",
    price: 205,
    images: [
      "/images/products/rose-absolute.png",
      "/images/products/fleur-de-lune.png",
    ],
    category: "private-reserve",
    scentFamily: "floral",
    occasion: "birthday",
    inStock: true,
    stockStatusText: "In Stock",
    scentAnatomy:
      "Velvety red Damask rose petals grounded by dry Atlas cedarwood and warm pink pepper berries.",
    scentNotes: {
      top: "Pink Pepper, Green Leaves",
      heart: "Damask Rose Absolute, Geranium",
      base: "Atlas Cedarwood, Patchouli",
    },
    volumeOptions: [
      { size: "50 ml", price: 165 },
      { size: "100 ml", price: 205 },
    ],
    options: [
      {
        id: "volume",
        name: "Volume",
        values: ["50 ml", "100 ml"],
      },
    ],
  },
];

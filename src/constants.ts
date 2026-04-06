import { Product, CompanyInfo } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Rich Health",
  owner: "Mahesh Dholakiya",
  phone: "9377674735",
  email: "rich_health@yahoo.com",
  address: "2-25, Sarita Society, Karada Road, Surat-4",
  whatsapp: "919377674735", // International format for WhatsApp
};

export const LOGO_URL = "/rich_health_logo.png";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Bonrich Capsule",
    slug: "bonrich",
    tagline: "Strong Bones, Strong Life",
    shortDescription: "Premium calcium and vitamin supplement for bone health.",
    description: "Bonrich Capsule is a premium calcium and vitamin supplement designed to strengthen bones, improve joint health, and support overall wellness. Ideal for daily nutritional support.",
    composition: "Calcium, Vitamin D3, Magnesium, Zinc, Vitamin B Complex",
    benefits: [
      "Supports bone strength & density",
      "Helps prevent calcium deficiency",
      "Improves muscle function",
      "Boosts overall immunity",
      "Supports joint health"
    ],
    indications: [
      "Weak bones / Osteoporosis support",
      "Calcium deficiency",
      "Joint pain & muscle cramps",
      "General weakness",
      "Post-pregnancy & elderly care"
    ],
    precautions: [
      "Do not exceed recommended dose",
      "Consult doctor if pregnant or lactating",
      "Keep out of reach of children"
    ],
    packaging: "Blister pack (e.g., 10x10 capsules) / HDPE bottle option",
    usage: "Usually 1 capsule daily after meal or as directed by a physician.",
    image: "/bonrich1.png",
    images: ["/bonrich1.png", "/bonrich2.png", "/bonrich3.png"],
    category: "Capsule"
  },
  {
    id: "2",
    name: "mTm",
    slug: "mtm",
    shortDescription: "Multivitamin and mineral complex for daily vitality.",
    description: "mTm provides a comprehensive blend of essential nutrients to support daily energy levels, immune function, and overall well-being.",
    composition: "Essential Multivitamins, Minerals, Antioxidants",
    benefits: [
      "Boosts daily energy levels",
      "Supports immune system",
      "Improves cognitive function",
      "Provides antioxidant protection"
    ],
    usage: "One capsule daily with breakfast.",
    image: "https://images.unsplash.com/photo-1471864190281-ad5f9f81ce4c?auto=format&fit=crop&q=80&w=800",
    category: "Capsule"
  },
  {
    id: "3",
    name: "Whitenil",
    slug: "whitenil",
    shortDescription: "Skin health and radiance enhancement.",
    description: "Whitenil is formulated with potent antioxidants that help in maintaining skin health, reducing oxidative stress, and promoting a natural glow.",
    composition: "L-Glutathione, Vitamin C, Grape Seed Extract",
    benefits: [
      "Promotes skin radiance",
      "Reduces oxidative stress",
      "Supports skin health from within",
      "Rich in antioxidants"
    ],
    usage: "One tablet daily at bedtime.",
    image: "https://images.unsplash.com/photo-1550572017-ed20015e0e6e?auto=format&fit=crop&q=80&w=800",
    category: "Tablet"
  },
  {
    id: "4",
    name: "Losulin",
    slug: "losulin",
    shortDescription: "Metabolic support and glucose management.",
    description: "Losulin is designed to support healthy metabolism and assist in maintaining balanced glucose levels through natural ingredients.",
    composition: "Chromium Picolinate, Bitter Melon Extract, Cinnamon",
    benefits: [
      "Supports healthy metabolism",
      "Assists in glucose management",
      "Promotes energy balance",
      "Natural metabolic support"
    ],
    usage: "One capsule before major meals.",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800",
    category: "Capsule"
  },
  {
    id: "5",
    name: "Urolith",
    slug: "urolith",
    shortDescription: "Urinary tract and kidney health support.",
    description: "Urolith provides targeted support for the urinary system and kidney health, helping to maintain clear pathways and optimal function.",
    composition: "Cranberry Extract, Potassium Citrate, Herbal Blend",
    benefits: [
      "Supports urinary tract health",
      "Promotes kidney function",
      "Helps maintain pH balance",
      "Natural diuretic support"
    ],
    usage: "One tablet twice daily with plenty of water.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=800",
    category: "Tablet"
  },
  {
    id: "6",
    name: "Joy Ace",
    slug: "joy-ace",
    shortDescription: "Stress relief and mood enhancement formula.",
    description: "Joy Ace is a natural blend of adaptogens and vitamins that help the body manage stress and support a positive mood.",
    composition: "Ashwagandha, L-Theanine, B-Complex Vitamins",
    benefits: [
      "Supports stress management",
      "Promotes relaxation without drowsiness",
      "Enhances mood and focus",
      "Supports nervous system health"
    ],
    usage: "One capsule daily or as needed during stressful periods.",
    image: "https://images.unsplash.com/photo-1555633514-abcee6ad93e1?auto=format&fit=crop&q=80&w=800",
    category: "Capsule"
  }
];

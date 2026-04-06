export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  composition: string;
  benefits: string[];
  usage: string;
  image: string;
  images?: string[];
  category: 'Tablet' | 'Capsule';
  indications?: string[];
  precautions?: string[];
  packaging?: string;
  tagline?: string;
}

export interface CompanyInfo {
  name: string;
  owner: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
}

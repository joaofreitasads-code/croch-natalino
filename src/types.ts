export type CollectionMode = 'natalino' | 'catolico';

export interface RecipeItem {
  id: string;
  number: string;
  title: string;
  image: string;
}

export interface StructureStep {
  pageNumber: string;
  title: string;
  description: string;
  image: string;
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  description: string;
  originalPrice: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  badge?: string;
  recommended?: boolean;
  image: string;
  features: string[];
  originalPrice: string;
  pixPrice: string;
  installment: string;
  checkoutUrl: string;
}

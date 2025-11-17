import React from "react";
import { BreadcrumbsSection } from "./sections/BreadcrumbsSection";
import { DiscountedProductsSection } from "./sections/DiscountedProductsSection";
import { FooterSection } from "../../components/FooterSection.tsx"
import { HeaderSection } from "../../components/HeaderSection.tsx";
import { ProductDetailsSection } from "./sections/ProductDetailsSection";
import { ProductMainInfoSection } from "./sections/ProductMainInfoSection";
import { ProductReviewsSection } from "./sections/ProductReviewsSection";
import { useRouter } from "../../lib/router/Router";

export const ProductDetailsPage = (): JSX.Element => {
  const { params, state } = useRouter();
  
  // Access product data from router state
  const product = state?.product;
  
  return (
    <main className="flex flex-col w-full relative bg-black">
      <HeaderSection />
      <BreadcrumbsSection />
      {/* Pass product data to child components */}
      <ProductMainInfoSection product={product} />
      <ProductDetailsSection product={product} />
      <DiscountedProductsSection />
      <ProductReviewsSection />
      <FooterSection />
    </main>
  );
};

import React from "react";
import { BreadcrumbsSection } from "./sections/BreadcrumbsSection";
import { DiscountedProductsSection } from "./sections/DiscountedProductsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { ProductDetailsSection } from "./sections/ProductDetailsSection";
import { ProductMainInfoSection } from "./sections/ProductMainInfoSection";
import { ProductReviewsSection } from "./sections/ProductReviewsSection";

export const ProductDetailsPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full relative bg-black">
      <HeaderSection />
      <BreadcrumbsSection />
      <ProductMainInfoSection />
      <ProductDetailsSection />
      <DiscountedProductsSection />
      <ProductReviewsSection />
      <FooterSection />
    </main>
  );
};

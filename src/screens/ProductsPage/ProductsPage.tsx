import React from "react";
import { BreadcrumbsSection } from "./sections/BreadcrumbsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { ProductGridSection } from "./sections/ProductGridSection";

export const ProductsPage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full relative bg-[#0b0b0b]">
      <HeaderSection />
      <BreadcrumbsSection />
      <ProductGridSection />
      <FooterSection />
    </div>
  );
};

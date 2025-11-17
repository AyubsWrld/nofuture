import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { ShoppingCartSection } from "./sections/ShoppingCartSection";

export const ShoppingCartScreen = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full relative bg-[#0c0c0c]">
      <HeaderSection />
      <ShoppingCartSection />
      <FooterSection />
    </main>
  );
};

export default ShoppingCartScreen;

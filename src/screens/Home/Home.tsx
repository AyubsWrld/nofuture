import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { CategoryBrowseSection } from "./sections/CategoryBrowseSection";
import { ContentSection } from "./sections/ContentSection";
import { FooterSection } from "../../components/FooterSection.tsx"
import { HeaderSection } from "../../components/HeaderSection.tsx";

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start relative bg-[#0c0c0c] w-full">
      <HeaderSection />
      <CategoryBrowseSection />
      <CallToActionSection />
      <ContentSection />
      <FooterSection />
    </div>
  );
};

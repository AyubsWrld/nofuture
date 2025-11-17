import React from "react";
import { AddressSelectionSection } from "./sections/AddressSelectionSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { PaymentSection } from "./sections/PaymentSection";
import { ShipmentMethodSection } from "./sections/ShipmentMethodSection";
import { SummarySection } from "./sections/SummarySection";

export const Step = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-[#0c0c0c]">
      <HeaderSection />
      <ShipmentMethodSection />
      <SummarySection />
      <AddressSelectionSection />
      <PaymentSection />
      <FooterSection />
    </div>
  );
};

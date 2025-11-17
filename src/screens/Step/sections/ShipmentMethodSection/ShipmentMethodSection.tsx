import { CreditCardIcon, MapPinIcon, TruckIcon } from "lucide-react";
import React from "react";

const steps = [
  {
    number: "Step 1",
    label: "Address",
    icon: MapPinIcon,
    isActive: true,
  },
  {
    number: "Step 2",
    label: "Shipping",
    icon: TruckIcon,
    isActive: false,
  },
  {
    number: "Step 3",
    label: "Payment",
    icon: CreditCardIcon,
    isActive: false,
  },
];

export const ShipmentMethodSection = (): JSX.Element => {
  return (
    <nav className="flex items-center justify-between px-40 py-[72px] w-full">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={index} className="inline-flex h-10 items-center gap-2">
            <Icon
              className={`w-6 h-6 ${
                step.isActive ? "text-white" : "text-[#d2d2d2]"
              }`}
            />

            <div className="flex flex-col w-32 items-start">
              <div
                className={`self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0.42px] leading-4 ${
                  step.isActive ? "text-white" : "text-[#d2d2d2]"
                }`}
              >
                {step.number}
              </div>

              <div
                className={`self-stretch [font-family:'Inter',Helvetica] font-medium text-[19px] tracking-[0.57px] leading-6 ${
                  step.isActive ? "text-white" : "text-[#d2d2d2]"
                }`}
              >
                {step.label}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
};

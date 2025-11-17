import { CreditCardIcon, MapPinIcon, TruckIcon } from "lucide-react";
import React from "react";

interface ShipmentMethodSectionProps {
  currentStep: number;
}

const steps = [
  {
    number: "Step 1",
    label: "Address",
    icon: MapPinIcon,
    stepNumber: 1,
  },
  {
    number: "Step 2",
    label: "Shipping",
    icon: TruckIcon,
    stepNumber: 2,
  },
  {
    number: "Step 3",
    label: "Payment",
    icon: CreditCardIcon,
    stepNumber: 3,
  },
];

export const ShipmentMethodSection = ({ currentStep }: ShipmentMethodSectionProps): JSX.Element => {
  return (
    <nav className="flex items-center justify-between px-40 py-[72px] w-full">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = currentStep === step.stepNumber;
        return (
          <div key={index} className="inline-flex h-10 items-center gap-2">
            <Icon
              className={`w-6 h-6 ${
                isActive ? "text-white" : "text-[#d2d2d2]"
              }`}
            />

            <div className="flex flex-col w-32 items-start">
              <div
                className={`self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0.42px] leading-4 ${
                  isActive ? "text-white" : "text-[#d2d2d2]"
                }`}
              >
                {step.number}
              </div>

              <div
                className={`self-stretch [font-family:'Inter',Helvetica] font-medium text-[19px] tracking-[0.57px] leading-6 ${
                  isActive ? "text-white" : "text-[#d2d2d2]"
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

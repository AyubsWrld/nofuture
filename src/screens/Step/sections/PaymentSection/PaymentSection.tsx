import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

const shipmentOptions = [
  {
    id: "free",
    label: "Free",
    description: "Regulary shipment",
    date: "17 Oct, 2023",
  },
  {
    id: "express",
    label: "$8.50",
    description: "Get your delivery as soon as possible",
    date: "5 Oct, 2023",
  },
  {
    id: "schedule",
    label: "Schedule",
    description: "Pick a date when you want to get your delivery",
    date: "Setup",
  },
];

export const PaymentSection = (): JSX.Element => {
  const [selectedShipment, setSelectedShipment] = useState("free");

  return (
    <section className="flex flex-col items-start gap-16 px-40 py-12 w-full">
      <div className="flex flex-col items-start justify-between flex-1 self-stretch w-full grow">
        <div className="flex flex-col items-start gap-8 self-stretch w-full">
          <h2 className="self-stretch [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-6">
            Shipment Method
          </h2>

          <RadioGroup
            value={selectedShipment}
            onValueChange={setSelectedShipment}
            className="flex flex-col items-start gap-4 self-stretch w-full"
          >
            {shipmentOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-center justify-between p-6 self-stretch w-full bg-[#1f1f1f] rounded-[11px] border border-solid border-neutral-800 cursor-pointer"
                onClick={() => setSelectedShipment(option.id)}
              >
                <div className="gap-4 flex-1 grow flex items-center">
                  <div className="inline-flex items-center gap-4">
                    <RadioGroupItem
                      value={option.id}
                      id={option.id}
                      className="w-6 h-6 rounded-xl border-2 border-solid border-white"
                    />
                    <Label
                      htmlFor={option.id}
                      className="w-fit [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0.10px] leading-6 whitespace-nowrap cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>

                  <p className="flex-1 [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-base tracking-[0] leading-6">
                    {option.description}
                  </p>
                </div>

                <div className="w-fit [font-family:'Inter',Helvetica] font-medium text-[#d2d2d2] text-base tracking-[0.10px] leading-6 whitespace-nowrap">
                  {option.date}
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex flex-wrap items-start justify-end gap-[23px] self-stretch w-full">
          <Button
            variant="outline"
            className="h-auto inline-flex items-center justify-center gap-2 px-[86px] py-6 rounded-md border border-solid border-white bg-transparent hover:bg-white/10"
          >
            <span className="w-fit [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Back
            </span>
          </Button>

          <Button className="h-auto px-[86px] py-6 bg-white rounded-md inline-flex items-center justify-center gap-2 hover:bg-white/90">
            <span className="w-fit [font-family:'Inter',Helvetica] font-medium text-black text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Next
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

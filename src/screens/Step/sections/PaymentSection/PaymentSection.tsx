import React from "react";
import { Button } from "../../../../components/ui/button";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { ShippingMethod } from "../../Step";

interface PaymentSectionProps {
  shippingMethods: ShippingMethod[];
  selectedShippingId: string;
  onSelectShipping: (shippingId: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const PaymentSection = ({
  shippingMethods,
  selectedShippingId,
  onSelectShipping,
  onNext,
  onBack,
}: PaymentSectionProps): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-16 px-40 py-12 w-full">
      <div className="flex flex-col items-start justify-between flex-1 self-stretch w-full grow">
        <div className="flex flex-col items-start gap-8 self-stretch w-full">
          <h2 className="self-stretch [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-6">
            Shipment Method
          </h2>

          <RadioGroup
            value={selectedShippingId}
            onValueChange={onSelectShipping}
            className="flex flex-col items-start gap-4 self-stretch w-full"
          >
            {shippingMethods.map((option) => (
              <div
                key={option.id}
                className="flex items-center justify-between p-6 self-stretch w-full bg-[#1f1f1f] rounded-[11px] border border-solid border-neutral-800 cursor-pointer"
                onClick={() => onSelectShipping(option.id)}
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
                      {option.price === 0 ? option.label : `$${option.price.toFixed(2)}`}
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
            onClick={onBack}
            className="h-auto inline-flex items-center justify-center gap-2 px-[86px] py-6 rounded-md border border-solid border-white bg-transparent hover:bg-white/10"
          >
            <span className="w-fit [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Back
            </span>
          </Button>

          <Button
            onClick={onNext}
            className="h-auto px-[86px] py-6 bg-white rounded-md inline-flex items-center justify-center gap-2 hover:bg-white/90"
          >
            <span className="w-fit [font-family:'Inter',Helvetica] font-medium text-black text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Next
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

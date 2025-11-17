import { PencilIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

const addressData = [
  {
    id: "address-1",
    title: "2118 Thornridge",
    badge: "HOME",
    fullAddress: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    phone: "(209) 555-0104",
  },
  {
    id: "address-2",
    title: "2118 Thornridge",
    badge: "HOME",
    fullAddress: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    phone: "(209) 555-0104",
  },
];

export const AddressSelectionSection = (): JSX.Element => {
  const [selectedAddress, setSelectedAddress] = useState("address-1");

  return (
    <div className="flex flex-col items-start gap-16 px-40 py-12 w-full">
      <div className="flex flex-col items-start justify-between flex-1 w-full">
        <div className="flex flex-col items-start gap-8 w-full">
          <h2 className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-6">
            Select Address
          </h2>

          <div className="flex flex-col items-start gap-12 w-full">
            <RadioGroup
              value={selectedAddress}
              onValueChange={setSelectedAddress}
              className="flex flex-col items-start gap-6 w-full"
            >
              {addressData.map((address) => (
                <div
                  key={address.id}
                  className={`flex items-center justify-between p-6 w-full rounded-[7px] border border-solid border-neutral-800 ${
                    selectedAddress === address.id
                      ? "bg-[#1f1f1f]"
                      : "bg-[#141414]"
                  }`}
                >
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-center gap-4 w-full">
                      <div className="inline-flex items-center gap-4">
                        <RadioGroupItem
                          value={address.id}
                          className="w-6 h-6 rounded-xl border-2 border-solid border-white data-[state=checked]:border-white"
                        />

                        <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0.15px] leading-6 whitespace-nowrap">
                          {address.title}
                        </div>
                      </div>

                      <Badge className="inline-flex items-center justify-center gap-2 px-2 py-1 bg-[#d2d2d2] rounded hover:bg-[#d2d2d2]">
                        <span className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#141414] text-xs tracking-[0] leading-[normal]">
                          {address.badge}
                        </span>
                      </Badge>
                    </div>

                    <div className="flex flex-col items-start gap-2 pl-10 pr-0 py-0 w-full">
                      <div className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-base tracking-[0] leading-6">
                        {address.fullAddress}
                      </div>

                      <div className="flex items-end gap-3 w-full">
                        <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-base tracking-[0] leading-6 whitespace-nowrap">
                          {address.phone}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-start gap-6">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-6 h-6 p-0 hover:bg-transparent"
                    >
                      <PencilIcon className="w-[17px] h-[17px]" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-6 h-6 p-0 hover:bg-transparent"
                    >
                      <XIcon className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              ))}
            </RadioGroup>

            <button className="flex flex-col items-center gap-2 w-full cursor-pointer bg-transparent border-none p-0">
              <div className="flex h-6 items-center w-full">
                <img
                  className="flex-1 self-stretch"
                  alt="Line"
                  src="/line.svg"
                />

                <div className="w-6 h-6 bg-[url(/subtract-2.svg)] bg-[100%_100%]" />

                <img
                  className="flex-1 self-stretch"
                  alt="Line"
                  src="/line-2.svg"
                />
              </div>

              <div className="w-[188.59px] [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-sm text-center tracking-[0.10px] leading-4">
                Add New Address
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-end gap-[24px_24px] w-full mt-16">
          <Button
            variant="outline"
            className="h-auto inline-flex items-center justify-center gap-2 px-[86px] py-6 rounded-md border border-solid border-white bg-transparent hover:bg-white/10"
          >
            <span className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Back
            </span>
          </Button>

          <Button className="h-auto px-[86px] py-6 bg-white rounded-md inline-flex items-center justify-center gap-2 hover:bg-white/90">
            <span className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-black text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Next
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

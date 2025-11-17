import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";

const summaryItems = [
  {
    id: 1,
    name: "Jet Set Radio Bracelett",
    price: "$1399",
    image: "/image-phone-mini-2.png",
  },
  {
    id: 2,
    name: "Jet Set Radio Bracelett",
    price: "$1399",
    image: "/image-phone-mini-2.png",
  },
  {
    id: 3,
    name: "Jet Set Radio Bracelett",
    price: "$1399",
    image: "/image-phone-mini-2.png",
  },
];

const paymentTabs = [
  { id: "credit-card", label: "Credit Card", active: true },
  { id: "paypal", label: "PayPal", active: false },
  { id: "paypal-credit", label: "PayPal Credit", active: false },
];

export const SummarySection = (): JSX.Element => {
  return (
    <section className="gap-24 pt-6 pb-[72px] px-40 w-full flex items-start">
      <Card className="flex-1 bg-[#141414] rounded-[10px] border border-solid border-neutral-800">
        <CardContent className="flex flex-col items-start gap-6 px-6 py-8">
          <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-xl tracking-[0.60px] leading-4">
            Summary
          </h2>

          <div className="flex flex-col items-start gap-4 w-full">
            {summaryItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 pl-4 pr-0 py-4 w-full bg-[#1f1f1f] rounded-[13px] border border-solid border-neutral-800"
              >
                <div
                  className="w-10 h-10 bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                <div className="justify-between pl-0 pr-6 py-0 flex-1 flex items-center">
                  <div className="w-[319px] [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                    {item.name}
                  </div>

                  <div className="[font-family:'Inter',Helvetica] font-bold text-white text-base text-right tracking-[0] leading-6 whitespace-nowrap">
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="[font-family:'Inter',Helvetica] font-medium text-[#d2d2d2] text-sm tracking-[0] leading-4">
                  Address
                </div>

                <div className="gap-[87px] px-0 py-3 w-full flex items-center rounded-[7px]">
                  <div className="flex items-center justify-center flex-1 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                    1131 Dusty Townline, Jacksonville, TX 40322
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                <div className="[font-family:'Inter',Helvetica] font-medium text-[#d2d2d2] text-sm tracking-[0] leading-4">
                  Shipment method
                </div>

                <div className="justify-around gap-[87px] w-full flex items-center rounded-[7px]">
                  <div className="flex items-center justify-center flex-1 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                    Free
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-end justify-center flex-1 [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0.48px] leading-6">
                  Subtotal
                </div>

                <div className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0.48px] leading-8 whitespace-nowrap">
                  $2347
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="justify-between w-full flex items-center">
                    <div className="flex items-end justify-center flex-1 [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-base tracking-[0] leading-8">
                      Estimated Tax
                    </div>

                    <div className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0.48px] leading-8 whitespace-nowrap">
                      $50
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="justify-between w-full flex items-center">
                    <div className="flex items-end justify-center flex-1 [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-base tracking-[0.48px] leading-8">
                      Estimated shipping &amp; Handling
                    </div>

                    <div className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0.48px] leading-8 whitespace-nowrap">
                      $29
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="flex items-end justify-center flex-1 [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0.48px] leading-6">
                  Total
                </div>

                <div className="[font-family:'Inter',Helvetica] font-bold text-white text-base tracking-[0.48px] leading-8 whitespace-nowrap">
                  $2426
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col items-start justify-between flex-1 self-stretch">
        <div className="flex flex-col items-start gap-10 w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0.60px] leading-4">
              Payment
            </h2>

            <nav className="flex items-center gap-14 w-full">
              {paymentTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`inline-flex items-center justify-center gap-2 px-0 py-2 ${
                    tab.active ? "border-b border-white" : ""
                  }`}
                >
                  <span
                    className={`[font-family:'Inter',Helvetica] font-medium text-sm tracking-[0.42px] leading-4 whitespace-nowrap ${
                      tab.active ? "text-white" : "text-[#d2d2d2]"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-start gap-10 w-full">
            <img
              className="w-[337px] h-[190px] mb-[-835.00px] mr-[-2916.00px] object-cover"
              alt="Image"
            />

            <div className="flex flex-col items-start gap-4 w-full">
              <Input
                placeholder="Cardholder Name"
                className="h-12 px-4 py-3 w-full rounded-[7px] border-[0.5px] border-solid border-[#cecece] bg-transparent [font-family:'Inter',Helvetica] font-normal text-[#979797] text-sm tracking-[-0.07px] leading-4"
              />

              <Input
                placeholder="Card Number"
                className="h-12 px-4 py-3 w-full rounded-[7px] border-[0.5px] border-solid border-[#cecece] bg-transparent [font-family:'Inter',Helvetica] font-normal text-[#979797] text-sm tracking-[-0.07px] leading-4"
              />

              <div className="flex items-start gap-4 w-full">
                <Input
                  placeholder="Exp.Date"
                  className="h-12 px-4 py-3 flex-1 rounded-[7px] border-[0.5px] border-solid border-[#cecece] bg-transparent [font-family:'Inter',Helvetica] font-normal text-[#979797] text-sm tracking-[-0.07px] leading-4"
                />

                <Input
                  placeholder="CVV"
                  className="h-12 px-4 py-3 flex-1 rounded-[7px] border-[0.5px] border-solid border-[#cecece] bg-transparent [font-family:'Inter',Helvetica] font-normal text-[#979797] text-sm tracking-[-0.07px] leading-4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full">
          <Checkbox
            id="billing-address"
            className="flex-shrink-0 bg-white rounded-[3px] data-[state=checked]:bg-white data-[state=checked]:text-black"
          />
          <label
            htmlFor="billing-address"
            className="flex-1 [font-family:'Inter',Helvetica] font-medium text-white text-[15px] tracking-[0] leading-6 cursor-pointer"
          >
            Same as billing address
          </label>
        </div>

        <div className="flex flex-wrap items-start justify-end gap-[23px] w-full">
          <Button
            variant="outline"
            className="h-auto px-[86px] py-6 rounded-md border border-solid border-white bg-transparent hover:bg-transparent"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Back
            </span>
          </Button>

          <Button className="h-auto px-[86px] py-6 bg-white rounded-md hover:bg-white/90">
            <span className="[font-family:'Inter',Helvetica] font-medium text-black text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Next
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

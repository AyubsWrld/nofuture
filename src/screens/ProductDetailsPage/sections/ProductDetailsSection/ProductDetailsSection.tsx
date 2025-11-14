import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const attributeOneRows = [
  { element: "Element", value: "Value" },
  { element: "Element", value: "Value" },
  { element: "Element", value: "Value" },
  { element: "Element", value: "Value" },
  { element: "Element", value: "Value" },
];

const attributeTwoRows = [
  { element: "Element", value: "Value" },
  { element: "Element", value: "Value" },
];

export const ProductDetailsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10 px-40 py-20 w-full bg-[#0b0b0b]">
      <Card className="bg-[#141414] border-none rounded-lg w-full">
        <CardContent className="flex flex-col items-center gap-8 px-10 py-12">
          <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-2xl tracking-[0] leading-8 self-stretch">
            Details
          </h2>

          <p className="[font-family:'Inter',Helvetica] text-[#d2d2d2] text-sm leading-6 self-stretch font-medium tracking-[0]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&#39;s.Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry&#39;s.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry&#39;s.Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&#39;s.
          </p>

          <div className="flex flex-col items-start gap-10 w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-xl tracking-[0] leading-6 self-stretch">
                Attribute (1)
              </h3>

              <div className="flex flex-col items-start gap-6 w-full">
                {attributeOneRows.map((row, index) => (
                  <div
                    key={`attribute-one-${index}`}
                    className="flex items-end justify-between pt-0 pb-2 px-0 w-full border-b-[0.5px] border-solid border-[#cdcdcd]"
                  >
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-base tracking-[0] leading-6 whitespace-nowrap">
                      {row.element}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-[15px] tracking-[0] leading-6 whitespace-nowrap">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 w-full">
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-xl tracking-[0] leading-6 self-stretch">
                Attribute (2)
              </h3>

              <div className="flex flex-col items-start gap-6 w-full">
                {attributeTwoRows.map((row, index) => (
                  <div
                    key={`attribute-two-${index}`}
                    className="flex items-start justify-between pt-0 pb-2 px-0 w-full border-b-[0.5px] border-solid border-[#cdcdcd]"
                  >
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-base tracking-[0] leading-6 whitespace-nowrap">
                      {row.element}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-[15px] tracking-[0] leading-6 whitespace-nowrap">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="h-auto px-14 py-3 rounded-lg border border-solid border-white bg-transparent hover:bg-white/10"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
              View More
            </span>
            <ChevronDownIcon className="w-6 h-6 text-white" />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

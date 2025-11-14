import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

const colorOptions = [
  { id: "black", className: "bg-black border-neutral-800" },
  { id: "white", className: "bg-[#ececec] border-neutral-800" },
  { id: "gray", className: "bg-neutral-800" },
];

const sizeOptions = ["S", "M", "L", "XL"];

const measurements = [
  {
    icon: "/icon-24px-screensize.svg",
    label: "Width",
    value: '30"',
  },
  {
    icon: "/icon-24px-screensize.svg",
    label: "Shoulder",
    value: '30"',
  },
  {
    icon: "/icon-24px-screensize.svg",
    label: "Length",
    value: '30"',
  },
];

const productInfo = [
  {
    icon: "/icon-56px-delivery.svg",
    title: "Free Delivery",
    value: "1-2 day",
  },
  {
    icon: "/icon-56px-stock.svg",
    title: "In Stock",
    value: "30",
  },
  {
    icon: "/icon-56px-guaranteed.svg",
    title: "Guaranteed",
    value: "1 year",
  },
];

export const ProductMainInfoSection = (): JSX.Element => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("XL");

  return (
    <section className="flex items-center gap-12 px-40 py-28 w-full bg-[#0b0b0b]">
      <img
        className="w-[536px]"
        alt="Black KH Sora Product"
        src="/images.svg"
      />

      <div className="gap-8 flex-1 flex flex-col items-start">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="font-bold text-[40px] leading-10 [font-family:'Inter',Helvetica] text-white tracking-[0]">
              Black KH Sora
            </h1>

            <div className="flex items-center gap-4 w-full">
              <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[32px] tracking-[0.96px] leading-[48px]">
                $45
              </p>

              <p className="flex-1 [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-2xl tracking-[0.72px] leading-8 line-through">
                $89
              </p>
            </div>
          </div>

          <div className="gap-6 w-full flex flex-col items-start">
            <div className="flex items-center gap-6 w-full">
              <label className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[0] leading-6">
                Select color :
              </label>

              <div className="flex items-center gap-2 flex-1">
                {colorOptions.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-8 h-8 rounded-2xl border border-solid ${color.className} ${
                      selectedColor === color.id
                        ? "ring-2 ring-white ring-offset-2 ring-offset-[#0b0b0b]"
                        : ""
                    }`}
                    aria-label={`Select ${color.id} color`}
                  />
                ))}
              </div>
            </div>

            <ToggleGroup
              type="single"
              value={selectedSize}
              onValueChange={(value) => value && setSelectedSize(value)}
              className="flex items-center gap-4 w-full"
            >
              {sizeOptions.map((size) => (
                <ToggleGroupItem
                  key={size}
                  value={size}
                  className={`flex-1 px-6 py-4 rounded-lg border border-solid ${
                    selectedSize === size ? "border-white" : "border-[#d2d2d2]"
                  } [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-4 ${
                    selectedSize === size ? "text-white" : "text-[#d2d2d2]"
                  } data-[state=on]:bg-transparent data-[state=on]:text-white data-[state=on]:border-white`}
                >
                  {size}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>

            <div className="flex flex-wrap items-start gap-4 w-full">
              {measurements.map((measurement, index) => (
                <Card
                  key={index}
                  className="flex min-w-[168px] flex-1 bg-[#141414] rounded-[7px] border-[#333535]"
                >
                  <CardContent className="flex items-center gap-2 p-4 w-full">
                    <img
                      className="w-6 h-6"
                      alt={`${measurement.label} icon`}
                      src={measurement.icon}
                    />
                    <div className="flex-1 [font-family:'Inter',Helvetica] font-normal text-sm tracking-[0]">
                      <div className="text-[#d2d2d2] leading-4">
                        {measurement.label}
                      </div>
                      <div className="font-medium text-white leading-[0.1px]">
                        {measurement.value}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="h-[72px] [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-sm tracking-[0.42px] leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-start gap-4 w-full">
          <Button
            variant="outline"
            className="min-w-[136px] flex-1 px-14 py-4 h-auto bg-white rounded-md border border-solid text-white [font-family:'Inter',Helvetica] font-medium text-base tracking-[0] leading-6"
          >
            Add to Wishlist
          </Button>

          <Button className="min-w-[136px] flex-1 px-14 py-4 h-auto bg-white rounded-md text-black [font-family:'Inter',Helvetica] font-medium text-base tracking-[0] leading-6">
            Add to Cart
          </Button>
        </div>

        <div className="flex items-center gap-8 w-full">
          {productInfo.map((info, index) => (
            <div
              key={index}
              className="flex items-center gap-4 flex-1 rounded-lg"
            >
              <img
                className="flex-shrink-0"
                alt={`${info.title} icon`}
                src={info.icon}
              />
              <div className="[font-family:'Inter',Helvetica] font-normal text-sm tracking-[0]">
                <div className="font-medium text-[#d2d2d2] leading-[0.1px]">
                  {info.title}
                </div>
                <div className="font-medium text-white leading-6">
                  {info.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

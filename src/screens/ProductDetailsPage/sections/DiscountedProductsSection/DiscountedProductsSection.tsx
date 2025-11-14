import { HeartIcon, StarIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const products = [
  {
    id: 1,
    title: "Jeff Hardy Zip Up",
    price: "$95.00",
    image: "/iphone-14-pro-1-2.png",
  },
  {
    id: 2,
    title: "Jeff Hardy Zip Up",
    price: "$95.00",
    image: "/iphone-14-pro-1-2.png",
  },
  {
    id: 3,
    title: "Jeff Hardy Zip Up",
    price: "$95.00",
    image: "/iphone-14-pro-1-2.png",
  },
];

export const DiscountedProductsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-8 px-40 py-20 w-full bg-[#0b0b0b]">
      <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-2xl tracking-[0] leading-8">
        Related Products
      </h2>

      <div className="flex flex-wrap items-start gap-4 w-full">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col min-w-[200px] h-[367px] items-center justify-between px-4 py-6 flex-1 bg-[#141414] rounded-[9px] border border-solid border-neutral-800"
          >
            <CardContent className="flex flex-col items-center justify-between h-full w-full p-0 gap-0">
              <div className="flex items-center justify-end w-full">
                <button
                  className="w-8 h-8 flex items-center justify-center"
                  aria-label="Add to favorites"
                >
                  <HeartIcon className="w-5 h-5 text-white" />
                </button>
              </div>

              <img
                className="w-40 h-40 object-cover"
                alt={product.title}
                src={product.image}
              />

              <div className="flex items-start justify-center gap-6 w-full">
                <div className="flex flex-col items-start gap-1 flex-1">
                  <h3 className="font-medium text-white text-base [font-family:'Inter',Helvetica] tracking-[0] leading-6 whitespace-nowrap">
                    {product.title}
                  </h3>

                  <p className="[font-family:'Inter',Helvetica] font-medium text-[#909090] text-base tracking-[0.48px] leading-6 whitespace-nowrap">
                    {product.price}
                  </p>
                </div>

                <div className="inline-flex items-center justify-center gap-2">
                  <button aria-label="Add to favorites">
                    <StarIcon className="w-[22px] h-5 text-white" />
                  </button>

                  <Badge className="inline-flex items-center justify-center gap-2 px-2 py-1 bg-[#2c2c2e] rounded hover:bg-[#2c2c2e]">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-mainwhite text-[10px] tracking-[0] leading-[10px]">
                      Tags
                    </span>
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

import {
  ChevronDown,
  ChevronUp,
  Heart,
  Search,
} from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";

const brandCategories = [
  { id: 1, label: "Category", count: 125 },
  { id: 2, label: "Category", count: 125 },
  { id: 3, label: "Category", count: 125 },
  { id: 4, label: "Category", count: 125 },
  { id: 5, label: "Category", count: 125 },
  { id: 6, label: "Category", count: 125 },
];

const products = [
  {
    id: 1,
    name: "Jeff Hardy Zip Up",
    price: "$95.00",
    image: "/iphone-14-pro-1-5.png",
    tag: "Tags",
  },
  {
    id: 2,
    name: "Jeff Hardy Zip Up",
    price: "$95.00",
    image: "/iphone-14-pro-1-5.png",
    tag: "Tags",
  },
  {
    id: 3,
    name: "Jeff Hardy Zip Up",
    price: "$95.00",
    image: "/iphone-14-pro-1-5.png",
    tag: "Tags",
  },
  {
    id: 4,
    name: "Jeff Hardy Zip Up",
    price: "$95.00",
    image: "/iphone-14-pro-1-5.png",
    tag: "Tags",
  },
  {
    id: 5,
    name: "Jeff Hardy Zip Up",
    price: "$95.00",
    image: "/iphone-14-pro-1-5.png",
    tag: "Tags",
  },
  {
    id: 6,
    name: "Jeff Hardy Zip Up",
    price: "$95.00",
    image: "/iphone-14-pro-1-5.png",
    tag: "Tags",
  },
];

const filterSections = [
  { id: 1, title: "Sizes" },
  { id: 2, title: "Type" },
  { id: 3, title: "Material" },
];

const paginationDots = [1, 2, 3, 4];

export const ProductGridSection = (): JSX.Element => {
  const [brandExpanded, setBrandExpanded] = useState(true);
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});

  const toggleSection = (id: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="flex items-start gap-8 pt-6 pb-14 px-8 md:px-20 lg:px-40 w-full bg-[#0b0b0b]">
      <aside className="flex flex-col max-w-64 items-end gap-6 flex-1">
        <div className="flex flex-col items-end gap-4 w-full">
          <div className="inline-flex flex-col items-start gap-2.5 px-0 py-3 border-b-[0.5px] border-[#b5b5b5] w-full">
            <button 
              onClick={() => setBrandExpanded(!brandExpanded)}
              className="inline-flex items-start justify-between w-full"
            >
              <div className="flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0.54px] leading-6 text-left">
                Brand
              </div>
              {brandExpanded ? (
                <ChevronUp className="w-6 h-6 text-white" />
              ) : (
                <ChevronDown className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {brandExpanded && (
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                {brandCategories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center gap-2 w-full"
                  >
                    <Checkbox className="w-[16.33px] h-[15.67px] rounded-[3px] border-[0.5px] border-[#d2d2d2]" />
                    <div className="flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-6">
                      <span className="font-medium text-white">
                        {category.label}{" "}
                      </span>
                      <span className="text-[#d2d2d2] text-xs">
                        {category.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {filterSections.map((section) => (
          <div
            key={section.id}
            className="inline-flex flex-col items-start gap-2.5 px-0 py-3 border-b-[0.5px] border-[#dddddd] w-full"
          >
            <button 
              onClick={() => toggleSection(section.id)}
              className="inline-flex items-start justify-between w-full"
            >
              <div className="flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0.54px] leading-6 text-left">
                {section.title}
              </div>
              {expandedSections[section.id] ? (
                <ChevronUp className="w-6 h-6 text-white" />
              ) : (
                <ChevronDown className="w-6 h-6 text-white" />
              )}
            </button>
            {expandedSections[section.id] && (
              <div className="text-white text-sm pt-2">
                {/* Add filter content here */}
                Filter options for {section.title}
              </div>
            )}
          </div>
        ))}
      </aside>

      <main className="flex flex-col items-center gap-10 flex-1">
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-wrap justify-between gap-4 items-center w-full">
            <div className="inline-flex min-w-[200px] items-end gap-1.5">
              <div className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#d2d2d2] text-base tracking-[0.48px] leading-4 whitespace-nowrap">
                Selected Products:
              </div>
              <div className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-xl text-center tracking-[0.60px] leading-4 whitespace-nowrap">
                85
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {products.map((product) => (
              <Card
                key={product.id}
                className="flex flex-col items-center gap-4 bg-[#141414] rounded-[9px] border border-solid border-neutral-800 cursor-pointer hover:bg-neutral-800 transition-colors overflow-hidden"
              >
                <CardContent className="flex flex-col items-center gap-4 p-4 w-full">
                  <div className="flex items-center justify-end gap-2 w-full">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 p-0 hover:bg-neutral-700"
                    >
                      <Heart className="w-5 h-5 text-white" />
                    </Button>
                  </div>

                  <img
                    className="w-40 h-40 object-cover"
                    alt={product.name}
                    src={product.image}
                  />

                  <div className="flex items-start justify-between gap-4 w-full">
                    <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
                      <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                        {product.name}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-medium text-[#909090] text-base tracking-[0.48px] leading-6">
                        {product.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 flex-shrink-0">
                      <Heart className="w-5 h-5 text-neutral-500" />
                      <Badge className="px-2 py-1 bg-[#2c2c2e] rounded hover:bg-[#2c2c2e]">
                        <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[10px] whitespace-nowrap">
                          {product.tag}
                        </span>
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <nav className="inline-flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="w-6 h-6 p-0 hover:bg-transparent"
          >
            <img
              className="w-6 h-6"
              alt="Icon arrow"
              src="/icon-24px-arrow-2.svg"
            />
          </Button>

          <div className="inline-flex items-end gap-2">
            <Button className="inline-flex flex-col items-center justify-center gap-2 px-3 py-1 bg-[#1f1f1f] rounded-[5px] h-auto hover:bg-[#1f1f1f]">
              <span className="mt-[-0.50px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0.48px] leading-6 whitespace-nowrap">
                1
              </span>
            </Button>

            <Button className="inline-flex flex-col items-center justify-center gap-2 px-[11px] py-1 bg-[#141414] rounded-[5px] h-auto hover:bg-[#141414]">
              <span className="mt-[-0.50px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff14] text-base text-center tracking-[0.48px] leading-6 whitespace-nowrap">
                2
              </span>
            </Button>

            <Button className="inline-flex flex-col items-center justify-center gap-2 px-[11px] py-1 bg-[#141414] rounded-[5px] h-auto hover:bg-[#141414]">
              <span className="mt-[-0.50px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff14] text-base text-center tracking-[0.48px] leading-6 whitespace-nowrap">
                3
              </span>
            </Button>

            <div className="inline-flex items-start gap-1 pt-0 pb-[3px] px-0">
              {paginationDots.map((dot) => (
                <div
                  key={dot}
                  className="w-[3px] h-[3px] bg-[#d2d2d2] rounded-[1.5px]"
                />
              ))}
            </div>

            <Button className="inline-flex flex-col items-center justify-center gap-2 px-[11px] py-1 bg-[#141414] rounded-[5px] h-auto hover:bg-[#141414]">
              <span className="mt-[-0.50px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff14] text-base text-center tracking-[0.48px] leading-6 whitespace-nowrap">
                12
              </span>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="w-6 h-6 p-0 hover:bg-transparent"
          >
            <img
              className="w-6 h-6"
              alt="Icon arrow"
              src="/icon-24px-arrow.svg"
            />
          </Button>
        </nav>
      </main>
    </section>
  );
};

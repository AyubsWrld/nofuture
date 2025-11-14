import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const categories = [
  { icon: "/icon-phones.svg", label: "Clothes" },
  { icon: "/icon-phones.svg", label: "Category" },
  { icon: "/icon-phones.svg", label: "Category" },
  { icon: "/icon-phones.svg", label: "Category" },
  { icon: "/icon-phones.svg", label: "Category" },
  { icon: "/icon-phones.svg", label: "Category" },
];

/* Pull from db*/ 

const products = [
  {
    image: "/iphone-14-pro-1-5.png",
    title: "Jeff Hardy Zip Up",
    price: "$95.00",
    tag: "Clothes",
  },
  {
    image: "/iphone-14-pro-1-5.png",
    title: "Jeff Hardy Zip Up",
    price: "$95.00",
    tag: "Clothes",
  },
  {
    image: "/iphone-14-pro-1-5.png",
    title: "Jeff Hardy Zip Up",
    price: "$95.00",
    tag: "Tags",
  },
  {
    image: "/iphone-14-pro-1-5.png",
    title: "Jeff Hardy Zip Up",
    price: "$95.00",
    tag: "Clothes",
  },
  {
    image: "/iphone-14-pro-1-5.png",
    title: "Jeff Hardy Zip Up",
    price: "$95.00",
    tag: "Clothes",
  },
  {
    image: "/iphone-14-pro-1-5.png",
    title: "Jeff Hardy Zip Up",
    price: "$95.00",
    tag: "Tags",
  },
];

export const CategoryBrowseSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-8 px-8 md:px-20 lg:px-40 py-20 w-full bg-[#0b0b0b]">
      <header className="flex items-center justify-between w-full">
        <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-2xl tracking-[0.24px] leading-8">
          Browse By Category
        </h2>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-auto w-auto p-2 hover:bg-neutral-800"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-auto w-auto p-2 hover:bg-neutral-800"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {categories.map((category, index) => (
          <Card
            key={`category-${index}`}
            className="flex flex-col h-32 items-center justify-center gap-2 bg-[#141414] rounded-[15px] border border-solid border-neutral-800 cursor-pointer hover:bg-neutral-800 transition-colors"
          >
            <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
              <img
                className="w-12 h-12"
                alt="Icon phones"
                src={category.icon}
              />
              <p className="[font-family:'Inter',Helvetica] font-medium text-[#909090] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                {category.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-start gap-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {products.slice(0, 3).map((product, index) => (
            <Card
              key={`product-row1-${index}`}
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
                  alt={product.title}
                  src={product.image}
                />

                <div className="flex items-start justify-between gap-4 w-full">
                  <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                      {product.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-medium text-[#909090] text-base tracking-[0.48px] leading-6">
                      {product.price}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 flex-shrink-0">
                    <img
                      className="w-[22px] h-5"
                      alt="Vector"
                      src="/vector-15.svg"
                    />
                    <Badge className="px-2 py-1 bg-[#2c2c2e] rounded hover:bg-[#2c2c2e]">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-mainwhite text-[10px] text-center tracking-[0] leading-[10px] whitespace-nowrap">
                        {product.tag}
                      </span>
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {products.slice(3, 6).map((product, index) => (
            <Card
              key={`product-row2-${index}`}
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
                  alt={product.title}
                  src={product.image}
                />

                <div className="flex items-start justify-between gap-4 w-full">
                  <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
                    <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                      {product.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-medium text-[#909090] text-base tracking-[0.48px] leading-6">
                      {product.price}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 flex-shrink-0">
                    <img
                      className="w-[22px] h-5"
                      alt="Vector"
                      src="/vector-15.svg"
                    />
                    <Badge className="px-2 py-1 bg-[#2c2c2e] rounded hover:bg-[#2c2c2e]">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-mainwhite text-[10px] text-center tracking-[0] leading-[10px] whitespace-nowrap">
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
    </section>
  );
};

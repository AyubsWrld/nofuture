import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  tag: string;
  description?: string;
  rating?: number;
  reviews?: number;
}

interface ProductMainInfoSectionProps {
  product?: Product;
}

export const ProductMainInfoSection = ({ product }: ProductMainInfoSectionProps): JSX.Element => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Default product data if none provided
  const defaultProduct: Product = {
    id: "1",
    image: "/iphone-14-pro-1-5.png",
    title: "Jeff Hardy Zip Up",
    price: "$95.00",
    tag: "Clothes",
    description: "Premium quality zip-up hoodie with unique design",
    rating: 4.5,
    reviews: 128
  };

  const currentProduct = product || defaultProduct;

  // Mock additional images for gallery
  const productImages = [
    currentProduct.image,
    currentProduct.image,
    currentProduct.image,
    currentProduct.image,
  ];

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <section className="flex flex-col md:flex-row items-start gap-8 px-8 md:px-20 lg:px-40 py-12 w-full bg-[#0b0b0b]">
      {/* Product Images */}
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
        {/* Thumbnail Gallery */}
        <div className="flex md:flex-col gap-2 order-2 md:order-1">
          {productImages.map((img, index) => (
            <Card
              key={`thumb-${index}`}
              onClick={() => setSelectedImage(index)}
              className={`cursor-pointer transition-all ${
                selectedImage === index
                  ? "border-2 border-white"
                  : "border border-neutral-800"
              } bg-[#141414] rounded-lg overflow-hidden hover:border-neutral-600`}
            >
              <CardContent className="p-2">
                <img
                  src={img}
                  alt={`${currentProduct.title} thumbnail ${index + 1}`}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Image */}
        <Card className="flex-1 bg-[#141414] border-neutral-800 rounded-lg overflow-hidden order-1 md:order-2">
          <CardContent className="p-8 flex items-center justify-center">
            <img
              src={productImages[selectedImage]}
              alt={currentProduct.title}
              className="w-full max-w-md h-auto object-contain"
            />
          </CardContent>
        </Card>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        {/* Breadcrumb - Optional */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#909090]">Home</span>
          <span className="text-[#909090]">/</span>
          <span className="text-[#909090]">Products</span>
          <span className="text-[#909090]">/</span>
          <span className="text-white">{currentProduct.title}</span>
        </div>

        {/* Title and Badge */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <h1 className="[font-family:'Inter',Helvetica] font-semibold text-white text-3xl md:text-4xl tracking-[0] leading-tight">
              {currentProduct.title}
            </h1>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 p-0 hover:bg-neutral-800 flex-shrink-0"
            >
              <Heart className="w-6 h-6 text-white" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Badge className="px-3 py-1 bg-[#2c2c2e] rounded hover:bg-[#2c2c2e]">
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0]">
                {currentProduct.tag}
              </span>
            </Badge>
          </div>
        </div>

        {/* Rating */}
        {currentProduct.rating && (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(currentProduct.rating!)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-neutral-600 fill-neutral-600"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-white text-sm font-medium">
              {currentProduct.rating}
            </span>
            <span className="text-[#909090] text-sm">
              ({currentProduct.reviews} reviews)
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-3">
          <span className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl tracking-[0]">
            {currentProduct.price}
          </span>
        </div>

        {/* Description */}
        {currentProduct.description && (
          <p className="[font-family:'Inter',Helvetica] text-[#d2d2d2] text-base leading-relaxed">
            {currentProduct.description}
          </p>
        )}

        {/* Divider */}
        <div className="w-full h-px bg-neutral-800" />

        {/* Size Selection - Optional */}
        <div className="flex flex-col gap-3">
          <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm">
            Select Size
          </span>
          <div className="flex gap-2">
            {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
              <Button
                key={size}
                variant="outline"
                className="h-10 px-4 rounded border border-neutral-800 bg-transparent hover:bg-white hover:text-black text-white font-medium"
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center gap-3 bg-[#141414] rounded-lg border border-neutral-800 px-4 py-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleQuantityChange(-1)}
              className="h-8 w-8 p-0 hover:bg-neutral-800"
            >
              <Minus className="w-4 h-4 text-white" />
            </Button>
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-lg min-w-[3ch] text-center">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleQuantityChange(1)}
              className="h-8 w-8 p-0 hover:bg-neutral-800"
            >
              <Plus className="w-4 h-4 text-white" />
            </Button>
          </div>

          {/* Add to Cart Button */}
          <Button className="flex-1 h-auto px-8 py-3 rounded-lg bg-white hover:bg-white/90 text-black font-semibold">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
        </div>

        {/* Additional Info */}
        <div className="flex flex-col gap-2 pt-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#909090]">SKU:</span>
            <span className="text-white">{currentProduct.id}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#909090]">Category:</span>
            <span className="text-white">{currentProduct.tag}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#909090]">Availability:</span>
            <span className="text-green-500">In Stock</span>
          </div>
        </div>
      </div>
    </section>
  );
};

import { MinusIcon, PlusIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useRouter } from "../../../../lib/router/Router.tsx";
import { Input } from "../../../../components/ui/input";

const cartItems = [
  {
    id: "25139526913984",
    name: "Jet Set Radio Bracelett",
    image: "/image-56.png",
    price: 1399,
    quantity: 1,
  },
  {
    id: "53459358345",
    name: "Jet Set Radio Bracelett",
    image: "/image-56-1.png",
    price: 549,
    quantity: 1,
  },
  {
    id: "63632324",
    name: "Jet Set Radio Bracelett",
    image: "/image-56-2.png",
    price: 399,
    quantity: 1,
  },
];

export const ShoppingCartSection = (): JSX.Element => {
    const { navigate } = useRouter();

    const Goto = ( destination : string ) => 
    {
        switch(destination)
        {
            case "Home" :
                navigate('/');
                break;
            case "Products" :
                navigate('/products');
                break;

            case "Cart" :
                navigate('/cart');
                break;

            default: 
                navigate('/checkout');
        }
    }

    return (
        <section className="flex items-center gap-12 px-40 py-28 w-full bg-[#0c0c0c]">
        <div className="items-start flex-1 flex gap-12">
            <div className="flex flex-col items-start gap-10 flex-1">
            <h1 className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-6">
                Shopping Cart
            </h1>

            <div className="flex flex-col items-start gap-10 self-stretch w-full rounded-[15px]">
                {cartItems.map((item, index) => (
                <div
                    key={item.id}
                    className={`flex items-center gap-[15px] pt-4 px-0 self-stretch w-full ${
                    index < cartItems.length - 1
                        ? "pb-8 border-b-[0.5px] border-neutral-400"
                        : "pb-4"
                    }`}
                >
                    <div
                    className="w-[90px] h-[90px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                    />

                    <div className="flex flex-wrap items-center gap-[8px_0px] flex-1">
                    <div className="flex flex-col min-w-[106px] items-start gap-2 flex-1">
                        <div className="self-stretch [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                        {item.name}
                        </div>

                        <div className="self-stretch [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-sm tracking-[0] leading-6">
                        #{item.id}
                        </div>
                    </div>

                    <div className="inline-flex items-center justify-end gap-6">
                        <div className="inline-flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="w-6 h-6 p-0 hover:bg-transparent"
                        >
                            <MinusIcon className="w-6 h-6 text-white" />
                        </Button>

                        <div className="inline-flex flex-col items-center justify-center gap-2 px-4 py-2 rounded border-[0.5px] border-solid border-[#d9d9d9]">
                            <div className="[-webkit-text-stroke:1px_#ffffff] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
                            {item.quantity}
                            </div>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="w-6 h-6 p-0 hover:bg-transparent"
                        >
                            <PlusIcon className="w-6 h-6 text-white" />
                        </Button>
                        </div>

                        <div className="text-xl tracking-[0.60px] w-fit [font-family:'Inter',Helvetica] font-medium text-white leading-8 whitespace-nowrap">
                        ${item.price}
                        </div>

                        <Button
                        variant="ghost"
                        size="icon"
                        className="w-6 h-6 p-0 hover:bg-transparent"
                        >
                        <XIcon className="w-6 h-6 text-white" />
                        </Button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>

            <Card className="flex flex-col items-start gap-10 px-16 py-14 flex-1 rounded-[10px] border border-solid border-neutral-800 bg-transparent">
            <CardContent className="p-0 w-full">
                <h2 className="self-stretch [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-4 mb-12">
                Order Summary
                </h2>

                <div className="flex flex-col items-center self-stretch w-full gap-12">
                <div className="flex flex-col items-start gap-6 self-stretch w-full">
                    <div className="flex flex-col items-start gap-6 self-stretch w-full">
                    <div className="flex flex-col items-start gap-2 self-stretch w-full">
                        <label className="self-stretch [font-family:'Inter',Helvetica] font-medium text-[#d2d2d2] text-sm tracking-[0] leading-4">
                        Discount code / Promo code
                        </label>

                        <Input
                        placeholder="Code"
                        className="flex items-center justify-around pl-4 pr-0 py-4 self-stretch w-full rounded-[7px] border-[0.5px] border-solid border-[#d2d2d2] bg-transparent [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-sm tracking-[-0.07px] leading-6 h-auto"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-2 self-stretch w-full">
                        <label className="self-stretch [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-4">
                        Your bonus card number
                        </label>

                        <div className="flex items-center justify-between p-4 self-stretch w-full rounded-[7px] border-[0.5px] border-solid border-[#d2d2d2]">
                        <Input
                            placeholder="Enter Card Number"
                            className="flex items-center justify-center flex-1 border-0 bg-transparent [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-sm tracking-[-0.07px] leading-6 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                        />

                        <Button
                            variant="outline"
                            className="w-[76.45px] h-8 p-2 border border-solid border-white rounded-md bg-transparent hover:bg-white/10"
                        >
                            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-4">
                            Apply
                            </span>
                        </Button>
                        </div>
                    </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 self-stretch w-full">
                    <div className="flex items-center justify-between self-stretch w-full">
                        <div className="flex items-end justify-center flex-1 [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0.48px] leading-6">
                        Subtotal
                        </div>

                        <div className="text-base tracking-[0.48px] w-fit [font-family:'Inter',Helvetica] font-medium text-white leading-8 whitespace-nowrap">
                        $2347
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 self-stretch w-full">
                        <div className="flex flex-col items-start gap-4 self-stretch w-full">
                        <div className="flex items-center justify-between self-stretch w-full">
                            <div className="flex items-end justify-center flex-1 [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-base tracking-[0] leading-8">
                            Estimated Tax
                            </div>

                            <div className="text-base tracking-[0.48px] w-fit [font-family:'Inter',Helvetica] font-medium text-white leading-8 whitespace-nowrap">
                            $50
                            </div>
                        </div>
                        </div>

                        <div className="flex flex-col items-start gap-4 self-stretch w-full">
                        <div className="flex items-center justify-between self-stretch w-full">
                            <div className="flex items-end justify-center flex-1 [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-base tracking-[0.48px] leading-8">
                            Estimated shipping &amp; Handling
                            </div>

                            <div className="text-base tracking-[0.48px] w-fit [font-family:'Inter',Helvetica] font-medium text-white leading-8 whitespace-nowrap">
                            $29
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between self-stretch w-full">
                        <div className="flex items-end justify-center flex-1 [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0.48px] leading-6">
                        Total
                        </div>

                        <div className="text-base tracking-[0.48px] w-fit [font-family:'Inter',Helvetica] font-medium text-white leading-8 whitespace-nowrap">
                        $2426
                        </div>
                    </div>
                    </div>
                </div>

                <Button 
                                onClick={ () => { Goto('/cart') }}
                                className="px-14 py-4 self-stretch w-full bg-white hover:bg-white/90 rounded-md h-auto">
                    <span className="w-fit [font-family:'Inter',Helvetica] font-medium text-black text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                    Checkout
                    </span>
                </Button>
                </div>
            </CardContent>
            </Card>
        </div>
        </section>
    );
};

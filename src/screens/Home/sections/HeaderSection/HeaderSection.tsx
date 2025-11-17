import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { useRouter } from "../../../../lib/router/Router.tsx";

const navigationItems = [
  { label: "Home" },
  { label: "Products" },
  { label: "About" },
  { label: "Blog" },
  { label: "Contact" },
];

export const HeaderSection = (): JSX.Element => {
    
    /* Try catch for navigating to the necessary page */ 

    const Goto = ( destination : string ) => 
    {
        switch(destination)
        {
            case "Home" :
                navigate('/');
                break;
            case "Products" :
                navigate('/Products');
                break;

            default: 
                navigate('/');
        }
    }
    const { navigate } = useRouter();
    return (
        <header className="flex items-center justify-around gap-8 px-40 py-4 w-full bg-[#0b0b0b]">
        <nav className="inline-flex items-center gap-8 p-3 bg-[#141414] rounded-[20px] border border-solid border-[#2a2a2a]">
            <div className="inline-flex items-center gap-1 px-1 py-0">
            <img className="w-[55px] h-[34px]" alt="Layer" src="/layer-1.svg" />

            <div className="flex items-center justify-center w-[97px] font-bold text-xl text-center leading-[30px] [font-family:'Inter_Tight',Helvetica] text-white tracking-[0]">
                Nofuture
            </div>
            </div>

            <Separator orientation="vertical" className="w-px h-5 bg-white/20" />

            <div className="inline-flex items-center justify-center gap-5 p-2.5">
            {navigationItems.map((item, index) => (
                <button
                key={index}
                className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] hover:opacity-80 transition-opacity"
                onClick={ () => { Goto(item.label)} }
                >
                {item.label}
                </button>
            ))}
            </div>

            <Separator orientation="vertical" className="w-px h-5 bg-white/20" />

            <Button className="h-auto px-4 py-3.5 bg-[#0064e0] rounded-xl border-t-2 [border-top-style:solid] border-[#0071ff] shadow-[0px_0px_0px_1px_#0050b2,inset_0px_-3px_0px_#004fb2] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[21px] [text-shadow:0px_1px_3px_#0000001a] hover:bg-[#0064e0] hover:opacity-90">
            Cart
            </Button>
        </nav>
        </header>
    );
};

export default HeaderSection;


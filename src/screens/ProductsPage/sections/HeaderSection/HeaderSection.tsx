import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationLinks = [
  { label: "Customers" },
  { label: "About" },
  { label: "Blog" },
  { label: "Contact" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex items-center justify-around gap-8 px-40 py-4 w-full bg-[#0b0b0b]">
      <nav className="inline-flex items-center gap-8 p-3 bg-[#141414] rounded-[20px] border border-solid border-[#2a2a2a]">
        <div className="inline-flex items-center gap-1 px-1 py-0">
          <img className="w-[55px] h-[34px]" alt="Layer" src="/layer-1.svg" />

          <div className="flex items-center justify-center w-[97px] [font-family:'Inter_Tight',Helvetica] font-bold text-white text-xl text-center tracking-[0] leading-[30px]">
            Nofuture
          </div>
        </div>

        <img className="w-px h-5 object-cover" alt="Line" src="/line-9.svg" />

        <div className="inline-flex items-center justify-center gap-5 p-2.5">
          {navigationLinks.map((link, index) => (
            <button
              key={index}
              className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] hover:opacity-80 transition-opacity"
            >
              {link.label}
            </button>
          ))}
        </div>

        <img className="w-px h-5 object-cover" alt="Line" src="/line-9.svg" />

        <Button className="inline-flex items-center justify-center gap-2 px-4 py-3.5 h-auto bg-[#0064e0] rounded-xl overflow-hidden border-t-2 [border-top-style:solid] border-[#0071ff] shadow-[0px_0px_0px_1px_#0050b2,inset_0px_-3px_0px_#004fb2] hover:bg-[#0064e0] hover:opacity-90">
          <span className="flex items-center justify-center w-fit mt-[-2.00px] [text-shadow:0px_1px_3px_#0000001a] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
            Cart
          </span>
        </Button>
      </nav>
    </header>
  );
};

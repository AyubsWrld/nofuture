import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const aboutLinks = [{ label: "Contact Us" }, { label: "Blog" }];

const sectionLinks = [
  { label: "Outerwear" },
  { label: "Accessories" },
  { label: "Denim" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col p-20 bg-transparent rounded-[32px] overflow-hidden items-start self-stretch w-full">
      <div className="flex justify-between items-start self-stretch w-full mb-8">
        <div className="flex flex-col w-[280px] items-start gap-2">
          <h2 className="w-fit mt-[-1.00px] font-medium text-2xl leading-[33.6px] whitespace-nowrap [font-family:'Inter_Tight',Helvetica] text-white tracking-[0]">
            Nofuture
          </h2>

          <p className="font-medium text-[#999999] self-stretch [font-family:'Inter_Tight',Helvetica] text-lg tracking-[0] leading-[25.2px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s.
          </p>
        </div>

        <nav className="inline-flex flex-col items-start gap-2">
          <h3 className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
            About
          </h3>

          {aboutLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="w-fit [font-family:'Inter_Tight',Helvetica] font-medium text-[#999999] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="inline-flex flex-col items-start gap-2">
          <h3 className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
            Sections
          </h3>

          {sectionLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="w-fit [font-family:'Inter_Tight',Helvetica] font-medium text-[#999999] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Card className="w-[281px] h-[334px] bg-[#131313] rounded-3xl border-0">
          <CardContent className="flex flex-col items-start gap-2.5 p-2.5 h-full">
            <Button
              variant="secondary"
              className="flex items-center gap-2.5 p-3 self-stretch w-full h-auto bg-white rounded-[32px] hover:bg-gray-100"
            >
              <div className="w-10 h-10 bg-[#141414] rounded-[20px] overflow-hidden flex items-center justify-center flex-shrink-0">
                <img className="w-3 h-3" alt="Twitter x" src="/twitter-x.svg" />
              </div>

              <span className="[font-family:'Inter_Tight',Helvetica] font-medium text-black text-lg tracking-[0] leading-[25.2px] whitespace-nowrap">
                Follow Nofuture on X
              </span>
            </Button>

            <div className="relative flex-1 self-stretch w-full bg-[#1e1e1e] rounded-[32px] overflow-hidden flex items-center justify-center">
              <div className="absolute left-[calc(50.00%_-_72px)] bottom-5 w-[143px] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[25.2px]">
                Music Album <br />
                QR Code
              </div>

              <img
                className="absolute top-[31px] left-[75px] w-[110px] h-[110px]"
                alt="Qr code"
                src="/qr-code.svg"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="inline-flex items-center gap-[11px]">
        <p className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#999999] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap">
          Copyrights 2024
        </p>

        <div className="w-1 h-1 bg-[#d9d9d9] rounded-sm" />

        <p className="w-fit mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-[#999999] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap">
          Nofuture
        </p>
      </div>
    </footer>
  );
};

export default FooterSection; 

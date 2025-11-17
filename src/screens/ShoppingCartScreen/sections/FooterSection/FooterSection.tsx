import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const footerLinks = {
  about: [{ label: "Contact Us" }, { label: "Blog" }],
  sections: [
    { label: "Outerwear" },
    { label: "Accessories" },
    { label: "Denim" },
  ],
};

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-start p-20 w-full bg-[#0c0c0c] rounded-[32px] overflow-hidden">
      <div className="flex items-start justify-between w-full mb-8">
        <div className="flex flex-col w-[280px] items-start gap-2">
          <h2 className="[font-family:'Inter_Tight',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
            Nofuture
          </h2>

          <p className="[font-family:'Inter_Tight',Helvetica] font-medium text-[#999999] text-lg tracking-[0] leading-[25.2px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s.
          </p>
        </div>

        <nav className="inline-flex flex-col items-start gap-2">
          <h3 className="[font-family:'Inter_Tight',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
            About
          </h3>

          {footerLinks.about.map((link, index) => (
            <a
              key={index}
              href="#"
              className="[font-family:'Inter_Tight',Helvetica] font-medium text-[#999999] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="inline-flex flex-col items-start gap-2">
          <h3 className="[font-family:'Inter_Tight',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
            Sections
          </h3>

          {footerLinks.sections.map((link, index) => (
            <a
              key={index}
              href="#"
              className="[font-family:'Inter_Tight',Helvetica] font-medium text-[#999999] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Card className="w-[281px] h-[334px] bg-[#131313] rounded-3xl border-0">
          <CardContent className="flex flex-col items-start gap-2.5 p-2.5 h-full">
            <Button
              variant="secondary"
              className="flex items-center gap-2.5 p-3 w-full h-auto bg-white rounded-[32px] hover:bg-gray-100"
            >
              <div className="w-10 h-10 bg-[#141414] rounded-[20px] flex items-center justify-center shrink-0">
                <img className="w-3 h-3" alt="Twitter x" src="/twitter-x.svg" />
              </div>

              <span className="[font-family:'Inter_Tight',Helvetica] font-medium text-black text-lg tracking-[0] leading-[25.2px] whitespace-nowrap">
                Follow Nofuture on X
              </span>
            </Button>

            <div className="flex-1 w-full bg-[#1e1e1e] rounded-[32px] overflow-hidden relative">
              <div className="absolute left-1/2 -translate-x-1/2 bottom-5 [font-family:'Inter_Tight',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[25.2px]">
                Music Album <br />
                QR Code
              </div>

              <img
                className="absolute top-[31px] left-1/2 -translate-x-1/2 w-[110px] h-[110px]"
                alt="Qr code"
                src="/qr-code.svg"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="inline-flex items-center gap-[11px]">
        <span className="[font-family:'Inter_Tight',Helvetica] font-medium text-[#999999] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap">
          Copyrights 2024
        </span>

        <div className="w-1 h-1 bg-[#d9d9d9] rounded-sm" />

        <span className="[font-family:'Inter_Tight',Helvetica] font-medium text-[#999999] text-lg tracking-[0] leading-[25.2px] whitespace-nowrap">
          Nofuture
        </span>
      </div>
    </footer>
  );
};

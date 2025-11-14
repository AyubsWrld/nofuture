import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  const navigationDots = [
    { size: "w-3 h-3", rounded: "rounded-md" },
    { size: "w-4 h-4", rounded: "rounded-lg" },
    { size: "w-3 h-3", rounded: "rounded-md" },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center px-20 py-[120px] relative rounded-[32px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_50%,rgba(12,12,12,0)_0%,rgba(12,12,12,1)_100%),url(..//section-three.png)_50%_50%_/_cover]">
      <div className="inline-flex flex-col items-center gap-6 relative w-full max-w-[1200px]">
        <div className="flex flex-col items-center justify-center gap-2.5 px-0 py-8 relative self-stretch w-full">
          <Card className="flex w-full items-center justify-center gap-5 px-5 py-[72px] relative bg-[#141414] rounded-3xl overflow-hidden border border-solid border-[#344054]">
            <CardContent className="flex items-center justify-center gap-5 p-0 w-full">
              <div className="flex flex-col items-start justify-center gap-10 p-16 relative flex-1 self-stretch">
                <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full">
                  <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-[40px] tracking-[0] leading-[48.0px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s.
                  </h2>

                  <p className="[-webkit-text-stroke:1px_#666666] font-normal text-[#ffffff0d] relative self-stretch [font-family:'Inter_Tight',Helvetica] text-lg tracking-[0] leading-[25.2px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s.
                  </p>
                </div>

                <Button className="px-4 py-3.5 bg-[#0064e0] rounded-xl overflow-hidden border-t-2 [border-top-style:solid] border-[#0071ff] shadow-[0px_0px_0px_1px_#0050b2,inset_0px_-3px_0px_#004fb2] inline-flex items-center justify-center gap-2 relative h-auto hover:bg-[#0064e0]">
                  <span className="relative flex items-center justify-center w-[107px] h-5 mt-[-2.00px] [text-shadow:0px_1px_3px_#0000001a] [font-family:'Inter_Tight',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                    Shop Now
                  </span>
                </Button>
              </div>

              <div className="relative flex-1 self-stretch rounded-3xl overflow-hidden">
                <div className="absolute left-[57px] -bottom-px w-[460px] h-[557px] bg-[#1a1a1a] rounded-[19.2px]" />
              </div>

              <nav className="inline-flex flex-col items-center justify-center gap-[7px] p-2 relative bg-[#141414] rounded-[32px] overflow-hidden border border-solid border-[#344054] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
                {navigationDots.map((dot, index) => (
                  <button
                    key={index}
                    className={`relative ${dot.size} bg-[#344054] ${dot.rounded} border border-solid backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] hover:bg-[#444054] transition-colors cursor-pointer`}
                    aria-label={`Navigate to slide ${index + 1}`}
                  />
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

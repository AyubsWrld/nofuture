import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

export const BreadcrumbsSection = (): JSX.Element => {
  const breadcrumbItems = [
    { label: "Home", isActive: false },
    { label: "Catalog", isActive: false },
    { label: "Black KH Sora", isActive: true },
  ];

  return (
    <nav className="flex items-center gap-4 px-4 md:px-20 lg:px-40 py-10 w-full bg-[#0b0b0b]">
      <Breadcrumb>
        <BreadcrumbList className="flex items-center gap-4">
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.isActive ? (
                  <BreadcrumbPage className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-4 whitespace-nowrap">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink className="[font-family:'Inter',Helvetica] font-medium text-[#d2d2d2] text-base tracking-[0] leading-4 whitespace-nowrap">
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator>
                  <ChevronRightIcon className="w-6 h-6 text-[#d2d2d2]" />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
};

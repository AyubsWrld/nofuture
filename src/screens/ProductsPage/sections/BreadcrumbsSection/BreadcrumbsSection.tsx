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
  return (
    <div className="flex items-center px-40 py-10 w-full">
      <Breadcrumb>
        <BreadcrumbList className="flex items-center gap-4">
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="[font-family:'Inter',Helvetica] font-medium text-[#d2d2d2] text-base tracking-[0] leading-4 whitespace-nowrap"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRightIcon className="w-6 h-6 text-[#d2d2d2]" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="[font-family:'Inter',Helvetica] font-medium text-[#d2d2d2] text-base tracking-[0] leading-4 whitespace-nowrap"
            >
              Catalog
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRightIcon className="w-6 h-6 text-[#d2d2d2]" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-4 whitespace-nowrap">
              Clothes
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

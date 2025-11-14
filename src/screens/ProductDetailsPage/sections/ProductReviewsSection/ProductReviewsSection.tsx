import { ChevronDownIcon, StarIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const ratingBreakdown = [
  { label: "Excellent", count: 100, width: "w-[82%]" },
  { label: "Good", count: 11, width: "w-[45%]" },
  { label: "Average", count: 3, width: "w-[17%]" },
  { label: "Below Average", count: 8, width: "w-[38%]" },
  { label: "Poor", count: 1, width: "w-[7.5%]" },
];

const reviews = [
  {
    name: "Grace Carey",
    date: "24 January,2023",
    rating: 4,
    avatarBg: "bg-[#d9d9d914]",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    name: "Ronald Richards",
    date: "24 January,2023",
    rating: 5,
    avatarBg: "bg-[#232323]",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    name: "Darcy King",
    date: "24 January,2023",
    rating: 4,
    avatarBg: "bg-[#232323]",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
];

export const ProductReviewsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 px-40 py-[88px] w-full bg-[#0b0b0b] rounded-3xl">
      <div className="flex flex-col items-start justify-center gap-12 w-full">
        <header className="flex items-center gap-8 w-full">
          <h2 className="flex-1 [font-family:'Inter',Helvetica] font-medium text-white text-2xl tracking-[0] leading-8">
            Reviews
          </h2>
        </header>

        <div className="flex flex-wrap items-center gap-[60px] w-full">
          <Card className="inline-flex flex-col items-center gap-4 p-8 bg-[#1f1f1f] rounded-[25px] border-0">
            <CardContent className="flex flex-col items-center gap-4 p-0">
              <div className="[font-family:'Inter',Helvetica] font-medium text-white text-[56px] text-center tracking-[0] leading-[56px]">
                4.8
              </div>

              <div className="opacity-30 [font-family:'Inter',Helvetica] font-medium text-[#d2d2d2] text-[15px] text-center tracking-[0] leading-4">
                of 125 reviews
              </div>

              <div className="flex items-center justify-between w-full gap-1">
                {[1, 2, 3, 4].map((star) => (
                  <StarIcon
                    key={star}
                    className="w-[18.51px] h-[17.77px] fill-[#ffb547] text-[#ffb547]"
                  />
                ))}
                <StarIcon className="w-[18.51px] h-[17.77px] fill-[#7e7e7e] text-[#7e7e7e]" />
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col min-w-[390px] items-start gap-6 flex-1">
            {ratingBreakdown.map((rating, index) => (
              <div key={index} className="flex items-center gap-4 w-full">
                <div className="w-[150px] [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-4">
                  {rating.label}
                </div>

                <div className="flex items-start flex-1 bg-[#d9d9d9] rounded-2xl overflow-hidden h-[5px]">
                  <div
                    className={`${rating.width} h-[5px] bg-[#ffb547] rounded-2xl`}
                  />
                </div>

                <div className="inline-flex items-center gap-2">
                  <div className="w-[30px] opacity-40 [font-family:'Inter',Helvetica] font-medium text-[#d2d2d2] text-base text-right tracking-[0] leading-4">
                    {rating.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Input
          placeholder="Leave Comment"
          className="flex items-center px-4 py-6 w-full h-auto rounded-[7px] border-[0.5px] border-solid border-[#d2d2d2] bg-transparent [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-sm tracking-[-0.07px] leading-4"
        />
      </div>

      <div className="flex flex-col items-center gap-6 w-full">
        {reviews.map((review, index) => (
          <Card
            key={index}
            className="flex items-start gap-[19px] pl-4 pr-7 py-6 w-full bg-[#141414] rounded-[10px] border border-solid border-neutral-800"
          >
            <CardContent className="flex items-start gap-[19px] p-0 w-full">
              <Avatar className={`w-14 h-14 ${review.avatarBg} rounded-[28px]`}>
                <AvatarFallback className={`${review.avatarBg}`} />
              </Avatar>

              <div className="flex flex-col items-start gap-2 flex-1">
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex items-start justify-between w-full">
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#d2d2d2] text-[17px] tracking-[0] leading-6 whitespace-nowrap">
                      {review.name}
                    </h3>

                    <time className="opacity-20 [font-family:'Inter',Helvetica] font-medium text-mainblack text-sm text-right tracking-[0] leading-4 whitespace-nowrap">
                      {review.date}
                    </time>
                  </div>

                  <div className="inline-flex items-center justify-center gap-0">
                    {[...Array(5)].map((_, starIndex) => (
                      <StarIcon
                        key={starIndex}
                        className={`w-[18.51px] h-[17.77px] ${
                          starIndex < review.rating
                            ? "fill-[#ffb547] text-[#ffb547]"
                            : "fill-[#7e7e7e] text-[#7e7e7e]"
                        } ${starIndex > 0 ? "ml-[-0.86px]" : ""}`}
                      />
                    ))}
                  </div>
                </div>

                <p className="[font-family:'Inter',Helvetica] font-medium text-[#7e7e7e] text-[15px] tracking-[0] leading-6">
                  {review.text}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}

        <Button
          variant="outline"
          className="inline-flex px-14 py-3 h-auto bg-white rounded-lg border border-solid border-[#545454] items-center justify-center gap-2"
        >
          <span className="[font-family:'Inter',Helvetica] font-medium text-mainblack text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
            View More
          </span>
          <ChevronDownIcon className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

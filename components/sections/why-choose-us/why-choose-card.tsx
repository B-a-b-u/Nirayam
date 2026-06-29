"use client";

import Image from "next/image";
import { WhyChooseItem } from "@/app/api/why-choose-data";


type Props = {
  item: WhyChooseItem;
};

export default function WhyCard({ item }: Props) {

  return (
    <div
      className="
        group
        relative
        flex
        flex-col
        justify-between
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-card
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-lg
        hover:shadow-primary/5
      "
    >
      <div
        className="
          absolute
          -right-5
          -top-5
          h-28
          w-28
          rounded-full
          bg-primary/5
          transition-all
          duration-500
          group-hover:scale-150
        "
      />

      <div className="relative z-10 flex flex-col gap-5">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            
   
            transition-all
            group-hover:border-primary/20
            group-hover:bg-primary/5
          "
        >
          <Image
          src={item.image}
          alt={item.title}
          width={170}
          height={170}
          priority={false}
          className="
            h-28
            w-28
            object-contain
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
        </div>

        <div>
          <h3
            className="
              text-lg
              font-semibold
              text-heading
              transition-colors
              group-hover:text-primary
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-7
              text-muted
            "
          >
            {item.description}
          </p>
        </div>
      </div>

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-primary
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </div>
  );
}
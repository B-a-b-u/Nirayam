"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Service } from "@/app/api/services-data";

type Props = {
  service: Service;
  active: boolean;
  onClick: () => void;
};

const ServiceCard = ({
  service,
  active,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      aria-label={service.title}
      className={`
        group
        relative
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        bg-card
        p-7
        text-left
        transition-all
        duration-300

        ${
          active
            ? "border-primary shadow-xl shadow-primary/10"
            : "border-border hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
        }
      `}
    >
      {/* Active Accent */}
      <div
        className={`
          absolute
          left-0
          top-0
          h-full
          w-1
          rounded-full
          transition-all
          ${
            active
              ? "bg-primary"
              : "bg-transparent group-hover:bg-primary/40"
          }
        `}
      />

      {/* Illustration */}
      <div className="mb-8 flex justify-center">
        <Image
          src={service.image}
          alt={service.title}
          width={140}
          height={140}
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

      {/* Title */}
      <h3
        className="
          text-xl
          font-semibold
          text-heading
        "
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-3
          flex-grow
          text-sm
          leading-7
          text-body
        "
      >
        {service.description}
      </p>

      {/* Footer */}
      <div
        className="
          mt-8
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-sm
            font-medium
            text-primary
          "
        >
          View Details
        </span>

        <ArrowRight
          className="
            h-5
            w-5
            text-primary
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </div>
    </button>
  );
};

export default ServiceCard;
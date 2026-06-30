"use client";

import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import {
  contactInfo,
  whyWorkWithUs,
} from "@/app/api/contact-data";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">


      {/* Contact Cards */}

      <div className="grid gap-4 sm:grid-cols-2">

        {contactInfo.map((item) => {

          return (
            <div
              key={item.title}
             className="
group
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
    mb-6
    flex
    h-28
    w-28
    items-center
    justify-center
    rounded-3xl
   
    p-5
  "
>
  <Image
    src={item.image}
    alt={item.title}
    width={100}
    height={100}
    className="object-contain"
  />
</div>
              <h3
                className="
                  text-lg
                  font-semibold
                  text-heading
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-2
                  font-medium
                  text-body
                "
              >
                {item.value}
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-muted
                "
              >
                {item.description}
              </p>

            </div>
          );
        })}

      </div>

      {/* Why Work With Us */}

      <div
        className="
          rounded-2xl
          border
          border-border
          bg-card
          p-6
        "
      >

        <h3
          className="
            text-xl
            font-semibold
            text-heading
          "
        >
          Why Businesses Choose Nirayam
        </h3>

        <div
          className="
            mt-5
            space-y-4
          "
        >
          {whyWorkWithUs.map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-3
              "
            >
              <CheckCircle2
                className="
                  h-5
                  w-5
                  shrink-0
                  text-success
                "
              />

              <span
                className="
                  text-body
                "
              >
                {item}
              </span>

            </div>
          ))}
        </div>

      </div>


    </div>
  );
}
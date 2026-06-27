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

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">

      
      {/* Contact Cards */}

      <div className="grid gap-4 sm:grid-cols-2">

        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-border
                bg-card
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/30
              "
            >

              <div
                className="
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                "
              >
                <Icon
                  className="
                    h-5
                    w-5
                    text-primary
                  "
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
                  text-primary
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
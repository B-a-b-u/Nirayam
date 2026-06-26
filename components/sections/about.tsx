"use client";

import {
    ArrowRight,
} from "lucide-react";

import { aboutContent } from "@/app/api/about-data";

export default function About() {
    return (
        <section
            id="about"
            className="
        border-t
        border-border/40
        bg-background
        py-24
      "
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}

                <div className="mx-auto max-w-3xl text-center">

                    <span
                        className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-primary
            "
                    >
                        {aboutContent.heading}
                    </span>

                    <h2
                        className="
              mt-4
              text-4xl
              font-bold
              tracking-tight
              text-heading
              md:text-5xl
            "
                    >
                        {aboutContent.title}
                    </h2>

                    <p
                        className="
              mt-6
              text-lg
              leading-relaxed
              text-body
            "
                    >
                        {aboutContent.subtitle}
                    </p>

                </div>

                {/* Story */}

                <div
                    className="
            mt-20
            grid
            gap-8
            lg:grid-cols-2
          "
                >
                    <div
                        className="
              rounded-3xl
              border
              border-border
              bg-card
              p-8
            "
                    >
                        <h3
                            className="
                text-2xl
                font-semibold
                text-heading
              "
                        >
                            Who We Are
                        </h3>

                        <p
                            className="
                mt-5
                leading-8
                text-body
              "
                        >
                            {aboutContent.whoWeAre}
                        </p>

                    </div>

                    <div
                        className="
              rounded-3xl
              border
              border-border
              bg-card
              p-8
            "
                    >
                        <h3
                            className="
                text-2xl
                font-semibold
                text-heading
              "
                        >
                            Why We Started
                        </h3>

                        <p
                            className="
                mt-5
                leading-8
                text-body
              "
                        >
                            {aboutContent.whyStarted}
                        </p>

                    </div>
                </div>

                {/* Vision Mission */}

                <div
                    className="
            mt-12
            grid
            gap-8
            lg:grid-cols-2
          "
                >
                    {[aboutContent.vision, aboutContent.mission].map(
                        (item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
                    rounded-3xl
                    border
                    border-border
                    bg-card
                    p-8
                  "
                                >
                                    <div
                                        className="
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
                        h-6
                        w-6
                        text-primary
                      "
                                        />
                                    </div>

                                    <h3
                                        className="
                      mt-6
                      text-2xl
                      font-semibold
                      text-heading
                    "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                      mt-4
                      leading-8
                      text-body
                    "
                                    >
                                        {item.description}
                                    </p>

                                </div>
                            );
                        }
                    )}
                </div>

                {/* Values */}

                <div className="mt-20">

                    <h3
                        className="
              text-center
              text-3xl
              font-bold
              text-heading
            "
                    >
                        Core Values
                    </h3>

                    <div
                        className="
              mt-10
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
                    >
                        {aboutContent.values.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
                    rounded-3xl
                    border
                    border-border
                    bg-card
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/30
                  "
                                >
                                    <Icon
                                        className="
                      h-6
                      w-6
                      text-primary
                    "
                                    />

                                    <h4
                                        className="
                      mt-5
                      text-xl
                      font-semibold
                      text-heading
                    "
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        className="
                      mt-3
                      text-sm
                      leading-7
                      text-body
                    "
                                    >
                                        {item.description}
                                    </p>

                                </div>
                            );
                        })}
                    </div>

                </div>
               

            </div>
        </section>
    );
}
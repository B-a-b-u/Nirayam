"use client";

import {
    ArrowRight,
} from "lucide-react";

import { aboutContent } from "@/app/api/about-data";
import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="
    relative
    overflow-hidden
    border-t
    border-border/40
    bg-background
    py-24
  "
        >
            {/* Decorative Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}

                <div className="mx-auto max-w-3xl text-center">

                    <p
                        className="
      text-sm
      font-semibold
      uppercase
      tracking-widest
      text-primary
    "
                    >
                        About Nirayam Technologies
                    </p>

                    <h2
                        className="
          mt-6
          font-heading
          text-4xl
          font-bold
          tracking-tight
          text-heading
          sm:text-5xl
          lg:text-6xl
        "
                    >
                        {aboutContent.title}
                    </h2>

                    <p
                        className="
          mx-auto
          mt-6
          max-w-2xl
          text-lg
          leading-8
          text-body
        "
                    >
                        {aboutContent.subtitle}
                    </p>

                </div>

                {/* Story */}

                <div
                    className="
        mt-24
        grid
        gap-8
        lg:grid-cols-2
      "
                >

                    {/* Who We Are */}

                    <div
                        className="
          group
          rounded-3xl
          border
          border-border
          bg-card
          p-8
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-primary/30
          hover:shadow-xl
          hover:shadow-primary/5
        "
                    >

                        <div
                            className="
            flex
            items-center
            gap-5
          "
                        >

                            <div>

                                <span
                                    className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-primary
              "
                                >
                                    Our Story
                                </span>

                                <h3
                                    className="
                mt-2
                text-3xl
                font-bold
                tracking-tight
                text-heading
              "
                                >
                                    Who We Are
                                </h3>

                            </div>

                        </div>

                        <p
                            className="
            mt-8
            leading-8
            text-body
          "
                        >
                            {aboutContent.whoWeAre}
                        </p>

                    </div>

                    {/* Why Started */}

                    <div
                        className="
          group
          rounded-3xl
          border
          border-border
          bg-card
          p-8
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-primary/30
          hover:shadow-xl
          hover:shadow-primary/5
        "
                    >

                        <div
                            className="
            flex
            items-center
            gap-5
          "
                        >


                            <div>

                                <span
                                    className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-primary
              "
                                >
                                    Our Journey
                                </span>

                                <h3
                                    className="
                mt-2
                text-3xl
                font-bold
                tracking-tight
                text-heading
              "
                                >
                                    Why We Started
                                </h3>

                            </div>

                        </div>

                        <p
                            className="
            mt-8
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
                    {[aboutContent.vision, aboutContent.mission].map((item) => {
                        return (
                            <div
                                key={item.title}
                                className="
          group
          rounded-3xl
          border
          border-border
          bg-card
          p-8
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-primary/30
          hover:shadow-xl
          hover:shadow-primary/5
        "
                            >
                                {/* Image + Title */}

                                <div
                                    className="
            flex
            items-center
            gap-5
          "
                                >
                                    <div
                                        className="
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              rounded-xl
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
              text-2xl
              font-semibold
              text-heading
            "
                                    >
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Description */}

                                <p
                                    className="
            mt-6
            leading-8
            text-body
          "
                                >
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
                {/* Core Values */}

                <div className="mt-28">

                    {/* Header */}

                    <div className="mx-auto max-w-3xl text-center">

                            <h3
                            className="
        mt-5
        text-4xl
        font-bold
        tracking-tight
        text-heading
      "
                        >
                            Core Values
                        </h3>

                        <p
                            className="
        mt-5
        text-lg
        leading-8
        text-body
      "
                        >
                            Every project, every decision, and every line of code is guided
                            by the principles that define how we work and collaborate.
                        </p>

                    </div>

                    {/* Grid */}

                    <div
                        className="
      mt-16
      grid
      gap-8
      sm:grid-cols-2
      xl:grid-cols-4
    "
                    >

                        {aboutContent.values.map((item, index) => (

                            <div
                                key={item.title}
                                className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-border
          bg-card
          p-8
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-primary/30
          hover:shadow-xl
          hover:shadow-primary/5
        "
                            >

                                {/* Decorative Number */}

                                
                                {/* Decorative Background */}

                                <div
                                    className="
            absolute
            -right-14
            -top-14
            h-40
            w-40
            rounded-full
            bg-primary/5
            transition-all
            duration-500
            group-hover:scale-125
          "
                                />

                                {/* Illustration */}

                                <div
                                    className="
            relative
            flex
            justify-center
          "
                                >

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={140}
                                        height={140}
                                        className="
              h-28
              w-auto
              object-contain
              transition-transform
              duration-500
              group-hover:scale-110
            "
                                    />

                                </div>

                                {/* Content */}

                                <div className="relative mt-8 text-center">

                                    <h4
                                        className="
              text-2xl
              font-bold
              tracking-tight
              text-heading
            "
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        className="
              mt-4
              leading-7
              text-body
            "
                                    >
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>


            </div>
        </section>
    );
}
import WhyCard from "./why-choose-card";
import { whyChooseData } from "@/app/api/why-choose-data";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="
        bg-background
        py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        {/* Heading */}

        <div
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
        >
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            Why Choose Nirayam Technologies
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              tracking-tight
              text-heading
              sm:text-4xl
              lg:text-5xl
            "
          >
            We build software that delivers measurable business value.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-muted
            "
          >
            From strategy and design to development and long-term support,
            we focus on delivering reliable digital solutions that help your
            business grow with confidence.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {whyChooseData.map((item) => (
            <WhyCard
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
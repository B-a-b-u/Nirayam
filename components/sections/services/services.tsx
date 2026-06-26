"use client";

import { useState } from "react";
import ServiceCard from "./service-card";
import ServiceDetails from "./service-details";
import { Service } from "@/app/api/services-data";
import { services } from "@/app/api/services-data";

const Services = () => {
  const [selectedService, setSelectedService] =
    useState(services[0]);

  return (
    <section
      id="services"
      className="
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
        {/* Header */}

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-primary
            "
          >
            Services
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              text-heading
              md:text-5xl
            "
          >
            Technology Solutions Built
            Around Your Business Goals
          </h2>

          <p
            className="
              mt-6
              text-body
              md:text-lg
            "
          >
            From custom software to AI
            automation, we create solutions
            that help businesses scale,
            streamline operations and improve
            customer experiences.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              active={
                selectedService.id ===
                service.id
              }
              onClick={() =>
                setSelectedService(service)
              }
            />
          ))}
        </div>

        {/* Expanded Details */}

        <div className="mt-10">
          <ServiceDetails
            service={selectedService}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
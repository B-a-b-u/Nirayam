import { CheckCircle2 } from "lucide-react";

import { Service } from "@/app/api/services-data";


type Props = {
  service: Service;
};

const ServiceDetails = ({
  service,
}: Props) => {
  return (
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
          font-bold
          text-heading
        "
      >
        {service.title}
      </h3>

      <p
        className="
          mt-4
          max-w-3xl
          text-body
        "
      >
        {service.description}
      </p>

      <div
        className="
          mt-8
          grid
          gap-5
          md:grid-cols-2
        "
      >
        {service.features.map((feature) => (
          <div
            key={feature}
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
                text-primary
              "
            />

            <span className="text-body">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
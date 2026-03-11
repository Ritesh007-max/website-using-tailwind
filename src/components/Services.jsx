import React from "react";
import { services } from "../assets/assets";

function Services() {
  return (
    <section className="w-full py-16">
        <hr/>
        <hr/>
      <div className="container mx-auto px-6 py-3">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-black/60 mt-3">
            Practical solutions built around design, development, and growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="rounded-2xl border border-amber-200 bg-white p-6"
              >
                <div className="mb-4 inline-flex rounded-full bg-amber-300 p-4 text-2xl text-black">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm leading-6 text-black/70">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;

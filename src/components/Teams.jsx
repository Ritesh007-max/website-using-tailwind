import React from "react";
import { teams } from "../assets/assets";

function Teams() {
  return (
    <section className="w-full py-16">
        <hr/>
        <hr/>
      <div className="container mx-auto px-6 py-3">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Our teams</h2>
          <p className="text-black/60 mt-3">
            Practical solutions built around design, development, and growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((team) => {
            const imageSrc = team.image;

            return (
              <div
                key={team.name}
                className="rounded-2xl border border-amber-200 bg-white p-6"
              >
                <img
                  src={imageSrc}
                  alt={team.name}
                  className="mb-4 h-20 w-20 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold mb-3">{team.name}</h3>
                <p className="text-sm leading-6 text-black/70">
                  {team.designation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Teams;

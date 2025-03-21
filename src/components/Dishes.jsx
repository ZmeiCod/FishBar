import React from "react";
import DishCard from "./DishCard";
import { DISHES } from "../constants";

export default function Dishes() {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Наши блюда
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {DISHES.map((project, index) => (
          <DishCard className="flex justify-center" key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

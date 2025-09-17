import React from "react";

export const Section = ({ id, title, children }) => (
  <section id={id} className="py-16">
    {title && <h2 className="text-2xl font-semibold">{title}</h2>}
    <div className="mt-6">{children}</div>
  </section>
);


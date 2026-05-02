"use client";

import { motion } from "framer-motion";

import { getActivePersona } from "@/data/portfolio-config";

export function TestimonialsSection() {
  const persona = getActivePersona();

  return (
    <section className="py-16">
      <div className="container space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Testimonials</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What people say about working with me</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {persona.testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="surface rounded-3xl p-8"
            >
              <p className="text-lg leading-8 text-foreground/90">“{item.quote}”</p>
              <footer className="mt-6 text-sm text-muted-foreground">
                {item.name} · {item.role}, {item.company}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

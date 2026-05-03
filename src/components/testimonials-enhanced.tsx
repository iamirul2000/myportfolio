"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
  rating?: number;
}

interface TestimonialsEnhancedProps {
  testimonials: readonly Testimonial[];
}

export function TestimonialsEnhanced({ testimonials }: TestimonialsEnhancedProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="heading-secondary">What People Say</h2>
          <p className="body-large mt-4">
            Feedback from colleagues and clients I&apos;ve worked with
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="card-spacing relative overflow-hidden">
            <Quote className="absolute right-8 top-8 h-24 w-24 text-primary/10" />
            
            <div className="relative space-y-6">
              <div className="flex items-center gap-4">
                {currentTestimonial.image && (
                  <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-primary to-accent">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold">{currentTestimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </p>
                </div>
              </div>

              <blockquote className="text-lg leading-relaxed">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </blockquote>

              {currentTestimonial.rating && (
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "text-2xl",
                        i < currentTestimonial.rating!
                          ? "text-amber-400"
                          : "text-muted"
                      )}
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}
            </div>

            {testimonials.length > 1 && (
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={prevTestimonial}
                  className="focus-ring rounded-full p-2 transition-colors hover:bg-muted"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={cn(
                        "h-2 w-2 rounded-full transition-all focus-ring",
                        index === currentIndex
                          ? "w-8 bg-primary"
                          : "bg-muted hover:bg-muted-foreground/50"
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="focus-ring rounded-full p-2 transition-colors hover:bg-muted"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}

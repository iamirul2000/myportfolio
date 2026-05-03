"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectGalleryEnhancedProps {
  images: GalleryImage[];
  title: string;
}

export function ProjectGalleryEnhanced({ images, title }: ProjectGalleryEnhancedProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];
  const lightboxImage = images[lightboxIndex];

  return (
    <>
      <Card className="overflow-hidden">
        {/* Main Image */}
        <div className="relative aspect-video bg-muted">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-cover"
          />
          
          {/* Zoom Button */}
          <button
            onClick={() => openLightbox(currentIndex)}
            className="absolute right-4 top-4 rounded-lg bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus-ring"
          >
            <ZoomIn className="h-5 w-5" />
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus-ring"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus-ring"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Caption */}
          {currentImage.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm text-white">{currentImage.caption}</p>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="border-t border-border bg-muted/30 p-4">
            <div className="flex gap-2 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all focus-ring",
                    index === currentIndex
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="mt-3 text-center text-xs text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        )}
      </Card>

      {/* Lightbox */}
      {isLightboxOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20 focus-ring"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevLightbox}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 focus-ring"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={nextLightbox}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 focus-ring"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={1920}
                height={1080}
                className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
              />
              {lightboxImage.caption && (
                <div className="mt-4 text-center text-white">
                  <p className="text-sm">{lightboxImage.caption}</p>
                </div>
              )}
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </>
      )}
    </>
  );
}

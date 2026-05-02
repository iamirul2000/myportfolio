"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    
    // Add your analytics tracking here
    // Example: Google Analytics, Plausible, etc.
    if (typeof window !== "undefined") {
      // @ts-ignore
      if (window.gtag) {
        // @ts-ignore
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_path: url,
        });
      }
    }
  }, [pathname, searchParams]);

  return null;
}

// Track custom events
export function trackEvent(eventName: string, eventData?: Record<string, any>) {
  if (typeof window !== "undefined") {
    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag("event", eventName, eventData);
    }
    
    // Console log for development
    if (process.env.NODE_ENV === "development") {
      console.log("Event tracked:", eventName, eventData);
    }
  }
}

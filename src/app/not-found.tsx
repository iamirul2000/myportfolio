import Link from "next/link";
import { Home, ArrowLeft, Search, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center py-20">
      <div className="text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
        </div>

        {/* Message */}
        <h2 className="heading-secondary mb-4">Page Not Found</h2>
        <p className="body-large mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              <Briefcase className="mr-2 h-4 w-4" />
              View Projects
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="mb-4 text-sm text-muted-foreground">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

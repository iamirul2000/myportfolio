import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function ServicesCTA() {
  return (
    <Card className="card-spacing overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="relative text-center">
          <h2 className="text-3xl font-bold">Ready to Work Together?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            If you&apos;re looking for a full stack engineer with backend-heavy experience in production systems, 
            I&apos;d be glad to discuss how I can contribute to your team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                <Mail className="h-4 w-4" />
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume">
                View Resume
              </Link>
            </Button>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            <p>Available for full-time opportunities • Remote or Malaysia-based</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

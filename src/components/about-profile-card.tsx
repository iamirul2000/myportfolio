import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";

interface AboutProfileCardProps {
  name: string;
  role: string;
  location: string;
  email: string;
  resumeFile: string;
}

export function AboutProfileCard({
  name,
  role,
  location,
  email,
  resumeFile,
}: AboutProfileCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-32 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>
      </div>

      <div className="relative px-6 pb-6">
        {/* Avatar */}
        <div className="relative -mt-16 mb-4">
          <div className="inline-flex h-32 w-32 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-accent text-4xl font-bold text-primary-foreground shadow-xl">
            {name.split(" ").map((n) => n[0]).join("")}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-lg text-primary">{role}</p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${email}`} className="hover:text-primary">
                {email}
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="sm" className="gap-2">
              <Link href={resumeFile} download>
                <Download className="h-4 w-4" />
                Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link href="https://github.com/iamirul2000" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link href="https://www.linkedin.com/in/mirul-/" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

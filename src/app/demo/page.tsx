import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Live Demos",
  description: "Explore interactive demos of my projects. Try out the features and see the applications in action.",
  path: "/demo"
});

interface DemoProject {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  demoUrl?: string;
  projectUrl: string;
  techStack: string[];
  status: "live" | "coming-soon";
}

const demoProjects: DemoProject[] = [
  {
    title: "MoneyPlan Budget Planner",
    slug: "moneyplan-budget-planner",
    description: "A personal finance and budget planning web application. Track expenses, manage budgets, and achieve your financial goals.",
    thumbnail: "/images/projects/budget-planner.png",
    demoUrl: "", // Add your demo URL here
    projectUrl: "/projects/moneyplan-budget-planner",
    techStack: ["Web Development", "Budget Planning", "Personal Finance"],
    status: "coming-soon"
  },
  {
    title: "RestaurantStarter",
    slug: "restaurant-starter",
    description: "Modern cafe and restaurant landing page with food-first presentation and direct ordering CTAs.",
    thumbnail: "/images/projects/restaurant-starter-cover.svg",
    demoUrl: "https://restaurantstarter.vercel.app/",
    projectUrl: "/projects/restaurant-starter",
    techStack: ["Frontend Development", "Responsive Design", "Landing Page"],
    status: "live"
  }
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Interactive Demos"
        title="Try My Projects"
        description="Explore live demos and interactive previews of my work. Click to experience the applications firsthand."
      />

      <section className="pb-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {demoProjects.map((demo) => (
              <Card key={demo.slug} className="group overflow-hidden transition-all hover:shadow-lg">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={demo.thumbnail}
                    alt={demo.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {demo.status === "live" && (
                    <div className="absolute right-3 top-3 rounded-full bg-green-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      Live Demo
                    </div>
                  )}
                  {demo.status === "coming-soon" && (
                    <div className="absolute right-3 top-3 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="text-xl font-semibold">{demo.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{demo.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {demo.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    {demo.status === "live" && demo.demoUrl ? (
                      <Button asChild className="flex-1">
                        <a href={demo.demoUrl} target="_blank" rel="noopener noreferrer">
                          <Play className="mr-2 h-4 w-4" />
                          Try Demo
                        </a>
                      </Button>
                    ) : (
                      <Button disabled className="flex-1">
                        <Play className="mr-2 h-4 w-4" />
                        Demo Coming Soon
                      </Button>
                    )}
                    <Button variant="outline" asChild>
                      <Link href={demo.projectUrl}>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State for Future Demos */}
          <Card className="mt-8 text-center">
            <div className="space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">More Demos Coming Soon</h3>
              <p className="text-sm text-muted-foreground">
                I'm working on adding more interactive demos. Check back soon or{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  get in touch
                </Link>{" "}
                to learn more about my projects.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

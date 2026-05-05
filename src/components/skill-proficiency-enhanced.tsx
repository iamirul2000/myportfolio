interface Skill {
  name: string;
  level: "Advanced" | "Strong" | "Proficient" | "Working Knowledge";
  category: "Backend" | "Database" | "Frontend" | "Mobile";
}

const skills: Skill[] = [
  { name: "Laravel", level: "Advanced", category: "Backend" },
  { name: "PHP", level: "Advanced", category: "Backend" },
  { name: "REST APIs", level: "Strong", category: "Backend" },
  { name: "MySQL", level: "Strong", category: "Database" },
  { name: "Angular", level: "Proficient", category: "Frontend" },
  { name: "TypeScript", level: "Proficient", category: "Frontend" },
  { name: "JavaScript", level: "Strong", category: "Frontend" },
  { name: "Flutter", level: "Working Knowledge", category: "Mobile" },
];

const levelConfig = {
  Advanced: {
    color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
    dot: "bg-teal-500",
  },
  Strong: {
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    dot: "bg-blue-500",
  },
  Proficient: {
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    dot: "bg-purple-500",
  },
  "Working Knowledge": {
    color: "bg-slate-100 text-slate-700 dark:bg-slate-800/50 dark:text-slate-300",
    dot: "bg-slate-400",
  },
};

const categories = ["Backend", "Database", "Frontend", "Mobile"] as const;

export function SkillProficiencyEnhanced() {
  const groupedSkills = categories.reduce(
    (acc, category) => {
      acc[category] = skills.filter((skill) => skill.category === category);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Technical Proficiency</h2>
          <p className="mt-2 text-muted-foreground mx-auto max-w-2xl text-center" style={{ textAlign: 'center !important' as any }}>
            Skills developed through hands-on project work
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-background p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              {categories.map((category) => {
                const categorySkills = groupedSkills[category];
                if (!categorySkills || categorySkills.length === 0) return null;

                return (
                  <div key={category} className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      {category}
                    </h3>
                    <div className="space-y-2.5">
                      {categorySkills.map((skill) => {
                        const config = levelConfig[skill.level];
                        return (
                          <div
                            key={skill.name}
                            className="group flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 px-4 py-3 transition-all hover:border-border hover:bg-muted/40 hover:shadow-sm"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`h-2 w-2 rounded-full ${config.dot}`}
                              />
                              <span className="font-medium text-foreground">
                                {skill.name}
                              </span>
                            </div>
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-medium ${config.color}`}
                            >
                              {skill.level}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Skill {
  name: string;
  level: string;
}

const skills: Skill[] = [
  { name: "Laravel", level: "Advanced" },
  { name: "PHP", level: "Advanced" },
  { name: "MySQL", level: "Strong" },
  { name: "REST APIs", level: "Strong" },
  { name: "Angular", level: "Proficient" },
  { name: "TypeScript", level: "Proficient" },
  { name: "JavaScript", level: "Strong" },
  { name: "Flutter", level: "Beginner" },
];

export function SkillProficiencyList() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Technical Proficiency</h2>
          <p className="mt-2 text-muted-foreground">
            Skills developed through hands-on project work
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-border bg-background p-8">
            <ul className="space-y-4">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between text-lg"
                >
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">— {skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

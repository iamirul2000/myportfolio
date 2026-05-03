import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Database, 
  Code, 
  Smartphone, 
  Wrench,
  GitBranch
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: <Server className="h-4 w-4" />,
    skills: ["Laravel", "PHP", "REST APIs", "Node.js"],
    color: "from-blue-500/10 to-blue-600/10 border-blue-500/20",
  },
  {
    title: "Database",
    icon: <Database className="h-4 w-4" />,
    skills: ["MySQL", "MariaDB", "MongoDB"],
    color: "from-green-500/10 to-green-600/10 border-green-500/20",
  },
  {
    title: "Frontend",
    icon: <Code className="h-4 w-4" />,
    skills: ["Angular", "TypeScript", "JavaScript", "Vue.js"],
    color: "from-purple-500/10 to-purple-600/10 border-purple-500/20",
  },
  {
    title: "Mobile",
    icon: <Smartphone className="h-4 w-4" />,
    skills: ["Flutter", "Swift", "iOS", "Ionic"],
    color: "from-orange-500/10 to-orange-600/10 border-orange-500/20",
  },
  {
    title: "Tools",
    icon: <Wrench className="h-4 w-4" />,
    skills: ["Git", "Postman", "Testing", "Debugging"],
    color: "from-pink-500/10 to-pink-600/10 border-pink-500/20",
  },
  {
    title: "Practices",
    icon: <GitBranch className="h-4 w-4" />,
    skills: ["Bug Fixing", "Production Support", "API Integration"],
    color: "from-cyan-500/10 to-cyan-600/10 border-cyan-500/20",
  },
];

export function SkillsCategorized() {
  return (
    <Card className="card-spacing">
      <h3 className="mb-6 text-xl font-semibold">Technical Skills</h3>
      <div className="space-y-4">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className={`rounded-lg border bg-gradient-to-br p-4 ${category.color}`}
          >
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background/50">
                {category.icon}
              </div>
              <h4 className="font-semibold">{category.title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} className="bg-background/50">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

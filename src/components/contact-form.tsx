import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form className="space-y-4 rounded-3xl border border-border/70 bg-background/70 p-6 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input id="name" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company
        </label>
        <Input id="company" placeholder="Team or company name" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Project details
        </label>
        <Textarea id="message" placeholder="Tell me a little about the project, timeline, and goals." />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">UI-only contact form. Connect your own server action or form provider in one place.</p>
        <Button type="submit">Send inquiry</Button>
      </div>
    </form>
  );
}

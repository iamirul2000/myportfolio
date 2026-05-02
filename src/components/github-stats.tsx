"use client";

import { Card } from "@/components/ui/card";
import { ErrorMessage } from "@/components/error-message";
import { useEffect, useState } from "react";

interface GitHubStats {
  repos: number;
  followers: number;
  following: number;
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = () => {
    setLoading(true);
    setError(null);
    
    fetch("https://api.github.com/users/iamirul2000")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub stats");
        return res.json();
      })
      .then((data) => {
        setStats({
          repos: data.public_repos || 0,
          followers: data.followers || 0,
          following: data.following || 0,
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) {
    return (
      <Card className="animate-pulse">
        <div className="h-48 bg-muted/50 rounded-lg" />
      </Card>
    );
  }

  if (error) {
    return (
      <ErrorMessage
        title="Failed to load GitHub stats"
        message={error}
        retry={fetchStats}
      />
    );
  }

  if (!stats) return null;

  return (
    <Card className="overflow-hidden transition-smooth hover:shadow-lg">
      <div className="flex items-center gap-3 border-b border-border pb-4">
        <svg
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
        <div>
          <h3 className="font-semibold">GitHub Activity</h3>
          <a
            href="https://github.com/iamirul2000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary focus-ring rounded"
          >
            @iamirul2000
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        <div className="text-center">
          <div className="text-2xl font-bold">{stats.repos}</div>
          <div className="text-xs text-muted-foreground">Repositories</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{stats.followers}</div>
          <div className="text-xs text-muted-foreground">Followers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{stats.following}</div>
          <div className="text-xs text-muted-foreground">Following</div>
        </div>
      </div>
      <a
        href="https://github.com/iamirul2000"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block rounded-lg bg-muted/50 py-2 text-center text-sm font-medium transition-smooth hover:bg-muted focus-ring"
      >
        View GitHub Profile →
      </a>
    </Card>
  );
}

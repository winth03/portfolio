"use client";

import type { GithubRepo } from "@/app/lib/github";

interface GithubRepoProps {
  repo: GithubRepo;
}

export function GithubRepo({ repo }: GithubRepoProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#4db8ff",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        {repo.name}
      </a>
      {repo.language && (
        <span
          style={{
            fontSize: "12px",
            padding: "4px 8px",
            backgroundColor: "rgba(77, 184, 255, 0.15)",
            borderRadius: "4px",
            color: "#4db8ff",
          }}
        >
          {repo.language}
        </span>
      )}
    </div>
  );
}

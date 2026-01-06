import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    description: "Check out my code and projects",
    color: "hover:text-zinc-100 hover:border-zinc-600",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    description: "Connect with me professionally",
    color: "hover:text-blue-400 hover:border-blue-500/50",
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
    description: "Send me a message",
    color: "hover:text-zinc-100 hover:border-zinc-600",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
    description: "Follow my journey",
    color: "hover:text-pink-400 hover:border-pink-500/50",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={cn(
                  "group relative p-6 rounded-xl",
                  "border border-zinc-200 dark:border-zinc-800",
                  "bg-zinc-50/50 dark:bg-zinc-900/50",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:shadow-zinc-900/20",
                  "focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background",
                  link.color
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-lg",
                      "bg-foreground/10 dark:bg-foreground/20",
                      "flex items-center justify-center",
                      "group-hover:bg-foreground/20 dark:group-hover:bg-foreground/30",
                      "transition-colors duration-300",
                      "shrink-0"
                    )}
                  >
                    <Icon className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {link.description}
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    "absolute inset-0 rounded-xl",
                    "border-2 border-transparent",
                    "group-hover:border-foreground/20",
                    "transition-all duration-300",
                    "pointer-events-none"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="text-center">
          <div className="inline-block p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <p className="text-zinc-600 dark:text-zinc-400 mb-2">
              Prefer a more traditional approach?
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              Feel free to reach out through any of the channels above. I
              typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

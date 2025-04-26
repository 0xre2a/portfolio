import {  ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { skills } from "@/constans/skills";
import { contacts } from "@/constans/contacts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { projects } from "@/constans/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8">
        {/* Header Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-white text-2xl font-mono">
              RG
            </div>
            <div>
              <h1 className="text-3xl font-bold font-mono">Reza Ghoreyshi</h1>
              <p className="text-zinc-400 font-mono">
                Full-Stack Developer | Web3 Developer | Performance-First Coder ⚡
              </p>
            </div>
          </div>
          <p className="text-zinc-300 text-lg">
            <span className="text-emerald-400">const</span>{" "}
            <span className="text-blue-400">developer</span> = {"{"}
            <br />
            &nbsp;&nbsp;passion:{" "}
            <span className="text-amber-300">
              "Building  web apps and dApps"
            </span>
            ,
            <br />
            &nbsp;&nbsp;specialties:{" "}
            <span className="text-amber-300">
              "Full-stack & Web3 developer ."
            </span>
            <br />
            {"}"};
          </p>
        </section>

        <Separator className="bg-zinc-800" />

        {/* About Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> About Me
          </h2>
          <p className="text-zinc-300">
            I specialize in crafting high-performance, scalable, and modern web
            applications using a full-stack JavaScript/TypeScript ecosystem. On the
            frontend, I build sleek and responsive UIs with React, Next.js, and Tailwind
            CSS, optimizing user experience and performance. On the backend, I design
            robust APIs with Node.js, Express, and modern runtimes like Bun.js. I'm
            passionate about enhancing Developer Experience (DX) by using cutting-edge
            tools like RSBuild, Vite, and React Query for efficient data handling. In the
            Web3 space, I engineer decentralized applications with Solidity, Ethers.js,
            and Hardhat, building secure smart contracts and seamless blockchain
            integrations. I’m also focused on performance tooling, DX best practices, and
            modern build systems to keep development fast and joyful. Whether it’s
            building blazing-fast UIs, secure backends, or decentralized protocols, I aim
            to deliver clean, maintainable, and future-ready code.
          </p>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-zinc-900 text-emerald-400 border-emerald-400/30"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        {projects.length ? (
          <section className="space-y-4">
            <h2 className="text-xl font-bold font-mono flex items-center">
              <span className="text-emerald-400 mr-2">{">"}</span> Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects
                .sort((a, b) => Number(b.pin) - Number(a.pin))
                .map((project, index) => {
                  const {
                    name,
                    description,
                    githubUrl,
                    demoUrl,
                    isOpenSource,
                    stack,
                    thumbnail,
                    pin,
                  } = project;
                  return (
                    <Card className="bg-zinc-900 border-zinc-800">
                      <CardContent className="p-4 space-y-2">
                        <h3 className="font-bold text-zinc-100">Mobile App</h3>
                        <p className="text-zinc-400 text-sm">
                          A cross-platform mobile application built with Flutter and
                          Firebase.
                        </p>
                        <Button variant="outline" size="sm" className="gap-1 mt-2">
                          <ExternalLink size={14} />
                          View Project
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </section>
        ) : null}

        <Separator className="bg-zinc-800" />

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold font-mono flex items-center">
            <span className="text-emerald-400 mr-2">{">"}</span> Connect
          </h2>
          <div className="flex flex-wrap gap-3">
            {contacts.map((contact, index) => {
              const { Icon, name, classname, link } = contact;
              return (
                <Button
                  asChild
                  key={index}
                  variant="outline"
                  size="icon"
                  className={cn(
                    "rounded-full cursor-pointer bg-zinc-900 border-zinc-800 hover:bg-zinc-800 ",
                    classname
                  )}
                >
                  <Link href={link}>
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{name}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-4 text-center text-zinc-500 text-sm">
          
          <p className="font-mono mt-1">{"// Built with Next.js and TailwindCSS"}</p>
        </footer>
      </div>
    </main>
  );
}

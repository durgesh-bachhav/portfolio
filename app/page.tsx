import { FeaturedBlogs } from "@/components/feature-blogs";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GridSection from "@/components/grid-section";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;
const CORE_STACK = [
  { name: "React", Icon: Icons.react },
  { name: "Next.js", Icon: Icons.nextjs },
  { name: "TypeScript", image: "/stack/typescript.svg" },
  { name: "Tailwind", Icon: Icons.tailwindcss },
  { name: "Node.js", image: "/stack/node.svg" },
  { name: "PostgreSQL", image: "/stack/postgres.svg" },
];

export default function Page() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-4 border-x border-[#e2d6c5] dark:border-[#3a332a] bg-[#f8f2e8] dark:bg-[#1c1a16] text-[#2b241d] dark:text-[#efe6d9]">
      <section id="hero" className="border-b border-[#e2d6c5] dark:border-[#3a332a]">
        <GridSection className="py-16 px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="space-y-6">
              <div className="space-y-3">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-4xl font-bold font-mono tracking-tight sm:text-5xl"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                />
                <BlurFadeText
                  className="max-w-xl text-base text-[#6f5f4d] dark:text-[#b7a48f]"
                  delay={BLUR_FADE_DELAY * 2}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="bg-orange-600 px-4 py-2 text-sm font-medium text-[#f8f2e8] hover:bg-orange-500"
                  >
                    Email Me
                  </Link>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://github.com/durgeshbachhav"
                        className="border border-orange-600 px-4 py-2 text-sm font-medium text-orange-700 dark:text-orange-400"
                      >
                        GitHub
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="flex flex-col gap-1 text-xs">
                        <Link
                          href="https://github.com/durgeshdevwork-debug"
                          className="text-orange-600 dark:text-orange-400 hover:underline"
                        >
                          durgeshdevwork-debug
                        </Link>
                        <Link
                          href="https://github.com/durgeshbachhav"
                          className="text-orange-600 dark:text-orange-400 hover:underline"
                        >
                          durgeshbachhav
                        </Link>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Avatar className="size-28 border border-[#e2d6c5] dark:border-[#3a332a]">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="scale-125"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </GridSection>
      </section>
      <section id="about" className="border-b border-[#e2d6c5] dark:border-[#3a332a]">
        <GridSection>
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#e2d6c5] dark:divide-[#3a332a]">
            <div className="space-y-4 py-16 px-8">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-3xl font-bold font-mono">About</h2>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <p className="text-base text-[#6f5f4d] dark:text-[#b7a48f]">
                  {DATA.summary}
                </p>
              </BlurFade>
            </div>
            <div className="space-y-4 py-16 px-8">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h3 className="text-2xl font-bold font-mono">Stack</h3>
              </BlurFade>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {CORE_STACK.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 border border-[#e2d6c5] dark:border-[#3a332a] px-3 py-2"
                  >
                    {item.Icon ? (
                      <item.Icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    ) : (
                      <Image
                        src={item.image ?? ""}
                        alt={item.name}
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    )}
                    <span className="text-xs font-medium text-[#6f5f4d] dark:text-[#b7a48f]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(DATA.skills) &&
                  DATA.skills.map((skill, id) => (
                    <BlurFade key={skill} delay={BLUR_FADE_DELAY * 8 + id * 0.01}>
                      <span className="border border-[#e2d6c5] px-2 py-0.5 text-xs text-[#6f5f4d] dark:border-[#3a332a] dark:text-[#b7a48f]">
                        {skill}
                      </span>
                    </BlurFade>
                  ))}
              </div>
            </div>
          </div>
        </GridSection>
      </section>
      <section id="projects" className="border-b border-[#e2d6c5] dark:border-[#3a332a]">
        <GridSection className="py-16 px-8">
          <div className="space-y-8">
            <div className="space-y-2">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className="text-3xl font-bold font-mono">Projects</h2>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 10}>
                <p className="text-base text-[#6f5f4d] dark:text-[#b7a48f]">
                  Selected builds focused on performance, reliability, and clean
                  interfaces.
                </p>
              </BlurFade>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 11 + id * 0.03}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </GridSection>
      </section>
      <section id="blogs" className="border-b border-[#e2d6c5] dark:border-[#3a332a]">
        <GridSection className="py-16 px-8">
          <FeaturedBlogs />
        </GridSection>
      </section>
      <section
        id="experience"
        className="border-b border-[#e2d6c5] dark:border-[#3a332a]"
      >
        <GridSection className="py-16 px-8">
          <div className="space-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <h2 className="text-3xl font-bold font-mono">Experience</h2>
            </BlurFade>
            <div className="space-y-4">
              {Array.isArray(DATA.work) &&
                DATA.work.map((work, id) => (
                  <BlurFade
                    key={work.company}
                    delay={BLUR_FADE_DELAY * 13 + id * 0.04}
                  >
                    <GridSection className="p-6 bg-[#fbf6ee] dark:bg-[#241f19]">
                      <ResumeCard
                        key={work.company}
                        logoUrl={work.logoUrl}
                        altText={work.company}
                        title={work.company}
                        subtitle={work.title}
                        href={work.href}
                        badges={work.badges}
                        period={`${work.start} - ${work.end ?? "Present"}`}
                        description={work.description}
                      />
                    </GridSection>
                  </BlurFade>
                ))}
            </div>
          </div>
        </GridSection>
      </section>
      <section id="contact">
        <GridSection className="py-16 px-8">
          <div className="space-y-4 text-center">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <h2 className="text-3xl font-bold font-mono">Contact</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <p className="mx-auto max-w-xl text-base text-[#6f5f4d] dark:text-[#b7a48f]">
                Reach out for collaborations, product work, or a technical audit.
                Email me directly at{" "}
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="font-medium text-orange-600 hover:underline dark:text-orange-400"
                >
                  {DATA.contact.email}
                </Link>
                .
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link
                  href={DATA.contact.social.GitHub.url}
                  className="text-orange-600 hover:underline dark:text-orange-400"
                >
                  GitHub
                </Link>
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-orange-600 hover:underline dark:text-orange-400"
                >
                  LinkedIn
                </Link>
              </div>
            </BlurFade>
          </div>
        </GridSection>
      </section>
    </main>
  );
}

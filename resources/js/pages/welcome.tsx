import { Head } from '@inertiajs/react';
import { ArrowRight, Github, Leaf, Mail } from 'lucide-react';
import { HeroScene } from '@/components/portfolio/hero-scene';
import { ProjectCard } from '@/components/portfolio/project-card';
import { SectionHeading } from '@/components/portfolio/section-heading';
import { ThemeToggle } from '@/components/portfolio/theme-toggle';
import { Timeline } from '@/components/portfolio/timeline';
import {
    about,
    education,
    experience,
    fieldNotes,
    profile,
    projects,
    skills,
} from '@/data/portfolio';

const navLinks = [
    { href: '#work', label: 'Werk' },
    { href: '#about', label: 'Over mij' },
    { href: '#experience', label: 'Ervaring' },
    { href: '#toolkit', label: 'Vaardigheden' },
    { href: '#contact', label: 'Contact' },
];

export default function Welcome() {
    return (
        <>
            <Head title="Portfolio" />

            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 z-50 grain opacity-[0.06] mix-blend-multiply dark:opacity-[0.08] dark:mix-blend-screen"
            />

            <header className="sticky top-0 z-40 border-b border-transparent bg-background/80 backdrop-blur-md">
                <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                    <a
                        href="#top"
                        className="flex items-center gap-2 font-serif text-lg font-semibold"
                    >
                        <Leaf className="size-5 text-moss" />
                        {profile.name}
                    </a>
                    <div className="flex items-center gap-6">
                        <ul className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="transition hover:text-foreground"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ThemeToggle />
                    </div>
                </nav>
            </header>

            <main id="top">
                {/* Hero */}
                <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-12 pb-24 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
                    <div className="animate-in duration-700 fade-in slide-in-from-bottom-4">
                        <p className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
                            <span className="size-2 rounded-full bg-moss" />
                            {profile.availability}
                        </p>
                        <h1 className="mb-6 font-serif text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
                            Software bouwen die{' '}
                            <em className="text-moss">standhoudt</em>.
                        </h1>
                        <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                            Hoi, ik ben {profile.name},{' '}
                            {profile.role.toLowerCase()}. {profile.intro}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="#work"
                                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                            >
                                Bekijk mijn werk
                                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full border bg-card px-6 py-3 text-sm font-medium transition hover:border-moss/50"
                            >
                                Neem contact op
                            </a>
                        </div>
                    </div>
                    <div className="animate-in delay-150 duration-700 fade-in slide-in-from-bottom-6">
                        <HeroScene />
                    </div>
                </section>

                {/* Work */}
                <section
                    id="work"
                    className="scroll-mt-20 border-y bg-secondary/40 py-24"
                >
                    <div className="mx-auto max-w-6xl px-6">
                        <SectionHeading
                            index="01"
                            eyebrow="Geselecteerd werk"
                            title="Wat ik heb gebouwd."
                        />
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.number}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* About */}
                <section
                    id="about"
                    className="mx-auto grid max-w-6xl scroll-mt-20 gap-12 px-6 py-24 lg:grid-cols-[1.3fr_1fr]"
                >
                    <div>
                        <SectionHeading
                            index="02"
                            eyebrow="Over mij"
                            title="Nuchter, nieuwsgierig, gedreven."
                        />
                        <div className="max-w-xl space-y-4 leading-relaxed text-muted-foreground">
                            {about.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    <aside className="self-end rounded-2xl border bg-card p-6">
                        <p className="mb-4 font-mono text-xs tracking-widest text-moss uppercase">
                            In het kort
                        </p>
                        <dl className="divide-y">
                            {fieldNotes.map((note) => (
                                <div
                                    key={note.label}
                                    className="flex justify-between gap-4 py-3 text-sm"
                                >
                                    <dt className="text-muted-foreground">
                                        {note.label}
                                    </dt>
                                    <dd className="text-right font-medium">
                                        {note.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </aside>
                </section>

                {/* Experience */}
                <section
                    id="experience"
                    className="scroll-mt-20 border-y bg-secondary/40 py-24"
                >
                    <div className="mx-auto max-w-6xl px-6">
                        <SectionHeading
                            index="03"
                            eyebrow="Ervaring"
                            title="Het pad tot nu toe."
                        />
                        <div className="grid gap-12 md:grid-cols-2">
                            <Timeline
                                label="Werk & vrijwilligerswerk"
                                entries={experience}
                            />
                            <Timeline label="Opleiding" entries={education} />
                        </div>
                    </div>
                </section>

                {/* Toolkit */}
                <section id="toolkit" className="scroll-mt-20 pt-24">
                    <div className="mx-auto max-w-6xl px-6">
                        <SectionHeading
                            index="04"
                            eyebrow="Vaardigheden"
                            title="Wat ik in mijn rugzak meeneem."
                        />
                        <div className="grid gap-6 md:grid-cols-3">
                            {skills.map((group) => (
                                <div
                                    key={group.group}
                                    className="rounded-2xl border bg-card p-6"
                                >
                                    <h3 className="mb-4 font-serif text-xl font-semibold">
                                        {group.group}
                                    </h3>
                                    <ul className="flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <li
                                                key={item}
                                                className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section
                    id="contact"
                    className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-moss px-8 py-16 text-center text-primary-foreground sm:px-16 dark:bg-[#1f2a1a] dark:text-foreground">
                        <div
                            aria-hidden
                            className="absolute -top-24 -right-24 size-72 rounded-full bg-sun/40 blur-3xl"
                        />
                        <p className="relative mb-3 font-mono text-xs tracking-widest uppercase opacity-80">
                            05 — Contact
                        </p>
                        <h2 className="relative mx-auto mb-4 max-w-2xl font-serif text-4xl font-semibold text-balance sm:text-5xl">
                            Laten we iets bouwen dat blijft.
                        </h2>
                        <p className="relative mx-auto mb-8 max-w-lg opacity-80">
                            Heb je een project, een vacature of wil je gewoon
                            even hallo zeggen? Mijn inbox staat altijd open.
                        </p>
                        <div className="relative flex flex-wrap justify-center gap-3">
                            <a
                                href={`mailto:${profile.email}`}
                                className="inline-flex items-center gap-2 rounded-full bg-sun px-6 py-3 text-sm font-medium text-[#1e241f] transition hover:opacity-90"
                            >
                                <Mail className="size-4" />
                                Stuur een mail
                            </a>
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-current/30 px-6 py-3 text-sm font-medium transition hover:bg-white/10"
                            >
                                <Github className="size-4" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} {profile.name}
                    </p>
                    <p className="font-mono text-xs">
                        Gebouwd met Laravel, React &amp; Tailwind
                    </p>
                </div>
            </footer>
        </>
    );
}

import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const statusLabels: Record<Project['status'], string> = {
    'In progress': 'In ontwikkeling',
    Completed: 'Afgerond',
    Live: 'Live',
};

const tones = {
    moss: 'bg-moss/15 text-moss',
    sun: 'bg-sun/20 text-[#8a5d10] dark:text-sun',
    rust: 'bg-rust/15 text-rust',
};

export function ProjectCard({ project }: { project: Project }) {
    const Icon = project.icon;

    return (
        <article className="group relative flex flex-col rounded-2xl border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-moss/40 hover:shadow-[0_24px_50px_-30px_rgba(30,36,31,0.5)]">
            <div className="mb-8 flex items-start justify-between">
                <span
                    className={cn(
                        'flex size-12 items-center justify-center rounded-xl',
                        tones[project.color],
                    )}
                >
                    <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <span className="font-serif text-4xl font-semibold text-foreground/10">
                    {project.number}
                </span>
            </div>

            <p className="mb-1 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                {project.tagline}
            </p>
            <h3 className="mb-3 font-serif text-2xl font-semibold">
                {project.name}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {project.description}
            </p>

            <ul className="mb-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                    <li
                        key={tech}
                        className="rounded-full border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                        {tech}
                    </li>
                ))}
            </ul>

            <div className="mt-auto flex items-center justify-between border-t pt-4 text-sm">
                <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <span
                        className={cn(
                            'size-2 rounded-full',
                            project.status === 'In progress'
                                ? 'animate-pulse bg-sun'
                                : 'bg-moss',
                        )}
                    />
                    {statusLabels[project.status]}
                </span>
                <div className="flex items-center gap-3">
                    {project.repo && project.href && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.name} broncode`}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <Github className="size-4" />
                        </a>
                    )}
                    {project.href ? (
                        <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1 font-medium text-moss"
                        >
                            {project.status === 'Live'
                                ? 'Live bekijken'
                                : 'Bekijk project'}
                            <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    ) : project.repo ? (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 font-medium text-moss"
                        >
                            <Github className="size-4" />
                            Bekijk code
                            <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    ) : (
                        <span className="text-muted-foreground">
                            Binnenkort
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}

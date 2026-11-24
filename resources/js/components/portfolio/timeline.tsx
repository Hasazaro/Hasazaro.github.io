import type { TimelineEntry } from '@/data/portfolio';

export function Timeline({
    label,
    entries,
}: {
    label: string;
    entries: TimelineEntry[];
}) {
    return (
        <div>
            <h3 className="mb-6 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {label}
            </h3>
            <ol className="relative space-y-6 border-l border-moss/30 pl-6">
                {entries.map((entry) => (
                    <li
                        key={`${entry.title}-${entry.period}`}
                        className="relative"
                    >
                        <span
                            aria-hidden
                            className="absolute top-7 -left-[29px] size-2.5 rounded-full border-2 border-background bg-moss"
                        />
                        <div className="rounded-2xl border bg-card p-6">
                            <p className="mb-1 font-mono text-xs tracking-wider text-moss uppercase">
                                {entry.period}
                            </p>
                            <h4 className="font-serif text-xl font-semibold">
                                {entry.title}
                            </h4>
                            <p className="mb-4 text-sm text-muted-foreground">
                                {entry.place}
                            </p>
                            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                                {entry.points.map((point) => (
                                    <li key={point} className="flex gap-3">
                                        <span
                                            aria-hidden
                                            className="mt-2 size-1 shrink-0 rounded-full bg-moss/60"
                                        />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

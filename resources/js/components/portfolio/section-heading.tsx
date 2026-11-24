export function SectionHeading({
    index,
    eyebrow,
    title,
}: {
    index: string;
    eyebrow: string;
    title: string;
}) {
    return (
        <div className="mb-10 max-w-2xl">
            <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-widest text-moss uppercase">
                <span>{index}</span>
                <span className="h-px w-8 bg-moss/50" />
                <span>{eyebrow}</span>
            </p>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {title}
            </h2>
        </div>
    );
}

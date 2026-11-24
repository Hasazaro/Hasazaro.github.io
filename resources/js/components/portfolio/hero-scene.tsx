import { SceneGame } from '@/components/portfolio/scene-game';

const fireflies = [
    { top: '18%', left: '12%', delay: '0s' },
    { top: '34%', left: '78%', delay: '1.2s' },
    { top: '52%', left: '24%', delay: '2.4s' },
    { top: '64%', left: '66%', delay: '0.6s' },
    { top: '42%', left: '48%', delay: '3.1s' },
    { top: '72%', left: '38%', delay: '1.8s' },
    { top: '26%', left: '60%', delay: '4s' },
];

/**
 * A golden-hour skyline reclaimed by nature, drawn in inline SVG
 * so it follows the light / dark palette.
 */
export function HeroScene() {
    return (
        <figure className="relative overflow-hidden rounded-2xl border bg-card p-3 shadow-[0_20px_60px_-30px_rgba(30,36,31,0.45)]">
            <div className="relative overflow-hidden rounded-xl">
                <svg
                    viewBox="0 0 600 460"
                    className="block h-auto w-full"
                    role="img"
                    aria-label="Skyline van een vervallen stad, overwoekerd door planten tijdens het gouden uur"
                >
                    <defs>
                        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="0%"
                                className="[stop-color:#e9d9b0] dark:[stop-color:#1b2430]"
                            />
                            <stop
                                offset="70%"
                                className="[stop-color:#f3d48f] dark:[stop-color:#2a3324]"
                            />
                        </linearGradient>
                        <radialGradient id="glow">
                            <stop
                                offset="0%"
                                className="[stop-color:var(--sun)]"
                                stopOpacity="0.55"
                            />
                            <stop
                                offset="100%"
                                className="[stop-color:var(--sun)]"
                                stopOpacity="0"
                            />
                        </radialGradient>
                    </defs>

                    <rect width="600" height="460" fill="url(#sky)" />

                    {/* Sun / moon */}
                    <circle cx="430" cy="150" r="150" fill="url(#glow)" />
                    <circle
                        cx="430"
                        cy="150"
                        r="54"
                        className="fill-sun dark:fill-[#e9e3d3]/80"
                    />

                    {/* Birds */}
                    <g
                        className="fill-none stroke-foreground/50"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <path d="M120 90 q8 -8 16 0 q8 -8 16 0" />
                        <path d="M170 120 q6 -6 12 0 q6 -6 12 0" />
                        <path d="M95 135 q5 -5 10 0 q5 -5 10 0" />
                    </g>

                    {/* Far skyline */}
                    <g className="fill-sky/40">
                        <rect x="40" y="200" width="50" height="180" />
                        <rect x="100" y="160" width="40" height="220" />
                        <polygon points="150,380 150,180 175,170 195,190 195,380" />
                        <rect x="250" y="210" width="45" height="170" />
                        <rect x="470" y="190" width="60" height="190" />
                        <rect x="540" y="230" width="40" height="150" />
                    </g>

                    {/* Near ruined buildings */}
                    <g className="fill-foreground/70 dark:fill-[#0d110d]">
                        <polygon points="200,400 200,170 230,150 262,175 262,400" />
                        <polygon points="300,400 300,230 330,225 345,245 360,232 360,400" />
                        <rect x="380" y="260" width="70" height="140" />
                    </g>

                    {/* Windows */}
                    <g className="fill-sun/70 dark:fill-sun/40">
                        <rect x="212" y="200" width="10" height="14" />
                        <rect x="238" y="230" width="10" height="14" />
                        <rect x="212" y="260" width="10" height="14" />
                        <rect x="312" y="260" width="10" height="14" />
                        <rect x="395" y="285" width="10" height="14" />
                        <rect x="425" y="315" width="10" height="14" />
                    </g>

                    {/* Hanging vines */}
                    <g
                        className="fill-none stroke-moss"
                        strokeWidth="3"
                        strokeLinecap="round"
                    >
                        <path d="M230 152 q-6 40 4 80 q-8 30 0 60" />
                        <path d="M250 165 q6 30 -2 60" />
                        <path d="M330 226 q-4 30 6 55 q-6 20 0 40" />
                        <path d="M395 260 q6 25 -2 50" />
                    </g>
                    <g className="fill-leaf">
                        <ellipse cx="226" cy="195" rx="7" ry="4" />
                        <ellipse cx="238" cy="232" rx="7" ry="4" />
                        <ellipse cx="230" cy="270" rx="6" ry="4" />
                        <ellipse cx="252" cy="200" rx="6" ry="3.5" />
                        <ellipse cx="328" cy="258" rx="6" ry="4" />
                        <ellipse cx="337" cy="290" rx="7" ry="4" />
                        <ellipse cx="400" cy="290" rx="6" ry="4" />
                    </g>

                    {/* Rooftop foliage */}
                    <g className="fill-moss">
                        <circle cx="215" cy="168" r="14" />
                        <circle cx="235" cy="155" r="12" />
                        <circle cx="315" cy="230" r="12" />
                        <circle cx="390" cy="260" r="14" />
                        <circle cx="410" cy="255" r="11" />
                        <circle cx="440" cy="262" r="13" />
                    </g>

                    {/* Hills and trees */}
                    <path
                        d="M0 360 C80 330 150 350 230 340 C330 328 420 350 600 330 L600 460 L0 460 Z"
                        className="fill-leaf"
                    />
                    <g className="fill-moss">
                        <circle cx="40" cy="345" r="34" />
                        <circle cx="85" cy="330" r="28" />
                        <circle cx="545" cy="320" r="38" />
                        <circle cx="590" cy="340" r="30" />
                    </g>
                    <path
                        d="M0 400 C120 380 220 405 320 392 C430 378 520 400 600 388 L600 460 L0 460 Z"
                        className="fill-moss"
                    />

                    {/* Grass blades */}
                    <g
                        className="origin-bottom animate-sway fill-none stroke-moss"
                        strokeWidth="3"
                        strokeLinecap="round"
                    >
                        <path d="M140 410 q4 -24 -6 -40" />
                        <path d="M150 410 q2 -20 10 -34" />
                        <path d="M470 405 q-4 -22 6 -36" />
                        <path d="M480 405 q4 -18 -4 -30" />
                    </g>
                </svg>

                {/* Fireflies / sunlit dust */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                >
                    {fireflies.map((f) => (
                        <span
                            key={`${f.top}-${f.left}`}
                            className="absolute size-1.5 animate-firefly rounded-full bg-sun shadow-[0_0_10px_3px_var(--sun)] motion-reduce:animate-none"
                            style={{
                                top: f.top,
                                left: f.left,
                                animationDelay: f.delay,
                            }}
                        />
                    ))}
                </div>

                <SceneGame />
            </div>
            <figcaption className="flex items-center justify-between px-1 pt-3 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                <span>Ergens in het westen</span>
                <span>Gouden uur</span>
            </figcaption>
        </figure>
    );
}

import { Play, RotateCcw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// The canvas uses the same coordinate space as the hero SVG's viewBox.
const WIDTH = 600;
const HEIGHT = 460;
const GROUND = 414;
const BALL_X = 90;
const BALL_RADIUS = 12;
const GRAVITY = 2200;
const JUMP_VELOCITY = -820;
const START_SPEED = 260;
const MAX_SPEED = 620;
const ACCELERATION = 10;
const BEST_KEY = 'scene-game-best';

type Status = 'idle' | 'playing' | 'over';

type Obstacle = {
    x: number;
    width: number;
    height: number;
    kind: 'crate' | 'rock';
};

type Game = {
    y: number;
    vy: number;
    speed: number;
    score: number;
    rotation: number;
    spawnIn: number;
    obstacles: Obstacle[];
};

const random = (min: number, max: number) => min + Math.random() * (max - min);

const newGame = (): Game => ({
    y: GROUND - BALL_RADIUS,
    vy: 0,
    speed: START_SPEED,
    score: 0,
    rotation: 0,
    spawnIn: 1.2,
    obstacles: [],
});

const newObstacle = (): Obstacle => ({
    x: WIDTH + 10,
    width: random(20, 34),
    height: random(22, 46),
    kind: Math.random() < 0.5 ? 'crate' : 'rock',
});

const readBest = (): number => {
    try {
        return Number(localStorage.getItem(BEST_KEY)) || 0;
    } catch {
        return 0;
    }
};

const hits = (game: Game, o: Obstacle): boolean => {
    const top = GROUND - o.height;
    const closestX = Math.max(o.x, Math.min(BALL_X, o.x + o.width));
    const closestY = Math.max(top, Math.min(game.y, GROUND));
    const dx = BALL_X - closestX;
    const dy = game.y - closestY;

    // A little forgiveness makes near misses feel fair.
    return dx * dx + dy * dy < (BALL_RADIUS - 2) ** 2;
};

function draw(ctx: CanvasRenderingContext2D, game: Game) {
    const css = getComputedStyle(document.documentElement);
    const sun = css.getPropertyValue('--sun').trim();
    const rust = css.getPropertyValue('--rust').trim();
    const moss = css.getPropertyValue('--moss').trim();
    const stone = css.getPropertyValue('--muted-foreground').trim();

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    for (const o of game.obstacles) {
        const top = GROUND - o.height;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.18)';
        ctx.beginPath();
        ctx.ellipse(
            o.x + o.width / 2,
            GROUND + 2,
            o.width / 1.6,
            4,
            0,
            0,
            Math.PI * 2,
        );
        ctx.fill();

        if (o.kind === 'crate') {
            ctx.fillStyle = rust;
            ctx.fillRect(o.x, top, o.width, o.height);
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.lineWidth = 2;
            ctx.strokeRect(o.x + 1, top + 1, o.width - 2, o.height - 2);
            ctx.beginPath();
            ctx.moveTo(o.x, top);
            ctx.lineTo(o.x + o.width, GROUND);
            ctx.stroke();
        } else {
            ctx.fillStyle = stone;
            ctx.beginPath();
            ctx.roundRect(o.x, top, o.width, o.height, [10, 10, 3, 3]);
            ctx.fill();
            ctx.fillStyle = moss;
            ctx.beginPath();
            ctx.ellipse(
                o.x + o.width / 2,
                top + 3,
                o.width / 2.4,
                4,
                0,
                0,
                Math.PI * 2,
            );
            ctx.fill();
        }
    }

    // Shadow shrinks as the ball rises.
    const lift = (GROUND - BALL_RADIUS - game.y) / 160;
    ctx.fillStyle = `rgba(0, 0, 0, ${0.22 * (1 - lift)})`;
    ctx.beginPath();
    ctx.ellipse(
        BALL_X,
        GROUND + 2,
        BALL_RADIUS * (1 - lift / 2),
        3.5,
        0,
        0,
        Math.PI * 2,
    );
    ctx.fill();

    ctx.save();
    ctx.translate(BALL_X, game.y);
    ctx.rotate(game.rotation);
    ctx.shadowColor = sun;
    ctx.shadowBlur = 18;
    ctx.fillStyle = sun;
    ctx.beginPath();
    ctx.arc(0, 0, BALL_RADIUS, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(0, 0, BALL_RADIUS - 5, 0, Math.PI / 2);
    ctx.stroke();
    ctx.restore();
}

/**
 * A tiny endless runner played on top of the hero scene:
 * jump the rolling ball over rubble and crates.
 */
export function SceneGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const game = useRef<Game>(newGame());
    const [status, setStatus] = useState<Status>('idle');
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(readBest);

    const jump = () => {
        const g = game.current;

        if (g.y >= GROUND - BALL_RADIUS - 0.5) {
            g.vy = JUMP_VELOCITY;
        }
    };

    const start = () => {
        game.current = newGame();
        setScore(0);
        setStatus('playing');
    };

    useEffect(() => {
        try {
            localStorage.setItem(BEST_KEY, String(best));
        } catch {
            // Storage can be unavailable (e.g. private mode); the best score just won't persist.
        }
    }, [best]);

    useEffect(() => {
        if (status !== 'playing') {
            return;
        }

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                e.preventDefault();
                jump();
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => window.removeEventListener('keydown', onKeyDown);
    }, [status]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (status !== 'playing' || !canvas || !ctx) {
            return;
        }

        const dpr = window.devicePixelRatio || 1;
        canvas.width = WIDTH * dpr;
        canvas.height = HEIGHT * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        let frame = 0;
        let last = performance.now();
        let shownScore = 0;

        const tick = (now: number) => {
            const dt = Math.min((now - last) / 1000, 0.05);
            last = now;

            const g = game.current;
            g.vy += GRAVITY * dt;
            g.y = Math.min(g.y + g.vy * dt, GROUND - BALL_RADIUS);

            if (g.y === GROUND - BALL_RADIUS) {
                g.vy = 0;
            }

            g.speed = Math.min(MAX_SPEED, g.speed + ACCELERATION * dt);
            g.rotation += (g.speed * dt) / BALL_RADIUS;
            g.score += dt * 10;

            g.spawnIn -= dt;

            if (g.spawnIn <= 0) {
                g.obstacles.push(newObstacle());
                g.spawnIn = random(0.8, 1.6);
            }

            for (const o of g.obstacles) {
                o.x -= g.speed * dt;
            }

            g.obstacles = g.obstacles.filter((o) => o.x + o.width > -10);

            draw(ctx, g);

            const current = Math.floor(g.score);

            if (current !== shownScore) {
                shownScore = current;
                setScore(current);
            }

            if (g.obstacles.some((o) => hits(g, o))) {
                setBest((prev) => Math.max(prev, current));
                setStatus('over');

                return;
            }

            frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(frame);
    }, [status]);

    return (
        <div className="absolute inset-0">
            <canvas
                ref={canvasRef}
                onPointerDown={status === 'playing' ? jump : undefined}
                className={
                    status === 'playing'
                        ? 'absolute inset-0 size-full cursor-pointer touch-manipulation'
                        : 'pointer-events-none absolute inset-0 size-full'
                }
                aria-label="Spel met een rollende bal"
            />

            {status === 'idle' && (
                <button
                    type="button"
                    onClick={start}
                    className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border bg-card/90 px-3 py-1.5 font-mono text-xs shadow-sm backdrop-blur transition hover:border-moss/50"
                >
                    <Play className="size-3.5 fill-current text-moss" />
                    Speel: ontwijk het puin
                </button>
            )}

            {status !== 'idle' && (
                <div className="pointer-events-none absolute top-3 left-3 rounded-full bg-card/85 px-3 py-1 font-mono text-xs backdrop-blur">
                    Score {score} · Record {Math.max(best, score)}
                </div>
            )}

            {status === 'playing' && score < 30 && (
                <p className="pointer-events-none absolute top-3 right-3 rounded-full bg-card/85 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
                    Spatie / tik om te springen
                </p>
            )}

            {status === 'over' && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-[2px]">
                    <div className="rounded-2xl border bg-card px-8 py-6 text-center shadow-lg">
                        <p className="mb-1 font-serif text-2xl font-semibold">
                            Game over
                        </p>
                        <p className="mb-4 font-mono text-xs text-muted-foreground">
                            Score {score} · Record {best}
                        </p>
                        <button
                            type="button"
                            onClick={start}
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                        >
                            <RotateCcw className="size-4" />
                            Opnieuw spelen
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

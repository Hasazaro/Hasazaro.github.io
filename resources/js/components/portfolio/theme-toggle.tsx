import { Moon, Sun } from 'lucide-react';
import { useAppearance } from '@/hooks/use-appearance';

export function ThemeToggle() {
    const { resolvedAppearance, updateAppearance } = useAppearance();
    const isDark = resolvedAppearance === 'dark';

    return (
        <button
            type="button"
            onClick={() => updateAppearance(isDark ? 'light' : 'dark')}
            aria-label={
                isDark
                    ? 'Schakel naar lichte modus'
                    : 'Schakel naar donkere modus'
            }
            className="flex size-9 items-center justify-center rounded-full border bg-card text-muted-foreground transition hover:text-foreground"
        >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
    );
}

'use client';
import { useTheme } from './useTheme';

interface ThemeSwitcherProps {
  variant: 'button' | 'icon' | 'icon-text';
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ variant }) => {
  const { theme, toggleTheme } = useTheme();

  switch (variant) {
    case 'icon':
      return (
        <button
          onClick={toggleTheme}
          className="cursor-pointer rounded bg-[var(--color-background)] px-4 py-2 text-[var(--color-foreground)] transition-colors hover:bg-gray-700"
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      );
    case 'icon-text':
      return (
        <button
          onClick={toggleTheme}
          className="cursor-pointer rounded bg-[var(--color-background)] px-4 py-2 text-[var(--color-foreground)] transition-colors hover:bg-gray-700"
        >
          {theme === 'dark' ? '🌞 Jasny' : '🌙 Ciemny'}
        </button>
      );
    case 'button':
      return (
        <button
          onClick={toggleTheme}
          className="flex cursor-pointer items-center gap-2 rounded bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          {theme === 'light' ? '🌙 Tryb ciemny' : '🌞 Tryb jasny'}
        </button>
      );
  }
};

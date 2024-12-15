import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all"></Sun>
      <Moon className="size-[1.2rem] absolute rotate-0 scale-0 transition-all"></Moon>
    </Button>
  );
};

export default ThemeToggle;

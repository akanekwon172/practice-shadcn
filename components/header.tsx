import Link from 'next/link';
import ThemeToggle from './feature/theme-toggle';

export default function Header() {
  return (
    <header className="py-4 border-b-2">
      <nav>
        <div className=" container mx-auto flex h-full items-center justify-between">
          <Link href="/">Elements</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

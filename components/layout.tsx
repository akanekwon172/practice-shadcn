import Header from './header';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='min-h-dvh antialiased '>
      <Header></Header>
      {children}
    </div>
  );
}

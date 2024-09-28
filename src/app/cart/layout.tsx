import NavBar from '@/components/NavBar';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'cart page',
    description: 'cart page',
    keywords: '',
  };
}

export default async function CartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

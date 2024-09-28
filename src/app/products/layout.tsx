import NavBar from '@/components/NavBar';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Products page',
    description: 'Products page',
    keywords: '',
  };
}

export default async function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

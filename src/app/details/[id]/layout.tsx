import NavBar from '@/components/NavBar';
import type { Metadata } from 'next';

interface Params {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: Params): Promise<Metadata> {
  return {
    title: 'Details page',
    description: `Product ${id} page`,
    keywords: '',
  };
}

export default async function DetailsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

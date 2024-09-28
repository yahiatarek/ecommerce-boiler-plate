import type { Metadata } from 'next';
import React from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home',
    description: 'Home',
  };
}

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default HomeLayout;

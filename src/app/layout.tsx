import './globals.css';
import { Metadata } from 'next';
import Root from './root';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: 'Home',
      default: `Home ecommerce`,
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} dir={'en'}>
      <body style={{ height: '100vh' }}>
        <Root>{children}</Root>
      </body>
    </html>
  );
}

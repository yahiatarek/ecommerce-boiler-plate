import { ReactNode } from 'react';
import NavBar from '../NavBar';

export default function HeaderLayout({ pageName, children }: { pageName: string; children: ReactNode }) {
  return (
    <div className="layout-container">
      <NavBar pageName={pageName} />
      {children}
    </div>
  );
}

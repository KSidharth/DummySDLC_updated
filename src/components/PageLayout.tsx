
import React, { ReactNode } from 'react';

/**
 * PageLayout Component Props
 */
interface PageLayoutProps {
  children: ReactNode;
}

/**
 * Page Layout Component
 * 
 * Provides consistent page structure and responsive container
 * Satisfies NFR-003: Responsive layout for desktop, tablet, and mobile
 */
const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <main className="relative" role="main">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;

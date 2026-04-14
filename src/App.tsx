
import React from 'react';
import LoginPage from './pages/LoginPage';
import ErrorBoundary from './components/ErrorBoundary';

/**
 * Main application component
 * Wraps the login page in an error boundary for graceful error handling
 */
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <LoginPage />
    </ErrorBoundary>
  );
};

export default App;

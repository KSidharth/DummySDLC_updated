
import React from 'react';
import LoginForm from '../components/LoginForm';
import PageLayout from '../components/PageLayout';

/**
 * Login Page Component
 * 
 * Satisfies Requirements:
 * - BR-001: Deliver simple functional login UI
 * - BR-002: Ensure positive first user experience
 * - NFR-003: Responsive and accessible UI design
 * - NFR-001: Page load performance under 2 seconds
 */
const LoginPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Please enter your profile details to continue
            </p>
          </div>

          {/* Login Form Component */}
          <div className="mt-8 rounded-xl bg-white px-6 py-8 shadow-lg sm:px-10">
            <LoginForm />
          </div>

          {/* Footer Information */}
          <p className="mt-4 text-center text-xs text-gray-500">
            This is a standalone prototype with client-side validation only
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default LoginPage;

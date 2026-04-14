
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputField from './InputField';
import SuccessMessage from './SuccessMessage';

/**
 * Login Form Data Transfer Object
 * Defines the shape of the login form data
 */
interface LoginFormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

/**
 * LoginForm Component
 * 
 * Implements all functional requirements:
 * - FR-001: Display Name input field
 * - FR-002: Display Username input field
 * - FR-003: Display Email ID input field with format validation
 * - FR-004: Display Password input field with character masking
 * - FR-005: Display Login submit button
 * - FR-006: Show login successful message
 * - FR-007: Form validation on login submission
 * 
 * Non-functional requirements:
 * - NFR-003: Responsive and accessible UI design (ARIA labels, keyboard navigation)
 * - NFR-004: Password field data security (no plain text exposure)
 * - NFR-005: Usability and input field clarity
 */
const LoginForm: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    mode: 'onSubmit',
  });

  /**
   * Form submission handler
   * Validates all fields and displays success message on passing validation
   * Satisfies FR-006 and FR-007
   */
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    // Simulate processing (not required but provides better UX)
    await new Promise((resolve) => setTimeout(resolve, 300));

    // All validations passed - show success message (FR-006)
    setShowSuccess(true);

    // Log form submission for development (excluding password per NFR-004)
    console.log('Login form submitted:', {
      name: data.name,
      username: data.username,
      email: data.email,
      // Password is intentionally excluded from logging (NFR-004)
    });
  };

  /**
   * Email validation pattern (RFC 5322 simplified)
   * Satisfies FR-003 email format validation requirement
   */
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div className="space-y-6">
      {/* Success Message Display - FR-006 */}
      {showSuccess && (
        <SuccessMessage
          message="Login Successful"
          onDismiss={() => setShowSuccess(false)}
        />
      )}

      {/* Login Form - FR-007 */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        noValidate
        aria-label="Login form"
      >
        {/* Name Field - FR-001 */}
        <InputField
          id="name"
          label="Name"
          type="text"
          placeholder="Enter your full name"
          error={errors.name?.message}
          required
          aria-label="Name input field"
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name', {
            required: 'Name is required',
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: 'Name must contain only alphabetic characters and spaces',
            },
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters long',
            },
          })}
        />

        {/* Username Field - FR-002 */}
        <InputField
          id="username"
          label="Username"
          type="text"
          placeholder="Enter your username"
          error={errors.username?.message}
          required
          aria-label="Username input field"
          aria-describedby={errors.username ? 'username-error' : undefined}
          {...register('username', {
            required: 'Username is required',
            pattern: {
              value: /^[a-zA-Z0-9_-]+$/,
              message: 'Username must contain only alphanumeric characters, underscores, and hyphens',
            },
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters long',
            },
          })}
        />

        {/* Email ID Field - FR-003 */}
        <InputField
          id="email"
          label="Email ID"
          type="email"
          placeholder="Enter your email address"
          error={errors.email?.message}
          required
          aria-label="Email ID input field"
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email', {
            required: 'Email ID is required',
            pattern: {
              value: emailPattern,
              message: 'Please enter a valid email address',
            },
          })}
        />

        {/* Password Field - FR-004, NFR-004 */}
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          error={errors.password?.message}
          required
          aria-label="Password input field"
          aria-describedby={errors.password ? 'password-error' : undefined}
          autoComplete="current-password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          })}
        />

        {/* Login Submit Button - FR-005 */}
        <button
          type="submit"
          className="btn btn-primary w-full py-2.5 text-base font-semibold"
          disabled={isSubmitting}
          aria-label="Login submit button"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="mr-2 h-4 w-4 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </span>
          ) : (
            'Login'
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

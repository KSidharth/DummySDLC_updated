
import React, { useEffect } from 'react';

/**
 * SuccessMessage Component Props
 */
interface SuccessMessageProps {
  message: string;
  onDismiss?: () => void;
  autoDismiss?: boolean;
  dismissDelay?: number;
}

/**
 * Success Message Component
 * 
 * Satisfies Requirements:
 * - FR-006: Display "Login Successful" message with visual distinction
 * - NFR-005: Distinct success message styling (green color, prominent display)
 * - NFR-003: Accessible to screen readers via ARIA live region
 * 
 * Features:
 * - Visually distinct green styling
 * - ARIA live region for screen reader announcement
 * - Optional auto-dismiss functionality
 * - Manual dismiss button with keyboard support
 */
const SuccessMessage: React.FC<SuccessMessageProps> = ({
  message,
  onDismiss,
  autoDismiss = false,
  dismissDelay = 5000,
}) => {
  // Auto-dismiss after specified delay if enabled
  useEffect(() => {
    if (autoDismiss && onDismiss) {
      const timer = setTimeout(() => {
        onDismiss();
      }, dismissDelay);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissDelay, onDismiss]);

  return (
    <div
      className="rounded-lg border border-success-200 bg-success-50 p-4"
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex items-start">
        {/* Success Icon */}
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-success-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Success Message Text */}
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-semibold text-success-800">
            {message}
          </h3>
          <p className="mt-1 text-sm text-success-700">
            Your credentials have been validated successfully.
          </p>
        </div>

        {/* Dismiss Button (optional) */}
        {onDismiss && (
          <div className="ml-auto pl-3">
            <button
              type="button"
              onClick={onDismiss}
              className="inline-flex rounded-md bg-success-50 p-1.5 text-success-500 hover:bg-success-100 focus:outline-none focus:ring-2 focus:ring-success-600 focus:ring-offset-2 focus:ring-offset-success-50"
              aria-label="Dismiss success message"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessMessage;

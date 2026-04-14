
import React, { forwardRef } from 'react';

/**
 * InputField Component Props
 */
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
}

/**
 * Reusable Input Field Component
 * 
 * Satisfies Requirements:
 * - NFR-003: Accessible UI with ARIA labels and keyboard navigation
 * - NFR-005: Clear field labels and placeholder text
 * - FR-007: Field-level error message display
 * 
 * Features:
 * - Fully accessible with ARIA attributes
 * - Keyboard navigable
 * - Error state styling with distinct visual feedback
 * - Support for required field indicator
 */
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, error, required = false, className = '', ...props }, ref) => {
    const inputClasses = `input ${error ? 'input-error' : ''} ${className}`;

    return (
      <div className="space-y-1">
        {/* Field Label - NFR-005 */}
        <label
          htmlFor={id}
          className={`label ${required ? 'label-required' : ''}`}
        >
          {label}
        </label>

        {/* Input Field */}
        <input
          ref={ref}
          id={id}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-required={required}
          {...props}
        />

        {/* Error Message - FR-007, NFR-005 */}
        {error && (
          <p
            id={`${id}-error`}
            className="mt-1.5 text-sm text-error-600"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;

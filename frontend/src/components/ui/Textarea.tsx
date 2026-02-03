'use client';

import { forwardRef, TextareaHTMLAttributes } from 'react';

export type TextareaSize = 'sm' | 'md' | 'lg';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  size?: TextareaSize;
  fullWidth?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const sizeStyles: Record<TextareaSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-3 py-2 text-sm',
  lg: 'px-4 py-2.5 text-base',
};

const resizeStyles: Record<string, string> = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      hint,
      size = 'md',
      fullWidth = false,
      resize = 'vertical',
      disabled,
      className = '',
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className={`${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          rows={rows}
          className={`
            block rounded-lg
            bg-white dark:bg-neutral-900
            border
            ${error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-neutral-300 dark:border-neutral-700 focus:border-neutral-500 focus:ring-neutral-500'
            }
            text-neutral-900 dark:text-neutral-100
            placeholder:text-neutral-400 dark:placeholder:text-neutral-500
            focus:outline-none focus:ring-2 focus:ring-offset-0
            disabled:opacity-50 disabled:cursor-not-allowed
            disabled:bg-neutral-50 dark:disabled:bg-neutral-800
            transition-colors duration-150
            ${sizeStyles[size]}
            ${resizeStyles[resize]}
            ${fullWidth ? 'w-full' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
        {hint && !error && (
          <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">{hint}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };

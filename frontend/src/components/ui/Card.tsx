'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  action?: ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ padding = 'none', className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          bg-white dark:bg-neutral-900
          border border-neutral-200 dark:border-neutral-800
          rounded-xl shadow-sm
          ${paddingStyles[padding]}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, description, action, className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          px-4 py-3
          border-b border-neutral-200 dark:border-neutral-800
          flex items-center justify-between gap-4
          ${className}
        `}
        {...props}
      >
        {children || (
          <>
            <div className="min-w-0 flex-1">
              {title && (
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">
                  {description}
                </p>
              )}
            </div>
            {action && <div className="flex-shrink-0">{action}</div>}
          </>
        )}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ padding = 'md', className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          ${paddingStyles[padding]}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'CardBody';

export { Card, CardHeader, CardBody };

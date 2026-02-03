'use client';

import { useState } from 'react';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';

export default function SettingsPage() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');

  const themeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ] as const;

  const fontSizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ] as const;

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Page header */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Settings
        </h2>
        <p className="mt-1 text-neutral-500 dark:text-neutral-400">
          Manage your account and application preferences.
        </p>
      </div>

      {/* Profile settings */}
      <Card>
        <CardHeader
          title="Profile"
          description="Your personal information and account details"
        />
        <CardBody>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                <svg className="w-8 h-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <Button variant="secondary" size="sm">Change Avatar</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input label="First Name" defaultValue="John" fullWidth />
              <Input label="Last Name" defaultValue="Doe" fullWidth />
            </div>
            <Input label="Email" type="email" defaultValue="john@example.com" fullWidth />
          </div>
        </CardBody>
      </Card>

      {/* Appearance */}
      <Card>
        <CardHeader
          title="Appearance"
          description="Customize the look and feel of the application"
        />
        <CardBody>
          <div className="space-y-6">
            {/* Theme */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Theme
              </label>
              <div className="flex gap-2">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setTheme(option.value)}
                    className={`
                      px-4 py-2 text-sm font-medium rounded-lg border transition-colors
                      ${theme === option.value
                        ? 'border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                        : 'border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Font size */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Editor Font Size
              </label>
              <div className="flex gap-2">
                {fontSizeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setFontSize(option.value)}
                    className={`
                      px-4 py-2 text-sm font-medium rounded-lg border transition-colors
                      ${fontSize === option.value
                        ? 'border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                        : 'border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* API Configuration */}
      <Card>
        <CardHeader
          title="API Configuration"
          description="Configure API keys and model preferences"
        />
        <CardBody>
          <div className="space-y-4">
            <div>
              <Input
                label="OpenAI API Key"
                type="password"
                defaultValue="sk-••••••••••••••••••••••••"
                fullWidth
                hint="Your API key is stored securely and never shared"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Default Model
              </label>
              <div className="flex flex-wrap gap-2">
                {['GPT-4o', 'GPT-4', 'GPT-3.5 Turbo', 'Claude 3'].map((model) => (
                  <Badge
                    key={model}
                    variant={model === 'GPT-4o' ? 'info' : 'default'}
                    className="cursor-pointer"
                  >
                    {model}
                    {model === 'GPT-4o' && ' (default)'}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Preferences */}
      <Card>
        <CardHeader
          title="Preferences"
          description="Editor and workflow preferences"
        />
        <CardBody>
          <div className="space-y-4">
            {[
              { label: 'Auto-save drafts', description: 'Automatically save your work every 30 seconds', enabled: true },
              { label: 'Show line numbers', description: 'Display line numbers in the editor', enabled: true },
              { label: 'Enable syntax highlighting', description: 'Highlight template variables and syntax', enabled: true },
              { label: 'Compact mode', description: 'Use smaller spacing in the interface', enabled: false },
            ].map((pref) => (
              <div key={pref.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">
                    {pref.label}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {pref.description}
                  </p>
                </div>
                <button
                  className={`
                    relative w-11 h-6 rounded-full transition-colors
                    ${pref.enabled ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-200 dark:bg-neutral-700'}
                  `}
                >
                  <span
                    className={`
                      absolute top-1 w-4 h-4 rounded-full transition-transform
                      ${pref.enabled
                        ? 'left-6 bg-white dark:bg-neutral-900'
                        : 'left-1 bg-white dark:bg-neutral-400'
                      }
                    `}
                  />
                </button>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Save button */}
      <div className="flex justify-end gap-3">
        <Button variant="secondary">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}

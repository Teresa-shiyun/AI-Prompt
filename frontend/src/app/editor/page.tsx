'use client';

import { useState } from 'react';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Badge } from '@/components/ui/Badge';
import { mockPrompts, mockVersions } from '@/lib/mock-data';

export default function EditorPage() {
  const prompt = mockPrompts[0];
  const currentVersion = mockVersions[0];
  const [content, setContent] = useState(currentVersion.content);

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Prompt Editor
          </h2>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">
            Edit and refine your prompts with real-time preview.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Save Draft</Button>
          <Button>Publish Version</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor panel */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader
              title={prompt.name}
              description={`Version ${currentVersion.versionNumber} • ${currentVersion.status}`}
              action={
                <Badge variant={currentVersion.status === 'active' ? 'success' : 'default'}>
                  {currentVersion.status}
                </Badge>
              }
            />
            <CardBody>
              <div className="space-y-4">
                <Input
                  label="Prompt Name"
                  defaultValue={prompt.name}
                  fullWidth
                />
                <Input
                  label="Description"
                  defaultValue={prompt.description}
                  fullWidth
                />
                <Textarea
                  label="Prompt Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={16}
                  fullWidth
                  className="font-mono text-sm"
                />
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Variables */}
          <Card>
            <CardHeader title="Variables" description="Detected template variables" />
            <CardBody>
              <div className="space-y-2">
                {['customer_history', 'issue_description'].map((variable) => (
                  <div
                    key={variable}
                    className="flex items-center justify-between px-3 py-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
                  >
                    <code className="text-sm text-neutral-700 dark:text-neutral-300">
                      {`{{${variable}}}`}
                    </code>
                    <Badge size="sm" variant="info">string</Badge>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Metadata */}
          <Card>
            <CardHeader title="Metadata" />
            <CardBody>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-neutral-500 dark:text-neutral-400">Created</dt>
                  <dd className="text-neutral-900 dark:text-white">Dec 1, 2024</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-neutral-500 dark:text-neutral-400">Last updated</dt>
                  <dd className="text-neutral-900 dark:text-white">Jan 15, 2025</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-neutral-500 dark:text-neutral-400">Versions</dt>
                  <dd className="text-neutral-900 dark:text-white">{prompt.versionCount}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-neutral-500 dark:text-neutral-400">Token count</dt>
                  <dd className="text-neutral-900 dark:text-white">~187</dd>
                </div>
              </dl>
            </CardBody>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader title="Tags" />
            <CardBody>
              <div className="flex flex-wrap gap-2">
                {prompt.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
                <button className="text-sm text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">
                  + Add tag
                </button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

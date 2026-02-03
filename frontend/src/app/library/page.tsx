import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { mockPrompts } from '@/lib/mock-data';

export default function LibraryPage() {
  const prompts = mockPrompts;

  const categories = [
    { name: 'All', count: prompts.length },
    { name: 'Support', count: 1 },
    { name: 'Development', count: 2 },
    { name: 'Productivity', count: 2 },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Prompt Library
          </h2>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">
            Browse and manage your collection of prompts.
          </p>
        </div>
        <Button>New Prompt</Button>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`
                px-3 py-1.5 text-sm font-medium rounded-lg transition-colors
                ${category.name === 'All'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }
              `}
            >
              {category.name}
              <span className="ml-1.5 text-xs opacity-60">({category.count})</span>
            </button>
          ))}
        </div>
        <Input
          placeholder="Search prompts..."
          className="w-72"
          leftIcon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          }
        />
      </div>

      {/* Prompts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {prompts.map((prompt) => (
          <Card key={prompt.id} className="hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
            <CardHeader
              title={prompt.name}
              action={
                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                  v{prompt.versionCount}
                </span>
              }
            />
            <CardBody>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
                {prompt.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {prompt.tags.map((tag) => (
                  <Badge key={tag} size="sm">{tag}</Badge>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                  Updated {new Date(prompt.updatedAt).toLocaleDateString()}
                </span>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">View</Button>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Empty state placeholder */}
      <Card padding="lg" className="text-center">
        <div className="max-w-sm mx-auto">
          <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <p className="font-medium text-neutral-900 dark:text-white">
            Create your first prompt
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Get started by creating a new prompt or importing from a template.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Button variant="secondary" size="sm">Browse Templates</Button>
            <Button size="sm">New Prompt</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

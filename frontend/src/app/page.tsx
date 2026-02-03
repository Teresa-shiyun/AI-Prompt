import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { mockPrompts, mockEvaluationResult } from '@/lib/mock-data';

export default function DashboardPage() {
  const recentPrompts = mockPrompts.slice(0, 3);
  const stats = [
    { label: 'Total Prompts', value: mockPrompts.length, change: '+2 this week' },
    { label: 'Avg. Score', value: `${mockEvaluationResult.overallScore}%`, change: '+5% vs last month' },
    { label: 'Tests Passing', value: `${mockEvaluationResult.testCasesPassed}/${mockEvaluationResult.testCasesTotal}`, change: '90% pass rate' },
    { label: 'Active Versions', value: '12', change: '3 in review' },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Welcome back
        </h2>
        <p className="mt-1 text-neutral-500 dark:text-neutral-400">
          Here&apos;s an overview of your prompt engineering workspace.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} padding="md">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {stat.label}
            </p>
            <p className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
              {stat.change}
            </p>
          </Card>
        ))}
      </div>

      {/* Recent prompts */}
      <Card>
        <CardHeader
          title="Recent Prompts"
          description="Your most recently updated prompts"
          action={
            <Button variant="ghost" size="sm">
              View all
            </Button>
          }
        />
        <CardBody padding="none">
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {recentPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="flex items-center justify-between px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-neutral-900 dark:text-white truncate">
                    {prompt.name}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
                    {prompt.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <div className="flex gap-1">
                    {prompt.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500 whitespace-nowrap">
                    v{prompt.versionCount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Quick actions */}
      <Card>
        <CardHeader title="Quick Actions" />
        <CardBody>
          <div className="flex flex-wrap gap-3">
            <Button>New Prompt</Button>
            <Button variant="secondary">Run Evaluation</Button>
            <Button variant="secondary">Import from Library</Button>
            <Button variant="ghost">View Documentation</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { mockEvaluationResult, mockPrompts } from '@/lib/mock-data';

export default function EvaluatePage() {
  const prompt = mockPrompts[0];
  const evaluation = mockEvaluationResult;

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 70) return 'text-amber-600 dark:text-amber-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBadge = (score: number): 'success' | 'warning' | 'error' => {
    if (score >= 90) return 'success';
    if (score >= 70) return 'warning';
    return 'error';
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Evaluation Results
          </h2>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">
            Comprehensive quality assessment for {prompt.name}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Export Report</Button>
          <Button>Run New Evaluation</Button>
        </div>
      </div>

      {/* Overall score */}
      <Card padding="lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Overall Score</p>
            <p className={`text-5xl font-bold mt-1 ${getScoreColor(evaluation.overallScore)}`}>
              {evaluation.overallScore}%
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
              {evaluation.testCasesPassed} of {evaluation.testCasesTotal} test cases passed
            </p>
          </div>
          <div className="text-right">
            <Badge variant={getScoreBadge(evaluation.overallScore)} size="md">
              {evaluation.status}
            </Badge>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
              Completed in {Math.round((evaluation.duration || 0) / 1000)}s
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
              {new Date(evaluation.completedAt || '').toLocaleString()}
            </p>
          </div>
        </div>
      </Card>

      {/* Metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {evaluation.metrics.map((metric) => (
          <Card key={metric.type} padding="md">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 capitalize">
                {metric.type}
              </p>
              <Badge variant={getScoreBadge(metric.score)} size="sm">
                {metric.score}%
              </Badge>
            </div>
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  metric.score >= 90
                    ? 'bg-green-500'
                    : metric.score >= 70
                    ? 'bg-amber-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${metric.score}%` }}
              />
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
              {metric.details}
            </p>
          </Card>
        ))}
      </div>

      {/* Detailed breakdown */}
      <Card>
        <CardHeader
          title="Metric Details"
          description="Detailed breakdown of each evaluation dimension"
        />
        <CardBody padding="none">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Metric
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Score
                </th>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Details
                </th>
                <th className="text-right px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {evaluation.metrics.map((metric) => (
                <tr key={metric.type} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                  <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white capitalize">
                    {metric.type}
                  </td>
                  <td className="px-4 py-3">
                    <span className={getScoreColor(metric.score)}>
                      {metric.score}/{metric.maxScore}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-500 dark:text-neutral-400">
                    {metric.details}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Badge variant={getScoreBadge(metric.score)} size="sm">
                      {metric.score >= 90 ? 'Excellent' : metric.score >= 70 ? 'Good' : 'Needs Work'}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

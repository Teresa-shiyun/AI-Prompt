import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { mockVersions, mockPrompts } from '@/lib/mock-data';

export default function ComparePage() {
  const prompt = mockPrompts[0];
  const versionA = mockVersions[1]; // v4
  const versionB = mockVersions[0]; // v5

  const metricsComparison = [
    { metric: 'Accuracy', scoreA: 82, scoreB: 87, delta: 5 },
    { metric: 'Relevance', scoreA: 88, scoreB: 92, delta: 4 },
    { metric: 'Coherence', scoreA: 85, scoreB: 88, delta: 3 },
    { metric: 'Safety', scoreA: 95, scoreB: 98, delta: 3 },
    { metric: 'Cost', scoreA: 80, scoreB: 75, delta: -5 },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Compare Versions
          </h2>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">
            Side-by-side comparison of prompt versions for {prompt.name}
          </p>
        </div>
        <Button variant="secondary">Select Versions</Button>
      </div>

      {/* Version selectors */}
      <div className="grid grid-cols-2 gap-4">
        <Card padding="md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Version A</p>
              <p className="font-semibold text-neutral-900 dark:text-white">
                v{versionA.versionNumber}
              </p>
            </div>
            <Badge variant="default">{versionA.status}</Badge>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            {versionA.changelog}
          </p>
        </Card>
        <Card padding="md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Version B</p>
              <p className="font-semibold text-neutral-900 dark:text-white">
                v{versionB.versionNumber}
              </p>
            </div>
            <Badge variant="success">{versionB.status}</Badge>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            {versionB.changelog}
          </p>
        </Card>
      </div>

      {/* Metrics comparison */}
      <Card>
        <CardHeader
          title="Performance Comparison"
          description="Evaluation metrics across both versions"
        />
        <CardBody padding="none">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Metric
                </th>
                <th className="text-center px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  v{versionA.versionNumber}
                </th>
                <th className="text-center px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  v{versionB.versionNumber}
                </th>
                <th className="text-right px-4 py-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Change
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {metricsComparison.map((row) => (
                <tr key={row.metric} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                  <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white">
                    {row.metric}
                  </td>
                  <td className="px-4 py-3 text-center text-neutral-600 dark:text-neutral-400">
                    {row.scoreA}%
                  </td>
                  <td className="px-4 py-3 text-center text-neutral-900 dark:text-white font-medium">
                    {row.scoreB}%
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span
                      className={
                        row.delta > 0
                          ? 'text-green-600 dark:text-green-400'
                          : row.delta < 0
                          ? 'text-red-600 dark:text-red-400'
                          : 'text-neutral-500'
                      }
                    >
                      {row.delta > 0 ? '+' : ''}{row.delta}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {/* Content diff */}
      <Card>
        <CardHeader
          title="Content Diff"
          description="Side-by-side content comparison"
        />
        <CardBody padding="none">
          <div className="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800">
            <div className="p-4">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">
                Version {versionA.versionNumber}
              </p>
              <pre className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap font-mono bg-neutral-50 dark:bg-neutral-800 p-3 rounded-lg">
                {versionA.content}
              </pre>
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">
                Version {versionB.versionNumber}
              </p>
              <pre className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap font-mono bg-neutral-50 dark:bg-neutral-800 p-3 rounded-lg">
                {versionB.content}
              </pre>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

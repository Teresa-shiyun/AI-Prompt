import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { mockTestCases, mockPrompts } from '@/lib/mock-data';

export default function TestsPage() {
  const prompt = mockPrompts[0];
  const testCases = mockTestCases;

  const testResults = [
    { id: 'test-1', passed: true, duration: 1.2 },
    { id: 'test-2', passed: true, duration: 1.8 },
    { id: 'test-3', passed: false, duration: 1.5 },
  ];

  const getResultForTest = (testId: string) => {
    return testResults.find((r) => r.id === testId);
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Test Cases
          </h2>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">
            Manage and run test cases for {prompt.name}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Import Tests</Button>
          <Button>New Test Case</Button>
        </div>
      </div>

      {/* Stats and filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Badge variant="success" dot>{testResults.filter((r) => r.passed).length} Passed</Badge>
            <Badge variant="error" dot>{testResults.filter((r) => !r.passed).length} Failed</Badge>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Input
            placeholder="Search tests..."
            className="w-64"
            leftIcon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            }
          />
          <Button variant="secondary">Run All Tests</Button>
        </div>
      </div>

      {/* Test cases list */}
      <div className="space-y-4">
        {testCases.map((testCase) => {
          const result = getResultForTest(testCase.id);
          const inputData = JSON.parse(testCase.input);

          return (
            <Card key={testCase.id}>
              <CardHeader
                title={testCase.name}
                action={
                  <div className="flex items-center gap-3">
                    {result && (
                      <Badge variant={result.passed ? 'success' : 'error'}>
                        {result.passed ? 'Passed' : 'Failed'} ({result.duration}s)
                      </Badge>
                    )}
                    <Button variant="ghost" size="sm">Run</Button>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                }
              />
              <CardBody>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Input */}
                  <div>
                    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Input Variables
                    </p>
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 space-y-2">
                      {Object.entries(inputData).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">{key}</p>
                          <p className="text-sm text-neutral-900 dark:text-white font-mono">
                            {String(value)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expected output */}
                  <div>
                    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Expected Behavior
                    </p>
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3">
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        {testCase.expectedOutput}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">Tags:</span>
                  {testCase.tags.map((tag) => (
                    <Badge key={tag} size="sm">{tag}</Badge>
                  ))}
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

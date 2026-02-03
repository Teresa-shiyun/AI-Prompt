import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Textarea } from '@/components/ui/Textarea';
import { mockPrompts } from '@/lib/mock-data';

export default function OptimizePage() {
  const prompt = mockPrompts[0];

  const optimizationSuggestions = [
    {
      id: 1,
      type: 'clarity',
      title: 'Add explicit output format',
      description: 'Specify the exact structure you expect in responses to reduce ambiguity.',
      impact: 'high',
    },
    {
      id: 2,
      type: 'examples',
      title: 'Include few-shot examples',
      description: 'Add 2-3 example conversations to demonstrate expected behavior.',
      impact: 'high',
    },
    {
      id: 3,
      type: 'constraints',
      title: 'Define edge case handling',
      description: 'Add instructions for handling abusive customers or out-of-scope requests.',
      impact: 'medium',
    },
    {
      id: 4,
      type: 'efficiency',
      title: 'Reduce token count',
      description: 'Consolidate redundant instructions to lower cost per request.',
      impact: 'low',
    },
  ];

  const impactColors: Record<string, 'error' | 'warning' | 'default'> = {
    high: 'error',
    medium: 'warning',
    low: 'default',
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Optimize Prompt
          </h2>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">
            AI-powered suggestions to improve your prompt&apos;s effectiveness.
          </p>
        </div>
        <Button>Apply All Suggestions</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current prompt */}
        <Card>
          <CardHeader
            title="Current Prompt"
            description={prompt.name}
          />
          <CardBody>
            <Textarea
              value={prompt.content}
              rows={18}
              fullWidth
              readOnly
              className="font-mono text-sm"
            />
          </CardBody>
        </Card>

        {/* Optimized preview */}
        <Card>
          <CardHeader
            title="Optimized Preview"
            description="Preview with suggested improvements"
            action={<Badge variant="success">+15% estimated improvement</Badge>}
          />
          <CardBody>
            <Textarea
              value={`${prompt.content}

## Output Format
Please structure your response as follows:
1. Acknowledgment of the customer's concern
2. Clarifying questions (if needed)
3. Solution or next steps
4. Closing with offer for further assistance

## Example Interaction
Customer: "I can't access my account"
Assistant: "I'm sorry to hear you're having trouble accessing your account. I'd be happy to help you resolve this. Could you tell me what error message you're seeing when you try to log in?"`}
              rows={18}
              fullWidth
              readOnly
              className="font-mono text-sm"
            />
          </CardBody>
        </Card>
      </div>

      {/* Suggestions list */}
      <Card>
        <CardHeader
          title="Optimization Suggestions"
          description="Review and apply individual suggestions"
        />
        <CardBody padding="none">
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {optimizationSuggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="flex items-center justify-between px-4 py-4"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <Badge variant={impactColors[suggestion.impact]} size="sm">
                      {suggestion.impact}
                    </Badge>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-white">
                      {suggestion.title}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {suggestion.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button variant="ghost" size="sm">Dismiss</Button>
                  <Button variant="secondary" size="sm">Apply</Button>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { mockDNA, mockPrompts } from '@/lib/mock-data';

export default function DNAPage() {
  const prompt = mockPrompts[0];
  const dna = mockDNA;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-amber-600 dark:text-amber-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const categoryGroups = dna.traits.reduce((acc, trait) => {
    if (!acc[trait.category]) {
      acc[trait.category] = [];
    }
    acc[trait.category].push(trait);
    return acc;
  }, {} as Record<string, typeof dna.traits>);

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Prompt DNA
          </h2>
          <p className="mt-1 text-neutral-500 dark:text-neutral-400">
            Deep analysis of prompt structure and characteristics for {prompt.name}
          </p>
        </div>
        <Button>Re-analyze</Button>
      </div>

      {/* Overview stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card padding="md">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Complexity</p>
          <p className={`text-2xl font-semibold mt-1 ${getScoreColor(100 - dna.overallComplexity)}`}>
            {dna.overallComplexity}%
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">Moderate</p>
        </Card>
        <Card padding="md">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Token Count</p>
          <p className="text-2xl font-semibold text-neutral-900 dark:text-white mt-1">
            {dna.tokenCount}
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">~$0.0004/request</p>
        </Card>
        <Card padding="md">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Readability</p>
          <p className={`text-2xl font-semibold mt-1 ${getScoreColor(dna.readabilityScore)}`}>
            {dna.readabilityScore}%
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">Good</p>
        </Card>
        <Card padding="md">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Traits Analyzed</p>
          <p className="text-2xl font-semibold text-neutral-900 dark:text-white mt-1">
            {dna.traits.length}
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">Across {Object.keys(categoryGroups).length} categories</p>
        </Card>
      </div>

      {/* Trait categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Object.entries(categoryGroups).map(([category, traits]) => (
          <Card key={category}>
            <CardHeader
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              description={`${traits.length} traits analyzed`}
            />
            <CardBody>
              <div className="space-y-4">
                {traits.map((trait) => (
                  <div key={trait.id}>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {trait.name}
                      </p>
                      <span className={`text-sm font-semibold ${getScoreColor(trait.score)}`}>
                        {trait.score}%
                      </span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${getScoreBarColor(trait.score)}`}
                        style={{ width: `${trait.score}%` }}
                      />
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      {trait.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Improvement suggestions */}
      <Card>
        <CardHeader
          title="Improvement Suggestions"
          description="Recommendations based on DNA analysis"
        />
        <CardBody padding="none">
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {dna.traits
              .filter((trait) => trait.suggestions.length > 0)
              .map((trait) => (
                <div key={trait.id} className="px-4 py-4">
                  <div className="flex items-start gap-3">
                    <Badge
                      variant={trait.score >= 60 ? 'warning' : 'error'}
                      size="sm"
                    >
                      {trait.category}
                    </Badge>
                    <div className="flex-1">
                      <p className="font-medium text-neutral-900 dark:text-white">
                        {trait.name}
                      </p>
                      <ul className="mt-2 space-y-1">
                        {trait.suggestions.map((suggestion, index) => (
                          <li
                            key={index}
                            className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2"
                          >
                            <svg className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="ghost" size="sm">Apply</Button>
                  </div>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

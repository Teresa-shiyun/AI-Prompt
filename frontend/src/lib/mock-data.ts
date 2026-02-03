import {
  Prompt,
  PromptVersion,
  EvaluationResult,
  PromptDNA,
  TestCase,
  DNATrait,
} from '@/types';

// ============================================================================
// Mock Prompts
// ============================================================================

export const mockPrompts: Prompt[] = [
  {
    id: 'prompt-1',
    name: 'Customer Support Assistant',
    description: 'A helpful assistant for handling customer inquiries and support tickets',
    content: `You are a helpful customer support assistant for TechCorp. Your role is to:

1. Greet customers warmly and professionally
2. Understand their issue by asking clarifying questions
3. Provide accurate solutions based on our knowledge base
4. Escalate complex issues to human agents when necessary

Always maintain a friendly, patient tone. Never make promises about refunds or compensation without manager approval.

Context: {{customer_history}}
Current issue: {{issue_description}}`,
    tags: ['support', 'customer-service', 'production'],
    createdAt: '2024-12-01T10:00:00Z',
    updatedAt: '2025-01-15T14:30:00Z',
    versionCount: 5,
    currentVersionId: 'version-1-5',
  },
  {
    id: 'prompt-2',
    name: 'Code Review Assistant',
    description: 'Analyzes code for bugs, security issues, and best practices',
    content: `You are an expert code reviewer. Analyze the provided code and identify:

- Potential bugs or logic errors
- Security vulnerabilities (SQL injection, XSS, etc.)
- Performance issues
- Code style and readability improvements
- Missing error handling

Format your response as:
## Summary
[Brief overview]

## Issues Found
[List with severity: Critical/High/Medium/Low]

## Suggestions
[Improvement recommendations]

Language: {{language}}
Code:
\`\`\`
{{code}}
\`\`\``,
    tags: ['development', 'code-review', 'security'],
    createdAt: '2024-11-15T09:00:00Z',
    updatedAt: '2025-01-20T11:00:00Z',
    versionCount: 3,
    currentVersionId: 'version-2-3',
  },
  {
    id: 'prompt-3',
    name: 'Content Summarizer',
    description: 'Summarizes long documents into concise, actionable summaries',
    content: `Summarize the following content into a clear, concise summary.

Requirements:
- Maximum {{max_length}} words
- Preserve key facts and figures
- Use bullet points for main takeaways
- Include any action items mentioned

Tone: {{tone}}
Content:
{{content}}`,
    tags: ['content', 'summarization', 'productivity'],
    createdAt: '2024-10-20T08:00:00Z',
    updatedAt: '2025-01-10T16:45:00Z',
    versionCount: 2,
    currentVersionId: 'version-3-2',
  },
  {
    id: 'prompt-4',
    name: 'SQL Query Generator',
    description: 'Converts natural language questions into SQL queries',
    content: `You are a SQL expert. Convert the user's question into a valid SQL query.

Database schema:
{{schema}}

Rules:
- Use only tables and columns from the provided schema
- Prefer JOINs over subqueries when possible
- Add comments explaining complex logic
- Always use parameterized queries for user inputs

User question: {{question}}

Output the SQL query only, no explanations unless the query is complex.`,
    tags: ['sql', 'database', 'development'],
    createdAt: '2024-09-05T12:00:00Z',
    updatedAt: '2024-12-28T09:15:00Z',
    versionCount: 4,
    currentVersionId: 'version-4-4',
  },
  {
    id: 'prompt-5',
    name: 'Meeting Notes Generator',
    description: 'Transforms meeting transcripts into structured notes with action items',
    content: `Transform this meeting transcript into structured notes.

Format:
## Meeting Summary
[2-3 sentence overview]

## Key Discussion Points
- [Point 1]
- [Point 2]
...

## Decisions Made
- [Decision 1]
- [Decision 2]
...

## Action Items
| Owner | Task | Due Date |
|-------|------|----------|
| ... | ... | ... |

## Next Steps
[What happens next]

Transcript:
{{transcript}}`,
    tags: ['productivity', 'meetings', 'notes'],
    createdAt: '2024-08-12T14:00:00Z',
    updatedAt: '2025-01-05T10:30:00Z',
    versionCount: 2,
    currentVersionId: 'version-5-2',
  },
];

// ============================================================================
// Mock Versions (for prompt-1: Customer Support Assistant)
// ============================================================================

export const mockVersions: PromptVersion[] = [
  {
    id: 'version-1-5',
    promptId: 'prompt-1',
    versionNumber: 5,
    content: `You are a helpful customer support assistant for TechCorp. Your role is to:

1. Greet customers warmly and professionally
2. Understand their issue by asking clarifying questions
3. Provide accurate solutions based on our knowledge base
4. Escalate complex issues to human agents when necessary

Always maintain a friendly, patient tone. Never make promises about refunds or compensation without manager approval.

Context: {{customer_history}}
Current issue: {{issue_description}}`,
    changelog: 'Added escalation guidelines and refund policy reminder',
    createdAt: '2025-01-15T14:30:00Z',
    createdBy: 'alice@techcorp.com',
    status: 'active',
  },
  {
    id: 'version-1-4',
    promptId: 'prompt-1',
    versionNumber: 4,
    content: `You are a helpful customer support assistant for TechCorp. Your role is to:

1. Greet customers warmly and professionally
2. Understand their issue by asking clarifying questions
3. Provide accurate solutions based on our knowledge base

Always maintain a friendly, patient tone.

Context: {{customer_history}}
Current issue: {{issue_description}}`,
    changelog: 'Simplified role description, added customer history context',
    createdAt: '2025-01-10T09:00:00Z',
    createdBy: 'bob@techcorp.com',
    status: 'archived',
  },
  {
    id: 'version-1-3',
    promptId: 'prompt-1',
    versionNumber: 3,
    content: `You are a customer support assistant. Help users with their issues.

Be polite and helpful. Ask questions to understand the problem.

Issue: {{issue_description}}`,
    changelog: 'Initial structured version with variable placeholders',
    createdAt: '2024-12-20T11:00:00Z',
    createdBy: 'alice@techcorp.com',
    status: 'archived',
  },
];

// ============================================================================
// Mock Evaluation Result
// ============================================================================

export const mockEvaluationResult: EvaluationResult = {
  id: 'eval-1',
  promptId: 'prompt-1',
  versionId: 'version-1-5',
  status: 'completed',
  metrics: [
    {
      type: 'accuracy',
      score: 87,
      maxScore: 100,
      details: 'Correctly addressed 87% of test case scenarios',
    },
    {
      type: 'relevance',
      score: 92,
      maxScore: 100,
      details: 'Responses stayed on topic with minimal deviation',
    },
    {
      type: 'coherence',
      score: 88,
      maxScore: 100,
      details: 'Logical flow maintained across multi-turn conversations',
    },
    {
      type: 'fluency',
      score: 95,
      maxScore: 100,
      details: 'Natural language with appropriate tone for support context',
    },
    {
      type: 'safety',
      score: 98,
      maxScore: 100,
      details: 'No harmful content generated, proper escalation boundaries',
    },
    {
      type: 'latency',
      score: 82,
      maxScore: 100,
      details: 'Average response time: 1.2s (target: <1s)',
    },
    {
      type: 'cost',
      score: 75,
      maxScore: 100,
      details: 'Average tokens per response: 245 (target: <200)',
    },
  ],
  overallScore: 88,
  testCasesPassed: 18,
  testCasesTotal: 20,
  createdAt: '2025-01-15T15:00:00Z',
  completedAt: '2025-01-15T15:05:32Z',
  duration: 332000,
};

// ============================================================================
// Mock DNA Analysis
// ============================================================================

const mockTraits: DNATrait[] = [
  {
    id: 'trait-1',
    name: 'Role Definition',
    category: 'structure',
    description: 'Clear definition of the AI\'s role and persona',
    score: 95,
    suggestions: [],
  },
  {
    id: 'trait-2',
    name: 'Task Decomposition',
    category: 'structure',
    description: 'Breaking down complex tasks into numbered steps',
    score: 90,
    suggestions: ['Consider adding sub-steps for complex procedures'],
  },
  {
    id: 'trait-3',
    name: 'Tone Specification',
    category: 'style',
    description: 'Explicit guidance on communication tone',
    score: 85,
    suggestions: ['Add examples of ideal tone in different scenarios'],
  },
  {
    id: 'trait-4',
    name: 'Output Format',
    category: 'formatting',
    description: 'Clear specification of expected output structure',
    score: 60,
    suggestions: [
      'Add explicit output format template',
      'Consider using markdown structure requirements',
    ],
  },
  {
    id: 'trait-5',
    name: 'Boundary Constraints',
    category: 'constraints',
    description: 'Clear limitations on what the AI should not do',
    score: 88,
    suggestions: ['Add more specific examples of off-limits topics'],
  },
  {
    id: 'trait-6',
    name: 'Context Variables',
    category: 'context',
    description: 'Use of dynamic placeholders for runtime context',
    score: 92,
    suggestions: [],
  },
  {
    id: 'trait-7',
    name: 'Few-shot Examples',
    category: 'examples',
    description: 'Inclusion of example inputs and outputs',
    score: 40,
    suggestions: [
      'Add 2-3 example conversations',
      'Include edge case examples',
      'Show escalation example',
    ],
  },
];

export const mockDNA: PromptDNA = {
  promptId: 'prompt-1',
  versionId: 'version-1-5',
  traits: mockTraits,
  overallComplexity: 65,
  tokenCount: 187,
  readabilityScore: 78,
  analyzedAt: '2025-01-15T15:10:00Z',
};

// ============================================================================
// Mock Test Cases
// ============================================================================

export const mockTestCases: TestCase[] = [
  {
    id: 'test-1',
    promptId: 'prompt-1',
    name: 'Basic Greeting Response',
    input: JSON.stringify({
      customer_history: 'New customer, no previous interactions',
      issue_description: 'Hi, I need help with my account',
    }),
    expectedOutput: 'Greeting with offer to help, followed by clarifying question about the specific account issue',
    tags: ['greeting', 'basic'],
    createdAt: '2025-01-10T10:00:00Z',
  },
  {
    id: 'test-2',
    promptId: 'prompt-1',
    name: 'Refund Request Handling',
    input: JSON.stringify({
      customer_history: 'Premium customer since 2022, 2 previous support tickets resolved',
      issue_description: 'I want a full refund for my subscription. This product is terrible!',
    }),
    expectedOutput: 'Empathetic response acknowledging frustration, questions about specific issues, NO promise of refund, mention of escalation to manager if needed',
    tags: ['refund', 'escalation', 'edge-case'],
    createdAt: '2025-01-10T10:15:00Z',
  },
  {
    id: 'test-3',
    promptId: 'prompt-1',
    name: 'Technical Issue Troubleshooting',
    input: JSON.stringify({
      customer_history: 'Customer since 2023, reported login issues twice before',
      issue_description: 'I cannot login to my account. It says my password is wrong but I am sure it is correct.',
    }),
    expectedOutput: 'Acknowledge issue, suggest password reset, check for caps lock/browser issues, offer to verify account status',
    tags: ['technical', 'login', 'common'],
    createdAt: '2025-01-10T10:30:00Z',
  },
];

// ============================================================================
// Helper: Get prompt by ID
// ============================================================================

export function getPromptById(id: string): Prompt | undefined {
  return mockPrompts.find((p) => p.id === id);
}

// ============================================================================
// Helper: Get versions for a prompt
// ============================================================================

export function getVersionsForPrompt(promptId: string): PromptVersion[] {
  return mockVersions.filter((v) => v.promptId === promptId);
}

// ============================================================================
// Helper: Get test cases for a prompt
// ============================================================================

export function getTestCasesForPrompt(promptId: string): TestCase[] {
  return mockTestCases.filter((t) => t.promptId === promptId);
}

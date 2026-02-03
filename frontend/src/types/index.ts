// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: string;
  disabled?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

// Prompt types
export interface Prompt {
  id: string;
  name: string;
  description: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  versionCount: number;
  currentVersionId: string;
}

export interface PromptVersion {
  id: string;
  promptId: string;
  versionNumber: number;
  content: string;
  changelog: string;
  createdAt: string;
  createdBy: string;
  status: 'draft' | 'active' | 'archived';
}

// Evaluation types
export type EvaluationStatus = 'pending' | 'running' | 'completed' | 'failed';

export type MetricType =
  | 'accuracy'
  | 'relevance'
  | 'coherence'
  | 'fluency'
  | 'safety'
  | 'latency'
  | 'cost';

export interface EvaluationMetric {
  type: MetricType;
  score: number;
  maxScore: number;
  details?: string;
}

export interface EvaluationResult {
  id: string;
  promptId: string;
  versionId: string;
  status: EvaluationStatus;
  metrics: EvaluationMetric[];
  overallScore: number;
  testCasesPassed: number;
  testCasesTotal: number;
  createdAt: string;
  completedAt?: string;
  duration?: number;
}

// Test case types
export interface TestCase {
  id: string;
  promptId: string;
  name: string;
  input: string;
  expectedOutput?: string;
  tags: string[];
  createdAt: string;
}

export interface TestRun {
  id: string;
  testCaseId: string;
  versionId: string;
  input: string;
  output: string;
  passed: boolean;
  executionTime: number;
  createdAt: string;
}

// DNA / Analysis types
export type TraitCategory =
  | 'structure'
  | 'style'
  | 'constraints'
  | 'context'
  | 'examples'
  | 'formatting';

export interface DNATrait {
  id: string;
  name: string;
  category: TraitCategory;
  description: string;
  score: number;
  suggestions: string[];
}

export interface PromptDNA {
  promptId: string;
  versionId: string;
  traits: DNATrait[];
  overallComplexity: number;
  tokenCount: number;
  readabilityScore: number;
  analyzedAt: string;
}

// Comparison types
export interface VersionComparison {
  versionA: PromptVersion;
  versionB: PromptVersion;
  contentDiff: string;
  metricsComparison: {
    metric: MetricType;
    scoreA: number;
    scoreB: number;
    delta: number;
  }[];
}

// Settings types
export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  defaultModel: string;
  autoSave: boolean;
  showLineNumbers: boolean;
  fontSize: 'small' | 'medium' | 'large';
}

// API response wrapper (for future use)
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: string;
}

// Pagination (for future use)
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

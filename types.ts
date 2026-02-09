
export enum RiskLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export interface ScamSignal {
  timestamp: number;
  type: string;
  description: string;
  severity: RiskLevel;
}

export interface ConversationTurn {
  role: 'user' | 'scammer';
  text: string;
  timestamp: number;
}

export interface LegalReport {
  id: string;
  date: string;
  summary: string;
  transcription: ConversationTurn[];
  riskAssessment: {
    level: RiskLevel;
    reasons: string[];
  };
  thaiLawSections: {
    section: string;
    description: string;
    relevance: string;
  }[];
  policeReadyDraft: string;
}

export interface ScamHistoryItem {
  id: string;
  timestamp: number;
  riskLevel: RiskLevel;
  type: string;
}

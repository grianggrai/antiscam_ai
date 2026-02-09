
import { RiskLevel } from './types';

export const THAI_SCAM_LAWS = [
  {
    section: "Section 341 (Fraud)",
    description: "Whoever, dishonestly, deceives another person by assertion of a falsehood or concealment of a fact which should be revealed.",
    punishment: "Imprisonment not exceeding three years or fine not exceeding 60,000 Baht."
  },
  {
    section: "Section 342 (Aggravated Fraud)",
    description: "Fraud committed by showing oneself to be another person, or taking advantage of the lack of intelligence or weak mind of the person deceived.",
    punishment: "Imprisonment not exceeding five years or fine not exceeding 100,000 Baht."
  },
  {
    section: "Computer-Related Crime Act Section 14",
    description: "Importing false computer data that is likely to cause damage to the public, or is related to fraud.",
    punishment: "Imprisonment not exceeding five years or fine not exceeding 100,000 Baht."
  }
];

export const SCAM_CATEGORIES = [
  "Government Impersonation",
  "Call Center Scam",
  "Fake Investment",
  "Romance Scam",
  "Parcel Delivery Scam",
  "Lottery/Prize Fraud"
];

export const MOCK_HISTORY = [
  { id: '1', timestamp: Date.now() - 86400000, riskLevel: RiskLevel.HIGH, type: 'Call Center Scam' },
  { id: '2', timestamp: Date.now() - 172800000, riskLevel: RiskLevel.LOW, type: 'Potential Spam' },
  { id: '3', timestamp: Date.now() - 259200000, riskLevel: RiskLevel.CRITICAL, type: 'Bank Impersonation' }
];

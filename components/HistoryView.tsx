
import React from 'react';
import { ChevronLeft, Search, Filter, ShieldAlert } from 'lucide-react';
import { MOCK_HISTORY } from '../constants';
import { RiskLevel } from '../types';

interface HistoryViewProps {
  onBack: () => void;
  onViewReport: (report: any) => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({ onBack, onViewReport }) => {
  const getRiskColor = (level: RiskLevel) => {
    switch (level) {
      case RiskLevel.CRITICAL: return 'text-red-600 bg-red-50 border-red-100';
      case RiskLevel.HIGH: return 'text-orange-600 bg-orange-50 border-orange-100';
      case RiskLevel.MEDIUM: return 'text-yellow-600 bg-yellow-50 border-yellow-100';
      case RiskLevel.LOW: return 'text-green-600 bg-green-50 border-green-100';
      default: return 'text-gray-600 bg-gray-50 border-gray-100';
    }
  };

  return (
    <div className="p-6 space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold">Report Archive</h2>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Filter className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search by type or date..." 
          className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-100 transition-all text-sm"
        />
      </div>

      <div className="space-y-4">
        {MOCK_HISTORY.map(item => (
          <div 
            key={item.id} 
            onClick={() => {}} // In real app, load full report
            className={`p-5 rounded-3xl border-2 transition-all active:scale-95 cursor-pointer bg-white ${getRiskColor(item.riskLevel)}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-xl bg-white shadow-sm">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">{item.riskLevel}</span>
            </div>
            
            <div>
              <h4 className="text-lg font-black text-gray-900 leading-tight">{item.type}</h4>
              <p className="text-xs text-gray-500 font-medium mt-1">
                Detected on {new Date(item.timestamp).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Report ID: {item.id}2024</span>
              <button className="text-xs font-bold text-red-600">Open Full Case →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


import React from 'react';
import { AlertCircle, ArrowUpRight, ShieldCheck, ShieldAlert, PhoneIncoming, FileText } from 'lucide-react';
import { MOCK_HISTORY } from '../constants';
import { RiskLevel } from '../types';

interface DashboardProps {
  onStartLive: () => void;
  onViewHistory: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onStartLive, onViewHistory }) => {
  const getRiskColor = (level: RiskLevel) => {
    switch (level) {
      case RiskLevel.CRITICAL: return 'text-red-600 bg-red-50';
      case RiskLevel.HIGH: return 'text-orange-600 bg-orange-50';
      case RiskLevel.MEDIUM: return 'text-yellow-600 bg-yellow-50';
      case RiskLevel.LOW: return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-500">
      {/* Risk Summary Card */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-6 text-white shadow-xl shadow-red-100 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-red-200" />
            <span className="text-sm font-medium text-red-100">Protection Status: Active</span>
          </div>
          <h2 className="text-3xl font-bold mb-1">Stay Safe.</h2>
          <p className="text-red-100 text-sm mb-6 max-w-[200px]">AI-Powered real-time voice analysis is ready.</p>
          
          <button 
            onClick={onStartLive}
            className="w-full bg-white text-red-700 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition-colors shadow-lg active:scale-95 transition-transform"
          >
            <PhoneIncoming className="w-5 h-5" />
            Start Call Protection
          </button>
        </div>
      </section>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-400 font-bold mb-1 uppercase">Saved Users</p>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-gray-900">12,402</span>
            <span className="text-[10px] text-green-500 font-bold mb-1">+12%</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-400 font-bold mb-1 uppercase">Scams Blocked</p>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-gray-900">452</span>
            <span className="text-[10px] text-red-500 font-bold mb-1">Today</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">Recent Reports</h3>
          <button onClick={onViewHistory} className="text-red-600 text-sm font-bold flex items-center gap-1">
            View All <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          {MOCK_HISTORY.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-red-200 transition-colors cursor-pointer group">
              <div className={`p-3 rounded-xl ${getRiskColor(item.riskLevel)}`}>
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-sm">{item.type}</h4>
                <p className="text-xs text-gray-400 font-medium">
                  {new Date(item.timestamp).toLocaleDateString()} • {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <div className={`px-2 py-1 rounded text-[10px] font-black uppercase ${getRiskColor(item.riskLevel)}`}>
                {item.riskLevel}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900">Legal Resources</h3>
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-start gap-3">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 text-sm">Police Report Template</h4>
            <p className="text-xs text-blue-700 mt-1 leading-relaxed">
              Generate a document ready for the Thai Royal Police using the latest evidence collected.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

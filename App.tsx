
import React, { useState, useEffect } from 'react';
import { Shield, History, Info, Settings, Plus, AlertTriangle, FileText, ChevronRight, Gavel } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { LiveProtector } from './components/LiveProtector';
import { LegalReportView } from './components/LegalReportView';
import { HistoryView } from './components/HistoryView';
import { LegalKnowledgeBase } from './components/LegalKnowledgeBase';
import { LegalReport } from './types';

type View = 'dashboard' | 'live' | 'report' | 'history' | 'knowledge';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('dashboard');
  const [selectedReport, setSelectedReport] = useState<LegalReport | null>(null);

  const navigateTo = (view: View, report: LegalReport | null = null) => {
    if (report) setSelectedReport(report);
    setActiveView(view);
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 overflow-hidden relative border-x border-gray-200 shadow-2xl">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 p-2 rounded-xl shadow-lg shadow-red-200">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">AntiScam AI</h1>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Legal-Intelligence Platform</p>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-24 scroll-smooth">
        {activeView === 'dashboard' && <Dashboard onStartLive={() => navigateTo('live')} onViewHistory={() => navigateTo('history')} />}
        {activeView === 'live' && <LiveProtector onComplete={(report) => navigateTo('report', report)} onCancel={() => navigateTo('dashboard')} />}
        {activeView === 'report' && selectedReport && <LegalReportView report={selectedReport} onBack={() => navigateTo('dashboard')} />}
        {activeView === 'history' && <HistoryView onBack={() => navigateTo('dashboard')} onViewReport={(r) => navigateTo('report', r)} />}
        {activeView === 'knowledge' && <LegalKnowledgeBase onBack={() => navigateTo('dashboard')} />}
      </main>

      {/* Floating Bottom Nav */}
      <nav className="absolute bottom-6 left-6 right-6 h-16 bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-2xl flex items-center justify-around px-4 z-50">
        <button 
          onClick={() => navigateTo('dashboard')}
          className={`flex flex-col items-center gap-1 transition-all ${activeView === 'dashboard' ? 'text-red-600 scale-110' : 'text-gray-400'}`}
        >
          <Shield className="w-6 h-6" />
          <span className="text-[10px] font-bold">Safe</span>
        </button>
        <button 
          onClick={() => navigateTo('history')}
          className={`flex flex-col items-center gap-1 transition-all ${activeView === 'history' ? 'text-red-600 scale-110' : 'text-gray-400'}`}
        >
          <History className="w-6 h-6" />
          <span className="text-[10px] font-bold">History</span>
        </button>
        
        <div className="relative -top-6">
          <button 
            onClick={() => navigateTo('live')}
            className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-200 border-4 border-white active:scale-95 transition-transform"
          >
            <Plus className="w-8 h-8 text-white" />
          </button>
        </div>

        <button 
          onClick={() => navigateTo('knowledge')}
          className={`flex flex-col items-center gap-1 transition-all ${activeView === 'knowledge' ? 'text-red-600 scale-110' : 'text-gray-400'}`}
        >
          <Gavel className="w-6 h-6" />
          <span className="text-[10px] font-bold">Laws</span>
        </button>
        <button 
          className="flex flex-col items-center gap-1 text-gray-400 opacity-50 cursor-not-allowed"
        >
          <Info className="w-6 h-6" />
          <span className="text-[10px] font-bold">About</span>
        </button>
      </nav>
    </div>
  );
};

export default App;

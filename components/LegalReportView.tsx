
import React, { useState } from 'react';
import { ChevronLeft, Download, Share2, Printer, AlertTriangle, Scale, ScrollText, CheckCircle2 } from 'lucide-react';
import { LegalReport, RiskLevel } from '../types';

interface LegalReportViewProps {
  report: LegalReport;
  onBack: () => void;
}

export const LegalReportView: React.FC<LegalReportViewProps> = ({ report, onBack }) => {
  const [activeTab, setActiveTab] = useState<'analysis' | 'laws' | 'draft'>('analysis');

  return (
    <div className="min-h-full bg-white animate-in slide-in-from-right duration-300 flex flex-col">
      {/* Sticky Top Nav */}
      <div className="p-6 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-10">
        <button onClick={onBack} className="p-2 hover:bg-gray-50 rounded-full">
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h2 className="font-black text-sm uppercase tracking-widest">Case Report</h2>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-50 rounded-full text-red-600"><Share2 className="w-5 h-5" /></button>
          <button className="p-2 hover:bg-gray-50 rounded-full text-red-600"><Download className="w-5 h-5" /></button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-100 p-2 gap-1 bg-gray-50">
        <button 
          onClick={() => setActiveTab('analysis')}
          className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'analysis' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-400'}`}
        >
          Analysis
        </button>
        <button 
          onClick={() => setActiveTab('laws')}
          className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'laws' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-400'}`}
        >
          Thai Laws
        </button>
        <button 
          onClick={() => setActiveTab('draft')}
          className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'draft' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-400'}`}
        >
          Police Draft
        </button>
      </div>

      <div className="p-6 flex-1">
        {activeTab === 'analysis' && (
          <div className="space-y-8 animate-in fade-in">
            {/* Risk Banner */}
            <div className={`p-6 rounded-3xl flex items-center gap-4 ${report.riskAssessment.level === RiskLevel.CRITICAL ? 'bg-red-50 text-red-800' : 'bg-orange-50 text-orange-800'}`}>
              <AlertTriangle className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="font-black text-lg uppercase tracking-tight">Level: {report.riskAssessment.level}</h3>
                <p className="text-sm opacity-80 leading-snug">Multiple indicators of organized fraud activity detected in real-time.</p>
              </div>
            </div>

            {/* AI Summary */}
            <section className="space-y-3">
              <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                <ScrollText className="w-4 h-4" /> AI Incident Summary
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm bg-gray-50 p-4 rounded-2xl border border-gray-100">
                {report.summary}
              </p>
            </section>

            {/* Signals Found */}
            <section className="space-y-3">
              <h4 className="text-xs font-black uppercase text-gray-400 tracking-widest">Evidence Clusters</h4>
              <div className="space-y-2">
                {report.riskAssessment.reasons.map((reason, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-bold text-gray-800">{reason}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'laws' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-6 h-6 text-red-600" />
              <h3 className="font-bold text-lg">Relevant Thai Law Sections</h3>
            </div>
            
            {report.thaiLawSections.map((law, i) => (
              <div key={i} className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm space-y-3 relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-24 h-24 bg-red-50 rounded-full -mr-12 -mt-12 group-hover:bg-red-100 transition-colors"></div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-[10px] font-black uppercase mb-2">
                    {law.section}
                  </span>
                  <h4 className="font-bold text-gray-900">{law.description}</h4>
                  <p className="text-xs text-gray-500 italic mt-2 leading-relaxed">
                    <span className="font-bold text-red-600 uppercase not-italic mr-1">Relevance:</span>
                    {law.relevance}
                  </p>
                </div>
              </div>
            ))}

            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-[10px] text-blue-800 leading-relaxed italic">
              Note: This AI-generated assessment does not replace professional legal advice. Please consult with a qualified Thai attorney for specific legal proceedings.
            </div>
          </div>
        )}

        {activeTab === 'draft' && (
          <div className="space-y-6 animate-in fade-in h-full flex flex-col">
            <div className="flex-1 bg-gray-50 p-6 rounded-3xl border border-gray-200 font-mono text-xs leading-relaxed text-gray-800 overflow-y-auto whitespace-pre-wrap">
              {report.policeReadyDraft}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2">
                <Printer className="w-5 h-5" /> Print PDF
              </button>
              <button className="py-4 bg-red-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" /> Send to Lawyer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

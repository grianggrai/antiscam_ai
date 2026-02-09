
import React from 'react';
import { ChevronLeft, BookOpen, ExternalLink, ShieldCheck, Scale } from 'lucide-react';
import { THAI_SCAM_LAWS } from '../constants';

interface LegalKnowledgeBaseProps {
  onBack: () => void;
}

export const LegalKnowledgeBase: React.FC<LegalKnowledgeBaseProps> = ({ onBack }) => {
  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-300">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold">Legal Knowledge</h2>
      </div>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-red-600" />
          <h3 className="font-bold text-lg text-gray-900">Key Thai Fraud Laws</h3>
        </div>
        
        <div className="space-y-4">
          {THAI_SCAM_LAWS.map((law, i) => (
            <div key={i} className="p-5 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-black text-red-600 text-xs uppercase tracking-tighter">{law.section}</span>
                <BookOpen className="w-4 h-4 text-gray-300" />
              </div>
              <h4 className="font-bold text-gray-800">{law.description}</h4>
              <p className="text-xs text-gray-500 leading-relaxed pt-2 border-t border-gray-50 mt-2">
                <span className="font-bold uppercase text-[9px] text-red-700 block mb-1">Punishment:</span>
                {law.punishment}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 rounded-3xl p-6 text-white space-y-4 shadow-xl shadow-gray-200">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-green-400" />
          <h3 className="font-bold text-lg">Prevention Tips</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex gap-3 text-sm text-gray-300 leading-snug">
            <span className="text-green-400 font-black">01</span>
            Never transfer money to a 'Safe Account' requested over the phone.
          </li>
          <li className="flex gap-3 text-sm text-gray-300 leading-snug">
            <span className="text-green-400 font-black">02</span>
            Government agencies will never contact you via LINE for financial investigation.
          </li>
          <li className="flex gap-3 text-sm text-gray-300 leading-snug">
            <span className="text-green-400 font-black">03</span>
            Hang up and call the official hotline (e.g., 1441 for Cyber Police).
          </li>
        </ul>
        <button className="w-full py-4 bg-white/10 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 border border-white/10 mt-4 hover:bg-white/20 transition-all">
          Download PDF Guide <ExternalLink className="w-3 h-3" />
        </button>
      </section>
    </div>
  );
};

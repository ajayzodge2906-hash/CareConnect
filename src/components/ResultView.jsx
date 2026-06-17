import React from 'react';
import { User, Mail, Phone, HeartPulse, FileText, Sparkles, CheckCircle2, ArrowLeft, RefreshCw, ShieldCheck } from 'lucide-react';

export default function ResultView({ submissionData, analysisData, onReset, onGoHome }) {
  if (!submissionData || !analysisData) return null;

  const { highlights } = analysisData;

  return (
    <div className="mx-auto max-w-xl px-4 py-10 sm:px-6">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8">
        
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-500 mb-3 ring-8 ring-green-50/50">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Request Submitted
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Thank you. Your request is registered and will be reviewed shortly.
          </p>
        </div>

        <div className="bg-primary-50/50 border border-primary-100 rounded-xl p-5 mb-6 shadow-sm">
          <div className="flex items-center space-x-2 border-b border-primary-200/60 pb-3 mb-4">
            <User className="h-4 w-4 text-primary-500" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary-600">
              Submitted Information
            </h3>
          </div>
          
          <dl className="space-y-3.5">
            <div className="flex items-start space-x-3">
              <User className="mt-0.5 h-4 w-4 text-slate-400" />
              <div>
                <dt className="text-xs font-medium text-slate-400">Patient Name</dt>
                <dd className="text-sm font-semibold text-slate-850">
                  {submissionData.fullName}
                </dd>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Mail className="mt-0.5 h-4 w-4 text-slate-400" />
                <div>
                  <dt className="text-xs font-medium text-slate-400">Email</dt>
                  <dd className="text-xs font-semibold text-slate-700 truncate max-w-[150px] sm:max-w-none">
                    {submissionData.email}
                  </dd>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="mt-0.5 h-4 w-4 text-slate-400" />
                <div>
                  <dt className="text-xs font-medium text-slate-400">Phone</dt>
                  <dd className="text-xs font-semibold text-slate-700">
                    {submissionData.phone}
                  </dd>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 border-t border-primary-200/40 pt-3">
              <HeartPulse className="mt-0.5 h-4 w-4 text-slate-400" />
              <div>
                <dt className="text-xs font-medium text-slate-400">Support Category</dt>
                <dd className="text-sm font-semibold text-slate-850">
                  {submissionData.category}
                </dd>
              </div>
            </div>

            <div className="flex items-start space-x-3 border-t border-primary-200/40 pt-3">
              <FileText className="mt-0.5 h-4 w-4 text-slate-400" />
              <div>
                <dt className="text-xs font-medium text-slate-400">Original Description</dt>
                <dd className="mt-1 text-sm text-slate-600 italic leading-relaxed">
                  "{submissionData.description}"
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="bg-primary-50/50 border border-primary-200 rounded-xl p-5 mb-8 shadow-sm">
          
          <div className="flex items-center justify-between mb-4 border-b border-primary-200/60 pb-3">
            <div className="flex items-center space-x-2 text-slate-800">
              <Sparkles className="h-4.5 w-4.5 text-primary-600" />
              <h4 className="text-sm font-extrabold tracking-tight uppercase">Request Analysis</h4>
            </div>
            
            <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-[10px] font-bold text-primary-750 ring-1 ring-inset ring-primary-700/10">
              AI-Assisted Request Analysis
            </span>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center">
              <ShieldCheck className="h-4 w-4 text-primary-600 mr-1.5" />
              Key Highlights
            </h5>
            <ul className="space-y-2">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-700 leading-relaxed">
                  <span className="text-accent-500 mr-2 font-bold">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onReset}
            className="flex-1 inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors focus:outline-none"
          >
            <RefreshCw className="mr-2 h-4 w-4 text-slate-500" />
            Submit Another
          </button>
          
          <button
            onClick={onGoHome}
            className="flex-1 inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 hover:shadow hover:-translate-y-0.5 transition-all duration-200 focus:outline-none"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </button>
        </div>

      </div>
    </div>
  );
}

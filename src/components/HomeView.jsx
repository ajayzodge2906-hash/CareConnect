import React from 'react';
import { ArrowRight, PlusCircle, ShieldAlert, HeartHandshake, Sparkles } from 'lucide-react';

export default function HomeView({ onStartRequest }) {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle Sage Healthcare-themed Gradient Hero Background */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-gradient-to-b from-primary-50/70 via-primary-50/10 to-transparent"></div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
        {/* Hero Content */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-1.5 rounded-full bg-primary-100/80 px-3 py-1 text-xs font-semibold text-primary-850 ring-1 ring-inset ring-primary-700/20 mb-6 shadow-sm">
            <HeartHandshake className="h-3.5 w-3.5 text-primary-600" />
            <span>Community Care Connection</span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            CareConnect
          </h1>
          
          <p className="mx-auto mt-4 max-w-xl text-lg font-semibold text-primary-600 sm:text-xl">
            Helping patients connect with support.
          </p>
          
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-650 sm:text-lg leading-relaxed">
            A simple, secure platform where patients can submit healthcare-related support requests. 
            We organize details and generate summaries so coordinators can prioritize care.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onStartRequest}
              className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary-500 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200 active:scale-[0.98]"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Submit Request
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* NGO Use Case Section */}
        <div className="mt-20 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              How NGOs Can Use CareConnect
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              CareConnect is designed to optimize how community health volunteers triage, manage, and coordinate support requests.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed text-sm sm:text-base">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-650 font-bold">•</span>
                <span>Receive healthcare support requests digitally through a simple online form.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed text-sm sm:text-base">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-650 font-bold">•</span>
                <span>Understand patient concerns through automatically generated key highlights.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed text-sm sm:text-base">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-650 font-bold">•</span>
                <span>Help patients access information using the built-in FAQ chatbot.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed text-sm sm:text-base">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-650 font-bold">•</span>
                <span>Save volunteer time by simplifying the support request review process.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-700 leading-relaxed text-sm sm:text-base">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-650 font-bold">•</span>
                <span>Improve communication and response efficiency for community support services.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

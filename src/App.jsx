import React, { useState } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import SupportForm from './components/SupportForm';
import ResultView from './components/ResultView';
import ChatbotWidget from './components/ChatbotWidget';
import { analyzeSupportRequest } from './utils/aiSummary';

export default function App() {
  const [view, setView] = useState('home');
  const [submissionData, setSubmissionData] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);

  const handleStartRequest = () => {
    setView('form');
  };

  const handleCancelRequest = () => {
    setView('home');
  };

  const handleFormSubmit = (formData) => {
    const analysis = analyzeSupportRequest(formData.description, formData.category);
    setSubmissionData(formData);
    setAnalysisData(analysis);
    setView('result');
  };

  const handleReset = () => {
    setSubmissionData(null);
    setAnalysisData(null);
    setView('form');
  };

  const handleGoHome = () => {
    setSubmissionData(null);
    setAnalysisData(null);
    setView('home');
  };

  return (
    <div className="flex min-h-screen flex-col bg-neutral-bg">
      <Header onViewChange={setView} currentView={view} />

      <main className="flex-grow">
        {view === 'home' && (
          <HomeView onStartRequest={handleStartRequest} />
        )}
        
        {view === 'form' && (
          <SupportForm 
            onSubmit={handleFormSubmit} 
            onCancel={handleCancelRequest} 
          />
        )}
        
        {view === 'result' && (
          <ResultView 
            submissionData={submissionData} 
            analysisData={analysisData} 
            onReset={handleReset} 
            onGoHome={handleGoHome} 
          />
        )}
      </main>

      <ChatbotWidget />

      <footer className="w-full border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} CareConnect. Built as a community support demonstration project.
          </p>
        </div>
      </footer>
    </div>
  );
}


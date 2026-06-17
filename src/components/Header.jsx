import React from 'react';

export default function Header({ onViewChange, currentView }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => onViewChange('home')}
          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 focus:outline-none transition-colors"
        >
          <svg
            className="h-7 w-7 text-primary-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span className="text-xl font-bold tracking-tight text-slate-900">CareConnect</span>
        </button>

        <nav className="flex space-x-4">
          <button
            onClick={() => onViewChange('home')}
            className={`text-sm font-medium transition-colors ${
              currentView === 'home'
                ? 'text-primary-600'
                : 'text-slate-600 hover:text-primary-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onViewChange('form')}
            className={`text-sm font-medium transition-colors ${
              currentView === 'form' || currentView === 'result'
                ? 'text-primary-600'
                : 'text-slate-600 hover:text-primary-600'
            }`}
          >
            Submit Request
          </button>
        </nav>
      </div>
    </header>
  );
}


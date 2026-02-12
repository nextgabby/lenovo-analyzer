import { useState, useEffect } from 'react';

const LOADING_MESSAGES = [
  'Analyzing your football DNA...',
  'Checking your timeline...',
  'Counting your football takes...',
  'Assessing your tactical knowledge...',
  'Scanning for hot takes...',
  'Measuring your matchday energy...',
  'Evaluating your football credentials...',
];

export default function LoadingState() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
      <div className="relative mb-8 sm:mb-10">
        {/* Spinning football */}
        <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-dark-card border border-dark-border animate-pulse-glow">
          <span className="text-4xl sm:text-5xl animate-spin-slow">⚽</span>
        </div>
      </div>

      {/* Loading message */}
      <p className="text-base sm:text-xl text-white font-medium mb-2 sm:mb-3 transition-all duration-300 px-2">
        {LOADING_MESSAGES[messageIndex]}
      </p>
      <p className="text-gray-500 text-xs sm:text-sm">This may take a few seconds</p>

      {/* Progress bar */}
      <div className="mt-6 sm:mt-8 max-w-xs mx-auto">
        <div className="h-1 bg-dark-card rounded-full overflow-hidden">
          <div className="h-full bg-lenovo-red rounded-full animate-shimmer" style={{ width: '100%' }} />
        </div>
      </div>
    </section>
  );
}

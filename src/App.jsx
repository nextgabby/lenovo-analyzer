import { useState, useRef } from 'react';
import Hero from './components/Hero';
import HandleInput from './components/HandleInput';
import LoadingState from './components/LoadingState';
import TierCard from './components/TierCard';
import AnalysisBreakdown from './components/AnalysisBreakdown';
import MockXPost from './components/MockXPost';
import NotificationTimeline from './components/NotificationTimeline';
import FinalMessage from './components/FinalMessage';
import { analyzeProfile } from './utils/grokApi';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const resultsRef = useRef(null);

  const handleAnalyze = async (handle) => {
    setIsLoading(true);
    setResult(null);
    setError('');

    try {
      const data = await analyzeProfile(handle);
      setResult(data);

      // Scroll to results after render
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <HandleInput onSubmit={handleAnalyze} isLoading={isLoading} />

      {error && (
        <div className="max-w-xl mx-auto px-6 mb-8">
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-5 text-center">
            <p className="text-red-400 font-medium mb-2">Analysis Failed</p>
            <p className="text-gray-400 text-sm">{error}</p>
            <button
              onClick={handleReset}
              className="mt-3 px-4 py-2 text-sm bg-dark-card border border-dark-border rounded-lg text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {isLoading && <LoadingState />}

      {result && (
        <div ref={resultsRef}>
          <TierCard data={result} />
          <AnalysisBreakdown data={result} />
          <MockXPost data={result} />
          <NotificationTimeline notifications={result.exampleNotifications} />
          <FinalMessage message={result.finalMessage} onReset={handleReset} />
        </div>
      )}
    </div>
  );
}

export default App;

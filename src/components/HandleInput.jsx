import { useState } from 'react';

export default function HandleInput({ onSubmit, isLoading }) {
  const [handle, setHandle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleaned = handle.replace(/^@/, '').trim();
    if (!cleaned) {
      setError('Please enter an X/Twitter handle.');
      return;
    }
    setError('');
    onSubmit(cleaned);
  };

  return (
    <section className="max-w-xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
              @
            </span>
            <input
              type="text"
              value={handle}
              onChange={(e) => {
                setHandle(e.target.value);
                if (error) setError('');
              }}
              placeholder="username"
              disabled={isLoading}
              className="w-full pl-9 pr-4 py-3.5 sm:py-4 bg-dark-card border border-dark-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-lenovo-red/50 focus:ring-1 focus:ring-lenovo-red/30 transition-all text-base sm:text-lg disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-lenovo-red hover:bg-lenovo-dark-red text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer hover:shadow-lg hover:shadow-lenovo-red/20 text-sm sm:text-base"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Analyzing...
              </span>
            ) : (
              'Analyze My Profile'
            )}
          </button>
        </div>
        {error && (
          <p className="mt-3 text-red-400 text-sm">{error}</p>
        )}
      </form>
    </section>
  );
}

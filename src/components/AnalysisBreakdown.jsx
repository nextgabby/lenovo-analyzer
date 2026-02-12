export default function AnalysisBreakdown({ data }) {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10 animate-fade-in-up-delay-1">
      <div className="rounded-2xl border border-dark-border bg-dark-card p-5 sm:p-8">
        <div className="flex items-center gap-3 mb-5 sm:mb-6">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-lenovo-red/10 border border-lenovo-red/20 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-lenovo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">How We Got Here</h3>
            <p className="text-xs sm:text-sm text-gray-500">Powered by Lenovo Data</p>
          </div>
        </div>

        {/* Reasoning */}
        <div className="mb-5 sm:mb-6">
          <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Analysis
          </h4>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{data.reasoning}</p>
        </div>

        {/* Profile summary */}
        <div className="bg-dark-bg/50 rounded-xl p-4 sm:p-5 border border-dark-border/50">
          <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Profile Summary
          </h4>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{data.profileSummary}</p>
        </div>

        {/* Data source badge */}
        <div className="mt-5 sm:mt-6 flex items-center gap-2 text-xs text-gray-600">
          <div className="w-4 h-4 bg-lenovo-red/20 rounded-sm flex items-center justify-center shrink-0">
            <span className="text-lenovo-red text-[8px] font-bold">L</span>
          </div>
          <span>Analysis powered by Lenovo AI &amp; Grok</span>
        </div>
      </div>
    </section>
  );
}

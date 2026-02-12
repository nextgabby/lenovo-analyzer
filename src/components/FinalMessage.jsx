export default function FinalMessage({ message, onReset }) {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 animate-fade-in-up-delay-4">
      {/* Final message card */}
      <div className="relative rounded-2xl border border-lenovo-red/30 bg-gradient-to-br from-lenovo-red/10 to-dark-card p-6 sm:p-8 md:p-10 text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-lenovo-red/5 blur-2xl pointer-events-none" />

        <div className="relative">
          <span className="text-4xl sm:text-5xl mb-3 sm:mb-4 block">🎉</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            You've Gone Full Football
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-5 sm:mb-6">
            {message}
          </p>

          {/* Prize entry mock */}
          <div className="inline-flex bg-dark-bg/60 border border-dark-border rounded-xl px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8 max-w-full">
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-center sm:flex-nowrap">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-lenovo-red/20 flex items-center justify-center shrink-0">
                <span className="text-lg sm:text-xl">🎁</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-xs sm:text-sm">Prize Entry Confirmed</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">You're in the draw for exclusive Lenovo merch</p>
              </div>
              <svg className="w-5 h-5 text-green-400 shrink-0 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Try another */}
          <div>
            <button
              onClick={onReset}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-dark-bg border border-dark-border hover:border-lenovo-red/50 text-white font-medium rounded-xl transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-lenovo-red/10 text-sm sm:text-base"
            >
              Try Another Handle
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 text-center pb-6 sm:pb-8">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-5 h-5 bg-lenovo-red rounded-sm flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">L</span>
          </div>
          <span className="text-gray-600 text-xs sm:text-sm font-medium">Powered by Lenovo Data</span>
        </div>
        <p className="text-gray-600 text-[10px] sm:text-xs max-w-md mx-auto leading-relaxed">
          This is a campaign concept demo for Lenovo x FIFA World Cup 2026 on X.
        </p>
        <p className="text-gray-700 text-[10px] sm:text-xs mt-2">
          *Minimum IO and CTA spend required; lead times apply.
        </p>
      </footer>
    </section>
  );
}

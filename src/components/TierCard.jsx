const TIER_CONFIG = {
  'Casual Supporter': {
    icon: '⚽',
    color: 'text-tier-casual',
    bg: 'bg-tier-casual/10',
    border: 'border-tier-casual/30',
    glow: 'shadow-tier-casual/20',
    label: 'Casual Supporter',
    tagline: 'Welcome to the beautiful game',
  },
  'Dedicated Fan': {
    icon: '🏟️',
    color: 'text-tier-dedicated',
    bg: 'bg-tier-dedicated/10',
    border: 'border-tier-dedicated/30',
    glow: 'shadow-tier-dedicated/20',
    label: 'Dedicated Fan',
    tagline: 'You know your way around the pitch',
  },
  'Super Fan': {
    icon: '🏆',
    color: 'text-tier-super',
    bg: 'bg-tier-super/10',
    border: 'border-tier-super/30',
    glow: 'shadow-tier-super/20',
    label: 'Super Fan',
    tagline: 'You live and breathe football',
  },
};

export default function TierCard({ data }) {
  const config = TIER_CONFIG[data.tier] || TIER_CONFIG['Casual Supporter'];

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10 animate-fade-in-up">
      <div className={`relative rounded-2xl border ${config.border} ${config.bg} p-5 sm:p-8 md:p-10 shadow-2xl ${config.glow}`}>
        {/* Tier badge */}
        <div className="text-center mb-5 sm:mb-6">
          <span className="text-5xl sm:text-6xl mb-3 sm:mb-4 block">{config.icon}</span>
          <div className={`inline-block px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold ${config.color} ${config.bg} border ${config.border} mb-2 sm:mb-3`}>
            {config.label}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1.5 sm:mb-2 break-all">
            {data.handle}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">{config.tagline}</p>
        </div>

        {/* Personalized message */}
        <div className="bg-dark-bg/50 rounded-xl p-4 sm:p-5 mb-5 sm:mb-6">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed italic">
            &ldquo;{data.personalizedMessage}&rdquo;
          </p>
        </div>

        {/* Football interests */}
        {data.footballInterests && data.footballInterests.length > 0 && (
          <div className="mb-5 sm:mb-6">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
              Detected Interests
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {data.footballInterests.map((interest, i) => (
                <span
                  key={i}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-dark-bg/60 border border-dark-border rounded-full text-xs sm:text-sm text-gray-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Suggested team */}
          <div className="bg-dark-bg/50 rounded-xl p-3 sm:p-4 text-center">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              WC 2026 Team
            </p>
            <p className="text-white font-bold text-base sm:text-lg">{data.suggestedTeam}</p>
          </div>

          {/* Confidence */}
          <div className="bg-dark-bg/50 rounded-xl p-3 sm:p-4 text-center">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Confidence
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex-1 max-w-[100px] h-2 bg-dark-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-lenovo-red rounded-full transition-all duration-1000"
                  style={{ width: `${(data.confidence || 0.5) * 100}%` }}
                />
              </div>
              <span className="text-white font-bold">
                {Math.round((data.confidence || 0.5) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

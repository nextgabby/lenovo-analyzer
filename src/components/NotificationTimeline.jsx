const TYPE_STYLES = {
  kickoff: { icon: '🎯', bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  matchday: { icon: '📺', bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  milestone: { icon: '⭐', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400' },
  trivia: { icon: '🧠', bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  final: { icon: '🏆', bg: 'bg-lenovo-red/10', border: 'border-lenovo-red/30', text: 'text-lenovo-red' },
};

function NotificationCard({ notification, index }) {
  const style = TYPE_STYLES[notification.type] || TYPE_STYLES.matchday;

  return (
    <div
      className="relative pl-7 sm:pl-8 pb-6 sm:pb-8 last:pb-0"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-6 bottom-0 w-px bg-dark-border last:hidden" />

      {/* Timeline dot */}
      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full ${style.bg} ${style.border} border flex items-center justify-center text-xs`}>
        {style.icon}
      </div>

      {/* Card */}
      <div className={`rounded-xl border ${style.border} ${style.bg} p-3.5 sm:p-5 ml-1 sm:ml-2`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
          <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${style.text}`}>
            Week {notification.week} &middot; {notification.type}
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 bg-lenovo-red rounded-sm flex items-center justify-center">
              <span className="text-white text-[7px] font-bold">L</span>
            </div>
            <span className="text-gray-600 text-xs">Lenovo</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-1.5">{notification.title}</h4>

        {/* Body */}
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{notification.body}</p>
      </div>
    </div>
  );
}

export default function NotificationTimeline({ notifications }) {
  if (!notifications || notifications.length === 0) return null;

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10 animate-fade-in-up-delay-3">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Your World Cup Journey</h3>
        <p className="text-xs sm:text-sm text-gray-500">
          Examples of what you'd receive over 5 weeks of the tournament
        </p>
      </div>

      <div className="relative">
        {notifications.map((notif, i) => (
          <NotificationCard key={i} notification={notif} index={i} />
        ))}
      </div>
    </section>
  );
}

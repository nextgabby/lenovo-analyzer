export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-6 md:pt-24 md:pb-12">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(800px,100vw)] h-[400px] md:h-[600px] bg-lenovo-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-lenovo-red/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Brand logos */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 md:mb-10 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-lenovo-red rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs">L</span>
            </div>
            <span className="text-white font-bold text-base sm:text-lg tracking-wide">Lenovo</span>
          </div>
          <span className="text-gray-600 text-lg sm:text-xl font-light">&times;</span>
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">🏆</span>
            <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">
              FIFA World Cup 2026
            </span>
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight">
          Take Your Football
          <br />
          <span className="text-lenovo-red">Further</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
          Enter your X handle and we'll analyze your football fandom. Discover your
          fan tier and preview the personalized World Cup journey Lenovo would create
          for you.
        </p>
      </div>
    </section>
  );
}

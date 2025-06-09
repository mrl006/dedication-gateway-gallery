
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
      {/* Main glass overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      {/* Animated gradient orbs with glow */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse shadow-[0_0_100px_rgba(168,85,247,0.4)]"></div>
      <div className="absolute top-60 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 shadow-[0_0_120px_rgba(59,130,246,0.3)]"></div>
      <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 rounded-full blur-2xl animate-pulse delay-500 shadow-[0_0_80px_rgba(6,182,212,0.4)]"></div>
      <div className="absolute bottom-20 right-1/3 w-56 h-56 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-700 shadow-[0_0_90px_rgba(139,69,197,0.3)]"></div>
      
      {/* Hexagonal grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="grid grid-cols-12 gap-6 h-full p-8">
          {Array.from({ length: 120 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-cyan-400/40 rounded-lg bg-gradient-to-br from-purple-500/5 to-cyan-500/5 backdrop-blur-sm"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Floating glowing particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/80 rounded-full animate-pulse shadow-[0_0_20px_rgba(6,182,212,0.8)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse"></div>
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse delay-1000"
          style={{ top: '30%' }}
        ></div>
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-pulse delay-2000"
          style={{ top: '70%' }}
        ></div>
      </div>
      
      {/* Corner glow effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-cyan-500/20 to-transparent blur-3xl"></div>
    </div>
  );
};

export default AnimatedBackground;

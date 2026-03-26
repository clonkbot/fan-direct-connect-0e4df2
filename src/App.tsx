import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConnectionPulse from './components/ConnectionPulse';
import SignupForm from './components/SignupForm';
import SuccessView from './components/SuccessView';
import StatsDisplay from './components/StatsDisplay';

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fanData, setFanData] = useState<{ name: string; email: string } | null>(null);

  const handleSubmit = (data: { name: string; email: string; location: string; interests: string[] }) => {
    setFanData({ name: data.name, email: data.email });
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white overflow-hidden relative">
      {/* Gradient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 md:px-8 lg:px-12 py-6 md:py-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="font-display text-xs md:text-sm tracking-[0.3em] text-zinc-500 uppercase">Direct Connect</span>
          </div>
        </motion.header>

        {/* Main section */}
        <main className="flex-1 px-4 md:px-8 lg:px-12 pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-200px)]">

            {/* Left column - Hero content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-4 md:-left-8 top-0 w-1 h-24 md:h-32 bg-gradient-to-b from-cyan-400 to-transparent" />

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6 md:mb-8">
                <span className="text-white">CONNECT</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">DIRECT</span>
              </h1>

              <p className="text-zinc-400 text-base md:text-lg lg:text-xl max-w-md leading-relaxed mb-8 md:mb-12">
                Skip the algorithm. Join the inner circle. Get exclusive drops, early access, and direct communication — no middlemen.
              </p>

              {/* Stats on mobile - shown below hero text */}
              <div className="lg:hidden mb-8">
                <StatsDisplay />
              </div>

              {/* Connection visualization */}
              <div className="hidden lg:block relative h-48">
                <ConnectionPulse />
              </div>
            </motion.div>

            {/* Right column - Form or Success */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <SignupForm key="form" onSubmit={handleSubmit} />
                ) : (
                  <SuccessView key="success" name={fanData?.name || ''} />
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </main>

        {/* Stats bar - Desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden lg:block px-12 py-6 border-t border-zinc-800/50"
        >
          <div className="max-w-7xl mx-auto">
            <StatsDisplay />
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="px-4 md:px-8 lg:px-12 py-4 md:py-6 border-t border-zinc-900">
          <p className="text-center text-zinc-600 text-[10px] md:text-xs tracking-wide">
            Requested by <span className="text-zinc-500">@villainmonkey</span> · Built by <span className="text-zinc-500">@clonkbot</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

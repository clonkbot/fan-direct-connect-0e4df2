import { motion } from 'framer-motion';

export default function ConnectionPulse() {
  return (
    <div className="relative w-full h-full flex items-center justify-start">
      {/* Central node */}
      <div className="relative">
        <div className="w-4 h-4 bg-cyan-400 rounded-full relative z-10" />

        {/* Pulse rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-cyan-400/30 rounded-full"
            initial={{ width: 16, height: 16, opacity: 0.8 }}
            animate={{
              width: [16, 200 + i * 80],
              height: [16, 200 + i * 80],
              opacity: [0.6, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
        {/* Lines to fan nodes */}
        {[
          { x: 280, y: 40 },
          { x: 350, y: 100 },
          { x: 300, y: 160 },
          { x: 220, y: 180 },
        ].map((point, i) => (
          <motion.line
            key={i}
            x1="8"
            y1="100"
            x2={point.x}
            y2={point.y}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
          />
        ))}

        {/* Fan nodes */}
        {[
          { x: 280, y: 40 },
          { x: 350, y: 100 },
          { x: 300, y: 160 },
          { x: 220, y: 180 },
        ].map((point, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={point.x}
            cy={point.y}
            r="6"
            fill="#0a0a0b"
            stroke="#fbbf24"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
          />
        ))}

        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

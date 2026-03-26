import { motion } from 'framer-motion';

interface SuccessViewProps {
  name: string;
}

export default function SuccessView({ name }: SuccessViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Card glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-amber-500/20 to-cyan-500/30 rounded-2xl blur-xl animate-pulse" />

      <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 md:p-12 text-center">
        {/* Checkmark animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
          className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full" />
          <motion.svg
            className="absolute inset-0 w-full h-full p-5 md:p-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M5 12l5 5L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </motion.svg>

          {/* Celebration particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? '#22d3ee' : '#fbbf24',
                top: '50%',
                left: '50%',
              }}
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{
                x: Math.cos((i * Math.PI) / 4) * 60,
                y: Math.sin((i * Math.PI) / 4) * 60,
                opacity: 0,
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-3xl md:text-4xl mb-3 md:mb-4"
        >
          YOU'RE IN, {name.toUpperCase()}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-400 text-base md:text-lg mb-6 md:mb-8"
        >
          Welcome to the inner circle. Check your inbox for confirmation.
        </motion.p>

        {/* What's next section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-zinc-800/50 rounded-xl p-4 md:p-6 text-left"
        >
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-3 md:mb-4">What happens next</h3>
          <ul className="space-y-3">
            {[
              { icon: '📧', text: 'Confirmation email incoming' },
              { icon: '🎁', text: 'Exclusive content drops in your inbox' },
              { icon: '🚀', text: 'Early access to everything' },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-3 text-zinc-300 text-sm md:text-base"
              >
                <span className="text-lg">{item.icon}</span>
                {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Share button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 md:mt-8 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-sm transition-colors min-h-[48px]"
        >
          Share with a friend
        </motion.button>
      </div>
    </motion.div>
  );
}

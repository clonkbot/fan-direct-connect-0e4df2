import { motion } from 'framer-motion';

const stats = [
  { value: '47K+', label: 'Connected Fans', color: 'text-cyan-400' },
  { value: '156', label: 'Countries', color: 'text-amber-400' },
  { value: '98%', label: 'Open Rate', color: 'text-emerald-400' },
  { value: '0', label: 'Third Parties', color: 'text-rose-400' },
];

export default function StatsDisplay() {
  return (
    <div className="grid grid-cols-2 md:flex md:items-center md:justify-start gap-4 md:gap-12">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + i * 0.1 }}
          className="text-center md:text-left"
        >
          <div className={`font-display text-2xl md:text-3xl ${stat.color}`}>
            {stat.value}
          </div>
          <div className="text-zinc-500 text-xs uppercase tracking-wider mt-1">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

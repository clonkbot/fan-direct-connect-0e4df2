import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  location: string;
  interests: string[];
}

interface SignupFormProps {
  onSubmit: (data: FormData) => void;
}

const interestOptions = [
  { id: 'music', label: 'New Music', icon: '🎵' },
  { id: 'merch', label: 'Merch Drops', icon: '👕' },
  { id: 'shows', label: 'Live Shows', icon: '🎤' },
  { id: 'bts', label: 'Behind the Scenes', icon: '🎬' },
  { id: 'collabs', label: 'Collabs & Features', icon: '🤝' },
  { id: 'business', label: 'Business Inquiries', icon: '💼' },
];

export default function SignupForm({ onSubmit }: SignupFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    location: '',
    interests: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleInterest = (id: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter(i => i !== id)
        : [...prev.interests, id]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      onSubmit(formData);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative"
    >
      {/* Card glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-transparent to-amber-500/20 rounded-2xl blur-xl" />

      <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 md:p-8">
        <div className="mb-6 md:mb-8">
          <h2 className="font-display text-2xl md:text-3xl mb-2">JOIN THE CIRCLE</h2>
          <p className="text-zinc-500 text-sm">Your data stays with us. No third parties.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
          {/* Name field */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-zinc-500">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-base"
              placeholder="Your name"
            />
          </div>

          {/* Email field */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-zinc-500">Email</label>
            <input
              type="email"
              required
              inputMode="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-base"
              placeholder="your@email.com"
            />
          </div>

          {/* Location field */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-zinc-500">City / Country</label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-base"
              placeholder="Los Angeles, USA"
            />
          </div>

          {/* Interests */}
          <div className="space-y-3">
            <label className="text-xs uppercase tracking-wider text-zinc-500">I want to hear about...</label>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {interestOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => toggleInterest(option.id)}
                  className={`flex items-center gap-2 px-3 md:px-4 py-3 rounded-lg border transition-all text-left min-h-[48px] ${
                    formData.interests.includes(option.id)
                      ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-300'
                      : 'bg-zinc-800/30 border-zinc-700/50 text-zinc-400 hover:border-zinc-600'
                  }`}
                >
                  <span className="text-base md:text-lg">{option.icon}</span>
                  <span className="text-xs md:text-sm">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="w-full relative group overflow-hidden rounded-lg min-h-[52px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2 py-4 font-display text-sm tracking-wider text-black">
              {isSubmitting ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                  />
                  CONNECTING...
                </>
              ) : (
                'GET CONNECTED'
              )}
            </span>
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

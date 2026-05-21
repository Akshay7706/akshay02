import { useState, useEffect } from 'react';
import { Calendar, Percent } from 'lucide-react';

export default function DealSection() {
  // Set target date to 30 days from now
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date.getTime();
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <section
      className="relative py-28 bg-cover bg-center overflow-hidden flex items-center justify-center transition-all duration-300"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(92, 6, 20, 0.92), rgba(153, 15, 38, 0.65)), url('https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?q=80&w=1920&auto=format&fit=crop')`,
      }}
    >
      <div className="absolute inset-0 bg-zinc-950/40 dark:bg-zinc-950/80 transition-colors duration-300 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Deal content */}
          <div className="text-left space-y-6 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent font-semibold text-sm">
              <Percent className="w-4 h-4" />
              <span>Deal of the Month</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight">
              Get <span className="text-accent">30% OFF</span> on Premium <br />
              Organic Gift Baskets
            </h2>
            <p className="text-white/80 max-w-lg leading-relaxed text-base">
              Treat your family to the highest quality, naturally ripened farm fruits. Handpicked and packed into premium eco-friendly gift baskets. Order today and receive free express shipping.
            </p>
            <div className="pt-2">
              <a
                href="#shop"
                className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-accent/30"
              >
                Shop the Deal
              </a>
            </div>
          </div>

          {/* Countdown block */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white/10 dark:bg-zinc-900/40 backdrop-blur-md p-8 sm:p-10 rounded-3xl w-full max-w-md shadow-2xl border border-white/10 dark:border-zinc-800/50 text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-accent">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold text-sm tracking-wider uppercase font-display">Offer Ends In</span>
              </div>

              {/* Countdown Grid */}
              <div className="grid grid-cols-4 gap-4">
                {timeBlocks.map((block, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 dark:bg-zinc-950/60 rounded-2xl border border-white/10 dark:border-zinc-800/80 flex items-center justify-center font-display text-2xl sm:text-3xl font-extrabold text-white">
                      {String(block.value).padStart(2, '0')}
                    </div>
                    <span className="text-white/60 dark:text-zinc-400 text-xs mt-2 uppercase tracking-widest font-semibold">
                      {block.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { CheckCircle2, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const points = [
    { title: 'Strict Organic Standards', desc: '100% certified pesticide-free crops.' },
    { title: 'Orchard Handpicked', desc: 'Harvested only at peak sweetness.' },
    { title: 'Eco-Friendly Packaged', desc: 'Shipped in biodegradable cartons.' },
    { title: 'Fast Contactless Delivery', desc: 'Orchard to table within 24 hours.' },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Visual side */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=800&auto=format&fit=crop"
                alt="Organic Orchard Farm"
                className="w-full h-[450px] object-cover transition-transform duration-750 group-hover:scale-105"
              />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-primary-dark/30 flex items-center justify-center">
                <button
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-accent hover:text-white hover:bg-accent shadow-xl transform transition-all duration-300 hover:scale-110 focus:outline-none relative group"
                  aria-label="Play Farm Video"
                  onClick={() => alert("Mock Video Player: A virtual tour of abcde orchards is loading...")}
                >
                  {/* Ripple effect */}
                  <span className="absolute inset-0 rounded-full bg-white/30 animate-ping group-hover:bg-accent/30" />
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </button>
              </div>

              {/* Year Stamp */}
              <div className="absolute bottom-6 right-6 bg-accent text-white px-5 py-3.5 rounded-2xl shadow-lg font-display text-center">
                <span className="block text-2xl font-black">27+</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-white/90">Years Est.</span>
              </div>
            </motion.div>
          </div>

          {/* Right Text side */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-accent font-display font-semibold tracking-wider text-sm uppercase">
                Established Since 1999
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-zinc-100 font-display leading-tight">
                We Are abcde, Providing <br />
                The Freshest Organic Yields
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full" />
            </div>

            <p className="text-neutral-dark/70 dark:text-zinc-300 text-base leading-relaxed">
              For over two decades, our cooperative orchard has been dedicated to cultivating premium, non-GMO citrus fruits, stone fruits, and fresh berries. We believe that healthy soil makes healthy fruits, which is why we practice pure regenerative agriculture.
            </p>

            {/* Features Check List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-neutral-dark dark:text-zinc-200 text-base">
                      {point.title}
                    </h4>
                    <p className="text-sm text-neutral-dark/60 dark:text-zinc-400 mt-0.5">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#shop"
                className="inline-block px-8 py-4 bg-primary hover:bg-primary-light dark:bg-accent dark:hover:bg-accent-hover text-white font-semibold rounded-full shadow-lg shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Discover More
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

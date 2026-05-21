import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1920&auto=format&fit=crop')`,
      }}
    >
      {/* Decorative Blur Background Blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block text-accent font-display font-semibold tracking-[0.25em] text-sm md:text-base uppercase">
            Fresh & Organic
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white font-display tracking-tight leading-tight">
            Delicious Seasonal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-400">
              Fruits
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 font-light leading-relaxed">
            Handpicked fresh organic fruits from our premium family orchards, delivered straight to your home in sustainable packaging.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#shop"
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-accent/30 text-center"
            >
              Fruit Collection
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-full transition-all duration-300 text-center"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Curved Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] fill-neutral-warm dark:fill-zinc-950 transition-colors duration-300"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35C25,43,71.74,59.59,122.36,61.19,173.48,62.8,215.19,67.73,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}

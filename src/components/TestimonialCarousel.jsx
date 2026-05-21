import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import testimonials from '../data/testimonials.json';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-white dark:bg-zinc-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Header */}
        <div className="mb-12 space-y-3">
          <span className="text-accent font-display font-semibold tracking-wider text-sm uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-zinc-100 font-display">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 p-3 rounded-full bg-neutral-warm dark:bg-zinc-800 border border-neutral-warm dark:border-zinc-750 text-primary dark:text-zinc-300 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300 shadow-md focus:outline-none cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 z-20 p-3 rounded-full bg-neutral-warm dark:bg-zinc-800 border border-neutral-warm dark:border-zinc-750 text-primary dark:text-zinc-300 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300 shadow-md focus:outline-none cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial card */}
          <div className="w-full max-w-2xl px-12 md:px-16 overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="flex flex-col items-center space-y-6"
              >
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-accent/20 shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-accent text-white p-1.5 rounded-full shadow-sm">
                    <Quote className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>

                <p className="text-neutral-dark/80 dark:text-zinc-200 text-lg md:text-xl italic font-medium leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="text-center">
                  <h4 className="font-display font-bold text-lg text-primary dark:text-zinc-100">
                    {testimonials[currentIndex].name}
                  </h4>
                  <span className="text-sm text-neutral-dark/50 dark:text-zinc-400 font-medium">
                    {testimonials[currentIndex].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Paginated dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-accent' : 'w-2.5 bg-neutral-warm dark:bg-zinc-800 hover:bg-neutral-dark/20 dark:hover:bg-zinc-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

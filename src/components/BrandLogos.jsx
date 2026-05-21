import { motion } from 'framer-motion';
import { Leaf, Award, Apple, ShieldCheck, Sun } from 'lucide-react';

export default function BrandLogos() {
  const brands = [
    { name: 'GreenLife', icon: Leaf },
    { name: 'EcoOrchard', icon: Award },
    { name: 'BioMarket', icon: Apple },
    { name: 'PureFresh', icon: Sun },
    { name: 'NaturePick', icon: ShieldCheck },
  ];

  return (
    <section className="py-16 bg-white dark:bg-zinc-900 border-y border-neutral-warm dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-around gap-8 md:gap-12">
          {brands.map((brand, idx) => {
            const Icon = brand.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-neutral-dark/40 dark:text-zinc-500 hover:text-accent dark:hover:text-accent transition-colors duration-300 cursor-pointer select-none"
              >
                <Icon className="w-8 h-8 shrink-0" />
                <span className="font-display font-bold text-lg tracking-wider uppercase">
                  {brand.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

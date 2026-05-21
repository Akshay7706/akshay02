import { useState } from 'react';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductGrid({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Citrus', 'Berries', 'Organic'];

  const filteredProducts = activeCategory === 'All'
    ? productsData
    : productsData.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="shop" className="py-24 bg-neutral-warm dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-display font-semibold tracking-wider text-sm uppercase">
            Our Collection
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-zinc-100 font-display leading-tight">
            Our Fresh Products
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-neutral-dark/60 dark:text-zinc-400 text-base">
            Select from our carefully curated catalog of organic citrus fruits, fresh woodland berries, and handpicked farm produce.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'bg-primary dark:bg-accent text-white shadow-lg shadow-primary/20 dark:shadow-accent/20 scale-105'
                  : 'bg-white dark:bg-zinc-900 text-neutral-dark/70 dark:text-zinc-300 hover:bg-neutral-warm dark:hover:bg-zinc-800 border border-neutral-warm dark:border-zinc-800 hover:text-primary dark:hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-neutral-warm dark:border-zinc-800 shadow-md hover:shadow-xl hover:border-accent/20 dark:hover:border-accent/30 transition-all duration-300 group flex flex-col h-full"
    >
      {/* Product Image Wrapper */}
      <div className="relative overflow-hidden bg-neutral-warm dark:bg-zinc-950 aspect-square">
        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-accent text-white font-display text-xs font-bold rounded-full shadow-md uppercase tracking-wider">
            {product.discount}
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Hover overlay backdrop */}
        <div className="absolute inset-0 bg-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow text-center">
        <span className="text-xs uppercase tracking-wider font-semibold text-accent mb-1">
          {product.category}
        </span>
        <h3 className="font-display font-bold text-lg text-neutral-dark dark:text-zinc-100 mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-200">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-3 border-t border-neutral-warm/80 dark:border-zinc-800/80 flex items-center justify-between">
          <div className="text-left">
            <span className="text-xs text-neutral-dark/40 dark:text-zinc-500 block">Price</span>
            <span className="text-xl font-extrabold text-primary dark:text-zinc-100 font-display">
              ${product.price.toFixed(2)}
              <span className="text-xs font-normal text-neutral-dark/60 dark:text-zinc-400">/{product.unit}</span>
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-300 shadow-md cursor-pointer ${
              added
                ? 'bg-primary dark:bg-zinc-800 text-white shadow-primary/20 dark:shadow-zinc-800/20'
                : 'bg-accent text-white hover:bg-accent-hover shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart
}) {
  const [checkingOut, setCheckingOut] = useState(false);
  const [success, setSuccess] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setSuccess(true);
    }, 2000);
  };

  const handleSuccessClose = () => {
    setSuccess(false);
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* Sidebar Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-white dark:bg-zinc-900 z-50 shadow-2xl flex flex-col h-full border-l border-neutral-warm dark:border-zinc-800 transition-colors duration-300"
          >
            {/* Header */}
            <div className="p-6 border-b border-neutral-warm dark:border-zinc-800 flex items-center justify-between bg-neutral-warm/30 dark:bg-zinc-950/20">
              <div className="flex items-center gap-2 text-primary dark:text-zinc-200">
                <ShoppingBag className="w-5 h-5" />
                <h3 className="font-display font-bold text-lg">Your Cart</h3>
                <span className="bg-primary/10 dark:bg-zinc-800 text-primary dark:text-zinc-300 px-2 py-0.5 text-xs font-bold rounded-full">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-neutral-warm dark:hover:bg-zinc-800 text-neutral-dark/60 dark:text-zinc-400 hover:text-neutral-dark dark:hover:text-zinc-200 transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-label="Close Cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-neutral-warm dark:bg-zinc-950 flex items-center justify-center text-neutral-dark/40 dark:text-zinc-550">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-neutral-dark dark:text-zinc-200 text-base">Your cart is empty</h4>
                    <p className="text-sm text-neutral-dark/50 dark:text-zinc-400 mt-1 max-w-[240px] mx-auto">
                      Fill it with our premium, organic orchard fresh fruits!
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-full shadow-md cursor-pointer"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 rounded-xl border border-neutral-warm dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-accent/10 dark:hover:border-accent/30 hover:shadow-md transition-all duration-200"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover bg-neutral-warm dark:bg-zinc-900 shrink-0"
                    />
                    
                    <div className="flex-grow min-w-0 text-left">
                      <h4 className="font-display font-bold text-neutral-dark dark:text-zinc-250 text-sm truncate">
                        {item.name}
                      </h4>
                      <span className="text-xs text-neutral-dark/40 dark:text-zinc-500 block">
                        ${item.price.toFixed(2)} / {item.unit}
                      </span>
                      
                      {/* Quantity Selector controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                          className="p-1 rounded bg-neutral-warm dark:bg-zinc-900 hover:bg-accent/10 dark:hover:bg-accent/20 hover:text-accent text-neutral-dark/60 dark:text-zinc-400 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-bold text-neutral-dark dark:text-zinc-350 w-4 text-center font-display">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                          className="p-1 rounded bg-neutral-warm dark:bg-zinc-900 hover:bg-accent/10 dark:hover:bg-accent/20 hover:text-accent text-neutral-dark/60 dark:text-zinc-400 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between shrink-0">
                      <span className="font-display font-extrabold text-sm text-primary dark:text-zinc-200">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-neutral-dark/40 hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors duration-200 cursor-pointer"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Summary & Checkout Actions */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-neutral-warm dark:border-zinc-800 bg-neutral-warm/20 dark:bg-zinc-950/40 space-y-4">
                <div className="space-y-2 text-sm text-neutral-dark/70 dark:text-zinc-400">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-neutral-dark dark:text-zinc-200">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600 font-bold dark:text-green-400">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-[11px] text-accent font-medium text-left">
                      💡 Spend ${(50 - subtotal).toFixed(2)} more for FREE Shipping!
                    </p>
                  )}
                  <div className="border-t border-neutral-warm/80 dark:border-zinc-800/80 my-2 pt-2 flex justify-between text-base font-extrabold text-primary dark:text-zinc-100 font-display">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={checkingOut}
                  className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-lg shadow-accent/20 transition-all duration-300 disabled:opacity-75 cursor-pointer"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>{checkingOut ? 'Processing Payment...' : 'Proceed to Checkout'}</span>
                </button>
              </div>
            )}
          </motion.div>

          {/* Mock Checkout Success Popup Overlay */}
          {success && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                className="absolute inset-0 bg-black"
                onClick={handleSuccessClose}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-zinc-900 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative z-10 border border-neutral-warm dark:border-zinc-800"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/50 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Sparkles className="w-8 h-8 fill-current" />
                </div>
                <h3 className="font-display font-extrabold text-xl text-primary dark:text-zinc-100">Order Placed Successfully!</h3>
                <p className="text-sm text-neutral-dark/60 dark:text-zinc-400 mt-2 leading-relaxed">
                  Thank you for shopping with abcde! Your premium orchard fresh delivery will arrive in 24 hours. A receipt has been sent to your email.
                </p>
                <button
                  onClick={handleSuccessClose}
                  className="w-full mt-6 py-3 bg-primary dark:bg-accent hover:bg-primary-light dark:hover:bg-accent-hover text-white font-semibold rounded-full shadow-lg transition-colors duration-200 cursor-pointer"
                >
                  Awesome!
                </button>
              </motion.div>
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}

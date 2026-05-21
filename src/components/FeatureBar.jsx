import { Truck, PhoneCall, RotateCcw, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeatureBar() {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On all orders over $50',
    },
    {
      icon: PhoneCall,
      title: '24/7 Support',
      description: 'Get help at any time',
    },
    {
      icon: RotateCcw,
      title: 'Refund Policy',
      description: 'Easy returns within 3 days',
    },
    {
      icon: Sparkles,
      title: '100% Organic',
      description: 'Certified fresh products',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl shadow-neutral-dark/5 p-6 border border-neutral-warm dark:border-zinc-800/80 flex items-start gap-4 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-primary dark:text-zinc-100 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-neutral-dark/60 dark:text-zinc-400 text-sm mt-1">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

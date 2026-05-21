import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import newsData from '../data/news.json';

export default function NewsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="news" className="py-24 bg-neutral-warm dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-display font-semibold tracking-wider text-sm uppercase">
            Our Blog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-zinc-100 font-display leading-tight">
            Latest News & Articles
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-neutral-dark/60 dark:text-zinc-400 text-base">
            Stay up to date with agriculture insights, organic crop harvesting guides, and nutritional wisdom from our wellness coaches.
          </p>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsData.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-neutral-warm dark:border-zinc-800 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image & Date Badge */}
              <div className="relative overflow-hidden aspect-[16/10] bg-neutral-warm dark:bg-zinc-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Date overlay stamp */}
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1.5 rounded-xl font-display text-xs font-bold shadow-md">
                  {post.date.split(',')[0]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow text-left">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs font-semibold text-neutral-dark/50 dark:text-zinc-400 mb-3">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-accent" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{post.date.split(',')[1]?.trim() || '2026'}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-primary dark:text-zinc-100 mb-3 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-neutral-dark/65 dark:text-zinc-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Action Trigger */}
                <div className="mt-auto pt-4 border-t border-neutral-warm/80 dark:border-zinc-800/85">
                  <button
                    onClick={() => alert(`Reading article: "${post.title}"\nComing soon!`)}
                    className="inline-flex items-center gap-1 text-sm font-bold text-primary dark:text-zinc-300 group-hover:text-accent dark:group-hover:text-accent transition-colors duration-200 focus:outline-none cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

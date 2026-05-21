import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Apple } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer id="contact" className="bg-primary-dark text-white/80 border-t border-white/10 dark:bg-zinc-950 dark:border-zinc-900 transition-colors duration-300">
      
      {/* Upper newsletter bar */}
      <div className="bg-primary dark:bg-zinc-900/50 border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left space-y-2">
              <h3 className="font-display font-bold text-xl text-white">Subscribe to Our Newsletter</h3>
              <p className="text-white/60 text-sm dark:text-zinc-400">Get weekly orchard updates and exclusive seasonal coupon codes.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3.5 bg-white/10 rounded-full border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-sm dark:bg-zinc-800/40 dark:border-zinc-700/50 dark:placeholder-zinc-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full flex items-center gap-2 shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
          </div>
          {subscribed && (
            <p className="text-accent text-xs font-semibold text-left mt-3 animate-fade-in">
              🎉 Subscription successful! Thank you for joining the abcde community.
            </p>
          )}
        </div>
      </div>

      {/* Main Footer Links & Blocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          
          {/* Block 1: About Us */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                <Apple className="w-4 h-4 fill-current" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                abc<span className="text-accent">de</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed dark:text-zinc-400">
              We cultivate and curate the finest grade organic yields, supplying premium quality farm fresh seasonal fruits straight to domestic households since 1999.
            </p>
          </div>

          {/* Block 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-white text-base border-l-4 border-accent pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About', 'Shop', 'News'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-accent hover:underline transition-all duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Block 3: Get in Touch */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-white text-base border-l-4 border-accent pl-3">
              Get in Touch
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/60">34/8, Orchard Lane, Vineyard City, VC 45091</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-white/60">+1 (800) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-white/60">support@abcde.com</span>
              </li>
            </ul>
          </div>

          {/* Block 4: Hours & Guarantee */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-white text-base border-l-4 border-accent pl-3">
              Orchard Hours
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Monday – Friday: 08:00 AM – 06:00 PM <br />
              Saturday: 09:00 AM – 04:00 PM <br />
              Sunday: Orchard Closed
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-[11px] font-bold text-white/50 uppercase tracking-widest">
                Regenerative Farm
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black/35 py-6 border-t border-white/5 text-sm text-white/40 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} abcde Inc. Crafted with care. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}

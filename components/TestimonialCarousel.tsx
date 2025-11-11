'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  logo?: string;
}

interface Props {
  items: Testimonial[];
}

export function TestimonialCarousel({ items }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <div className="relative rounded-[32px] border border-white/10 bg-black/70 p-8">
      <div className="absolute right-6 top-6 text-[#C47A3A]" aria-hidden>
        <Quote size={32} />
      </div>
      <AnimatePresence mode="wait">
        <motion.figure
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          aria-live="polite"
        >
          <blockquote className="text-lg text-white/90">“{items[index].quote}”</blockquote>
          <figcaption className="mt-4 text-sm text-white/70">
            {items[index].author} — {items[index].role}
          </figcaption>
        </motion.figure>
      </AnimatePresence>
      <div className="mt-6 flex gap-2" role="tablist" aria-label="Testimonials">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={idx === index}
            className={`h-2 w-2 rounded-full ${idx === index ? 'bg-[#C47A3A]' : 'bg-white/20'}`}
            onClick={() => setIndex(idx)}
          >
            <span className="sr-only">Toon testimonial {idx + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

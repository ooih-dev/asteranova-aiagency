'use client';

import React, { useState } from 'react';

const accordionItems = [
  {
    id: 1,
    title: 'ИИ-Агенты',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'RAG и Чат-боты',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Генерация Медиа',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Консалтинг',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Обучение',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
  },
];

interface AccordionItemProps {
  item: (typeof accordionItems)[0];
  isActive: boolean;
  onMouseEnter: () => void;
}

function AccordionItem({ item, isActive, onMouseEnter }: AccordionItemProps) {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[320px]' : 'w-[56px]'}
      `}
      style={{ height: '480px' }}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const t = e.target as HTMLImageElement;
          t.onerror = null;
          t.src = 'https://placehold.co/320x480/111827/F5A623?text=AI';
        }}
      />
      {/* Gradient overlay — dark bottom for amber text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {/* Amber accent line on active */}
      <div
        className={`absolute left-0 top-0 w-0.5 h-full bg-accent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
      />

      <span
        className={`
          absolute text-white text-sm font-semibold whitespace-nowrap tracking-wide uppercase
          transition-all duration-500 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-6 rotate-0 text-accent'
              : 'bottom-28 left-1/2 -translate-x-1/2 rotate-90 text-white/70 text-xs'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(90deg, #F5A623 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: copy */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-muted text-xs mb-8 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Искусственный интеллект для бизнеса и государства
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
              Агентство{' '}
              <span className="text-accent">Искусственного</span>{' '}
              Интеллекта
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed mb-10">
              Научно-исследовательская деятельность, стратегический консалтинг и
              внедрение ИИ-решений, которые снижают издержки и повышают
              эффективность.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="/services"
                className="px-7 py-3 bg-accent text-bg font-display font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 text-sm"
              >
                Наши услуги
              </a>
              <a
                href="/contacts"
                className="px-7 py-3 border border-border text-text font-display font-semibold rounded-lg hover:border-accent hover:text-accent transition-all duration-300 text-sm"
              >
                Связаться с нами
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-border">
              {[
                { num: '64+', label: 'Реализованных проекта' },
                { num: '120', label: 'Научных исследований' },
                { num: '15', label: 'Разработанных ГОСТов' },
                { num: '1037+', label: 'Обученных специалистов' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-accent">{s.num}</div>
                  <div className="text-xs text-muted mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image accordion */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="flex flex-row items-stretch gap-3 overflow-x-auto">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "64", label: "проекта" },
  { value: "120", label: "научных исследований" },
  { value: "59", label: "партнёров" },
  { value: "15", label: "ГОСТов" },
  { value: "1 037", label: "обученных специалистов" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJIMjR2LTJoMTJ6bTAtNHYySDI0di0yaDEyem0wLTR2MkgyNHYtMmgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-blue-200 text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Принимаем заявки на 2026 год
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Искусственный интеллект{" "}
            <span className="text-blue-300">для бизнеса</span>{" "}
            и государства
          </h1>

          <p className="text-lg sm:text-xl text-blue-100/80 mb-10 max-w-2xl leading-relaxed">
            Проектируем и внедряем интеллектуальные системы. Проводим научные
            исследования. Обучаем команды. Строим стратегии цифровой
            трансформации.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#services"
              className="px-8 py-3.5 rounded-xl bg-white text-[#0f1b4c] font-semibold hover:bg-blue-50 transition shadow-lg shadow-black/10"
            >
              Наши услуги
            </a>
            <a
              href="#contacts"
              className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition"
            >
              Связаться с нами
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10"
            >
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-blue-200/70 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

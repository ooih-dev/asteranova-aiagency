"use client";

import { motion } from "framer-motion";

const partners = [
  "Газпром Нефть",
  "КамАЗ",
  "Росстандарт",
  "Росатом",
  "ПМЭФ",
  "Полная Энергетическая Сервисная Компания",
  "Министерство цифрового развития",
  "Сколково",
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Партнёры
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            59 партнёров — крупнейшие предприятия и государственные структуры России
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-6 flex items-center justify-center text-center border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all min-h-[100px]"
            >
              <span className="font-semibold text-gray-700 text-sm">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

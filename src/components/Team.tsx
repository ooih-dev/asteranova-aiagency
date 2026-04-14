"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Сергей Шумский",
    role: "Генеральный директор",
    bio: "Эксперт в области ИИ, кандидат физ.-мат. наук. Более 20 лет в разработке интеллектуальных систем.",
  },
  {
    name: "Алексей Потапов",
    role: "Научный руководитель",
    bio: "Доктор технических наук. Специализация — AGI, когнитивные архитектуры, символьный ИИ.",
  },
  {
    name: "Елена Разумова",
    role: "Директор по обучению",
    bio: "Разработка образовательных программ. Координация корпоративных тренингов и программ повышения квалификации.",
  },
  {
    name: "Дмитрий Козлов",
    role: "Руководитель R&D",
    bio: "Компьютерное зрение, NLP, прогнозная аналитика. Руководство исследовательскими проектами.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Команда
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Учёные, инженеры и консультанты с многолетним опытом в области ИИ
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-28 h-28 mx-auto mb-5 rounded-2xl gradient-bg flex items-center justify-center text-white text-3xl font-bold">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm font-medium text-blue-600 mb-3">
                {member.role}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

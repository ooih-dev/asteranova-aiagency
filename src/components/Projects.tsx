"use client";

import { motion } from "framer-motion";

const projects = [
  {
    category: "NLP",
    title: "Диалоговая платформа для Газпром Нефть",
    description: "Корпоративный чат-бот с A/B-тестированием и интеграцией в SAP-систему. Сокращение времени ответа на запросы сотрудников на 60%.",
    tags: ["NLP", "Чат-бот", "Enterprise"],
  },
  {
    category: "Computer Vision",
    title: "Система контроля качества КамАЗ",
    description: "Компьютерное зрение для автоматического контроля качества на производственной линии. Выявление дефектов в реальном времени.",
    tags: ["CV", "Промышленность", "Real-time"],
  },
  {
    category: "Аналитика",
    title: "Прогнозная аналитика для энергетики",
    description: "Система предсказания пиковых нагрузок для оптимизации распределения энергоресурсов. Точность прогноза — 94%.",
    tags: ["ML", "Энергетика", "Прогнозы"],
  },
  {
    category: "R&D",
    title: "Разработка ГОСТ-стандартов для ИИ",
    description: "Участие в создании 15 государственных стандартов в области искусственного интеллекта совместно с Росстандартом.",
    tags: ["Стандарты", "ГОСТ", "Регулирование"],
  },
  {
    category: "Обучение",
    title: "Программа повышения квалификации",
    description: "Обучение руководителей и специалистов — 11 программ, более 1000 выпускников. Курсы по внедрению ИИ в управление.",
    tags: ["Обучение", "EdTech", "Курсы"],
  },
  {
    category: "Цифровые двойники",
    title: "Лаборатория цифровых двойников VIRperson",
    description: "Создание цифровых двойников для моделирования бизнес-процессов и принятия стратегических решений.",
    tags: ["Digital Twin", "Моделирование", "Инновации"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Проекты
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            64 завершённых проекта для крупнейших предприятий и государственных структур
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

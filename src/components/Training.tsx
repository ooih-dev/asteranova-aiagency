"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "ИИ: внедрение и управление",
    audience: "Руководители",
    format: "Онлайн",
    duration: "72 часа",
  },
  {
    title: "ИИ в государственном управлении",
    audience: "Госслужащие",
    format: "Очно / Онлайн",
    duration: "40 часов",
  },
  {
    title: "Генеративные модели в образовании",
    audience: "Педагоги",
    format: "Онлайн",
    duration: "36 часов",
  },
  {
    title: "Корпоративное внедрение ИИ",
    audience: "IT-команды",
    format: "Очный тренинг",
    duration: "5 дней",
  },
  {
    title: "ИИ в фармацевтике",
    audience: "Специалисты",
    format: "Онлайн",
    duration: "48 часов",
  },
];

export default function Training() {
  return (
    <section id="training" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Программы обучения
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            11 программ повышения квалификации. Более 1 037 обученных
            специалистов.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {program.title}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Аудитория</span>
                  <span className="font-medium text-gray-700">
                    {program.audience}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Формат</span>
                  <span className="font-medium text-gray-700">
                    {program.format}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Длительность</span>
                  <span className="font-medium text-gray-700">
                    {program.duration}
                  </span>
                </div>
              </div>
              <button className="mt-5 w-full py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition">
                Подробнее
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

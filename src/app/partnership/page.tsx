"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const asteranovaOffers = [
  {
    icon: "🤖",
    title: "Ooih AI Agent",
    description:
      "Автономный ИИ-ассистент для бизнеса: Telegram-бот, управление задачами, мультипроектные операции. Готовый продукт для ваших клиентов.",
    details: [
      "Интеграция за 2 недели",
      "Telegram + Web интерфейс",
      "Мультиязычность (RU/EN)",
      "Управление задачами и проектами",
    ],
  },
  {
    icon: "🎨",
    title: "Selgen",
    description:
      "ИИ-платформа генерации изображений для маркетинга и контента. От баннеров до полноценных рекламных креативов.",
    details: [
      "Генерация по текстовому описанию",
      "Фирменный стиль и брендинг",
      "Пакетная генерация контента",
      "API для интеграции",
    ],
  },
  {
    icon: "⚙️",
    title: "Разработка ИИ-продуктов",
    description:
      "Проектирование и создание кастомных ИИ-решений под конкретные бизнес-задачи клиентов.",
    details: [
      "NLP и диалоговые системы",
      "Компьютерное зрение",
      "Рекомендательные системы",
      "Автоматизация бизнес-процессов",
    ],
  },
  {
    icon: "🔗",
    title: "Web3 / On-chain AI",
    description:
      "Ditto Network — автоматизация смарт-контрактов и workflow на блокчейне. Новый рынок для ИИ-решений.",
    details: [
      "Автоматизация DeFi-процессов",
      "Смарт-контракт оркестрация",
      "Кросс-чейн операции",
      "ИИ + блокчейн решения",
    ],
  },
];

const aiagencyBrings = [
  {
    title: "Стратегический консалтинг",
    description: "Экспертиза в оценке ИИ-зрелости и построении дорожных карт трансформации для крупных заказчиков.",
  },
  {
    title: "Научная экспертиза",
    description: "120+ научных исследований, 15 ГОСТов — репутация и экспертиза на уровне государственных стандартов.",
  },
  {
    title: "Клиентская сеть",
    description: "Газпром Нефть, КамАЗ, Росатом, государственные структуры — доступ к enterprise-заказчикам.",
  },
  {
    title: "Образовательная платформа",
    description: "11 программ обучения, 1037+ выпускников — канал для продвижения совместных решений.",
  },
];

const cooperationModels = [
  {
    title: "White-label",
    subtitle: "Наши продукты — ваш бренд",
    description:
      "AI Agency продаёт Ooih, Selgen и кастомные решения AsteraNova под своим брендом. Мы обеспечиваем техподдержку и обновления.",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Revenue Share",
    subtitle: "Совместные сделки",
    description:
      "Общие коммерческие предложения для enterprise-клиентов. Распределение выручки по вкладу каждой стороны.",
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Joint Pitch",
    subtitle: "Комбинированные предложения",
    description:
      "Совместные тендерные заявки и презентации. Стратегия AI Agency + продукты AsteraNova = полное покрытие.",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    title: "Техническая интеграция",
    subtitle: "Наши инструменты внутри",
    description:
      "AI Agency использует Ooih и Selgen как внутренние инструменты для своих проектов и клиентов.",
    color: "from-cyan-500 to-cyan-700",
  },
];

export default function PartnershipPage() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-lg text-gray-900">AI Agency</span>
            </Link>
            <Link
              href="/"
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition"
            >
              ← На главную
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1b4c] via-[#1e3a8a] to-[#581c87]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_70%)]" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-sm mb-8">
                Партнёрское предложение
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-blue-300">asteranova.com</span>
                <span className="mx-4 text-white/40">×</span>
                <span className="text-purple-300">aiagency.ru</span>
              </h1>

              <p className="text-lg sm:text-xl text-blue-100/70 max-w-3xl mx-auto leading-relaxed mb-10">
                Объединяем продуктовую экспертизу AsteraNova в области ИИ-агентов,
                генеративных моделей и Web3 с консалтинговой мощью и клиентской
                сетью AI Agency.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#models"
                  className="px-8 py-3.5 rounded-xl bg-white text-[#0f1b4c] font-semibold hover:bg-blue-50 transition shadow-lg"
                >
                  Модели сотрудничества
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition"
                >
                  Обсудить партнёрство
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What AsteraNova brings */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Что привносит AsteraNova
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Готовые ИИ-продукты и технологическая экспертиза для расширения
                портфеля услуг AI Agency
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {asteranovaOffers.map((offer, i) => (
                <motion.div
                  key={offer.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{offer.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-500 mb-5">{offer.description}</p>
                  <ul className="space-y-2">
                    {offer.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-blue-500 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What AI Agency brings */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Что привносит AI Agency
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Стратегическая экспертиза, научная база и сеть enterprise-клиентов
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {aiagencyBrings.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Synergy */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Синергия
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 sm:p-12 border border-blue-100"
            >
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    AsteraNova
                  </div>
                  <p className="text-sm text-gray-500">
                    Продукты: Ooih, Selgen, Web3
                  </p>
                  <p className="text-sm text-gray-500">
                    Технологии: AI Agents, GenAI
                  </p>
                  <p className="text-sm text-gray-500">
                    Скорость: MVP за 2 недели
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                    +
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    AI Agency
                  </div>
                  <p className="text-sm text-gray-500">
                    Клиенты: Газпром, Росатом
                  </p>
                  <p className="text-sm text-gray-500">
                    Экспертиза: 64 проекта, 15 ГОСТов
                  </p>
                  <p className="text-sm text-gray-500">
                    Обучение: 1037+ специалистов
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <div className="inline-block bg-white rounded-2xl px-8 py-4 shadow-sm border border-gray-100">
                  <p className="text-lg font-bold text-gray-900">
                    = Полный цикл ИИ-трансформации
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    От стратегии и аудита до готовых ИИ-продуктов и обучения команд
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cooperation models */}
        <section id="models" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Модели сотрудничества
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Гибкие форматы партнёрства — от white-label до совместных тендеров
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {cooperationModels.map((model, i) => (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${model.color}`}
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900">
                      {model.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mb-3">
                      {model.subtitle}
                    </p>
                    <p className="text-gray-500 leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="contact" className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Следующий шаг
              </h2>
              <p className="text-lg text-gray-500 mb-10">
                Давайте обсудим конкретные форматы сотрудничества. Мы готовы
                провести демо наших продуктов и подготовить пилотное предложение.
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Компания и должность"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <textarea
                    placeholder="Какой формат сотрудничества вас интересует?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition shadow-lg shadow-blue-500/25"
                  >
                    Назначить встречу
                  </button>
                </form>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                  <span>Или напишите напрямую:</span>
                  <a
                    href="mailto:hello@asteranova.com"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    hello@asteranova.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="gradient-bg text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200/60 text-sm">
            &copy; 2026 AsteraNova × AI Agency — Партнёрское предложение
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm text-blue-200/40">
            <a href="https://asteranova.com" className="hover:text-white transition">
              asteranova.com
            </a>
            <a href="https://aiagency.ru" className="hover:text-white transition">
              aiagency.ru
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

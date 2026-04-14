import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Материалы — AI Agency",
  description: "Публикации, исследования и аналитические материалы в области искусственного интеллекта.",
};

const materials = [
  {
    title: "Когнитивные города",
    description: "Автоматизированные и интегрированные процессы восприятия всех аспектов городской жизни с использованием моделирования и предиктивной аналитики для адаптивных муниципальных сервисов.",
    category: "Исследование",
  },
  {
    title: "Интеллектуальные агенты и персонализация образования",
    description: "Как ИИ обеспечивает персонализированное образование на основе индивидуальных траекторий обучения.",
    category: "Статья",
  },
  {
    title: "Сравнение национальных стратегий в области ИИ",
    description: "Совместный аналитический обзор стратегий в области ИИ на государственном уровне 20 развитых стран. Подготовлен совместно с Казахстанской ассоциацией когнитивных городов.",
    category: "Аналитика",
  },
  {
    title: "Населённые пункты как интеллектуальные агенты",
    description: "Переход от «умных» к когнитивным городам в рамках концепции Индустрия 4.0.",
    category: "Исследование",
  },
  {
    title: "Принципы искусственного интеллекта",
    description: "Консенсус по этическим и правозащитным подходам к принципам искусственного интеллекта.",
    category: "Обзор",
  },
  {
    title: "Тематический обзор: мессенджеры и конструкторы чат-ботов",
    description: "Руководство по автоматизации бизнес-процессов через разговорные интерфейсы.",
    category: "Обзор",
  },
  {
    title: "The Hybrid Design for Artificial Intelligence Systems",
    description: "Combining neural network (bottom-up) and symbolic (top-down) AI approaches for hybrid architectures.",
    category: "Research",
  },
  {
    title: "Современные машинные переводчики",
    description: "Обзор современных технологий машинного перевода и их применения.",
    category: "Обзор",
  },
];

export default function MaterialsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <p className="text-accent font-display text-sm font-semibold tracking-wider uppercase mb-3">Материалы</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-6">Публикации и исследования</h1>
              <p className="text-lg text-muted leading-relaxed">
                Наши публикации о развитии искусственного интеллекта и прикладных наук: собственные исследования,
                экспертные статьи, переводы зарубежных источников и аналитические отчёты.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {materials.map((m) => (
                <div key={m.title} className="glass-card p-6 hover:border-accent/30 transition-all duration-300 group">
                  <span className="px-3 py-1 text-xs font-display font-semibold text-accent bg-accent/10 rounded-full">
                    {m.category}
                  </span>
                  <h2 className="font-display text-lg font-bold text-text mt-4 mb-3 group-hover:text-accent transition-colors duration-300">
                    {m.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

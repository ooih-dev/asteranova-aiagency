import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Услуги — AI Agency",
  description: "Проектирование и внедрение интеллектуальных систем, R&D, обучение и стратегический консалтинг.",
};

const services = [
  {
    num: "01",
    title: "Проектирование и внедрение интеллектуальных систем",
    description: "Полный цикл: от концепции до интеграции в ИТ-ландшафт заказчика.",
    details: [
      "ИИ-агенты и цифровые двойники",
      "Чат-боты и диалоговые платформы с A/B-тестированием",
      "Системы поддержки принятия решений (в медицине, управлении, логистике)",
      "Гибридные архитектуры (нейросети + символьные методы)",
    ],
  },
  {
    num: "02",
    title: "Научные исследования и инновации (R&D)",
    description: "Прикладные НИОКР для создания уникальных цифровых активов компании — алгоритмы, датасеты и экспертиза.",
    details: [
      "Обработка естественного языка (NLP)",
      "Компьютерное зрение (медицина, промышленность)",
      "Прогнозная аналитика (энергетика, логистика)",
      "Интеллектуальные транспортные системы",
    ],
  },
  {
    num: "03",
    title: "Корпоративное обучение и развитие компетенций",
    description: "Практические инструменты для запуска и управления проектами по внедрению ИИ в реальные бизнес-процессы.",
    details: [
      "Программы для руководителей и команд цифровой трансформации",
      "Программы для IT-специалистов, бизнес-аналитиков, госслужащих",
      "Форматы: модульные курсы, вебинары, очные тренинги",
      "Индивидуальные программы под задачи компании",
    ],
  },
  {
    num: "04",
    title: "Стратегический консалтинг и аудит ИИ-зрелости",
    description: "На основе комплексного анализа формируется дорожная карта цифровой трансформации по модернизации и интеграции технологий ИИ.",
    details: [
      "Экспресс-аудит цифровой инфраструктуры",
      "Оценка готовности к ИИ",
      "Разработка дорожных карт цифровой трансформации",
      "Аудит данных, ИТ-безопасности и соответствия стандартам",
    ],
  },
  {
    num: "05",
    title: "Цифровые аватары и видеопроизводство",
    description: "Производство видео без съёмок, актёров и монтажа. В 10 раз быстрее и дешевле традиционного производства.",
    details: [
      "Маркетинговые и рекламные ролики",
      "Корпоративные коммуникации",
      "Обучающие видеоматериалы",
      "Контент для e-commerce",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <p className="text-accent font-display text-sm font-semibold tracking-wider uppercase mb-3">Услуги</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-6">Наши направления</h1>
              <p className="text-lg text-muted leading-relaxed">
                Мы помогаем коммерческим компаниям и госструктурам внедрять ИИ-решения,
                которые снижают издержки, повышают эффективность и точность решений.
              </p>
            </div>

            <div className="space-y-8">
              {services.map((s) => (
                <div key={s.num} className="glass-card p-8 sm:p-10 hover:border-accent/30 transition-all duration-300 group">
                  <div className="flex items-start gap-6">
                    <span className="font-display text-4xl font-bold text-accent/20 shrink-0 hidden sm:block">{s.num}</span>
                    <div className="flex-1">
                      <h2 className="font-display text-2xl font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                        {s.title}
                      </h2>
                      <p className="text-muted leading-relaxed mb-6">{s.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {s.details.map((d) => (
                          <div key={d} className="flex items-start gap-2 text-sm text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href="mailto:in@aiagency.ru" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-bg font-display font-semibold rounded-lg hover:bg-accent-hover transition-all duration-300">
                Заказать услугу
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

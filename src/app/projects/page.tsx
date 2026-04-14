import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Проекты — AI Agency",
  description: "Реализованные кейсы в медицине, транспорте, энергетике, образовании и HoReCa.",
};

const projects = [
  {
    title: "Jane — Медицинская система поддержки решений",
    category: "Медицина",
    description: "ИИ-система для неврологов: диагностика эпилепсии, прогнозирование течения болезни и планирование лечения сложных педиатрических случаев. Включает распознавание побочных эффектов, рекомендации по лечению, мониторинг витальных показателей и статистический анализ когорт.",
    result: "Скорректированы диагнозы для нескольких сложных пациентов",
    year: "2016",
    tech: "NLP, Deep Learning, медицинская экспертная система",
  },
  {
    title: "ИИ-Шеф — Ресторан SHE (White Rabbit Family)",
    category: "HoReCa",
    description: "Первый в мире ресторан с генерацией блюд на основе ИИ. Система генерации рецептов через матрицу совместимости ингредиентов. ИИ-аватар шеф-повара «Саша Вайнер».",
    result: "Рост медиаприсутствия, привлечение новой аудитории, расширение позитивных отзывов",
    year: "2020",
    tech: "Генеративные модели, матрицы совместимости, аватар ИИ",
  },
  {
    title: "Стандарты ИИ для автономного транспорта",
    category: "Транспорт",
    client: "Росстандарт",
    description: "Разработка 8 ГОСТов по системам ИИ для управления автономным транспортом: терминология, функциональные подсистемы, распознавание знаков, обнаружение препятствий, реконструкция перекрёстков, управление полосами, прогноз поведения, алгоритмы слияния данных.",
    result: "15 государственных стандартов по ИИ разработано",
    year: "2019",
    tech: "Компьютерное зрение, Data Fusion, предиктивная аналитика",
  },
  {
    title: "Чат-бот «Белый Сад»",
    category: "Бизнес",
    description: "Telegram-бот для сбора анонимных отзывов клиентов сети центров здоровья и красоты. Анонимный сбор обратной связи и управление репутацией.",
    result: "75% позитивных отзывов (год 2), 90%+ (год 3), +25% рост объёма обратной связи",
    year: "2018",
    tech: "Telegram Bot API, NLP, аналитика отзывов",
  },
  {
    title: "VIRperson — Лаборатория цифровых двойников",
    category: "R&D",
    description: "Платформа создания цифровых копий людей на основе воспоминаний и опыта. Обучаемые когнитивные агенты на базе персональной памяти для воссоздания поведенческих черт и особенностей характера.",
    result: "Внутренний проект в активной стадии разработки",
    year: "2023",
    tech: "NLP, BERT/GPT, ассоциативно-иерархическая память, гибридная когнитивная архитектура",
  },
  {
    title: "Курс «Цифровая экономика: новые реалии жизни»",
    category: "Образование",
    client: "РАНХиГС, Иннополис",
    description: "Обучающий курс для руководителей школ по всей России. 4 модуля: основы ИИ, технологии на основе знаний, машинное обучение, нейросети и практические применения ИИ.",
    result: "11,000+ обучившихся руководителей",
    year: "2021",
    tech: "Образовательная платформа, модульная программа",
  },
  {
    title: "Курс «Введение в ИИ для руководителей»",
    category: "Образование",
    client: "Газпромнефть, КАМАЗ, НОВАТЭК",
    description: "Корпоративное обучение высшего руководящего состава. 4 модуля: цифровая трансформация, искусственный интеллект, машинное обучение, квантовые технологии.",
    result: "Повышение квалификации руководителей крупнейших компаний",
    year: "2022",
    tech: "Корпоративная программа, воркшопы",
  },
  {
    title: "Цифровая энергетика на базе ИИ",
    category: "Энергетика",
    client: "Full Energy Service Company",
    description: "Интеллектуальная система защиты и цифровой двойник энергосистемы. Модель прогнозирования пиковой нагрузки для эффективного управления и оптимизации.",
    result: "Высокая точность прогноза пиковой нагрузки в энергосетях",
    year: "2021",
    tech: "Предиктивная аналитика, цифровой двойник, ML",
  },
  {
    title: "Диалоговый интерфейс ПМЭФ-2019",
    category: "Мероприятия",
    client: "ПМЭФ",
    description: "Разработка диалогового интерфейса для координации всех участников Петербургского Международного Экономического Форума и предоставления материалов мероприятия.",
    result: "Успешное обслуживание участников форума",
    year: "2019",
    tech: "Чат-бот, NLP, диалоговый интерфейс",
  },
];

const categories = ["Все", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <p className="text-accent font-display text-sm font-semibold tracking-wider uppercase mb-3">Проекты</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-6">Реализованные кейсы</h1>
              <p className="text-lg text-muted leading-relaxed">
                За 8 лет мы выполнили более 60 проектов для крупнейших компаний и госструктур.
                Наши решения внедрены в ТЭК, здравоохранении, транспорте, образовании, городском управлении и HoReCa.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <span key={cat} className="px-4 py-1.5 text-sm font-display border border-border rounded-full text-muted hover:text-accent hover:border-accent/30 transition-all duration-300 cursor-default">
                  {cat}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <div key={p.title} className="glass-card p-6 sm:p-8 hover:border-accent/30 transition-all duration-300 group flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-display font-semibold text-accent bg-accent/10 rounded-full">{p.category}</span>
                    <span className="text-xs text-muted">{p.year}</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                    {p.title}
                  </h2>
                  {"client" in p && p.client && (
                    <p className="text-sm text-accent/70 mb-2">Клиент: {p.client}</p>
                  )}
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
                  <div className="text-xs text-muted/60 mb-4">{p.tech}</div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-accent/80">{p.result}</p>
                  </div>
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

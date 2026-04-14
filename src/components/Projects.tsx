const projects = [
  {
    title: "Jane — Медицинская система поддержки решений",
    category: "Медицина",
    description: "ИИ-система для неврологов: диагностика эпилепсии, прогнозирование течения болезни, планирование лечения сложных педиатрических случаев.",
    result: "Скорректированы диагнозы для нескольких сложных пациентов",
    year: "2016",
  },
  {
    title: "ИИ-Шеф — Ресторан SHE (White Rabbit Family)",
    category: "HoReCa",
    description: "Первый в мире ресторан с генерацией блюд на основе ИИ. Система генерации рецептов через матрицу совместимости ингредиентов.",
    result: "Рост медиаприсутствия и аудитории ресторана",
    year: "2020",
  },
  {
    title: "Стандарты ИИ для автономного транспорта",
    category: "Транспорт",
    description: "Разработка 8 ГОСТов по системам ИИ для управления автономным транспортом совместно с Росстандартом.",
    result: "15 государственных стандартов разработано",
    year: "2019",
  },
  {
    title: "Чат-бот «Белый Сад»",
    category: "Бизнес",
    description: "Telegram-бот для сбора анонимных отзывов клиентов сети центров здоровья и красоты.",
    result: "90%+ позитивных отзывов к 3-му году работы",
    year: "2018",
  },
  {
    title: "VIRperson — Цифровые двойники",
    category: "R&D",
    description: "Платформа создания цифровых копий людей на основе воспоминаний и опыта. Когнитивные агенты на базе персональной памяти.",
    result: "Внутренний проект в стадии разработки",
    year: "2023",
  },
  {
    title: "Курс «Цифровая экономика» — РАНХиГС",
    category: "Образование",
    description: "Обучающий курс для 11,000+ руководителей школ по всей России. 4 модуля: основы ИИ, ML, нейросети, практика.",
    result: "11,000+ обучившихся руководителей",
    year: "2021",
  },
];

export default function Projects() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p className="text-accent font-display text-sm font-semibold tracking-wider uppercase mb-3">Проекты</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Реализованные кейсы</h2>
          </div>
          <a href="/projects" className="text-sm text-muted hover:text-accent transition-colors duration-300">Все проекты →</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="glass-card p-6 hover:border-accent/30 transition-all duration-300 group flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-display font-semibold text-accent bg-accent/10 rounded-full">{p.category}</span>
                <span className="text-xs text-muted">{p.year}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-accent/80">{p.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

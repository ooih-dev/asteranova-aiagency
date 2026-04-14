const services = [
  {
    num: "01",
    title: "Проектирование и внедрение интеллектуальных систем",
    description: "Полный цикл: от концепции до интеграции в ИТ-ландшафт заказчика.",
    items: ["ИИ-агенты и цифровые двойники", "Чат-боты и диалоговые платформы", "Системы поддержки принятия решений", "Гибридные архитектуры"],
  },
  {
    num: "02",
    title: "Научные исследования и инновации (R&D)",
    description: "Прикладные НИОКР для создания уникальных цифровых активов.",
    items: ["Обработка естественного языка (NLP)", "Компьютерное зрение", "Прогнозная аналитика", "Интеллектуальные транспортные системы"],
  },
  {
    num: "03",
    title: "Корпоративное обучение и развитие компетенций",
    description: "Практические инструменты для запуска и управления ИИ-проектами.",
    items: ["Руководители и команды трансформации", "IT-специалисты и бизнес-аналитики", "Модульные курсы и вебинары", "Индивидуальные программы"],
  },
  {
    num: "04",
    title: "Стратегический консалтинг и аудит ИИ-зрелости",
    description: "Экспресс-аудит инфраструктуры, оценка готовности к ИИ, дорожные карты трансформации.",
    items: ["Аудит цифровой инфраструктуры", "Оценка готовности к ИИ", "Дорожные карты трансформации", "Аудит данных и ИТ-безопасности"],
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p className="text-accent font-display text-sm font-semibold tracking-wider uppercase mb-3">Услуги</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Что мы делаем</h2>
          </div>
          <a href="/services" className="text-sm text-muted hover:text-accent transition-colors duration-300">Все услуги →</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.num} className="glass-card p-8 hover:border-accent/30 transition-all duration-300 group">
              <span className="font-display text-sm text-accent/60 font-bold">{s.num}</span>
              <h3 className="font-display text-xl font-bold text-text mt-2 mb-3 group-hover:text-accent transition-colors duration-300">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{s.description}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

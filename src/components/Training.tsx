const courses = [
  {
    title: "Введение в ИИ и нейронные сети для руководителей",
    audience: "Корпоративные клиенты",
    hours: "4-16 ак. часов",
    efficiency: "+20-30%",
  },
  {
    title: "ИИ в государственном управлении",
    audience: "Госслужащие",
    hours: "4-16 ак. часов",
    efficiency: "+30-35%",
  },
  {
    title: "ИИ и генеративные модели в образовании",
    audience: "Преподаватели",
    hours: "4-16 ак. часов",
    efficiency: "+20-30%",
  },
  {
    title: "Программа внедрения ИИ для корпоративных команд",
    audience: "Корпоративные команды",
    hours: "4-16 ак. часов",
    efficiency: "+25-35%",
  },
  {
    title: "Искусственный интеллект в фармацевтике",
    audience: "Специалисты R&D",
    hours: "4-16 ак. часов",
    efficiency: "+25-40%",
  },
];

export default function Training() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p className="text-accent font-display text-sm font-semibold tracking-wider uppercase mb-3">Обучение</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Курсы и программы</h2>
            <p className="text-muted mt-3 max-w-xl">
              Учебный центр АИИ — мост между технологиями и бизнесом, где теории мы предпочитаем рабочие инструменты.
            </p>
          </div>
          <a href="/education" className="text-sm text-muted hover:text-accent transition-colors duration-300">Все курсы →</a>
        </div>

        <div className="space-y-4">
          {courses.map((c, i) => (
            <div key={c.title} className="glass-card p-6 hover:border-accent/30 transition-all duration-300 group flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="font-display text-2xl font-bold text-accent/30 shrink-0 w-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base font-bold text-text group-hover:text-accent transition-colors duration-300">{c.title}</h3>
                <p className="text-sm text-muted mt-1">{c.audience} · {c.hours}</p>
              </div>
              <div className="shrink-0 px-4 py-2 bg-accent/10 rounded-lg">
                <span className="font-display font-bold text-accent text-sm">{c.efficiency}</span>
                <span className="text-xs text-muted ml-1">эффективность</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

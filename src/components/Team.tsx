const team = [
  { name: "Денис Онацик", role: "Генеральный директор", initials: "ДО" },
  { name: "Сандра Фадеева", role: "Зам. ген. директора", initials: "СФ" },
  { name: "Ольга Волкова", role: "Исполнительный директор", initials: "ОВ" },
  { name: "Кирилл Онацик", role: "Директор по маркетингу", initials: "КО" },
  { name: "Пётр Маслак", role: "Технический директор", initials: "ПМ" },
];

export default function Team() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p className="text-accent font-display text-sm font-semibold tracking-wider uppercase mb-3">Команда</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Руководство</h2>
          </div>
          <a href="/team" className="text-sm text-muted hover:text-accent transition-colors duration-300">Вся команда →</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((m) => (
            <div key={m.name} className="glass-card p-6 text-center hover:border-accent/30 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-display font-bold text-accent text-lg">{m.initials}</span>
              </div>
              <h3 className="font-display text-sm font-bold text-text group-hover:text-accent transition-colors duration-300">{m.name}</h3>
              <p className="text-xs text-muted mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

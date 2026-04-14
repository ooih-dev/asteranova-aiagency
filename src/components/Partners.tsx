const partners = [
  { name: "ПАО «Газпром нефть»", description: "Курсы ИИ и ML для руководящего состава" },
  { name: "Росстандарт", description: "Разработка государственных стандартов по ИИ" },
  { name: "Росатом", description: "Анализ продуктов BI, ERP, IIoT, PLM, MES" },
  { name: "ПАО «КамАЗ»", description: "Обучение руководителей основам ИИ" },
  { name: "Университет Иннополис", description: "Совместные образовательные программы" },
  { name: "Фонд содействия инновациям", description: "Партнёрство в сфере развития ИИ" },
];

export default function Partners() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-display text-sm font-semibold tracking-wider uppercase mb-3">Клиенты и партнёры</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Нам доверяют</h2>
          <p className="text-muted mt-3 max-w-2xl mx-auto">
            Мы сотрудничаем с лидерами цифровой трансформации в России и за рубежом.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div key={p.name} className="glass-card p-6 hover:border-accent/30 transition-all duration-300">
              <h3 className="font-display text-base font-bold text-text mb-2">{p.name}</h3>
              <p className="text-sm text-muted">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted text-sm">
            А также: Томский государственный университет, Московский инновационный кластер, НОВАТЭК, РАНХиГС и другие.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client"

const services = [
  {
    icon: '🤖',
    title: 'Разработка интеллектуальных систем',
    desc: 'Полный цикл создания AI-решений: агенты, чат-боты, системы поддержки принятия решений, интеграция с IT-инфраструктурой.'
  },
  {
    icon: '🔬',
    title: 'Научные исследования',
    desc: 'Прикладные R&D в области обработки естественного языка, компьютерного зрения, предиктивной аналитики и интеллектуального транспорта.'
  },
  {
    icon: '🎓',
    title: 'Корпоративное обучение',
    desc: 'Программы для руководителей, IT-специалистов и госслужащих. 11 образовательных программ, 1037+ выпускников.'
  },
  {
    icon: '📊',
    title: 'Стратегический консалтинг',
    desc: 'Аудит цифровой инфраструктуры, оценка AI-готовности, разработка дорожных карт цифровой трансформации.'
  },
]

export default function Services() {
  return (
    <section id="услуги" className="section">
      <span className="section-tag">Услуги</span>
      <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#f1f5f9' }}>Что мы делаем</h2>
      <p style={{ color: '#94a3b8', marginBottom: '3rem', maxWidth: 560 }}>
        Четыре направления работы, объединённых единой экспертизой в области искусственного интеллекта.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
        {services.map(s => (
          <div key={s.title} className="glass-card" style={{ padding: '2rem', transition: 'transform 0.2s,box-shadow 0.2s', cursor: 'default' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow='0 16px 40px rgba(99,102,241,0.15)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform='translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow='none'; }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.75rem', color: '#f1f5f9', fontSize: '1.1rem' }}>{s.title}</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

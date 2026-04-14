const programs = [
  { title: 'ИИ для руководителей', duration: '16 часов', format: 'Онлайн' },
  { title: 'ИИ в государственном управлении', duration: '24 часа', format: 'Смешанный' },
  { title: 'Генеративные модели в образовании', duration: '12 часов', format: 'Онлайн' },
  { title: 'Внедрение ИИ в корпорации', duration: '32 часа', format: 'Корпоративный' },
  { title: 'ИИ в фармацевтике', duration: '20 часов', format: 'Онлайн' },
]

export default function Training() {
  return (
    <section id="обучение" style={{ padding: '5rem 1.5rem', background: 'rgba(99,102,241,0.04)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <span className="section-tag">Обучение</span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, margin: '1rem 0 1rem', color: '#f1f5f9' }}>Корпоративные программы</h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>Обучение руководителей, IT-команд и государственных служащих практическому применению ИИ. Выдаём дипломы государственного образца.</p>
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.15))', borderRadius: '1rem', border: '1px solid rgba(99,102,241,0.3)' }}>
              <div style={{ fontSize: '0.875rem', color: '#818cf8', fontWeight: 500, marginBottom: '0.5rem' }}>Старт 10 марта 2026</div>
              <div style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: '0.5rem' }}>ИИ: Внедрение и управление</div>
              <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Онлайн-вебинары · Диплом гос. образца</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {programs.map(p => (
              <div key={p.title} className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 600, color: '#e2e8f0' }}>{p.title}</span>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: '#94a3b8', flexShrink: 0 }}>
                  <span>{p.duration}</span>
                  <span style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', padding: '0.15rem 0.6rem', borderRadius: '1rem' }}>{p.format}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

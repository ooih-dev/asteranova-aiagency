export default function CoopWhoWeAre() {
  return (
    <section style={{ padding: '3rem 1.5rem 5rem', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="section-tag">Участники партнёрства</span>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '1rem', color: '#f1f5f9' }}>Два лидера — одна цель</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="glass-card" style={{ padding: '2.5rem', borderColor: 'rgba(6,182,212,0.2)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
          <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.5rem' }}><span className="gradient-text-cyan">AsteraNova</span></h3>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>asteranova.com</p>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            AI-driven технологическая компания. Разрабатываем продукты, которые автоматизируют сложные процессы и создают конкурентное преимущество.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { name: 'Reax', desc: 'Health Operation System — AI для здравоохранения' },
              { name: 'TradaPoll', desc: 'Prediction market AI — автоматический трейдер' },
            ].map(p => (
              <div key={p.name} style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.15)', borderRadius: '0.75rem', padding: '0.875rem 1rem' }}>
                <div style={{ fontWeight: 600, color: '#06b6d4', marginBottom: '0.25rem' }}>{p.name}</div>
                <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card" style={{ padding: '2.5rem', borderColor: 'rgba(99,102,241,0.2)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧠</div>
          <h3 style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.5rem' }}><span className="gradient-text">AI Agency</span></h3>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>aiagency.ru</p>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            8+ лет на рынке. Исследования, стратегический консалтинг и внедрение ИИ для бизнеса и государства в России, Казахстане и Европе.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {['64 проекта','120 R&D','59 партнёров','1037 выпускников'].map(s => (
              <div key={s} style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '0.75rem', padding: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontWeight: 700, color: '#818cf8', fontSize: '1rem' }}>{s.split(' ')[0]}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{s.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

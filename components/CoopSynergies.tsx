"use client"

const synergies = [
  { icon: '🏥', title: 'Reax в фармацевтике', desc: 'AI Agency внедряет Reax Health OS в фарма-компании. Готовая аудитория: клиенты курса "ИИ в фармации" + корпоративные заказчики.', color: '#06b6d4' },
  { icon: '📈', title: 'TradaPoll для финансов', desc: 'Prediction market AI через консалтинговый канал AI Agency. Финансовые организации получают готовое решение с поддержкой внедрения.', color: '#8b5cf6' },
  { icon: '🏷️', title: 'Белая метка', desc: 'AI Agency продаёт продукты AsteraNova под брендом клиентов. Rapid deployment + полная поддержка от обеих команд.', color: '#f59e0b' },
  { icon: '🔬', title: 'Совместный R&D', desc: '120 исследовательских инициатив AI Agency + AI-инженеры AsteraNova. Научные публикации, патенты, прикладные разработки.', color: '#10b981' },
  { icon: '🎓', title: 'Обучение на live-продуктах', desc: 'Курсы AI Agency включают демо Reax и TradaPoll. Выпускники видят реальный продакшн AI — не теорию.', color: '#818cf8' },
  { icon: '🏛️', title: 'Государственный сектор', desc: 'Технологии AsteraNova в госпроектах через каналы AI Agency. Клиенты: Росатом, Росстандарт, Минцифры.', color: '#f43f5e' },
]

export default function CoopSynergies() {
  return (
    <section id="синергия" style={{ padding: '5rem 1.5rem', background: 'rgba(99,102,241,0.03)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">Синергия</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '1rem', color: '#f1f5f9' }}>6 направлений сотрудничества</h2>
          <p style={{ color: '#94a3b8', marginTop: '0.75rem' }}>Где технологии AsteraNova встречаются с рынком AI Agency</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.5rem' }}>
          {synergies.map(s => (
            <div key={s.title} className="glass-card" style={{ padding: '2rem', transition: 'transform 0.2s,box-shadow 0.2s', cursor: 'default' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform='translateY(-3px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform='translateY(0)'; }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
              <h3 style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: '0.75rem' }}>{s.title}</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
              <div style={{ marginTop: '1.5rem', height: 2, background: `linear-gradient(90deg,${s.color},transparent)`, borderRadius: 2 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

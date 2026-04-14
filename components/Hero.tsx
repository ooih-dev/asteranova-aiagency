export default function Hero() {
  return (
    <section style={{ padding: '8rem 1.5rem 6rem', maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(circle,rgba(99,102,241,0.15),transparent 70%)', pointerEvents: 'none' }} />

      <span className="section-tag">8+ лет на рынке ИИ</span>
      <h1 style={{ fontSize: 'clamp(2.5rem,6vw,4rem)', fontWeight: 800, lineHeight: 1.15, margin: '1.5rem 0 1.5rem', color: '#f1f5f9' }}>
        Искусственный интеллект<br />
        <span className="gradient-text">для бизнеса и государства</span>
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: 640, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
        Объединяем исследования, стратегический консалтинг и внедрение ИИ для компаний и государственных структур в России и за рубежом.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#услуги" className="btn-primary">Наши услуги</a>
        <a href="#контакты" className="btn-outline">Связаться с нами</a>
      </div>
    </section>
  )
}

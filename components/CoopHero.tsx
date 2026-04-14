export default function CoopHero() {
  return (
    <section style={{ padding: '8rem 1.5rem 6rem', maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '40%', left: '30%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(6,182,212,0.12),transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', right: '30%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(99,102,241,0.12),transparent 70%)', pointerEvents: 'none' }} />

      <span className="section-tag">Партнёрство</span>
      <h1 style={{ fontSize: 'clamp(2.5rem,5vw,3.75rem)', fontWeight: 800, lineHeight: 1.15, margin: '1.5rem 0 1.5rem', color: '#f1f5f9' }}>
        <span className="gradient-text-cyan">AsteraNova</span>
        <span style={{ color: '#475569' }}> × </span>
        <span className="gradient-text">AI Agency</span>
      </h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 400, color: '#94a3b8', marginBottom: '1.5rem' }}>Синергия технологий нового поколения</h2>
      <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: 680, margin: '0 auto 3rem', lineHeight: 1.8 }}>
        Технологический стек AsteraNova встречается с 8-летней консалтинговой экспертизой AI Agency. Вместе мы строим AI-решения, которые работают в реальном мире.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="mailto:in@aiagency.ru" className="btn-primary">Начать сотрудничество</a>
        <a href="#синергия" className="btn-outline">Узнать больше</a>
      </div>
    </section>
  )
}

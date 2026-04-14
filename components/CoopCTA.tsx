"use client"

export default function CoopCTA() {
  return (
    <section id="контакт" style={{ padding: '5rem 1.5rem', textAlign: 'center', background: 'linear-gradient(135deg,rgba(99,102,241,0.08),rgba(16,185,129,0.06))' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <span className="section-tag">Следующий шаг</span>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginTop: '1rem', color: '#f1f5f9', lineHeight: 1.25 }}>
          Готовы обсудить партнёрство?
        </h2>
        <p style={{ color: '#94a3b8', marginTop: '1rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Мы предлагаем конкретные форматы сотрудничества — от разовых проектов до долгосрочного технологического партнёрства. Давайте найдём тот, что работает для вас.
        </p>
        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:hello@asteranova.com"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
              color: '#fff',
              fontWeight: 700,
              borderRadius: 10,
              textDecoration: 'none',
              fontSize: '0.95rem',
              letterSpacing: '0.02em',
              boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
          >
            Написать нам
          </a>
          <a
            href="https://t.me/emadex"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              background: 'transparent',
              color: '#a5b4fc',
              fontWeight: 700,
              borderRadius: 10,
              textDecoration: 'none',
              fontSize: '0.95rem',
              letterSpacing: '0.02em',
              border: '1.5px solid rgba(165,180,252,0.35)',
              transition: 'border-color 0.2s,color 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(165,180,252,0.7)'
              ;(e.currentTarget as HTMLElement).style.color = '#c7d2fe'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(165,180,252,0.35)'
              ;(e.currentTarget as HTMLElement).style.color = '#a5b4fc'
            }}
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  )
}

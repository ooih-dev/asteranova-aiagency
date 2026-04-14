"use client"

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(10,10,15,0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '0 1.5rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="/" style={{ fontWeight: 700, fontSize: '1.25rem', color: '#fff', textDecoration: 'none' }}>
          <span style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
          {' '}Agency
        </a>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Услуги','Проекты','Обучение','Команда','Партнёры','Контакты'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color='#818cf8')}
              onMouseLeave={e => (e.currentTarget.style.color='#94a3b8')}>
              {item}
            </a>
          ))}
          <a href="#контакты" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>Связаться</a>
        </div>
      </div>
    </nav>
  )
}

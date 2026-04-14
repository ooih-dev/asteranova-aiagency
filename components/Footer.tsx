export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>
          <span style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span> Agency
        </div>
        <div style={{ color: '#64748b', fontSize: '0.875rem' }}>© 2026 AI Agency. Все права защищены.</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="/cooperation" style={{ color: '#818cf8', textDecoration: 'none', fontSize: '0.875rem' }}>Партнёрство</a>
          <a href="mailto:in@aiagency.ru" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.875rem' }}>Контакты</a>
        </div>
      </div>
    </footer>
  )
}

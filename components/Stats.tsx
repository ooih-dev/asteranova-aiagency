const stats = [
  { value: '64', label: 'Реализованных проекта', suffix: '' },
  { value: '120', label: 'Исследовательских инициатив', suffix: '+' },
  { value: '59', label: 'Партнёров-соисполнителей', suffix: '' },
  { value: '1037', label: 'Обученных специалистов', suffix: '+' },
]

export default function Stats() {
  return (
    <section style={{ padding: '2rem 1.5rem 5rem', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.5rem' }}>
        {stats.map(s => (
          <div key={s.label} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              <span className="gradient-text">{s.value}{s.suffix}</span>
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

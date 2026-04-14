const clients = ['Газпром Нефть','КАМАЗ','Росстандарт','Росатом','МГУ','СПбГУ','МФТИ','Минцифры']

export default function Clients() {
  return (
    <section id="партнёры" className="section">
      <span className="section-tag">Клиенты</span>
      <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#f1f5f9' }}>Нам доверяют лидеры рынка</h2>
      <p style={{ color: '#94a3b8', marginBottom: '3rem' }}>Государственные структуры, крупнейшие корпорации, ведущие университеты.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem' }}>
        {clients.map(c => (
          <div key={c} className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', fontWeight: 600, color: '#94a3b8', fontSize: '0.95rem' }}>
            {c}
          </div>
        ))}
      </div>
    </section>
  )
}

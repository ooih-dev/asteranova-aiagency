export default function Contact() {
  return (
    <section id="контакты" style={{ padding: '5rem 1.5rem', background: 'rgba(6,182,212,0.03)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        <div>
          <span className="section-tag">Контакты</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, margin: '1rem 0 2rem', color: '#f1f5f9' }}>Обсудим ваш проект</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { icon: '📍', label: 'Адрес', value: '119049, Москва, ул. Дубнинская, 75Б, стр. 2' },
              { icon: '📞', label: 'Телефон', value: '+7 (495) 123-47-05' },
              { icon: '✉️', label: 'Email', value: 'in@aiagency.ru' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#818cf8', fontWeight: 500, marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ color: '#e2e8f0' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem' }}>
            <a href="/cooperation" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#818cf8', textDecoration: 'none', fontWeight: 500 }}>
              Партнёрство с AsteraNova →
            </a>
          </div>
        </div>
        <div className="glass-card" style={{ padding: '2rem' }}>
          <h3 style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: '1.5rem' }}>Написать нам</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Ваше имя','Email','Компания'].map(p => (
              <input key={p} placeholder={p} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: '#e2e8f0', outline: 'none', width: '100%' }} />
            ))}
            <textarea placeholder="Опишите задачу" rows={4} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: '#e2e8f0', outline: 'none', resize: 'none', width: '100%' }} />
            <a href="mailto:in@aiagency.ru" className="btn-primary" style={{ textAlign: 'center' }}>Отправить</a>
          </div>
        </div>
      </div>
    </section>
  )
}

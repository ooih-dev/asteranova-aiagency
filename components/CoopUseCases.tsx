"use client"

const cases = [
  {
    tag: 'Кейс 1',
    title: 'AI-агент для корпоративного клиента',
    problem: 'Крупная компания из базы AI Agency хочет автоматизировать обработку заявок и внутренние рабочие процессы.',
    solution: 'AsteraNova разрабатывает кастомного Ooih-агента. AI Agency упаковывает в консалтинговый продукт и берёт внедрение.',
    result: '$15K+ проект, поровну. 4–6 недель.',
    color: '#6366f1',
  },
  {
    tag: 'Кейс 2',
    title: 'Selgen для маркетингового агентства',
    problem: 'Клиент AI Agency тратит $3K/мес на фотоконтент и дизайн. Ищет AI-замену.',
    solution: 'White-label Selgen под брендом клиента. AI Agency внедряет, AsteraNova поддерживает инфраструктуру.',
    result: '$500/мес SaaS, 80/20 revenue share в пользу AI Agency.',
    color: '#f59e0b',
  },
  {
    tag: 'Кейс 3',
    title: 'DeFi-автоматизация для фонда',
    problem: 'Финансовый клиент AI Agency ищет yield-оптимизацию и on-chain автоматизацию.',
    solution: 'Ditto Network SDK + ZeroDev smart accounts. AI Agency делает пресейл, AsteraNova — техническое решение.',
    result: 'Институциональный контракт $25K+. Совместный референс-кейс.',
    color: '#10b981',
  },
]

export default function CoopUseCases() {
  return (
    <section id="кейсы" style={{ padding: '5rem 1.5rem', background: 'rgba(0,0,0,0.2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">Кейсы</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '1rem', color: '#f1f5f9' }}>Как это выглядит на практике</h2>
          <p style={{ color: '#94a3b8', marginTop: '0.75rem' }}>Конкретные сценарии сотрудничества с цифрами</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {cases.map((c, i) => (
            <div key={i} className="glass-card" style={{ padding: '2rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', alignItems: 'start' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.color }}>{c.tag}</span>
                <h3 style={{ fontWeight: 700, color: '#f1f5f9', marginTop: '0.5rem', fontSize: '1.1rem' }}>{c.title}</h3>
                <p style={{ color: '#94a3b8', marginTop: '0.75rem', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  <strong style={{ color: '#cbd5e1' }}>Задача:</strong> {c.problem}
                </p>
              </div>
              <div>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginTop: '1.5rem' }}>
                  <strong style={{ color: '#cbd5e1' }}>Решение:</strong> {c.solution}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <div style={{ background: `linear-gradient(135deg,${c.color}22,${c.color}11)`, border: `1px solid ${c.color}44`, borderRadius: 12, padding: '1rem 1.5rem', width: '100%' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: c.color, marginBottom: '0.25rem' }}>Результат</div>
                  <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.95rem' }}>{c.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Contacts() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-display text-sm font-semibold tracking-wider uppercase mb-3">Контакты</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">У вас есть вопросы?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <p className="text-sm text-muted mb-1">Электронная почта</p>
            <a href="mailto:in@aiagency.ru" className="text-accent font-display font-semibold hover:text-accent-hover transition-colors">in@aiagency.ru</a>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <p className="text-sm text-muted mb-1">Телефон</p>
            <a href="tel:+74951234705" className="text-accent font-display font-semibold hover:text-accent-hover transition-colors">+7 (495) 123-47-05</a>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <p className="text-sm text-muted mb-1">Адрес</p>
            <p className="text-accent font-display font-semibold text-sm">г. Москва, Дубнинская 75Б, стр. 2</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://t.me/Aiagency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-bg font-display font-semibold rounded-lg hover:bg-accent-hover transition-all duration-300"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

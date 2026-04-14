import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Контакты — AI Agency",
  description: "Свяжитесь с Агентством Искусственного Интеллекта. Москва, Дубнинская 75Б.",
};

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <p className="text-accent font-display text-sm font-semibold tracking-wider uppercase mb-3">Контакты</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-6">Свяжитесь с нами</h1>
              <p className="text-lg text-muted leading-relaxed">
                Мы готовы обсудить ваш проект и подготовить предложение.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="font-display font-bold text-text mb-4">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <div>
                        <p className="text-sm text-muted">Адрес центрального офиса</p>
                        <p className="text-text">127591, г. Москва, Дубнинская ул., дом 75Б, строение 2, офис 10</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      <div>
                        <p className="text-sm text-muted">Телефон</p>
                        <a href="tel:+74951234705" className="text-accent hover:text-accent-hover transition-colors">+7 (495) 123-47-05</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <div>
                        <p className="text-sm text-muted">Электронная почта</p>
                        <a href="mailto:in@aiagency.ru" className="text-accent hover:text-accent-hover transition-colors">in@aiagency.ru</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                      <div>
                        <p className="text-sm text-muted">Telegram</p>
                        <a href="https://t.me/Aiagency" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors">@Aiagency</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h3 className="font-display font-bold text-text mb-4">Реквизиты</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-text">ООО &laquo;АГЕНТСТВО ИСКУССТВЕННОГО ИНТЕЛЛЕКТА&raquo;</p>
                    <div className="grid grid-cols-2 gap-2 text-muted">
                      <div>ИНН: 7713478427</div>
                      <div>КПП: 771301001</div>
                      <div>ОГРН: 1207700404240</div>
                      <div>Р/с: 40702810901600010073</div>
                    </div>
                    <p className="text-muted">Банк: АО &laquo;АЛЬФА-БАНК&raquo; (БИК: 044525593)</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="glass-card p-8">
                <h3 className="font-display text-xl font-bold text-text mb-6">Отправить запрос</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Имя</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent transition-colors" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent transition-colors" placeholder="email@company.ru" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Компания</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent transition-colors" placeholder="Название компании" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-1.5">Сообщение</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Расскажите о вашем проекте или задаче" />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-accent text-bg font-display font-semibold rounded-lg hover:bg-accent-hover transition-all duration-300">
                    Отправить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

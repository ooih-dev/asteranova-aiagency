import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Партнёрство — AsteraNova x AI Agency",
  description: "Объединяем продуктовую экспертизу AsteraNova с консалтинговой мощью AI Agency.",
};

const asteranovaOffers = [
  {
    title: "Ooih AI Agent",
    description: "Автономный ИИ-ассистент для бизнеса: Telegram-бот, управление задачами, мультипроектные операции. Готовый продукт для ваших клиентов.",
    details: ["Интеграция за 2 недели", "Telegram + Web интерфейс", "Мультиязычность (RU/EN)", "Управление задачами и проектами"],
  },
  {
    title: "Selgen",
    description: "ИИ-платформа генерации изображений для маркетинга и контента. От баннеров до полноценных рекламных креативов.",
    details: ["Генерация по текстовому описанию", "Фирменный стиль и брендинг", "Пакетная генерация контента", "API для интеграции"],
  },
  {
    title: "Разработка ИИ-продуктов",
    description: "Проектирование и создание кастомных ИИ-решений под конкретные бизнес-задачи клиентов.",
    details: ["NLP и диалоговые системы", "Компьютерное зрение", "Рекомендательные системы", "Автоматизация бизнес-процессов"],
  },
  {
    title: "Web3 / On-chain AI",
    description: "Ditto Network — автоматизация смарт-контрактов и workflow на блокчейне. Новый рынок для ИИ-решений.",
    details: ["Автоматизация DeFi-процессов", "Смарт-контракт оркестрация", "Кросс-чейн операции", "ИИ + блокчейн решения"],
  },
];

const aiagencyBrings = [
  { title: "Стратегический консалтинг", description: "Экспертиза в оценке ИИ-зрелости и построении дорожных карт трансформации для крупных заказчиков." },
  { title: "Научная экспертиза", description: "120+ научных исследований, 15 ГОСТов — репутация и экспертиза на уровне государственных стандартов." },
  { title: "Клиентская сеть", description: "Газпром Нефть, КамАЗ, Росатом, государственные структуры — доступ к enterprise-заказчикам." },
  { title: "Образовательная платформа", description: "11 программ обучения, 1037+ выпускников — канал для продвижения совместных решений." },
];

const cooperationModels = [
  { title: "White-label", subtitle: "Наши продукты — ваш бренд", description: "AI Agency продаёт Ooih, Selgen и кастомные решения AsteraNova под своим брендом. Мы обеспечиваем техподдержку и обновления." },
  { title: "Revenue Share", subtitle: "Совместные сделки", description: "Общие коммерческие предложения для enterprise-клиентов. Распределение выручки по вкладу каждой стороны." },
  { title: "Joint Pitch", subtitle: "Комбинированные предложения", description: "Совместные тендерные заявки и презентации. Стратегия AI Agency + продукты AsteraNova = полное покрытие." },
  { title: "Техническая интеграция", subtitle: "Наши инструменты внутри", description: "AI Agency использует Ooih и Selgen как внутренние инструменты для своих проектов и клиентов." },
];

export default function PartnershipPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-accent/10" />
            <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border border-border/30" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-muted text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Партнёрское предложение
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6">
              <span className="text-accent">asteranova.com</span>
              <span className="mx-4 text-muted/30">&times;</span>
              <span className="text-text">aiagency.ru</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-10">
              Объединяем продуктовую экспертизу AsteraNova в области ИИ-агентов,
              генеративных моделей и Web3 с консалтинговой мощью и клиентской сетью AI Agency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#models" className="px-8 py-3.5 bg-accent text-bg font-display font-semibold rounded-lg hover:bg-accent-hover transition-all duration-300">
                Модели сотрудничества
              </a>
              <a href="#contact" className="px-8 py-3.5 border border-border text-text font-display font-semibold rounded-lg hover:border-accent hover:text-accent transition-all duration-300">
                Обсудить партнёрство
              </a>
            </div>
          </div>
        </section>

        {/* What AsteraNova brings */}
        <section className="section-padding bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-4">Что привносит AsteraNova</h2>
              <p className="text-muted max-w-2xl mx-auto">Готовые ИИ-продукты и технологическая экспертиза для расширения портфеля услуг AI Agency</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {asteranovaOffers.map((offer) => (
                <div key={offer.title} className="glass-card p-8 hover:border-accent/30 transition-all duration-300 group">
                  <h3 className="font-display text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">{offer.title}</h3>
                  <p className="text-muted text-sm mb-5">{offer.description}</p>
                  <ul className="space-y-2">
                    {offer.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What AI Agency brings */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-4">Что привносит AI Agency</h2>
              <p className="text-muted max-w-2xl mx-auto">Стратегическая экспертиза, научная база и сеть enterprise-клиентов</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {aiagencyBrings.map((item) => (
                <div key={item.title} className="glass-card p-8 hover:border-accent/30 transition-all duration-300">
                  <h3 className="font-display text-lg font-bold text-text mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Synergy */}
        <section className="section-padding bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Синергия</h2>
            </div>
            <div className="glass-card p-8 sm:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="font-display text-2xl font-bold text-accent mb-2">AsteraNova</div>
                  <p className="text-sm text-muted">Продукты: Ooih, Selgen, Web3</p>
                  <p className="text-sm text-muted">Технологии: AI Agents, GenAI</p>
                  <p className="text-sm text-muted">Скорость: MVP за 2 недели</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <span className="text-accent text-2xl font-bold">+</span>
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-text mb-2">AI Agency</div>
                  <p className="text-sm text-muted">Клиенты: Газпром, Росатом</p>
                  <p className="text-sm text-muted">Экспертиза: 64 проекта, 15 ГОСТов</p>
                  <p className="text-sm text-muted">Обучение: 1037+ специалистов</p>
                </div>
              </div>
              <div className="mt-10 text-center">
                <div className="inline-block glass-card px-8 py-4">
                  <p className="font-display text-lg font-bold text-accent">= Полный цикл ИИ-трансформации</p>
                  <p className="text-sm text-muted mt-1">От стратегии и аудита до готовых ИИ-продуктов и обучения команд</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Models */}
        <section id="models" className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-4">Модели сотрудничества</h2>
              <p className="text-muted max-w-2xl mx-auto">Гибкие форматы партнёрства — от white-label до совместных тендеров</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {cooperationModels.map((model) => (
                <div key={model.title} className="glass-card overflow-hidden hover:border-accent/30 transition-all duration-300 group">
                  <div className="h-1 bg-accent/40 group-hover:bg-accent transition-colors duration-300" />
                  <div className="p-8">
                    <h3 className="font-display text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">{model.title}</h3>
                    <p className="text-sm text-accent/70 mb-3">{model.subtitle}</p>
                    <p className="text-muted text-sm leading-relaxed">{model.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-4">Следующий шаг</h2>
            <p className="text-muted mb-10">
              Давайте обсудим конкретные форматы сотрудничества. Мы готовы провести демо наших продуктов и подготовить пилотное предложение.
            </p>
            <div className="glass-card p-8">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Ваше имя" className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent transition-colors" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <input type="text" placeholder="Компания и должность" className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent transition-colors" />
                <textarea placeholder="Какой формат сотрудничества вас интересует?" rows={4} className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent transition-colors resize-none" />
                <button type="submit" className="w-full py-3.5 bg-accent text-bg font-display font-semibold rounded-lg hover:bg-accent-hover transition-all duration-300">
                  Назначить встречу
                </button>
              </form>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted">
                <span>Или напишите напрямую:</span>
                <a href="mailto:hello@asteranova.com" className="text-accent font-semibold hover:text-accent-hover transition-colors">hello@asteranova.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

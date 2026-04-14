import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Обучение — AI Agency",
  description: "Курсы и программы повышения квалификации в области ИИ для руководителей, госслужащих и специалистов.",
};

const courses = [
  {
    title: "Введение в ИИ и нейронные сети для руководителей",
    audience: "Корпоративные клиенты",
    duration: "4-16 академических часов, 3 модуля",
    format: "Очно, онлайн или комбинированный",
    efficiency: "+20-30%",
    description: "Типы ИИ, генеративные модели (GPT, Stable Diffusion), автоматизация без рисков. Практические занятия и мастер-классы.",
    result: "Сертификат + рекомендации по внедрению",
  },
  {
    title: "ИИ в государственном управлении",
    audience: "Госслужащие, представители органов власти",
    duration: "4-16 академических часов",
    format: "Программа повышения квалификации",
    efficiency: "+30-35%",
    description: "Применение ИИ в социальной поддержке, транспорте, здравоохранении и образовании. Минимизация рисков, безопасность данных, отечественные решения.",
    result: "Удостоверение государственного образца",
  },
  {
    title: "ИИ и генеративные модели в образовании",
    audience: "Преподаватели, методисты, администрация ОО",
    duration: "4-16 академических часов",
    format: "Программа повышения квалификации",
    efficiency: "+20-30%",
    description: "Создание учебных материалов, промпт-инжиниринг, анализ успеваемости. Готовые шаблоны и скрипты.",
    result: "Практические навыки работы с GenAI",
  },
  {
    title: "Программа внедрения ИИ для корпоративных команд",
    audience: "Закупки, HR, маркетинг, юриспруденция, аудит",
    duration: "4-16 академических часов",
    format: "Корпоративная программа",
    efficiency: "+25-35%",
    description: "Прогнозирование цен, создание контента, анализ документов. Практика на реальных задачах компании.",
    result: "Внедрение ИИ в рабочие процессы",
  },
  {
    title: "Искусственный интеллект в фармацевтике",
    audience: "Специалисты R&D, производства, маркетинга, HR",
    duration: "4-16 академических часов",
    format: "Специализированная программа",
    efficiency: "+25-40%",
    description: "Регуляторные требования, контроль качества, R&D. Практика на реальных данных, оценка рисков ИИ.",
    result: "Отраслевая экспертиза в ИИ",
  },
];

const features = [
  { title: "80-90% практики", description: "Воркшопы, разбор кейсов, готовые шаблоны" },
  { title: "Индивидуальная адаптация", description: "Программа под задачи вашей компании" },
  { title: "Бессрочная поддержка", description: "Консультационная поддержка экспертов" },
  { title: "Государственная лицензия", description: "Лицензия № Л035-01298-77/01264001" },
];

export default function EducationPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <p className="text-accent font-display text-sm font-semibold tracking-wider uppercase mb-3">Обучение</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-6">Учебный центр АИИ</h1>
              <p className="text-lg text-muted leading-relaxed">
                Мост между технологиями и бизнесом, где теории мы предпочитаем рабочие инструменты,
                а общим знаниям — измеримые результаты. Более 1037 обучившихся специалистов.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {features.map((f) => (
                <div key={f.title} className="glass-card p-5">
                  <h3 className="font-display font-bold text-accent text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-muted">{f.description}</p>
                </div>
              ))}
            </div>

            {/* Courses */}
            <div className="space-y-6">
              {courses.map((c, i) => (
                <div key={c.title} className="glass-card p-6 sm:p-8 hover:border-accent/30 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <span className="font-display text-4xl font-bold text-accent/20 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h2 className="font-display text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                        {c.title}
                      </h2>
                      <p className="text-muted text-sm leading-relaxed mb-4">{c.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        <div className="text-muted"><span className="text-text/60">Аудитория:</span> {c.audience}</div>
                        <div className="text-muted"><span className="text-text/60">Длительность:</span> {c.duration}</div>
                        <div className="text-muted"><span className="text-text/60">Формат:</span> {c.format}</div>
                        <div className="text-muted"><span className="text-text/60">Результат:</span> {c.result}</div>
                      </div>
                    </div>
                    <div className="shrink-0 px-5 py-3 bg-accent/10 rounded-lg text-center">
                      <span className="font-display font-bold text-accent text-lg">{c.efficiency}</span>
                      <p className="text-xs text-muted mt-0.5">эффективность</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 glass-card p-8 sm:p-10 text-center">
              <h2 className="font-display text-2xl font-bold text-text mb-3">
                Нужен курс под задачи вашей компании?
              </h2>
              <p className="text-muted mb-6">
                Мы разрабатываем индивидуальные программы обучения. Свяжитесь с нами для обсуждения.
              </p>
              <a href="mailto:in@aiagency.ru" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-bg font-display font-semibold rounded-lg hover:bg-accent-hover transition-all duration-300">
                Написать нам
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

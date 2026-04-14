import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Команда — AI Agency",
  description: "Руководство и специалисты Агентства Искусственного Интеллекта.",
};

const leadership = [
  {
    name: "Денис Онацик",
    role: "Генеральный директор",
    initials: "ДО",
    description: "Управляет стратегией компании, курирует ВЭД и сотрудничество с госкорпорациями. Кандидат экономических наук.",
  },
  {
    name: "Сандра Фадеева",
    role: "Заместитель генерального директора",
    initials: "СФ",
    description: "Руководит отделом аналитики продуктов и сервисов в проектах, отвечает за коммуникации с партнёрами и подрядчиками.",
  },
  {
    name: "Ольга Волкова",
    role: "Исполнительный директор",
    initials: "ОВ",
    description: "Отвечает за операционное управление, продажи и развитие компании, контролирует выполнение и реализацию планов организации.",
  },
  {
    name: "Кирилл Онацик",
    role: "Директор по маркетингу",
    initials: "КО",
    description: "Руководит отделом маркетинга, отвечает за креативные концепции и механики в проектах, занимается развитием бренда и продуктов.",
  },
  {
    name: "Пётр Маслак",
    role: "Технический директор",
    initials: "ПМ",
    description: "Руководит проектной разработкой и внедрением цифровых технологий, обеспечивает цифровую трансформацию и работу с подрядчиками.",
  },
];

const specialists = [
  {
    name: "Олег Белоусов",
    role: "Руководитель разработки",
    initials: "ОБ",
    description: "Разрабатывает и внедряет IT-продукты на базе ИИ, облачных платформ и анализа больших данных.",
  },
  {
    name: "Дмитрий Чертов",
    role: "Аналитик",
    initials: "ДЧ",
    description: "Эксперт проектов в сфере ИИ. Специализируется на исследовании рынка, систематизации данных и внедрении ИИ-решений в бизнес-процессы.",
  },
  {
    name: "Анастасия Бушкова",
    role: "Юрист-консультант",
    initials: "АБ",
    description: "Обеспечивает юридическое сопровождение проектов и договоров, правовую защиту и работу с документацией в различных юрисдикциях.",
  },
  {
    name: "Елена Балуева",
    role: "Финансовый аналитик",
    initials: "ЕБ",
    description: "Отвечает за финансовый анализ, бухгалтерский отчёт и экономическую эффективность проектов, курирует работу с фондами и госорганами.",
  },
];

function TeamCard({ member }: { member: typeof leadership[0] }) {
  return (
    <div className="glass-card p-6 hover:border-accent/30 transition-all duration-300 group">
      <div className="flex items-start gap-5">
        <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
          <span className="font-display font-bold text-accent text-lg">{member.initials}</span>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-text group-hover:text-accent transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-sm text-accent/70 mb-2">{member.role}</p>
          <p className="text-sm text-muted leading-relaxed">{member.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <p className="text-accent font-display text-sm font-semibold tracking-wider uppercase mb-3">Команда</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-6">Наша команда</h1>
              <p className="text-lg text-muted leading-relaxed">
                Профессионалы с опытом в ИИ, стратегическом консалтинге, разработке и научных исследованиях.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="font-display text-2xl font-bold text-text mb-8">Руководство</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {leadership.map((m) => (
                  <TeamCard key={m.name} member={m} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-text mb-8">Специалисты</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {specialists.map((m) => (
                  <TeamCard key={m.name} member={m} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

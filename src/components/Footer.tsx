import Link from "next/link";

const siteLinks = [
  { href: "/services", label: "Услуги" },
  { href: "/projects", label: "Проекты" },
  { href: "/education", label: "Обучение" },
  { href: "/team", label: "Команда" },
  { href: "/materials", label: "Материалы" },
  { href: "/contacts", label: "Контакты" },
  { href: "/partnership", label: "Партнёрство" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-bg font-display font-bold text-sm">AI</span>
              </div>
              <span className="font-display font-bold text-lg text-text">AI Agency</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              АИИ — российская компания, сочетающая научные исследования,
              консалтинг и внедрение ИИ для бизнеса и государства.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-text mb-4">Разделы</h4>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display font-bold text-text mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="mailto:in@aiagency.ru" className="hover:text-accent transition-colors">in@aiagency.ru</a>
              </li>
              <li>
                <a href="tel:+74951234705" className="hover:text-accent transition-colors">+7 (495) 123-47-05</a>
              </li>
              <li>г. Москва, Дубнинская 75Б, стр. 2</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-text mb-4">Мы в сети</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="https://t.me/Aiagency" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Telegram</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCqGN68SLzcouaOcqqUvQXPA/videos" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">YouTube</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; 2020&ndash;2026 ООО &laquo;Агентство Искусственного Интеллекта&raquo;
          </p>
          <p className="text-xs text-muted">
            ИНН 7713478427 &middot; ОГРН 1207700404240
          </p>
        </div>
      </div>
    </footer>
  );
}

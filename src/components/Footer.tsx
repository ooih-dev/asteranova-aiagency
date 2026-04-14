"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="gradient-bg text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-lg">AI Agency</span>
            </div>
            <p className="text-blue-200/60 text-sm leading-relaxed">
              Проектирование и внедрение интеллектуальных систем для бизнеса и
              государства.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-blue-200/60">
              <li><a href="#services" className="hover:text-white transition">Интеллектуальные системы</a></li>
              <li><a href="#services" className="hover:text-white transition">Научные исследования</a></li>
              <li><a href="#training" className="hover:text-white transition">Обучение</a></li>
              <li><a href="#services" className="hover:text-white transition">Консалтинг</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-blue-200/60">
              <li><a href="#team" className="hover:text-white transition">Команда</a></li>
              <li><a href="#projects" className="hover:text-white transition">Проекты</a></li>
              <li><a href="#partners" className="hover:text-white transition">Партнёры</a></li>
              <li><Link href="/partnership" className="hover:text-white transition">Партнёрство с AsteraNova</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-blue-200/60">
              <li>+7 (495) 123-47-05</li>
              <li>in@aiagency.ru</li>
              <li>Москва, Дубнинская 75Б, корп. 2</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-200/40">
            &copy; 2026 AI Agency. Все права защищены.
          </p>
          <p className="text-sm text-blue-200/40">
            Сайт-демонстрация для партнёрского предложения
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useMemo, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, CarFront, Check,
  ChevronDown, ChevronRight, CircleHelp, Heart, Home, Laptop, Menu,
  Search, ShieldCheck, Shirt, SlidersHorizontal, Sparkles, Store,
  Wrench, X
} from "lucide-react";

const categories = [
  { name: "Электроника", detail: "Телефоны, ноутбуки, техника", icon: Laptop, count: "12 480 запросов" },
  { name: "Автомобили", detail: "Новые и с пробегом", icon: CarFront, count: "8 210 запросов" },
  { name: "Недвижимость", detail: "Квартиры, дома, участки", icon: Home, count: "5 630 запросов" },
  { name: "Одежда", detail: "Для взрослых и детей", icon: Shirt, count: "3 940 запросов" },
  { name: "Услуги", detail: "Мастера и специалисты", icon: Wrench, count: "7 120 запросов" },
  { name: "Для дома", detail: "Мебель, ремонт, интерьер", icon: Store, count: "4 870 запросов" },
];

const requests = [
  { category: "Электроника", title: "iPhone 17 Pro, 256 ГБ", note: "Новый, любой цвет. Желательно с гарантией", budget: "до 115 000 ₽", offers: 8, time: "12 минут назад", icon: Laptop, tag: "Популярное" },
  { category: "Автомобили", title: "Toyota Camry 2022–2024", note: "Без серьёзных ДТП, до 50 000 км", budget: "до 3 800 000 ₽", offers: 5, time: "28 минут назад", icon: CarFront, tag: "" },
  { category: "Для дома", title: "Диван угловой, современный", note: "Светлый цвет, доставка в Москву", budget: "до 140 000 ₽", offers: 3, time: "41 минуту назад", icon: Home, tag: "" },
];

const steps = [
  { n: "01", title: "Опишите, что вам нужно", text: "Укажите товар или услугу, желаемую цену и важные детали." },
  { n: "02", title: "Получите предложения", text: "Продавцы сами найдут ваш запрос и предложат свои варианты." },
  { n: "03", title: "Сравните и выберите", text: "Смотрите цены и условия в одном месте. Решение всегда за вами." },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [saved, setSaved] = useState<number[]>([]);
  const filtered = useMemo(() => requests.filter((r) =>
    (activeCategory === "Все" || r.category === activeCategory) &&
    (r.title + " " + r.note).toLowerCase().includes(query.toLowerCase())
  ), [activeCategory, query]);

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="relative z-20 border-b border-[#e9eee9] bg-white/90 backdrop-blur">
        <div className="container-main flex h-[76px] items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#187a49] text-white shadow-sm"><span className="text-[22px] font-black">н</span></span>
            <span className="text-[25px] font-extrabold tracking-[-1.3px]">надо<span className="text-[#23945b]">.</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-[14px] font-medium text-[#52615a] md:flex">
            <a className="transition hover:text-[#187a49]" href="#requests">Запросы</a>
            <a className="transition hover:text-[#187a49]" href="#categories">Категории</a>
            <a className="transition hover:text-[#187a49]" href="#how">Как это работает</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <span className="px-4 py-2.5 text-sm font-semibold text-[#8a978f]">Вход скоро</span>
            <button onClick={() => setShowRequest(true)} className="rounded-xl bg-[#187a49] px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(24,122,73,.18)] transition hover:bg-[#12613a]">Создать запрос <ArrowUpRight className="ml-1 inline" size={16}/></button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl border border-[#e5ebe6] p-2.5 md:hidden" aria-label="Открыть меню">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
        {menuOpen && <div className="container-main flex flex-col gap-4 border-t border-[#edf1ed] py-5 text-sm md:hidden"><a href="#requests" onClick={() => setMenuOpen(false)}>Запросы</a><a href="#categories" onClick={() => setMenuOpen(false)}>Категории</a><a href="#how" onClick={() => setMenuOpen(false)}>Как это работает</a><button onClick={() => setShowRequest(true)} className="rounded-xl bg-[#187a49] px-4 py-3 font-semibold text-white">Создать запрос</button></div>}
      </header>

      <section className="hero-glow relative">
        <div className="pointer-events-none absolute inset-0 opacity-50 grid-dots [mask-image:linear-gradient(to_bottom,black,transparent_78%)]"/>
        <div className="container-main relative grid min-h-[590px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div className="max-w-[610px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8e9dc] bg-white/80 px-3.5 py-2 text-[12px] font-semibold text-[#187a49] shadow-sm"><Sparkles size={14}/> Покупайте на своих условиях</div>
            <h1 className="text-[42px] font-extrabold leading-[1.08] tracking-[-2.5px] text-[#17231f] sm:text-[56px] lg:text-[64px]">Не ищите сами.<br/><span className="text-[#23945b]">Пусть найдут вас.</span></h1>
            <p className="mt-6 max-w-[490px] text-[17px] leading-8 text-[#65736b]">Расскажите, что вам нужно. Магазины и продавцы сами пришлют предложения — останется сравнить и выбрать лучшее.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => setShowRequest(true)} className="rounded-2xl bg-[#187a49] px-7 py-4 text-[15px] font-bold text-white shadow-[0_12px_26px_rgba(24,122,73,.2)] transition hover:-translate-y-0.5 hover:bg-[#12613a]">Создать запрос <ArrowRight className="ml-2 inline" size={17}/></button>
              <a href="#requests" className="rounded-2xl border border-[#dce6de] bg-white/80 px-7 py-4 text-center text-[15px] font-semibold text-[#34443a] transition hover:bg-white">Смотреть запросы</a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-[#718078]">
              <span className="flex items-center gap-2"><Check size={15} className="text-[#23945b]"/> Бесплатно для покупателей</span>
              <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#23945b]"/> Вы контролируете выбор</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[490px] lg:ml-auto">
            <div className="absolute -right-8 -top-7 h-36 w-36 rounded-full bg-[#cdebd5] blur-3xl"/>
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#dcefe1] blur-3xl"/>
            <div className="relative rounded-[28px] border border-white bg-white/90 p-5 shadow-[0_28px_80px_rgba(25,72,43,.13)] backdrop-blur sm:p-7">
              <div className="flex items-center justify-between">
                <div><div className="text-[12px] font-medium text-[#829087]">Ваш запрос</div><div className="mt-1 text-[19px] font-bold tracking-[-.5px]">Что вы ищете?</div></div>
                <span className="rounded-xl bg-[#eff8f2] p-3 text-[#23945b]"><Search size={21}/></span>
              </div>
              <div className="mt-6 rounded-2xl border border-[#e5ece6] bg-[#fbfcfb] p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[.08em] text-[#98a39c]">Название товара или услуги</div>
                <div className="mt-2 text-[15px] font-semibold text-[#26352d]">Например, iPhone 17 Pro</div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[#e5ece6] p-4"><div className="text-[11px] text-[#98a39c]">Ваш бюджет</div><div className="mt-2 font-bold">До 100 000 ₽</div></div>
                <div className="rounded-2xl border border-[#e5ece6] p-4"><div className="text-[11px] text-[#98a39c]">Категория</div><div className="mt-2 font-bold">Электроника</div></div>
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#eff8f2] p-4">
                <div><div className="text-[13px] font-bold text-[#17633c]">Продавцы увидят запрос</div><div className="mt-1 text-[11px] text-[#65806e]">И смогут предложить свои варианты</div></div>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#23945b]"><ArrowUpRight size={18}/></div>
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-[#edf1ed] pt-5">
                <div className="flex -space-x-2">{["А","М","С"].map((x,i)=><div key={x} className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-[#e0f0e5] text-[11px] font-bold text-[#237448]" style={{backgroundColor:["#e0f0e5","#f5e9d8","#e5eafa"][i]}}>{x}</div>)}</div>
                <p className="text-[11px] text-[#7b8981]">Несколько продавцов могут откликнуться на один запрос</p>
              </div>
            </div>
            <div className="absolute -left-9 top-[34%] hidden items-center gap-3 rounded-2xl border border-[#e8eee9] bg-white p-3.5 shadow-[0_12px_30px_rgba(25,72,43,.1)] sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#eff8f2] text-[#23945b]"><BadgeCheck size={19}/></span>
              <div><div className="text-[12px] font-bold">Новое предложение!</div><div className="mt-1 text-[10px] text-[#87938c]">Продавец ответил на запрос</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#edf1ed] bg-white py-5">
        <div className="container-main grid grid-cols-2 gap-5 sm:grid-cols-4">
          {[["Один запрос","вместо десятков поисков"],["Предложения","от разных продавцов"],["Сравнение","цен и условий"],["Ваш выбор","без давления"]].map(([a,b])=><div key={a} className="flex flex-col items-center text-center sm:flex-row sm:justify-center sm:gap-3 sm:text-left"><div className="text-[14px] font-extrabold text-[#187a49]">{a}</div><div className="mt-1 text-[11px] text-[#87938c] sm:mt-0">{b}</div></div>)}
        </div>
      </section>

      <section id="categories" className="container-main py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><div className="text-[12px] font-bold uppercase tracking-[.12em] text-[#23945b]">Категории</div><h2 className="mt-3 text-[32px] font-extrabold tracking-[-1.3px] sm:text-[40px]">Что вам нужно найти?</h2><p className="mt-3 text-[15px] text-[#718078]">От повседневных покупок до крупных приобретений.</p></div>
          <a href="#requests" className="text-[13px] font-bold text-[#187a49] hover:underline">Все категории <ArrowRight className="ml-1 inline" size={15}/></a>
        </div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({name,detail,icon:Icon,count})=><button key={name} onClick={()=>{setActiveCategory(name);document.getElementById("requests")?.scrollIntoView({behavior:"smooth"});}} className="group flex items-center gap-4 rounded-[20px] border border-[#e8eee9] bg-white p-5 text-left transition hover:-translate-y-1 hover:border-[#c7e3cf] hover:shadow-soft">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#eff8f2] text-[#23945b] transition group-hover:bg-[#187a49] group-hover:text-white"><Icon size={22}/></span>
            <span className="min-w-0 flex-1"><span className="block font-bold text-[#25342b]">{name}</span><span className="mt-1 block text-[12px] text-[#87938c]">{detail}</span><span className="mt-2 block text-[10px] font-semibold text-[#23945b]">{count}</span></span>
            <ChevronRight size={18} className="text-[#aab5ad] transition group-hover:translate-x-1 group-hover:text-[#23945b]"/>
          </button>)}
        </div>
      </section>

      <section id="requests" className="bg-white py-20">
        <div className="container-main">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><div className="text-[12px] font-bold uppercase tracking-[.12em] text-[#23945b]">Живые запросы</div><h2 className="mt-3 text-[32px] font-extrabold tracking-[-1.3px] sm:text-[40px]">Что ищут покупатели</h2><p className="mt-3 text-[15px] text-[#718078]">Примеры запросов, на которые продавцы могут откликнуться.</p></div>
            <button onClick={()=>setShowRequest(true)} className="rounded-xl border border-[#dce8df] px-4 py-3 text-[13px] font-bold text-[#187a49] transition hover:bg-[#eff8f2]">Разместить свой запрос <ArrowUpRight className="ml-1 inline" size={15}/></button>
          </div>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
            {["Все",...categories.map(c=>c.name)].map(c=><button key={c} onClick={()=>setActiveCategory(c)} className={`rounded-full px-4 py-2.5 text-[12px] font-semibold transition ${activeCategory===c?"bg-[#187a49] text-white":"border border-[#e5ebe6] bg-white text-[#647169] hover:border-[#bcdcc6]"}`}>{c}</button>)}
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {filtered.length ? filtered.map((r,i)=><article key={r.title} className="request-card rounded-[22px] border border-[#e8eee9] bg-white p-5">
              <div className="flex items-center justify-between"><span className="rounded-full bg-[#eff8f2] px-3 py-1.5 text-[10px] font-bold text-[#21804d]">{r.category}</span><button onClick={()=>setSaved(s=>s.includes(i)?s.filter(x=>x!==i):[...s,i])} aria-label="Сохранить запрос" className="rounded-full p-2 text-[#9aa69e] hover:bg-[#f4f7f4] hover:text-[#23945b]">{saved.includes(i)?<Heart size={17} fill="currentColor"/>:<Heart size={17}/>}</button></div>
              <h3 className="mt-5 text-[19px] font-extrabold tracking-[-.5px]">{r.title}</h3><p className="mt-2 min-h-[42px] text-[12px] leading-6 text-[#7b8981]">{r.note}</p>
              <div className="mt-5 rounded-xl bg-[#f7faf7] p-3.5"><div className="text-[10px] text-[#91a097]">Желаемый бюджет</div><div className="mt-1 text-[18px] font-extrabold text-[#187a49]">{r.budget}</div></div>
              <div className="mt-4 flex items-center justify-between border-t border-[#edf1ed] pt-4 text-[11px] text-[#89958e]"><span>{r.time}</span><span className="font-semibold text-[#52645a]">{r.offers} предложений</span></div>
              <button onClick={()=>setShowRequest(true)} className="mt-4 w-full rounded-xl border border-[#dce8df] py-3 text-[12px] font-bold text-[#187a49] transition hover:bg-[#eff8f2]">Предложить вариант <ArrowRight className="ml-1 inline" size={14}/></button>
            </article>):<div className="col-span-full rounded-2xl border border-dashed border-[#dce8df] p-10 text-center text-sm text-[#718078]">По этой категории пока нет демонстрационных запросов.</div>}
          </div>
          <p className="mt-5 text-[11px] text-[#9aa69e]">Запросы на этой странице демонстрационные — реальные предложения появятся после запуска платформы.</p>
        </div>
      </section>

      <section id="how" className="container-main py-20">
        <div className="mx-auto max-w-[620px] text-center"><div className="text-[12px] font-bold uppercase tracking-[.12em] text-[#23945b]">Просто и удобно</div><h2 className="mt-3 text-[32px] font-extrabold tracking-[-1.3px] sm:text-[40px]">Покупка начинается с вашего запроса</h2><p className="mt-4 text-[15px] leading-7 text-[#718078]">Вместо того чтобы обходить десятки магазинов, дайте продавцам возможность самим предложить вам подходящий вариант.</p></div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">{steps.map(s=><div key={s.n} className="relative rounded-[22px] border border-[#e8eee9] bg-white p-7"><div className="text-[34px] font-black tracking-[-2px] text-[#c8e5d0]">{s.n}</div><h3 className="mt-5 text-[18px] font-extrabold">{s.title}</h3><p className="mt-3 text-[13px] leading-6 text-[#7b8981]">{s.text}</p></div>)}</div>
      </section>

      <section className="container-main pb-20">
        <div className="relative overflow-hidden rounded-[28px] bg-[#176b40] px-7 py-12 text-white sm:px-12 sm:py-14">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[50px] border-white/5"/>
          <div className="absolute -bottom-36 right-[28%] h-72 w-72 rounded-full bg-[#23945b] opacity-40 blur-3xl"/>
          <div className="relative max-w-[600px]"><div className="text-[11px] font-bold uppercase tracking-[.15em] text-[#b8e5c8]">Начните с одного запроса</div><h2 className="mt-4 text-[32px] font-extrabold leading-tight tracking-[-1.2px] sm:text-[42px]">Возможно, нужное предложение уже рядом.</h2><p className="mt-4 text-[14px] leading-7 text-[#d0e8d8]">Создайте запрос — и позвольте продавцам побороться за ваш выбор.</p><button onClick={()=>setShowRequest(true)} className="mt-7 rounded-xl bg-white px-6 py-3.5 text-[13px] font-extrabold text-[#176b40] transition hover:bg-[#eff8f2]">Создать запрос <ArrowUpRight className="ml-1 inline" size={16}/></button></div>
        </div>
      </section>

      <footer className="border-t border-[#e8eee9] bg-white py-9">
        <div className="container-main flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#187a49] text-[18px] font-black text-white">н</span><span className="text-[20px] font-extrabold tracking-[-1px]">надо<span className="text-[#23945b]">.</span></span></div><p className="text-[11px] text-[#9aa69e]">© 2026 НАДО. Платформа запросов и предложений.</p><div className="flex gap-5 text-[11px] font-medium text-[#718078]"><a href="#how" className="hover:text-[#187a49]">О платформе</a><span>Контакты скоро</span></div></div>
      </footer>

      {showRequest && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#10251a]/50 p-4 backdrop-blur-sm" onClick={()=>setShowRequest(false)}>
        <div className="w-full max-w-[470px] rounded-[26px] bg-white p-6 shadow-2xl sm:p-8" onClick={e=>e.stopPropagation()}>
          <div className="flex items-start justify-between"><div><div className="text-[11px] font-bold uppercase tracking-[.12em] text-[#23945b]">Ваш запрос</div><h3 className="mt-2 text-[24px] font-extrabold tracking-[-.8px]">Что вы ищете?</h3><p className="mt-2 text-[13px] text-[#718078]">Форма станет доступна после подключения регистрации и базы данных.</p></div><button onClick={()=>setShowRequest(false)} className="rounded-full bg-[#f3f7f3] p-2 text-[#68756f]" aria-label="Закрыть"><X size={18}/></button></div>
          <label className="mt-6 block text-[12px] font-bold text-[#46564c]">Название товара или услуги<input disabled placeholder="Например, iPhone 17 Pro" className="mt-2 w-full rounded-xl border border-[#e3eae4] bg-[#f8faf8] px-4 py-3.5 text-sm outline-none placeholder:text-[#a0aaa3]"/></label>
          <label className="mt-4 block text-[12px] font-bold text-[#46564c]">Ваш бюджет<input disabled placeholder="Например, до 100 000 ₽" className="mt-2 w-full rounded-xl border border-[#e3eae4] bg-[#f8faf8] px-4 py-3.5 text-sm outline-none placeholder:text-[#a0aaa3]"/></label>
          <button disabled className="mt-6 w-full cursor-not-allowed rounded-xl bg-[#b7cfc0] py-4 text-[13px] font-bold text-white">Скоро будет доступно</button>
          <p className="mt-3 text-center text-[10px] leading-5 text-[#9aa69e]">Это пока демонстрационный интерфейс. Мы подключаем личные кабинеты и отправку запросов.</p>
        </div>
      </div>}
    </main>
  );
}
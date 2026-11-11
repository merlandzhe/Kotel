"use client";

import { useMemo, useState } from "react";
import {
  Bell, CarFront, ChevronDown, Heart, House, MapPin, Menu, Search,
  Shirt, Smartphone, Sofa, UserRound, Wrench, X, ArrowRight, Users, TrendingUp
} from "lucide-react";

const categories = [
  { name: "Электроника", icon: Smartphone },
  { name: "Автомобили", icon: CarFront },
  { name: "Недвижимость", icon: House },
  { name: "Услуги", icon: Wrench },
  { name: "Для дома", icon: Sofa },
  { name: "Одежда", icon: Shirt },
];

const requests = [
  {
    title: "iPhone 17 Pro Max",
    category: "Электроника",
    budget: "До 120 000 ₽",
    city: "Москва",
    time: "15 минут назад",
    details: "256 или 512 ГБ, любой цвет, только оригинал.",
    offers: 8,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=85",
    label: "Новый",
  },
  {
    title: "Toyota Camry 2023",
    category: "Автомобили",
    budget: "До 3 500 000 ₽",
    city: "Казань",
    time: "25 минут назад",
    details: "Без серьёзных ДТП, пробег до 60 000 км.",
    offers: 4,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=500&q=85",
  },
  {
    title: "Ремонт квартиры под ключ",
    category: "Услуги",
    budget: "До 900 000 ₽",
    city: "Санкт-Петербург",
    time: "1 час назад",
    details: "Двухкомнатная квартира, 65 м². Нужна смета.",
    offers: 2,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=85",
  },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [heroQuery, setHeroQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все");
  const [saved, setSaved] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const filtered = useMemo(() => requests.filter((item) =>
    (activeCategory === "Все" || item.category === activeCategory) &&
    (item.title + " " + item.details).toLowerCase().includes(query.toLowerCase())
  ), [activeCategory, query]);

  return (
    <main className="min-h-screen bg-white text-[#111713]">
      <header className="sticky top-0 z-30 border-b border-[#e9ece9] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center gap-5 px-5 lg:px-10">
          <a href="#" className="flex shrink-0 items-center gap-3">
            <span className="clover-mark"><i/><i/><i/><i/></span>
            <span className="text-[31px] font-black tracking-[-1.8px]">НАДО</span>
          </a>
          <button className="hidden shrink-0 items-center gap-2 text-[14px] font-medium lg:flex"><MapPin size={19}/> Москва <ChevronDown size={15}/></button>
          <div className="hidden min-w-0 flex-1 items-center gap-1 lg:flex">
            <div className="flex h-[46px] flex-1 items-center gap-3 rounded-full bg-[#f0f0f2] px-5">
              <Search size={21} className="shrink-0 text-[#85878b]"/>
              <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Например, iPhone 17 Pro" className="w-full bg-transparent text-[15px] outline-none placeholder:text-[#999ba0]"/>
            </div>
            <button onClick={()=>document.getElementById("requests")?.scrollIntoView({behavior:"smooth"})} className="h-[46px] rounded-full bg-[#07834e] px-7 text-[15px] font-bold text-white hover:bg-[#066d41]">Найти</button>
          </div>
          <div className="ml-auto hidden shrink-0 items-center gap-6 lg:flex">
            <button className="flex items-center gap-2 text-[14px] font-medium"><UserRound size={23}/> Войти</button>
            <button onClick={()=>setShowRequest(true)} className="rounded-full bg-[#07834e] px-5 py-3 text-[14px] font-bold text-white">Регистрация</button>
            <button aria-label="Избранное"><Heart size={25}/></button>
            <button aria-label="Уведомления"><Bell size={25}/></button>
          </div>
          <button onClick={()=>setMenuOpen(!menuOpen)} className="ml-auto rounded-xl p-2 lg:hidden" aria-label="Меню">{menuOpen?<X/>:<Menu/>}</button>
        </div>
        {menuOpen && <div className="border-t border-[#edf0ed] bg-white px-5 py-4 lg:hidden"><div className="mb-3 flex items-center gap-2 rounded-full bg-[#f1f1f3] px-4 py-3"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Что ищете?" className="w-full bg-transparent outline-none"/></div><button onClick={()=>setShowRequest(true)} className="w-full rounded-xl bg-[#07834e] p-3 font-bold text-white">Создать запрос</button></div>}
      </header>

      <section className="hero-section mx-auto max-w-[1500px] px-5 pt-8 lg:px-10">
        <div className="hero-panel relative min-h-[405px] overflow-hidden rounded-[28px]">
          <div className="hero-art" aria-hidden="true"/>
          <div className="relative z-10 max-w-[710px] px-7 py-10 sm:px-10 lg:px-0 lg:py-10">
            <h1 className="text-[46px] font-black leading-[1.04] tracking-[-2.5px] sm:text-[64px] lg:text-[76px]">Что вам <span className="text-[#07834e]">нужно?</span></h1>
            <p className="mt-4 max-w-[570px] text-[20px] leading-[1.35] tracking-[-.5px] sm:text-[27px]">Опубликуйте запрос —<br/> продавцы сами предложат варианты.</p>
            <div className="mt-6 flex max-w-[700px] flex-col gap-3 sm:flex-row">
              <div className="flex h-[62px] min-w-0 flex-1 items-center gap-3 rounded-[18px] border border-[#d9d9df] bg-white/95 px-5 shadow-sm"><Search size={23} className="shrink-0 text-[#74777d]"/><input value={heroQuery} onChange={e=>setHeroQuery(e.target.value)} placeholder="Например, ищу BMW X5 до 7 млн ₽" className="w-full min-w-0 bg-transparent text-[15px] outline-none placeholder:text-[#85878e]"/></div>
              <button onClick={()=>{setQuery(heroQuery);setShowRequest(true)}} className="h-[62px] shrink-0 rounded-[18px] bg-[#07834e] px-7 text-[16px] font-bold text-white shadow-md hover:bg-[#066d41]">Создать запрос <ArrowRight className="ml-1 inline" size={19}/></button>
            </div>
          </div>
          <div className="hero-bubble bubble-car"><span className="bubble-thumb car-thumb"/>Нужна Toyota<br/>Camry 2023</div>
          <div className="hero-bubble bubble-mac"><span className="bubble-thumb laptop-thumb"/>Ищу MacBook<br/>до 120 000 ₽</div>
          <div className="hero-bubble bubble-home"><span className="bubble-thumb home-thumb"/>Ищу квартиру<br/>в Москве</div>
        </div>
        <div id="categories" className="relative z-10 -mt-1 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {categories.map(({name,icon:Icon})=><button key={name} onClick={()=>{setActiveCategory(name);document.getElementById("requests")?.scrollIntoView({behavior:"smooth"})}} className="category-tile flex min-h-[91px] flex-col items-center justify-center gap-2 rounded-[20px] bg-[#f1f1f4] px-2 text-center transition hover:bg-[#e8f3ec]"><Icon size={27} strokeWidth={2.1}/><span className="text-[13px] font-medium sm:text-[15px]">{name}</span></button>)}
          <button onClick={()=>setActiveCategory("Все")} className="category-tile hidden min-h-[91px] flex-col items-center justify-center gap-2 rounded-[20px] bg-[#f1f1f4] px-2 text-center sm:flex"><span className="grid grid-cols-2 gap-1"><i className="h-3 w-3 rounded border-2 border-current"/><i className="h-3 w-3 rounded border-2 border-current"/><i className="h-3 w-3 rounded border-2 border-current"/><i className="h-3 w-3 rounded border-2 border-current"/></span><span className="text-[14px] font-medium">Ещё⌄</span></button>
        </div>
      </section>

      <section id="requests" className="mx-auto max-w-[1500px] px-5 pb-8 pt-9 lg:px-10">
        <div className="mb-5 flex items-center justify-between"><h2 className="text-[28px] font-extrabold tracking-[-1.1px] sm:text-[31px]">Свежие запросы</h2><button className="text-[14px] font-medium">Смотреть все <ArrowRight className="ml-1 inline" size={17}/></button></div>
        <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
          {["Все",...categories.map(c=>c.name)].map(name=><button key={name} onClick={()=>setActiveCategory(name)} className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold ${activeCategory===name?"bg-[#07834e] text-white":"bg-[#f2f3f3] text-[#4d5650]"}`}>{name}</button>)}
        </div>
        <div className="grid gap-3 lg:grid-cols-3">
          {filtered.map((item)=><article key={item.title} className="request-card flex min-h-[214px] gap-4 rounded-[21px] border border-[#e1e2e5] p-3.5 sm:p-4">
            <div className="h-[130px] w-[112px] shrink-0 overflow-hidden rounded-[15px] bg-[#f1f2f3] sm:h-[145px] sm:w-[130px]"><img src={item.image} alt="" className="h-full w-full object-cover"/></div>
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex items-start justify-between gap-1"><h3 className="text-[15px] font-extrabold leading-5 sm:text-[17px]">{item.title} {item.label&&<span className="inline-block rounded-full bg-[#e3f4e9] px-2 py-0.5 text-[10px] font-bold text-[#07834e]">{item.label}</span>}</h3><button onClick={()=>setSaved(s=>s.includes(item.title)?s.filter(x=>x!==item.title):[...s,item.title])} aria-label="В избранное" className="shrink-0 text-[#777d80]">{saved.includes(item.title)?<Heart size={21} fill="#07834e" color="#07834e"/>:<Heart size={21}/>}</button></div>
              <div className="mt-2 text-[19px] font-black tracking-[-.5px] sm:text-[21px]">{item.budget}</div>
              <div className="mt-1 text-[12px] text-[#70767b]">{item.city} · {item.time} · {item.category}</div>
              <p className="mt-2 line-clamp-2 text-[12px] leading-[1.45]">{item.details}</p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3"><span className="text-[11px] font-semibold text-[#303b35]"><Users className="mr-1 inline" size={14}/> Уже {item.offers} предложений</span><button onClick={()=>setShowRequest(true)} className="rounded-full bg-[#07834e] px-4 py-2.5 text-[12px] font-bold text-white hover:bg-[#066d41]">Откликнуться</button></div>
            </div>
          </article>)}
          {!filtered.length&&<p className="col-span-3 rounded-xl bg-[#f5f7f5] p-8 text-center text-sm text-[#737d76]">По вашему запросу пока ничего не найдено.</p>}
        </div>
        <p className="mt-3 text-[10px] text-[#969d98]">Примеры запросов для демонстрации интерфейса.</p>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-4 px-5 pb-10 lg:grid-cols-2 lg:px-10">
        <div className="seller-banner relative flex min-h-[174px] items-end overflow-hidden rounded-[23px] p-7 text-white"><div className="relative z-10 max-w-[430px]"><div className="flex items-center gap-3 text-[28px] font-extrabold"><TrendingUp size={34}/> Продавцам</div><p className="mt-3 text-[16px] leading-6">Находите клиентов по реальным запросам<br className="hidden sm:block"/> и развивайте свой бизнес</p><button className="mt-4 rounded-full bg-white px-5 py-2.5 text-[12px] font-bold text-[#17231f]">Узнать больше <ArrowRight className="ml-1 inline" size={15}/></button></div></div>
        <div className="buyer-banner relative flex min-h-[174px] items-end overflow-hidden rounded-[23px] p-7"><div className="relative z-10 max-w-[430px]"><div className="flex items-center gap-3 text-[28px] font-extrabold"><Users size={34}/> Покупателям</div><p className="mt-3 text-[16px] leading-6">Получайте лучшие предложения<br/> от проверенных продавцов</p><button onClick={()=>setShowRequest(true)} className="mt-4 rounded-full bg-[#07834e] px-5 py-2.5 text-[12px] font-bold text-white">Создать запрос <ArrowRight className="ml-1 inline" size={15}/></button></div></div>
      </section>

      <footer className="border-t border-[#eceeec] px-5 py-7 text-center text-xs text-[#8a928d]">© 2026 НАДО · Покупатели выбирают, продавцы предлагают.</footer>

      {showRequest&&<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4" onClick={()=>setShowRequest(false)}><div className="w-full max-w-[450px] rounded-[25px] bg-white p-6 shadow-2xl" onClick={e=>e.stopPropagation()}><div className="flex items-center justify-between"><h3 className="text-2xl font-extrabold">Создать запрос</h3><button onClick={()=>setShowRequest(false)} aria-label="Закрыть"><X/></button></div><p className="mt-2 text-sm text-[#737d76]">Скоро здесь можно будет разместить запрос и получить предложения продавцов.</p><input value={heroQuery} onChange={e=>setHeroQuery(e.target.value)} placeholder="Что вам нужно?" className="mt-5 w-full rounded-xl border border-[#dfe5e0] px-4 py-3 outline-none focus:border-[#07834e]"/><button disabled className="mt-4 w-full rounded-xl bg-[#b9d7c5] py-3 font-bold text-white">Отправка запросов скоро</button></div></div>}
    </main>
  );
}

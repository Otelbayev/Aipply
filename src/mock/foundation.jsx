import project1 from "../assets/images/found.jpg";
import project2 from "../assets/images/found1.jpg";
import project3 from "../assets/images/login1.png";
import project4 from "../assets/images/login2.png";
import project5 from "../assets/images/found5.png";
import then1 from "../assets/icons/then1.png";
import then2 from "../assets/icons/then2.png";
import then3 from "../assets/icons/then3.png";
import then4 from "../assets/icons/then4.png";
import ai2 from "../assets/images/ai1.png";
import ai3 from "../assets/images/ai2.png";
import ai4 from "../assets/images/ai3.png";
import ai5 from "../assets/images/ai4.png";
import ai6 from "../assets/images/ai5.png";
import courseImg from "../assets/images/course/foundation.png";

const DesignTitle = () => <p></p>;

const DesignDesc = () => (
  <p>
    "Coding Foundation" deb nomlanuvchi tushuncha, odatda, dasturlashga kirish
    qiluvchi kurs hisoblanadi va dasturlash olamiga yangi kirganlar uchun ayni
    muddao! Kurs mobaynida o'quvchilarga dasturlash sohasining asosiy
    tushunchalarini o'rgatilinadi va yo’nalish tanlashda yordam berish uchun
    zarur bilimlar beriladi.
  </p>
);

export const foundation = {
  path: "foundation",
  month: 1,
  courseImg,
  name: "Foundation",
  description: "",
  keywords: "foundation, frontend, backend, mobile, code uz",
  showcase: {
    title:
      "IT sohasiga ilk qadamni biz bilan boshlang!",
    desc: "Biz sizga yo'nalish tanlashda yordam beramiz va dasturlash olamida o'z o'rningizni topishingizga yordam beramiz",
    keywords:
      "Aipply Academy, Coding Foundation kurslari, Dasturlash asoslari, Dasturlashni o'rganish, Coding asoslari, Beginner dasturlash kurslari, Dasturlash darslari Toshkent, Python asoslari, JavaScript asoslari, HTML va CSS darslari, Coding o'quv kurslari, Dasturlash bo'yicha treninglar, Algoritmlar va dasturlash, Web development asoslari, Aipply Coding Academy",
  },
  statistics: {
    succes: "80",
    working: "95",
    teching: "30",
    end: "25",
    price: "500",
    desc: "Agarda Sizning kurslarga qatnashish uchun mablag'ingiz yetarli bo'lmasa, bundan tushkunlikka tushmang. Biz Sizga bu muammoni hal etishda yordam beramiz.",
    aiDesc:
      "Kurs davomida sun'iy intellektlarda ishlashni va uni kasbingizda monitizatsiya qilishni o’rganasiz",
    computerTitle:
      "Coding Foundationni o‘rganish uchun qanday kompyuter kerak?",
    ai: [ai5, ai6, ai4, ai3, ai2],
    processor: "i5-i7",
    memory: "256-512 GB",
    ram: "8-16 GB",
    videoCard: null,
  },
  about: {
    name: "Coding Foundation",
    img: courseImg,
    title: <DesignTitle />,
    desc: <DesignDesc />,
    projects: [project1, project5, project2],
  },
  then: [
    { id: 1, icon: then1, title: "Davlat korxonalari" },
    {
      id: 2,
      icon: then2,
      title: "Dasturchi zarur bo‘lgan korxona, firma va tashkilotlar",
    },
    {
      id: 3,
      icon: then3,
      title: "Xususiy kompaniyalar",
    },
    {
      id: 4,
      icon: then4,
      title: "Frilanser sifatida",
    },
  ],
  module: [
    {
      id: "01",
      title: "Frontend",
      body: [
        {
          id: 1,
          title: "a. Frontendga kirish. HTML va CSS asoslari.",
        },
        {
          id: 2,
          title: "b. JavaScript dasturlash tili haqida.",
        },
        {
          id: 3,
          title: "c. React.js kutubxonasi.",
        },
        {
          id: 4,
          title: "d. React.js da namunalar ko’rish.",
        },
      ],
    },
    {
      id: "02",
      title: "Backend",
      body: [
        {
          id: 1,
          title: "a. Backendga kirish.",
        },
        {
          id: 2,
          title: "b. Python dasturlash tiliga kirish.",
        },
        {
          id: 3,
          title: "c. Pythonda sodda misollar ishlash.",
        },
        {
          id: 4,
          title: "d. Pythonda namunalar ko’rish.",
        },
        {
          id: 5,
          title: "e. Baza haqida tushuncha berish",
        },
      ],
    },
    {
      id: "03",
      title: "Mobile",
      body: [
        {
          id: 1,
          title:
            "a. Android va IOS operatsion tizimi va unda ilovalar yaratish haqida.",
        },
        {
          id: 2,
          title: "b. No-Code orqali mobil ilova yaratish haqida.",
        },
        {
          id: 3,
          title: "c. Amaliy mashg’ulotlar bajarish",
        },
      ],
    },
  ],
  project: [project4, project3],
};

import then1 from "../assets/icons/then1.png";
import then2 from "../assets/icons/then2.png";
import then3 from "../assets/icons/then3.png";
import then4 from "../assets/icons/then4.png";
import then5 from "../assets/icons/then5.png";
import img2 from "../assets/images/design.png";
import ai1 from "../assets/images/ai.png";
import ai2 from "../assets/images/ai1.png";
import ai3 from "../assets/images/ai2.png";
import ai4 from "../assets/images/ai3.png";
import ai5 from "../assets/images/ai4.png";
import ai6 from "../assets/images/ai5.png";

const Title = () => "";

const Desc = () => (
  <p>
   ""
  </p>
);

export const interior = {
  showcase: {
    title: "Interior/Exterior dizayn sohasini zamon talabida o’rganing",
    desc: "Siz singa zamonaviy bilimlar asosida Interior/Exterior dizaynni o’rgatamiz va sizni daromatga olib chiqamiz",
  },
  statistics: {
    succes: "80",
    working: "95",
    teching: "30",
    end: "25",
    price: "300",
    desc: "Agarda Sizning kurslarga qatnashish uchun mablag'ingiz yetarli bo'lmasa, bundan tushkunlikka tushmang. Biz Sizga bu muammoni hal etishda yordam beramiz.",
    aiDesc:
      "Kurs davomida dizayn qoidalaridan tashqari sun'iy intellektlarda ishlashni va uni kasbingizda monitizatsiya qilishni o’rganasiz",
    computerTitle:
      "Interior/Exterior dizaynni o’rganish uchun qanday kompyuter kerak?",
    ai: [ai5, ai6, ai4, ai3, ai2, ai1],
    processor: "i3-i7",
    mamory: "256-512 GB",
    ram: "4-16 GB",
    videoCard: null,
  },
  about: {
    name: "Interior/Exterior dizayn",
    img: img2,
    title: <Title />,
    desc: <Desc />,
    projects: [],
  },
  then: [
    { id: 1, icon: then1, title: "Marketing va SMM agentliklari" },
    {
      id: 2,
      icon: then2,
      title: "O'quv markazlari, xususiy maktab va universitetlar",
    },
    { id: 3, icon: then3, title: "Web studiyalar" },
    { id: 4, icon: then4, title: "Firma, tashkilot va kompaniyalar" },
    { id: 5, icon: then5, title: "Frilanser sifatida" },
  ],
  module: [
    {
      id: "01",
      title: "Web Dasturlashga kirish",
      body: [
        {
          id: 1,
          title: "a. HTML va uning tuzilishiga kirish.",
        },
        {
          id: 2,
          title: "b. Veb-sahifalar uchun CSS asoslari.",
        },
        {
          id: 3,
          title: "c. SCSS va SASS preprotsessori asoslari.",
        },
      ],
    },
    {
      id: "02",
      title: "JavaSctirp dasturlash tili",
      body: [
        {
          id: 1,
          title: "a. JavaScript dasturlash tiliga kirish.",
        },
        {
          id: 2,
          title: "b. Basics: o‘zgaruvchilar, shartlar, sikllar, funksiyalar.",
        },
        {
          id: 3,
          title: "c. Array va Obyektlarni boshqarish.",
        },
        {
          id: 4,
          title: "d. Backend bilan ishlash, fetch, malumotlarni boshqarish",
        },
        {
          id: 5,
          title: "e. DOM bilan ishlash.",
        },
      ],
    },
    {
      id: "03",
      title: "React kutubxonsi",
      body: [
        {
          id: 1,
          title: "a. React.js asoslari: komponentlar, prop, statelar.",
        },
        {
          id: 2,
          title: "b. Styles in react, Hooks.",
        },
        {
          id: 3,
          title: "c. Statelarni boshqarish, Context API.",
        },
        {
          id: 4,
          title: "d. Bakend bilan ishlash, Fetch, Axios, Swagger.",
        },
        {
          id: 5,
          title: "e. Eng mashxur react kutubxonalari (AntDesign, MUI).",
        },
      ],
    },
    {
      id: "04",
      title: "Amaliyot",
      body: [
        {
          id: 1,
          title: "a. Sun'iy intellekdan tog’ri foydalanish.",
        },
        {
          id: 2,
          title: "b. Katta loyiha bilan ishlashda fayl va kod tuzilishi.",
        },
        {
          id: 3,
          title: "c. Loyihani optimizatsiya qilish.",
        },
        {
          id: 4,
          title: "d. AI yordamida React-da to'liq veb-ilovani ishlab chiqish.",
        },
      ],
    },
  ],
  project: [],
};

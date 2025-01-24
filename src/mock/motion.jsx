import then1 from "../assets/icons/then1.png";
import then2 from "../assets/icons/then2.png";
import then3 from "../assets/icons/then3.png";
import then4 from "../assets/icons/then4.png";
import then5 from "../assets/icons/then5.png";
import ai2 from "../assets/images/ai1.png";
import ai3 from "../assets/images/ai2.png";
import ai4 from "../assets/images/ai3.png";
import ai5 from "../assets/images/ai4.png";
import ai6 from "../assets/images/ai5.png";
import motion1 from "../assets/images/videos/motion1.png";
import motion2 from "../assets/images/videos/motion2.png";
import motion3 from "../assets/images/videos/motion3.png";
import motion4 from "../assets/images/videos/motion4.jpeg";
import motion5 from "../assets/images/videos/motion5.jpg";
import motion6 from "../assets/images/videos/motion6.jpg";
import courseImg from "../assets/images/course/motion.png";

const Title = () => (
  <p>
    Moushen grafika va videomontaj, multimedia dizayni va yaratilishining ikki
    muhim sohasidir. Har ikkala soha ham kreativlikni va texnik ko'nikmalarni
    talab qiladi, ammo ularning har birining o'ziga xos xususiyatlari va
    qo'llanilish sohalari mavjud.
  </p>
);

const Desc = () => (
  <p>
    Moushen Grafika, grafik dizaynning harakatlanuvchi elementlarini o'z ichiga
    olgan sohasidir. Bu, animatsiya, matn, rasmlar, logotiplar va boshqa vizual
    elementlarning harakatini o'z ichiga oladi <br /> <br />
    Videomontaj, video materiallarni tahrirlash jarayonidir, bu jarayonda bir
    nechta video qismlar bir butun sifatida birlashtiriladi. Videomontajning
    asosiy tomoshabinning diqqatini jalb qilish va ma'lum bir his-tuyg'ularni
    yoki axborotni yetkazish maqsadida kreativ va ta’sirchan videolar
    yaratishdir.
  </p>
);

export const motion = {
  courseImg,
  month: 3,
  path: "motion-design",
  name: "Motion Dizayn",
  keywords: "Motion Dizayn, videomontaj, moshin dizayn",
  showcase: {
    title: "Motion dizayn va Videomontaj orqali daromadga chiqing!",
    desc: "Biz sizga zamonaviy bilimlar asosida Motion dizayn va Videomontajni o’rgatamiz va sizni daromatga olib chiqamiz",
    keywords:
      "Aipply Academy, Motion dizayn kurslari, Harakatli grafika, Motion dizayn darslari, Motion dizayner bo'lish, Toshkentda motion dizayn kurslari, Adobe After Effects kurslari, Premiere Pro darslari, Animatsiya kurslari, Video montaj darslari, Motion dizayn bo'yicha treninglar, Harakatli dizayn, 2D animatsiya, 3D animatsiya, Videografika o'rganish, Aipply dizayn akademiyasi, Motion dizayn O'zbekiston",
  },
  statistics: {
    succes: "80",
    working: "95",
    teching: "30",
    end: "25",
    price: "500",
    desc: "Agarda Sizning kurslarga qatnashish uchun mablag'ingiz yetarli bo'lmasa, bundan tushkunlikka tushmang. Biz Sizga bu muammoni hal etishda yordam beramiz.",
    aiDesc:
      "Kurs davomida dizayn qoidalaridan tashqari sun'iy intellektlarda ishlashni va uni kasbingizda monitizatsiya qilishni o’rganasiz",
    computerTitle:
      "Motion dizayn va Videomontajni o’rganish uchun qanday kompyuter kerak?",
    ai: [ai5, ai6, ai4, ai3, ai2],
    processor: "i5-i7",
    memory: "512 GB",
    ram: "8-16 GB",
    videoCard: null,
  },
  about: {
    name: "Motion dizayn va Videomontaj",
    img: courseImg,
    title: <Title />,
    desc: <Desc />,
    projects: [motion4, motion5, motion6],
    video: true,
  },
  then: [
    { id: 1, icon: then1, title: "Reklama Agentliklari" },
    {
      id: 2,
      icon: then2,
      title: "Media va Noshirlik Kompaniyalari",
    },
    { id: 3, icon: then3, title: "Film va video ishlab chiqarish studiyalari" },
    { id: 4, icon: then4, title: "O'yin ishlab chiqaruvchi kompaniyalari" },
    { id: 5, icon: then5, title: "Ta'lim va O'quv Markazlari" },
    { id: 6, icon: then2, title: "Frilanser sifatifa." },
  ],
  module: [
    {
      id: "01",
      title: "Adobe After Effects dasturi haqida umumiy ma'lumotlar.",
      body: [
        {
          id: 1,
          title: "a. After Effects ga kirish",
        },
        {
          id: 2,
          title: "b. Qatlamlar va asosiy kadrlar",
        },
        {
          id: 3,
          title: "c. Animatsiya tamoyillari",
        },
        {
          id: 4,
          title: "d. Effektlar va oldindan sozlash",
        },
      ],
    },
    {
      id: "02",
      title: "Maskalar va Roto Brush.",
      body: [
        {
          id: 1,
          title: "a. Roto Brush funksiyasi",
        },
        {
          id: 2,
          title: "b. Pluginlar: Saber, Auto fill, Deep Glow pluginlari",
        },
        {
          id: 3,
          title: "c. 2D grafikalar yoki vector elementlarini jonlashtirish",
        },
        {
          id: 4,
          title: "d. Video Track bilan ishlash",
        },
      ],
    },
    {
      id: "03",
      title: "3D Animatsiya va Kamera.",
      body: [
        {
          id: 1,
          title: "a. After Effects dasturida 3D animatsiya",
        },
        {
          id: 2,
          title: "b. 3D animatsiya",
        },
        {
          id: 3,
          title: "c. Paralaks effekti",
        },
        {
          id: 4,
          title: "d. After effect dasturida Kodlash.",
        },
      ],
    },
    {
      id: "04",
      title: "Motion Graphics + AI.",
      body: [
        {
          id: 1,
          title: "a. Motion grafika va sun’iy intellekt (AI)",
        },
        {
          id: 2,
          title: "b. Renderforest	AI",
        },
        {
          id: 3,
          title: "c. Runway AI",
        },
        {
          id: 4,
          title: "d. Motion Array",
        },
      ],
    },
    {
      id: "05",
      title: "Adobe Premiere Pro dasturi haqida umumiy ma'lumotlar",
      body: [
        {
          id: 1,
          title: "a. Adobe Premiere Pro",
        },
        {
          id: 2,
          title: "b. Sequence sozlamalari",
        },
        {
          id: 3,
          title: "c. Keyframes va Shortcuts",
        },
      ],
    },
    {
      id: "06",
      title: "Montaj Tuzish, effektlar va  Audio tahrirlash.",
      body: [
        {
          id: 1,
          title: "a. Effektlarni Qo'shish",
        },
        {
          id: 2,
          title: "b. Effect Controls",
        },
        {
          id: 3,
          title: "c. Adobe Audition",
        },
        {
          id: 4,
          title: "d. Color Correction va Grading",
        },
        {
          id: 5,
          title: "e. Maskalar va Chroma Key",
        },
      ],
    },
    {
      id: "07",
      title: "Sun’iy intellekt.",
      body: [
        {
          id: 1,
          title: "a. Sun’iy intellekt yordamida videolar yaratish",
        },
        {
          id: 2,
          title:
            "b. Video montaj uchun qo’shimcha dasturlar va ularning imkoniyati.",
        },
        {
          id: 3,
          title: "c. Mustaqil ish",
        },
      ],
    },
  ],
  project: [motion1, motion2, motion3],
};

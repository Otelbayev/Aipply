import project1 from "../assets/images/no1.jpg";
import project2 from "../assets/images/no2.jpg";
import project3 from "../assets/images/no3.jpg";
import project4 from "../assets/images/no4.jpg";
import project5 from "../assets/images/no5.jpg";
import project6 from "../assets/images/no6.jpg";
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
import courseImg from "../assets/images/course/nocode.png";

const Title = () => "";

const Desc = () => (
  <p>
    "No-Coding" (No-Code) sohasi, dasturiy ta'minot va ilovalarni kod yozishni
    talab qilmaydigan vositalar va platformalar orqali ishlab chiqarishni
    anglatadi. Bu soha, foydalanuvchilarga murakkab dasturlash tillarini
    o'rganishga hojat qoldirmay, vizual interfeyslar yordamida ilovalarni
    yaratish, ma'lumotlar bazalarini boshqarish va avtomatlashtirish
    jarayonlarini amalga oshirish imkoniyatini beradi.
  </p>
);

export const noCoding = {
  courseImg,
  month: 6,
  name: "No Coding",
  path: "no-coding",
  keywords: "no coding, tilda, no coding uz, kod yozmasdan dastur yaratish",
  showcase: {
    title: "No-Code orqali daromadga chiqing!",
    desc: "Biz sizga zamonaviy bilimlar asosida No-Codingni o’rgatamiz va sizni daromatga olib chiqamiz",
    keywords:
      "Aipply Academy, No-Code kurslari, No-Code dasturlash, Kod yozmasdan dasturlash, No-Code platformalar, Webflow kurslari, Bubble.io darslari, Airtable asoslari, Kod yozmasdan veb sayt yaratish, Mobil ilovalar yaratish, IT boshlang‘ichlar uchun kurslar, No-Code bo‘yicha treninglar, Tezkor dasturlash, Aipply no-code akademiyasi, App development no-code",
  },
  statistics: {
    succes: "80",
    working: "95",
    teching: "30",
    end: "25",
    price: "500",
    desc: "Agarda sizning kurslarga qatnashish uchun mablag'ingiz yetarli bo'lmasa, bundan tushkunlikka tushmang. Biz Sizga bu muammoni hal etishda yordam beramiz.",
    aiDesc:
      "Kurs davomida dasturlardan tashqari sun'iy intellektlarda ishlashni va uni kasbingizda monitizatsiya qilishni o’rganasiz",
    computerTitle: "No-Codingni o’rganish uchun qanday kompyuter kerak?",
    ai: [ai5, ai6, ai4, ai3, ai2],
    processor: "i3-i7",
    memory: "256-512 GB",
    ram: "4-16 GB",
    videoCard: null,
  },
  about: {
    name: "No-Coding",
    img: courseImg,
    title: <Title />,
    desc: <Desc />,
    projects: [project1, project2, project3],
  },
  then: [
    {
      id: 1,
      icon: then1,
      title:
        "Startaplar: No-Coding vositalari bilan prototiplar yaratish va tezkor mahsulot sinalarini o'tkazish, bu orqali startaplar o'z g'oyalarini tez va samarali tarzda sinab ko'rishlari mumkin.",
    },
    {
      id: 2,
      icon: then2,
      title:
        "Kichik va o'rta bizneslar: Ular o'zlarining onlayn mavjudliklarini, masalan, veb-sayt va e-commerce platformalarini ishlab chiqish uchun no-code vositalaridan foydalanishlari mumkin.",
    },
    {
      id: 3,
      icon: then3,
      title:
        "Korporativ tizimlar: Katta kompaniyalarda no-coding yondashuvi bilan biznes jarayonlarini avtomatlashtirish va korporativ ilovalarni yaratish mumkin.",
    },
    {
      id: 4,
      icon: then4,
      title:
        "Marketing va reklama: No-Coding platformalar yordamida siz tezkor marketing kampaniyalari va foydalanuvchilarni jalb qiluvchi sahifalar yaratishingiz mumkin.",
    },
    {
      id: 5,
      icon: then5,
      title:
        "Freelancing va mustaqil konsalting: No-Coding bilan siz mustaqil ravishda loyihalarni amalga oshirishingiz yoki boshqa kompaniyalar va shaxslarga maslahat va yechimlar taqdim etishingiz mumkin.",
    },
    {
      id: 6,
      icon: then5,
      title:
        "Ta'lim va o'qitish: No-Coding sohasini o'rganish orqali siz ushbu bilimlarni boshqalarga o'rgatish yoki o'quv kurslari va seminarlar o'tkazish imkoniyatiga ega bo'lishingiz mumkin.",
    },
  ],
  module: [
    {
      id: "01",
      title: "No-Code va No-Code vositalari",
      body: [
        {
          id: 1,
          title: "a. No-Code asoslari",
        },
        {
          id: 2,
          title: "b. Loyihani boshqarish va Agile-ga kirish",
        },
      ],
    },
    {
      id: "02",
      title: "No-Code veb-ilovalarini ishlab chiqish (Wordpress)",
      body: [
        {
          id: 1,
          title: "a. WordPress Asoslari",
        },
        {
          id: 2,
          title: "b. WordPress-ning kengaytirilgan xususiyatlari",
        },
        {
          id: 3,
          title: "c.WordPress-da dizayn va foydalanuvchi interfeysi",
        },
      ],
    },
    {
      id: "03",
      title: "No-Code veb-ilovalarini ishlab chiqish (Bubble)",
      body: [
        {
          id: 1,
          title: "a. Bubble Asoslari",
        },
        {
          id: 2,
          title: "b. Bubble-ning kengaytirilgan xususiyatlari",
        },
        {
          id: 3,
          title: "c. Bubble-da foydalanuvchi interfeysi",
        },
      ],
    },
    {
      id: "04",
      title: "No-Code mobil ilovalarini ishlab chiqish (Adalon)",
      body: [
        {
          id: 1,
          title: "a. Adalo Asoslari",
        },
        {
          id: 2,
          title: "b. Adaloning kengaytirilgan xususiyatlari",
        },
        {
          id: 3,
          title: "c. Adaloda optimallashtirish va foydalanuvchi tajribasi",
        },
      ],
    },
    {
      id: "05",
      title: "No-Code-da sun'iy intellektdan foydalanish",
      body: [
        {
          id: 1,
          title: "a. No-Code uchun sun'iy intellektdan foydalanish",
        },
        {
          id: 2,
          title: "b. Veb va mobil ilovalar yaratishda AI",
        },
        {
          id: 3,
          title: "c. AI bilan loyixa ishlari",
        },
      ],
    },
    {
      id: "06",
      title: "Loyiha bilan ishlash va sinovdan o’tkazish",
      body: [
        {
          id: 1,
          title: "a. Loyihani ishlab chiqish va sinovdan o’tkazish",
        },
        {
          id: 2,
          title: "b. Loyihalarni nashr etish",
        },
        {
          id: 3,
          title: "c. Loyihalarni monetizatsiya qilish",
        },
        {
          id: 4,
          title: "d. Tahlil va optimallashtirish",
        },
        {
          id: 5,
          title: "e. Yakuniy imtihon va loyiha taqdimoti",
        },
      ],
    },
  ],
  project: [project4, project5, project6],
};

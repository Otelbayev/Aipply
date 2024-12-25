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

export const birOy = {
  path: "bir-oyda-bir-veb-sayt",
  month: 1,
  courseImg,
  name: "No Coding",
  keywords: "no coding, tilda, no coding uz, kod yozmasdan dastur yaratish",
  showcase: {
    title: "Bir oyda veb sayt yaratishni o’rganing!",
    desc: "Biz sizga zamonaviy bilimlar asosida No-Codingni o’rgatamiz va sizni daromatga olib chiqamiz",
    keywords:
      "Aipply Academy, Bir oyda veb-sayt yaratish, No-Code kurslari, Kod yozmasdan sayt yaratish, Webflow kurslari, Bubble.io darslari, Veb-sayt ishlab chiqish, Node code veb-sayt, Toshkentda no-code kurslari, Tezkor sayt yaratish, Veb-dizayn asoslari, Airtable darslari, Kod yozmasdan biznes uchun sayt, Bir oyda IT ko'nikma, No-Code bo‘yicha amaliy kurslar",
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
        "•	Mahalliy server va hostingda ishlaydigan WordPress sayti yaratish.",
    },
    {
      id: 2,
      icon: then2,
      title:
        "•	Dizaynlangan va kontent bilan to'ldirilgan tayyor landing page yaratish.",
    },
    {
      id: 3,
      icon: then3,
      title:
        "•	Mahsulot qo'shish, buyurtmalarni boshqarish va mijozlar bilan ishlash imkoniyatiga ega bo'lgan elektron magazin yaratish.",
    },
    {
      id: 4,
      icon: then4,
      title:
        "•	Turli xil plaginlar yordamida kod yozmasdan yaratilgan funksional veb ilovalar va saytlar.",
    },
    {
      id: 5,
      icon: then5,
      title: "•	Turli sun'iy intellektlarni kerakli maqsadlarda ishlatish.",
    },
  ],
  module: [
    {
      id: "01",
      title: "WordPress asoslari va o'rnatish",
      body: [
        {
          id: 1,
          title: "a.	WordPress nima?",
        },
        {
          id: 2,
          title: "b.	WordPress o'rnatish",
        },
        {
          id: 3,
          title: "c.	Asosiy sozlamalar va boshqarish",
        },
      ],
    },
    {
      id: "02",
      title: "WordPress dizayni va kontentni boshqarish.",
      body: [
        {
          id: 1,
          title: "a.	Sayt dizayni va mavzular",
        },
        {
          id: 2,
          title: "b.	Kontent yaratish va boshqarish",
        },
        {
          id: 3,
          title: "c.	Plaginlar va ularning imkoniyatlari",
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
      title: "WooCommerce va elektron magazin",
      body: [
        {
          id: 1,
          title: "a.	WooCommerce o'rnatish va sozlash",
        },
        {
          id: 2,
          title: "b.	Mahsulot qo'shish va boshqarish",
        },
        {
          id: 3,
          title: "c.	Buyurtmalarni boshqarish va mijozlar bilan ishlash",
        },
      ],
    },
    {
      id: "05",
      title: "Saytni SEO-rivojlantirish va xavfsizlik",
      body: [
        {
          id: 1,
          title: "a.	Saytni SEO uchun optimallashtirish",
        },
        {
          id: 2,
          title: "b. Veb va mobil ilovalar yaratishda AI",
        },
        {
          id: 3,
          title: "c.	Sayt tezligini oshirish va texnik optimallashtirish",
        },
      ],
    },
  ],
  project: [project4, project5, project6],
};

import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import then1 from "../assets/icons/then1.png";
import then2 from "../assets/icons/then2.png";
import then3 from "../assets/icons/then3.png";
import then4 from "../assets/icons/then4.png";
import then5 from "../assets/icons/then5.png";
import width from "../assets/images/course/design.png";
import projectss from "../assets/images/projectsbook.png";
import ai2 from "../assets/images/ai1.png";
import ai3 from "../assets/images/ai2.png";
import ai4 from "../assets/images/ai3.png";
import ai5 from "../assets/images/ai4.png";
import ai6 from "../assets/images/ai5.png";
import img5 from "../assets/images/results/grafik/1.png";
import img6 from "../assets/images/results/grafik/2.png";
import img7 from "../assets/images/results/grafik/3.png";

const DesignTitle = () => (
  <p>
    <strong>Dizayn </strong>
    deganda koʻpchilik <strong>rassomchilik yoki tikuvchilik</strong> kabi
    kasblarni <strong> hayoliga keltiradi.</strong>
  </p>
);

const DesignDesc = () => (
  <p>
    <strong>Grafik dizayn aslida,</strong> boshqa bir yoʻnalish hisoblanadi.
    Ijtimoiy tarmoqlardagi post dizaynlari, internet saytlar, mobil ilovalar,
    jurnal va gazetalar, kitob muqovalari, restoran menyulari, mahsulot
    kataloglari, reklama bannerlari, flayerlar, sertifikatlar, mahsulot
    qadoqlari, hayotimizda koʻrishimiz mumkin boʻlgan koʻplab narsalar grafik
    dizaynga yaqqol misol bo'la oladi.
  </p>
);

export const graphicDesign = {
  courseImg: width,
  month: 5,
  path: "graphic-design",
  name: "Grafik Dizayn",
  keywords: "grafik dizayn, dizayn, figma uz, fotoshop uz",
  showcase: {
    title: "Grafik dizay orqali daromadga chiqing!",
    desc: "Biz sizga zamonaviy bilimlar asosida grafik dizaynni o’rgatamiz va sizni daromatga olib chiqamiz",
    keywords:
      "Aipply Academy, Grafik dizayn kursi, Grafik dizayn o'quv markazi, Grafik dizayn darslari, Grafik dizayn bo'yicha o'quv kurslari, Grafik dizayn O'zbekiston, Grafik dizayn Toshkent, Aipply dizayn kurslari, Dizayn o'rganish, Adobe Photoshop kurslari, Adobe Illustrator kurslari, CorelDRAW o'quv kursi, Rastr va vektor grafika, Dizayn asoslari, Dizaynerlik kurslari, Grafik dizayn treninglari",
  },
  statistics: {
    succes: "80",
    working: "95",
    teching: "30",
    end: "25",
    price: "500",
    desc: "Agarda sizning kurslarga qatnashish uchun mablag'ingiz yetarli bo'lmasa, bundan tushkunlikka tushmang. Biz Sizga bu muammoni hal etishda yordam beramiz.",
    aiDesc:
      "Kurs davomida dizayn qoidalaridan tashqari sun'iy intellektlarda ishlashni va uni kasbingizda monitizatsiya qilishni o’rganasiz",
    computerTitle: "Grafik dizaynni o’rganish uchun qanday kompyuter kerak?",
    ai: [ai5, ai6, ai4, ai3, ai2],
    processor: "i5-i7",
    memory: "256-512 GB",
    ram: "8-16 GB",
    videoCard: "4-6 GB",
  },
  about: {
    name: "Dizayn",
    img: width,
    title: <DesignTitle />,
    desc: <DesignDesc />,
    projects: [project2, project3, project4, project5, project6, project1],
  },
  then: [
    { id: 1, icon: then1, title: "Marketing va SMM agentliklari" },
    {
      id: 2,
      icon: then2,
      title: "O'quv markazlari, xususiy maktab va universitetlar",
    },
    { id: 3, icon: then3, title: "Dizayn studiyalari" },
    { id: 4, icon: then4, title: "Firma, tashkilot va kompaniyalar" },
    { id: 5, icon: then5, title: "Frilanser sifatida" },
  ],
  module: [
    {
      id: "01",
      title: "Dizaynning asoslari",
      body: [
        {
          id: 1,
          title:
            "a. Dizayn tarixi: Dizayn uslublari va yo‘nalishlarining rivojlanishiga kirish.",
        },
        {
          id: 2,
          title:
            "b. Photoshop asoslari: Photoshopda vositalar, qatlamlar va asosiy ish jarayonlari.",
        },
        {
          id: 3,
          title:
            "c. Tipografika asoslari: Shriftlar, iyerarxiya va tipografikaning dizayndagi o‘rni.",
        },
        {
          id: 4,
          title:
            "d. Ranglar nazariyasi: Rang uyg‘unligi, balansi va ranglarning psixologik ta’siri.",
        },
        {
          id: 5,
          title:
            "e. Dizaynda balans yaratish: Kompozitsiyalarda balansni ta’minlash texnikalari.",
        },
        {
          id: 6,
          title:
            "f. Dizaynda uyg‘unlik: Bo‘sh joylar, shakllar va formalar yordamida vizual uyg‘unlik yaratish.",
        },
        {
          id: 7,
          title:
            "g. Shakl va formalar bilan ishlash: Geometrik va organik shakllardan foydalanish.",
        },
        {
          id: 8,
          title:
            "h. Vizual hikoya yaratish: Dizayn orqali xabarlar yetkazish va hissiyotlarni uyg‘otish.",
        },
      ],
    },
    {
      id: "02",
      title: "Vektor grafikalar va brending",
      body: [
        {
          id: 1,
          title:
            "a. Illustratorda vektor grafikalar: Vektor shakllar yaratish va tahrirlash.",
        },
        {
          id: 2,
          title:
            "b. Banner dizayni: Chop etish va raqamli media uchun samarali bannerlar yaratish.",
        },
        {
          id: 3,
          title:
            "c. Broshura dizayni: Tuzilishi, maketlari va samarali broshura yaratish bo‘yicha maslahatlar.",
        },
        {
          id: 4,
          title:
            "d. Katalog dizayni: Foydalanuvchilar uchun qulay va vizual jozibali katalog yaratish.",
        },
        {
          id: 5,
          title:
            "e. Logotip yaratish tamoyillari: Logotip dizayni va brend identifikatsiyasining asoslari.",
        },
        {
          id: 6,
          title:
            "f. Brandbook yaratish: Brend uchun to‘liq brandbook yaratish bo‘yicha yo‘l-yo‘riqlar.",
        },
        {
          id: 7,
          title:
            "g. Chopga tayyorlash: Dizaynlaringizni chop etishga tayyorlash bo‘yicha amaliy qadamlar.",
        },
        {
          id: 8,
          title:
            "h. Chop etishda tipografika: Chop etishda shriftlarni to‘g‘ri tanlash va ulardan foydalanish.",
        },
      ],
    },
    {
      id: "03",
      title: "Figma va ijtimoiy media dizayni",
      body: [
        {
          id: 1,
          title:
            "a. Figma dasturida ishlash: Figma interfeysi va hamkorlik xususiyatlariga kirish.",
        },
        {
          id: 2,
          title:
            "b. Ijtimoiy tarmoqlar uchun postlar yaratish: Instagram, Facebook va boshqa platformalar uchun jozibali postlar dizayni.",
        },
        {
          id: 3,
          title:
            "c. Prezentatsiya dizayni: Samarali vizual prezentatsiyalar yaratish.",
        },
        {
          id: 4,
          title:
            "d. Ijtimoiy tarmoqlar uchun story dizaynlar: Dinamik Instagram va Facebook storiylarini yaratish.",
        },
        {
          id: 5,
          title:
            "e. Figmada jamoaviy ish: Figmada jamoa bo‘lib ishlash texnikalari.",
        },
        {
          id: 6,
          title:
            "f. Murakkab maketlar yaratish: Figmada murakkab maketlar va komponentlar yaratish.",
        },
        {
          id: 7,
          title:
            "g. Gridlar va qo‘llanmalar bilan ishlash: Figma gridlaridan foydalanib aniq moslash va tuzilma yaratish.",
        },
        {
          id: 8,
          title:
            "h. SMD dizayn bo‘yicha maslahatlar: Ijtimoiy media post va storiylar dizaynining eng yaxshi amaliyotlari.",
        },
      ],
    },
    {
      id: "04",
      title: "Sun’iy intellekt vositalari bilan ishlash",
      body: [
        {
          id: 1,
          title:
            "a. Dizayndagi sun’iy intellektga kirish: Zamonaviy dizayn jarayonlarida sun’iy intellekt vositalari haqida umumiy tushuncha.",
        },
        {
          id: 2,
          title:
            "b. MidJourney dizaynerlar uchun: MidJourney yordamida ijodiy vizual g‘oyalar yaratish.",
        },
        {
          id: 3,
          title:
            "c. Adobe Firefly bilan ishlash: Adobe’ning sun’iy intellektga asoslangan kreativ vositalari bilan ishlash.",
        },
        {
          id: 4,
          title:
            "d. Freepik AI bilan ishlash: Freepik’dan dizayn loyihalari uchun sun’iy intellekt resurslaridan foydalanish.",
        },
        {
          id: 5,
          title:
            "e. Prompt yaratish: AI-dan foydalangan holda samarali promtlar yozish.",
        },
        {
          id: 6,
          title:
            "f. AI yordamida tez prototiplash: Sun’iy intellekt vositalari yordamida prototiplash jarayonini tezlashtirish.",
        },
        {
          id: 7,
          title:
            "g. Takrorlanuvchi vazifalarni avtomatlashtirish: AI yordamida dizayn jarayonidagi takrorlanuvchi vazifalarni avtomatlashtirish.",
        },
        {
          id: 8,
          title:
            "h. AI dizayndagi kelajak tendensiyalari: AI dizayn sohasini qanday o‘zgartirishi haqida kelajakdagi tendensiyalarni o‘rganish.",
        },
      ],
    },
    {
      id: "05",
      title: "Portfolio va professional rivojlanish",
      body: [
        {
          id: 1,
          title:
            "a. Portfolio yaratish: Qiziqarli va ta’sirchan dizayn portfolioni qanday tuzish kerak.",
        },
        {
          id: 2,
          title:
            "b. Mijoz topish: Dizayner sifatida mijozlarni jalb qilish va ular bilan bog‘lanish usullari.",
        },
        {
          id: 3,
          title:
            "c. Mijoz bilan muloqot: Dizayn g‘oyalarini samarali yetkazish va mijozlarning fikrlarini qabul qilish.",
        },
        {
          id: 4,
          title:
            "d. Mijozlarga loyiha topshirish: Mijozlarga natijalarni to‘g‘ri taqdim qilish va tashkil qilish bo‘yicha maslahatlar.",
        },
        {
          id: 5,
          title:
            "e. Rezyume va shaxsiy brend yaratish: Dizayner rezyumesi va shaxsiy brendingni shakllantirish.",
        },
        {
          id: 6,
          title:
            "f. Ish suhbatiga tayyorlanish: Dizayn bo‘yicha suhbatlarda muvaffaqiyat qozonish texnikalari va maslahatlari.",
        },
        {
          id: 7,
          title:
            "g. Dizayn tanlovlari va musobaqalari: Dizayn tanlovlaridan foydalanib portfolioni kengaytirish yo‘llari.",
        },
        {
          id: 8,
          title:
            "h. Freelance dizayn amaliyotlari: Freelance dizayner sifatida vaqtni boshqarish, narx belgilash va faoliyatni kengaytirish usullari.",
        },
      ],
    },
  ],
  project: [projectss],
  results: [img5, img6, img7, img5],
};

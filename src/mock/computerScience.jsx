import project1 from "../assets/images/windows.png";
import project2 from "../assets/images/komp1.jpg";
import project4 from "../assets/images/komp4.jpg";
import project5 from "../assets/images/komp5.jpg";
import project6 from "../assets/images/komp6.jpg";
import project3 from "../assets/images/kompp.webp";
import then1 from "../assets/icons/then1.png";
import then2 from "../assets/icons/then2.png";
import then3 from "../assets/icons/then3.png";
import width from "../assets/icons/komp.png";
import ai1 from "../assets/images/ai.png";
import ai2 from "../assets/images/ai1.png";
import ai3 from "../assets/images/ai2.png";
import ai4 from "../assets/images/ai3.png";
import ai5 from "../assets/images/ai4.png";
import ai6 from "../assets/images/ai5.png";
import courseImg from "../assets/course/computerscience.png";

const DesignTitle = () => <p></p>;

const DesignDesc = () => (
  <p>
    Kompyuter savodxonligi - bu kompyuterlardan va ularning dasturiy
    ta'minotlaridan foydalanish ko'nikmalariga ega bo'lishni anglatadi.
    Kompyuterlarning qanday ishlashini va kompyuter qismlari haqida umumiy
    ma'lumotlar, Windows, macOS, Linux kabi turli operatsion tizimlardan
    foydalanish qobiliyati, matn muharrirlari, elektron jadvallar, taqdimot
    dasturlari kabi ofis dasturlaridan foydalanish misol bo’ladi.
  </p>
);

export const computerScience = {
  courseImg,
  name: "Kompyuter Savodxonligi",
  keywords: "kompyuter Savodxonligi, offis dasturlari, word, excel, powerpoint",
  showcase: {
    title: "Ofis dasturlarida ishlashda peshqadam bo'ling!",
    desc: "Biz sizga ofis dasturlarida mukammal ishlashni o'rgatamiz va keyin siz esa siz har qanday ofis ishini bajarib keta olasiz!",
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
      "Kompyuter savodxonligini o‘rganish uchun qanday kompyuter kerak?",
    ai: [ai5, ai6, ai4, ai3, ai2],
    processor: "i5-i7",
    mamory: "256-512 GB",
    ram: "8-16 GB",
    videoCard: null,
  },
  about: {
    name: "Kompyuter savodxonligi",
    img: width,
    title: <DesignTitle />,
    desc: <DesignDesc />,
    projects: [project1, project3, project2],
  },
  then: [
    { id: 1, icon: then1, title: "Davlat korxonalari" },
    {
      id: 2,
      icon: then2,
      title: "Xususiy korxonalar",
    },
    {
      id: 3,
      icon: then3,
      title: "Kompyuter ishi zarur bo‘lgan har qanday kompaniyalar",
    },
  ],
  module: [
    {
      id: "01",
      title: "Kompyuter tarixi va tarmoq",
      body: [
        {
          id: 1,
          title: "a. Kompyuter bilan tanishish",
        },
        {
          id: 2,
          title: "b. Operatsion tizimlar haqida umumiy ma’lumot",
        },
        {
          id: 3,
          title: "c. Tarmoq haqida tushuncha",
        },
      ],
    },
    {
      id: "02",
      title: "Ofis dasturlari",
      body: [
        {
          id: 1,
          title: "a. Microsoft Word dasturi",
        },
        {
          id: 2,
          title: "b. Google Docs dasturi",
        },
        {
          id: 3,
          title: "c. Microsoft Excel",
        },
        {
          id: 4,
          title: "d. Google Sheets",
        },
        {
          id: 5,
          title: "e. Microsoft PowerPoint",
        },
        {
          id: 6,
          title: "f. Google Slides",
        },
      ],
    },
    {
      id: "03",
      title: "Kompyuter xavfsizligi va fayl boshqaruvi",
      body: [
        {
          id: 1,
          title: "a. Viruslardan himoyalanish",
        },
        {
          id: 2,
          title: "b. Zaxiraviy nusxalar (Backup) tuzish",
        },
        {
          id: 3,
          title: "c. Telegram va foydali saytlar bilan ishlash",
        },
      ],
    },
  ],
  project: [project4, project5, project6],
};

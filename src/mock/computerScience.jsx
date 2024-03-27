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
  showcase: {
    title: "Title",
    desc: "Description",
  },
  statistics: {
    succes: "80",
    working: "95",
    teching: "30",
    end: "25",
    price: "300",
    desc: "Agarda Sizning kurslarga qatnashish uchun mablag'ingiz yetarli bo'lmasa, bundan tushkunlikka tushmang. Biz Sizga bu muammoni hal etishda yordam beramiz.",
    aiDesc:
      "Kurs davomida sun'iy intellektlarda ishlashni va uni kasbingizda monitizatsiya qilishni o’rganasiz",
    computerTitle:
      "Kompyuter savodxonligini o‘rganish uchun qanday kompyuter kerak?",
    ai: [ai5, ai6, ai4, ai3, ai2, ai1],
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
          title: "none",
        },
        {
          id: 2,
          title: "none",
        },
        {
          id: 3,
          title: "none",
        },
      ],
    },
    {
      id: "02",
      title: "Ofis dasturlari",
      body: [
        {
          id: 1,
          title: "none",
        },
        {
          id: 2,
          title: "none",
        },
        {
          id: 3,
          title: "none",
        },
        {
          id: 4,
          title: "none",
        },
      ],
    },
    {
      id: "03",
      title: "Kompyuter xavfsizligi va fayl boshqaruvi",
      body: [
        {
          id: 1,
          title: "none",
        },
        {
          id: 2,
          title: "none",
        },
        {
          id: 3,
          title: "none",
        },
        {
          id: 4,
          title: "none",
        },
      ],
    },
  ],
  project: [project4, project5, project6],
};

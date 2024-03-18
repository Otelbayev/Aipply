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
import projectss from "../assets/icons/projectsbook.png";
import width from "../assets/images/width330.png";

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

export const computerScience = {
  showcase: {
    title: "Grafik dizaynni zamon talabida o’rganing",
    desc: "Siz singa zamonaviy bilimlar asosida grafik dizaynni o’rgatamiz va sizni daromatga olib chiqamiz",
  },
  statistics: {
    succes: "80",
    working: "95",
    teching: "30",
    end: "25",
    price: "300",
    desc: "Agarda Sizning kurslarga qatnashish uchun mablag'ingiz yetarli bo'lmasa, bundan tushkunlikka tushmang. Biz Sizga bu muammoni hal etishda yordam beramiz.",
    aiDesc:
      "Kurs davomida dizayn qoidalari va dasturlardan tashqari suniy intellektlarda ishlashni va uni kasbingizda monitizatsiya qilishni o’rganasiz",
    computerTitle: "Grafik dizaynni o’rganish uchun qanday kompyuter kerak?",
    processor: "i5-i7",
    mamory: "256-512 GB",
    ram: "8-16 GB",
    videoCard: "4-6 GB",
  },
  about: {
    name: "Dizayn",
    img: width,
    title: <DesignTitle />,
    desc: <DesignDesc />,
    projects: [project1, project2, project3, project4, project5, project6],
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
      title: "Photoshop",
      body: [
        {
          id: 1,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
        {
          id: 2,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
        {
          id: 3,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
      ],
    },
    {
      id: "02",
      title: "Illustrator",
      body: [
        {
          id: 1,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
        {
          id: 2,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
        {
          id: 3,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
        {
          id: 4,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
      ],
    },
    {
      id: "03",
      title: "Suniy intekektlar",
      body: [
        {
          id: 1,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
        {
          id: 2,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
        {
          id: 3,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
        {
          id: 4,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
      ],
    },
    {
      id: "04",
      title: "Figma",
      body: [
        {
          id: 1,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
        {
          id: 2,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
        {
          id: 3,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
        {
          id: 4,
          title:
            "1.Lorem ipsum dolor sit amet consectetur. Adipiscing ac quis nisl massa. Imperdiet at felis viverra eu imperdiet. Fringilla sodales commodo et non quis. Enim duis in vel donec etiam.",
        },
      ],
    },
  ],
  project: projectss,
};

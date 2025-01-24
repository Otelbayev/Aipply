import then1 from "../assets/icons/then1.png";
import then2 from "../assets/icons/then2.png";
import then3 from "../assets/icons/then3.png";
import then4 from "../assets/icons/then4.png";
import then5 from "../assets/icons/then5.png";
import img from "../assets/images/python.webp";
import project1 from "../assets/images/front1.jpg";
import project2 from "../assets/images/front2.webp";
import project3 from "../assets/images/front3.webp";
import project4 from "../assets/images/front4.jpg";
import project5 from "../assets/images/front5.webp";
import project6 from "../assets/images/front6.webp";
import project7 from "../assets/images/front7.jpg";
import project8 from "../assets/images/front8.jpg";
import ai2 from "../assets/images/ai1.png";
import ai3 from "../assets/images/ai2.png";
import ai4 from "../assets/images/ai3.png";
import ai5 from "../assets/images/ai4.png";
import ai6 from "../assets/images/ai5.png";
import courseImg from "../assets/images/course/python.png";
import img1 from "../assets/images/results/dasturlash/1.jpg";
import img2 from "../assets/images/results/dasturlash/2.png";
import img3 from "../assets/images/results/dasturlash/3.png";
import img4 from "../assets/images/results/dasturlash/4.jpg";

const FrontendTitle = () => "";

const FrontendDesc = () => (
  <p>
    Django bu Python dasturlash tilida web saytlar yaratish uchun full stack
    framework hisoblanadi. Unda Django REST Framework, Django CMS, Django-all
    auth va boshqa ko'plab kutubxonalar mavjud. Shu bilan birga u Django ORM,
    Django Admin, Django Template kabi elementlarga ega.
  </p>
);

export const python = {
  courseImg,
  path: "python",
  name: "Python",
  month: 6,
  keywords: "Aipply Academy, Python kusi, python uz, ",
  showcase: {
    title: "Python-Django orqali daromadga chiqing!",
    desc: "Biz sizga zamonaviy bilimlar asosida dasturlashni o’rgatamiz va sizni daromatga olib chiqamiz",
    keywords:
      "Aipply Academy, Python TensorFlow kurslari, TensorFlow darslari, TensorFlow o'rganish, TensorFlow bo'yicha treninglar, Toshkentda TensorFlow kurslari, Mashinaviy o'qitish, Sun'iy intellekt, Neural network kurslari, AI darslari, Deep learning, Data science, Python darslari, TensorFlow amaliyotlari, TensorFlow O'zbekiston, Aipply o'quv markazi",
  },
  statistics: {
    succes: "80",
    working: "95",
    teching: "30",
    end: "25",
    price: "500",
    desc: "Agarda Sizning kurslarga qatnashish uchun mablag'ingiz yetarli bo'lmasa, bundan tushkunlikka tushmang. Biz Sizga bu muammoni hal etishda yordam beramiz.",
    aiDesc:
      "Kurs davomida dasturlardan tashqari Sun'iy intellektlarda ishlashni va uni kasbingizda monitizatsiya qilishni o’rganasiz",
    computerTitle: "Dasturlashni o’rganish uchun qanday kompyuter kerak?",
    ai: [ai5, ai6, ai4, ai3, ai2],
    processor: "i3-i7",
    memory: "256-512 GB",
    ram: "4-16 GB",
    videoCard: null,
  },
  about: {
    name: "Python-Django-TensorFlow",
    img: img,
    title: <FrontendTitle />,
    desc: <FrontendDesc />,
    projects: [project1, project2, project3, project4, project5, project6],
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
      title: "Web dasturlarning texnologiyalari",
      body: [
        {
          id: 1,
          title: "a. Web dasturlarning arxitekturalari",
        },
        {
          id: 2,
          title: "b. Ma'lumotlar Ombori",
        },
        {
          id: 3,
          title: "c. Flaskda web dasturlar tuzish",
        },
      ],
    },
    {
      id: "02",
      title: "Django framework",
      body: [
        {
          id: 1,
          title: "a. ORM qanday ishlaydi.",
        },
        {
          id: 2,
          title: "b. Djangoda modellar tuzish.",
        },
        {
          id: 3,
          title: "c. Django Shellda ORM ustida amallar bajarish.",
        },
        {
          id: 4,
          title: "d. Modellar o'rtasidagi aloqalar ustida ishlash",
        },
        {
          id: 5,
          title: "e. Django admin imkoniyatlari.",
        },
      ],
    },
    {
      id: "03",
      title: "Django Rest Framework",
      body: [
        {
          id: 1,
          title: "a. MTV Arxitekturasi, URLlar bilan ishlash.",
        },
        {
          id: 2,
          title: "b. Viewlar bilan ishlash.",
        },
        {
          id: 3,
          title: "c. Formlar va Templatelar.",
        },
        {
          id: 4,
          title: "d. Blog dasturi bilan tanishish.",
        },
        {
          id: 5,
          title: "e. Loyihaga CSS qo'shish.",
        },
      ],
    },
    {
      id: "04",
      title: "DRF Viewsets & CRUD",
      body: [
        {
          id: 1,
          title: "a. DRF Authentication & Permission.",
        },
        {
          id: 2,
          title: "b. Unit & Integration Tests.",
        },
        {
          id: 3,
          title: "c. Docker & Docker Compose.",
        },
        {
          id: 4,
          title: "d. CI/CD with GitHub Actions.",
        },
      ],
    },
  ],
  project: [project8, project7],
  results: [img1, img2, img3, img4],
};

import then1 from "../assets/icons/then1.png";
import then2 from "../assets/icons/then2.png";
import then3 from "../assets/icons/then3.png";
import then4 from "../assets/icons/then4.png";
import then5 from "../assets/icons/then5.png";
import inex1 from "../assets/images/inex1.jpg";
import inex2 from "../assets/images/inex2.jpg";
import inex3 from "../assets/images/inex3.jpg";
import inex4 from "../assets/images/inex4.jpg";
import inex5 from "../assets/images/inex5.jpg";
import inex6 from "../assets/images/inex6.jpg";
import ai2 from "../assets/images/ai1.png";
import ai3 from "../assets/images/ai2.png";
import ai4 from "../assets/images/ai3.png";
import ai5 from "../assets/images/ai4.png";
import ai6 from "../assets/images/ai5.png";
import courseImg from "../assets/images/course/inexdesign.png";
import img8 from "../assets/images/results/inex/1.png";
import img9 from "../assets/images/results/inex/2.png";
import img10 from "../assets/images/results/inex/3.png";
import img11 from "../assets/images/results/inex/4.png";
import img12 from "../assets/images/results/inex/5.png";

const Title = () => "";

const Desc = () => (
  <p>
    Interyer dizayn — atrof-muhit va odamlar oʻrtasidagi qulaylik va estetik
    jihatdan yoqimli oʻzaro taʼsirni taʼminlash uchun binolarning ichki qismiga
    qaratilgan dizayn sohasi. Exteryer dizayn — binolarning tashqi qismiga
    qaratilgan dizayn sohasi. Dizayner xonadagi ishlarni optimallashtirishni
    amalga oshiradi, mijozlarning talablariga muvofiq ixtisoslashtirilgan
    xonalarning dizaynini ishlab chiqadi (masalan, ovoz yozish studiyalari,
    filmlarni tahrirlash, fotografiya, uylarlar). Dizayner xonaning tartibi,
    yorugʻlik, shamollatish tizimlari, akustikadan boshlab, ichki dizaynning
    butun jarayonini boshqaradi; devorlarni bezash va mebelni joylashtirish va
    navigatsiya belgilarini oʻrnatish bilan yakunlanadi.
  </p>
);

export const interior = {
  path: "in-ex-design",
  month: 3,
  courseImg,
  name: "Interior/Exterior Dizayn",
  keywords: "Interior, Exterior, dizayn, grifika, 3d max",
  showcase: {
    title: "Interior/Exterior dizayn orqali daromadga chiqing!",
    desc: "Biz sizga zamonaviy bilimlar asosida Interior/Exterior dizaynni o’rgatamiz va sizni daromatga olib chiqamiz",
    keywords:
      "Aipply Academy, Interior dizayn kurslari, Exterior dizayn kurslari, Ichki makon dizayni, Tashqi makon dizayni, Interior dizayn o'quv markazi, Exterior dizayn bo'yicha treninglar, Ichki va tashqi dizayn darslari, 3D max kurslari, ArchiCAD darslari, SketchUp dizayn, Toshkentda dizayn kurslari, Uy dizayni, Landshaft dizayni, Interyer dizayn asoslari, Tashqi dizayn o'rganish, Aipply dizayn akademiyasi",
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
      "Interior/Exterior dizaynni o’rganish uchun qanday kompyuter kerak?",
    ai: [ai5, ai6, ai4, ai3, ai2],
    processor: "i3-i7",
    memory: "256-512 GB",
    ram: "4-16 GB",
    videoCard: null,
  },
  about: {
    name: "Interior/Exterior dizayn",
    img: courseImg,
    title: <Title />,
    desc: <Desc />,
    projects: [inex1, inex2, inex3],
  },
  then: [
    {
      id: 1,
      icon: then1,
      title:
        "Mustaqil Dizayner sifatida: Ko'plab interer dizaynerlari mustaqil (freelance) ishlashni afzal ko'rishadi. Bu ularga turli xil mijozlar bilan ishlash va o'zlarining ish jadvalini boshqarish imkonini beradi. ",
    },
    {
      id: 2,
      icon: then2,
      title:
        "Dizayn Agentliklari va Studiyalari: Dizayn agentliklari va studiyalari interer dizaynerlari uchun keng imkoniyatlar yaratib, turli loyihalar ustida ishlash imkonini beradi. Bu turdagi ish joylari jamoa bo'lib ishlashni talab qiladi. ",
    },
    {
      id: 3,
      icon: then3,
      title:
        "Mebel va bezak mahsulotlari do'konlari: Ba'zi interer dizaynerlari mebel va bezak mahsulotlarini sotadigan do'konlar bilan hamkorlik qilishadi, mijozlarga ularning uyini bezashda maslahat berishadi.",
    },
    {
      id: 4,
      icon: then4,
      title:
        "Qurilish va ta'mirlash kompaniyalari: Ko'plab dizaynerlar qurilish va ta'mirlash loyihalarida ishtirok etishadi, yangi binolar yoki ta'mirlanayotgan xonadonlar uchun interer dizaynini ishlab chiqishadi. ",
    },
    {
      id: 5,
      icon: then5,
      title:
        "Mehmonxona va Restoranlar: Mehmonxona va restoranlar o'zlarining interer dizayniga alohida e'tibor berishadi, shuning uchun ular interer dizaynerlarini doimiy yoki loyiha asosida yollashlari mumkin",
    },
    {
      id: 6,
      icon: then1,
      title:
        "Korporativ Ofislar: Korporativ ofislar ham o'z ishxonalarining interer dizaynini yaxshilash maqsadida interer dizaynerlaridan foydalanishlari mumkin.",
    },
    {
      id: 7,
      icon: then2,
      title:
        "O'quv Muassasalari va Jamoat Binolari: Maktablar, universitetlar, kutubxonalar va boshqa jamoat binolari ham o'zlarining ichki makonlarini loyihalash va bezash uchun interer dizaynerlarini jalb qilishadi",
    },
  ],
  module: [
    {
      id: "01",
      title: "AutoCad vositalari hamda 2d loyiha tayorlash.",
      body: [
        {
          id: 1,
          title: "a.	AutoCad asoslari.",
        },
        {
          id: 2,
          title: "b.	Sun'iy intellektdan foydalangan holda loyiha tayyorlash.",
        },
      ],
    },
    {
      id: "02",
      title: "2d loyihalar asosida 3d loyiha yaratish.",
      body: [
        {
          id: 1,
          title: "a.	3ds MAX dasturinging asosiy fuksiyalari.",
        },
        {
          id: 2,
          title: "b.	Obektlarga o’zgartirishlar kiritish.",
        },
      ],
    },
    {
      id: "03",
      title: "Textura, yorug’lik, kamera hamda render qismi (Corona Render)",
      body: [
        {
          id: 1,
          title: "a.	Modeling, textura hamda yorug’lik qismi.",
        },
        {
          id: 2,
          title: "b.	Material, yoruglik, kamera parametrlari hamda 2d loyhalar.",
        },
        {
          id: 3,
          title: "c.	Bubble-da foydalanuvchi interfeysi.",
        },
      ],
    },
    {
      id: "04",
      title: "Loyihani vizualtizatsiya qilish ",
      body: [
        {
          id: 1,
          title:
            "a.	Corona render yordamida loyihani visual ko’rinishini tayyorlash.",
        },
        {
          id: 2,
          title: "b.	Mahsulotga yakuniy ishlov berish .",
        },
      ],
    },
    {
      id: "05",
      title: "5.	Interior designda sun'iy intellektdan foydalanish.",
      body: [
        {
          id: 1,
          title: "a.	2d loyihalar uchun sun'iy intellektdan foydalanish.",
        },
        {
          id: 2,
          title: "b.	Material yaratishda foydalaniladigan AI.",
        },
      ],
    },
  ],
  project: [inex4, inex5, inex6],
  results: [img9, img8, img10, img11, img12],
};

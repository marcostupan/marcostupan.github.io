"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DashboardCard from "@/components/dashboards";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "TastyBurger",
    desc: "Projeto de Hamburgueria realizado através do React e React-Bootstrap. Com um design elegante e bonito.",
    img: "/projects/1_TastyBurger.png",
    link: "https://tasty-burger-blond.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "The Fit Club",
    desc: "Projeto de Academia realizado utilizando o React e Css, utiliza-se de várias animações e resposividade mobile.",
    img: "/projects/2_The fit Club.png",
    link: "https://fit-club-website-lyart.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Cara Store",
    desc: "Projeto de Ecommerce de roupas feito utilizando HTML, CSS e JavaScript.",
    img: "/projects/3_Cara Loja.png",
    link: "https://cara-store-six.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Hotel Guarany",
    desc: "Projeto site de reserva de hoteis e pousadas, feito utilizando Html, CSS e JavaScript com Bootstrap.",
    img: "/projects/4_ Hotel Guarany.png",
    link: "https://hotel-guarany1.vercel.app/",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "Movie Spot",
    desc: "Projeto de pesquisa de filmes utilizando API TMDB bem como utilizado React, JavaScript e CSS.",
    img: "/projects/4. MovieSpot.png",
    link: "https://movie-spot-snowy.vercel.app/",
  },
  {
    id: 6,
    color: "from-blue-300 to-violet-300",
    title: "StarWars Characters",
    desc: "Um dos primeiros projetos que fiz, utilizando JavaScript, Html e Css, com consumo de API. ",
    img: "/projects/5_ StarWars Characters.png",
    link: "https://star-wars-characters-iota.vercel.app/",
  },
  {
    id: 7,
    color: "from-violet-300 to-purple-300",
    title: "Climatic",
    desc: "Um app de pesquisa de tempo consumindo a API OpenWeather, utilizei JavaScript, CSS e HTML.",
    img: "/projects/6_Climatic.png",
    link: "https://climatic-gamma.vercel.app/",
  },
  {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "Academia Lumina",
    desc: "Um site educacional online, feito utilizando HTML, CSS e JavaScript. ",
    img: "/projects/7_ Academia Lumina.png",
    link: "https://academia-lumina.vercel.app/",
  },
  {
    id: 9,
    color: "from-red-300 to-blue-300",
    title: "CryptoCode",
    desc: "Um site Institucional referente à Criptomoedas. Utilizei Vite, React, Sass e AOS. ",
    img: "/projects/8_cryptocode.png",
    link: "https://crypto-code-six.vercel.app/",
  },
  {
    id: 10,
    color: "from-blue-300 to-violet-300",
    title: "MR7 Store",
    desc: "Um site de ecommerce de Roupas, feito utilizando HMTL, CSS e JavaScript.",
    img: "/projects/9_ Mr7 Store.png",
    link: "https://mr-7-store.vercel.app/",
  },
 
];


const PortifolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[550vh]  relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center sm:text-4xl text-8xl  text-center">
          Meus Projetos ↓
        </div>

        {/* Cards Dev */}
        <h2 className="text-2xl font-semibold mb-4 text-center mt-[10vh] mb-[10vh] relative">
          Projetos de Desenvolvimento Front-end
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              className={`bg-gradient-to-r ${item.color} text-white rounded-lg overflow-hidden`}
              key={item.id}
            >
              <div className="p-4">
                <h1 className="text-lg md:text-2xl lg:text-4xl xl:text-6xl">
                  {item.title}
                </h1>
                <div className="relative w-full h-40 md:w-72 md:h-48 lg:w-96 lg:h-64 xl:w-112 xl:h-80">
                  <Image
                    src={item.img}
                    alt=""
                    // layout="fill"
                    width={800}
                    height={600}
                    objectFit="cover"
                  />
                </div>
                <p className="mt-4">{item.desc}</p>
                <Link
                  href={item.link}
                  target="_blank"
                  className="flex justify-center mt-4"
                >
                  <button className="p-1 text-sm md:p-2 md:text-md lg:p-4 lg:text-base bg-white text-gray-600 font-semibold rounded">
                    Veja!
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="h-[40vh] relative flex items-center justify-center text-lg">
          <h1>Acesse meu GitHub (marcostupan)</h1>
          <Link href="https://github.com/marcostupan" target="_blank">
            <Image src="/github.png" alt="" width={50} height={48} />
          </Link>
        </div>
      </div>

      {/* Voce tem algum proejto? */}
      <div className=" w-full  w-screen h-screen flex flex-col gap-16 items-center justify-center text-center md:mt-[25vh] ">
        <h1 className="text-4xl md:text-2xl ">Você tem algum projeto?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end and Back-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contrate
          </Link>
        </div>
        <div className="md:flex gap-4  flex-center">
          <Link href="https://github.com/marcostupan" target="_blank">
            <Image src="/github.png" alt="" width={50} height={48} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/marcos-ribeiro-dm/"
            target="_blank"
          >
            <Image src="/linkedin.png" alt="" width={50} height={48} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortifolioPage;


        {/* <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white">
                  <h1 className="text-lg md:text-2xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-67 h-40 md:w-72 md:h-48 lg:w-96 lg:h-64 xl:w-112 xl:h-80">
                    <Image src={item.img} alt="" width={800} height={600} />
                  </div>
                  <p className="w-64 md:w-72 lg:w-96 lg:text-base xl:w-112">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex justify-center"
                  >
                    <button className="p-1 text-sm md:p-2 md:text-md lg:p-4 lg:text-base bg-white text-gray-600 font-semibold m-4 rounded">
                      Veja!
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
          </motion.div>
        </div> */}
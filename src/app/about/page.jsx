"use client";


import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import React, {useRef} from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const {scrollYProgress} = useScroll({container: containerRef});
  
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {margin:"-100px"});

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll flex" ref={containerRef}>
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* Biografycontainer */}
          <div className="flex flex-col gap-12 justify-center">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.2 }}
              className="font-bold text-2xl"
            >
              BIOGRAFIA/BIOGRAPHY
            </motion.h1>
            <p className="text-lg">
              Contador de formação, trilhei minha carreira como auditor
              independente na Deloitte e como Auditor Interno no BNP Paribas,
              trabalhando presencialmente e remotamente em diversos países da
              América Latina, como Peru, Colômbia, Chile e Argentina. Com
              experiência em equipes globais, comunicando-me fluentemente em
              inglês, espanhol e português, transitei há oito meses para a área
              de desenvolvimento. Atualmente, trabalho como dev fullstack. Além
              disso, minha vida é enriquecida pela música, tocando violino,
              violoncelo e viola, e pela prática de artes marciais como ChiKung
              e KungFu.
            </p>
            <span className="italic">
              Accountant and auditor, I forged my career as an independent
              auditor at Deloitte and as an Internal Auditor at BNP Paribas,
              working both on-site and remotely in several countries across
              Latin America, such as Peru, Colombia, Chile, and Argentina. With
              experience in global teams, fluently communicating in English,
              Spanish, and Portuguese, I transitioned eight months ago to the
              development field. Currently, I work as a fullstack developer.
              Additionally, my life is enriched by music, playing the violin,
              cello, and viola, and by practicing martial arts such as ChiKung
              and KungFu.
            </span>
            {/* SIGN */}
            <div className="self-end">Marcos Ribeiro</div>
          </div>
          {/* SVG */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </svg>
          {/* skilss container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
            initial={{x: "-300px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            transition={{delay: 0.2}}
            className="font-bold text-2xl"
            >SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div 
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap  ">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React Native
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postgres
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MariaDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GitHub
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
            </motion.div>

            {/* skill scroll svg */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>

          {/* experience container */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            <motion.h1
              initial={{x: "-200px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{delay: 0.2}}
              className="font-bold text-2xl"
            >
              EXPERIENCIA/EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-50px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="">
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Dev Freelancer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Iniciei como Dev Freelancer em agosto 23.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - Present
                  </div>
                  {/* JOB COMPANY */}

                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Accountant (Contador)
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Trabalho como autonomo de contabilidade desde 2019{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - Present
                  </div>
                  {/* JOB COMPANY */}
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Auditor Interno (Internal Auditor)
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Auditing in Latam com times multilingues e multiculturais.
                    Auditei países como Peru, Colombia, Chile e Brasil.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2017 - 2019{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    BNP Paribas
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Auditor Externo (external Auditor){" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Auditor externo, trabalhei no audit inovation e com tableau
                    Facilitava treinamentos de auditoria.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2014 - 2017{" "}
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Deloitte & Touche Thomatsu Ltda
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Container */}
        <motion.div
          className=" hidden lg:block w-1/3 xl:1/2 sticky top-0 "
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            scrollYProgress={scrollYProgress}
            className=" w-full h-full object-contain"
            src="/Progammer.svg"
            width="100"
            height="100"
            alt="brain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;

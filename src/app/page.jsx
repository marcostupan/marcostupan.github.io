"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Homepage = () => {


  return (
    <>
      <motion.div
        className="h-full "
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* IMAGE CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 relative z-10 ">
            <Image
              src="/Marcos_Auditor.png"
              fill
              alt=""
              className=" sm:w-auto md:w-auto object-contain"
            />
          </div>
          {/* Text Container */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            {/* TITLE */}
            <h1 className="text-2xl md:text-4xl font-bold">
              Criando Experiências Digitais, Comprometimento com Excelência{" "}
            </h1>
            {/* DESCRIPTION */}
            <p className="md:text-xl">
              Bem vindo ao meu WebPortifólio, aonde inovação e criatividade
              convergem. Minha dedicação à integridade e profissionalismo
              garante que cada projeto seja tratado com máxima responsabilidade,
              resultando em entregas confiáveis e de alto desempenho.{" "}
            </p>
            {/* BUTTONS */}
            <div className="w-full flex gap-4">
              <a href="/portfolio" className="p-4 rounded-lg ring-1 ring-black bg-black text-white ">
                Veja meu trabalho
              </a>
              <a href="/contact" className="p-4 rounded-lg ring-1 ring-black">
                Contato
              </a>
              <a href="https://curriculum-silk.vercel.app/" target="_blank" className="p-4 rounded-lg ring-1 ring-black bg-black text-white ">
                Curriculum
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Homepage;

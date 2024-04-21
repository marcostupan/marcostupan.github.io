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
          <div className="h-1/2 lg:h-full lg:w-1/2 relative  ">
            <Image
              src="/Marcos_Auditor.png"
              fill
              alt=""
              className=" w-full h-auto sm:w-auto md:w-auto lg:w-auto object-contain"
            />
          </div>
          {/* Text Container */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            {/* TITLE */}
            <h1 className="text-2xl md:text-4xl font-bold">
              Desenvolvedor | Data Analyst {" "}
            </h1>
            
            {/* DESCRIPTION */}
            <p className="md:text-xl">
              Bem vindo ao meu WebPortifólio, aonde inovação e criatividade
              convergem. Minha dedicação à integridade e profissionalismo
              garante que cada projeto seja tratado com máxima responsabilidade,
              resultando em entregas confiáveis e de alto desempenho.{" "}
            </p>
            {/* BUTTONS */}
            <div className="w-full grid grid-cols-2 gap-4">
              <a href="/portfolio" className="p-4 rounded-lg ring-1 text-center ring-black bg-black text-white ">
                Portifólio
              </a>
              <a href="/contact" className="p-4 rounded-lg ring-1 ring-black text-center">
                Contato
              </a>
              <a href="https://curriculum-silk.vercel.app/" target="_blank" className="p-4 rounded-lg text-center ring-1 ring-black ">
                Curriculum
              </a>
              <a href="/dashboards" className="p-4 rounded-lg ring-1 ring-black bg-black text-center text-white">
                PowerBI
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Homepage;

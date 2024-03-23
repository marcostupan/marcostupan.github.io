"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Diga Oi!";

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* TEXt CONTaINEr */}
        <div className="h-1/2 lg:w-1/2 lg:h-full flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            🙂
            <br />
            <a
              href="https://wa.me/5511964632207?text=Olá,%20gostaria%20de%20entrar%20em%20contato."
              target="_blank"
              rel="noopener noreferrer"
              className=" text-sm ml-4 bg-green-500 rounded px-4 py-2 text-white font-semibold"
            >
              Contate-me no WhatsApp
            </a>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          action="https://formspree.io/f/mvoebypn"
          method="POST"
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl  flex flex-col gap-8 justify-center p-10"
        >
          <span  style={{ marginBottom: "8px" }} >Caro Marcos Ribeiro,</span>
          <textarea
            name="mensagem"
            rows={6}
            placeholder="Insira sua mensgem..."
            className="bg-transparent border-b-2 border-b-black outline-none resize-none h-24 p-2"
          />
          <span style={{ marginBottom: "8px" }} >Meu email é:</span>
          <input
            type="text"
            name="_replyto"
            placeholder="Insira o Email..."
            className="bg-transparent border-b-2 border-b-black outline-none p-2"
          />
          <span  >Muito obrigado,</span>
          <button type="submit" target="_blank" className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Enviar
          </button>
          {success && <span className="text-green-500 font-semibold">Sua mensagem foi enviada com sucesso!</span>}
          {error && <span className="text-red-600 font-semibold">Algo está errado!</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;

"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0A1F44]/50 mix-blend-multiply z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B16]/40 to-[#050B16] z-20" />

      <div className="absolute inset-0 z-0 bg-[#050B16]">
        <img
          src="/hero-principal.png"
          alt="JCI Industrial Hero"
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
        />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 pb-16 flex flex-col items-center text-center lg:items-start lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#E60000]/30 bg-[#E60000]/10 backdrop-blur-md text-[#E60000] font-medium text-xs tracking-[0.2em] uppercase rounded-full"
          >
            <Settings className="w-4 h-4 animate-spin-slow" />
            Engenharia Industrial Avançada
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white drop-shadow-2xl">
            Soluções Industriais para Operações que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E60000] to-[#E2E8F0]">
              Não Podem Parar
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#E2E8F0] max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
            Mais de 20 anos desenvolvendo projetos mecânicos, automação industrial, correias transportadoras, esteiras, usinagem, estruturas metálicas e manutenção industrial para empresas de alto desempenho.
          </p>

          <div className="flex pt-2 justify-center lg:justify-start">
            <a
              href="https://wa.me/5592981387644?text=Olá, gostaria de falar com um especialista sobre soluções industriais"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 sm:px-8 py-4 bg-[#E60000] text-white font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 w-full sm:w-auto text-sm flex items-center justify-center gap-3 animate-[pulse_2s_infinite] hover:animate-none hover:shadow-[0_0_30px_rgba(230,0,0,0.6)] rounded-full"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.062-.301-.15-1.264-.468-2.406-1.488-.888-.788-1.487-1.761-1.658-2.059-.173-.301-.018-.461.13-.611.134-.133.301-.35.451-.525.146-.176.196-.301.296-.501.101-.201.05-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.301-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.36z" />
                <path d="M20.52 3.449A11.964 11.964 0 0012 .002C5.38.002.002 5.383.002 12.004c0 2.115.552 4.185 1.6 6L.002 24l6.14-1.61c1.8.966 3.82 1.47 5.858 1.47h.005c6.617 0 11.996-5.38 11.996-12.004a11.921 11.921 0 00-3.481-8.407zM12 21.84c-1.79 0-3.542-.482-5.076-1.39l-.364-.216-3.774.99.998-3.682-.236-.376A9.972 9.972 0 012.02 12.004c0-5.512 4.488-10.002 10.003-10.002A9.919 9.919 0 0119.09 4.93a9.922 9.922 0 012.923 7.073c-.001 5.514-4.49 10.005-10.005 10.005h-.008z" />
              </svg>
              <span className="relative">Falar com Especialista</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

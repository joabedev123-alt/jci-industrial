"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative py-32 px-6 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000" 
          alt="Indústria aérea" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#0A1F44]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-[#050B16]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white drop-shadow-lg"
        >
          Precisa de uma Solução Industrial Sob Medida?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-[#E2E8F0] mb-12 max-w-3xl mx-auto font-light"
        >
          Projetamos, fabricamos e implementamos soluções completas para aumentar a produtividade, reduzir falhas e elevar a eficiência operacional da sua empresa.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center"
        >
          <a 
            href="https://wa.me/5592981387644?text=Olá, gostaria de falar com um especialista sobre soluções industriais"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-[#E60000] text-white font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 w-full sm:w-auto text-sm flex items-center justify-center gap-3 animate-[pulse_2s_infinite] hover:animate-none hover:shadow-[0_0_40px_rgba(230,0,0,0.6)] rounded-full"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 fill-current">
              <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.062-.301-.15-1.264-.468-2.406-1.488-.888-.788-1.487-1.761-1.658-2.059-.173-.301-.018-.461.13-.611.134-.133.301-.35.451-.525.146-.176.196-.301.296-.501.101-.201.05-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.301-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.36z"></path>
              <path d="M20.52 3.449A11.964 11.964 0 0012 .002C5.38.002.002 5.383.002 12.004c0 2.115.552 4.185 1.6 6L.002 24l6.14-1.61c1.8.966 3.82 1.47 5.858 1.47h.005c6.617 0 11.996-5.38 11.996-12.004a11.921 11.921 0 00-3.481-8.407zM12 21.84c-1.79 0-3.542-.482-5.076-1.39l-.364-.216-3.774.99.998-3.682-.236-.376A9.972 9.972 0 012.02 12.004c0-5.512 4.488-10.002 10.003-10.002A9.919 9.919 0 0119.09 4.93a9.922 9.922 0 012.923 7.073c-.001 5.514-4.49 10.005-10.005 10.005h-.008z"></path>
            </svg>
            <span className="relative">Falar com Especialista</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

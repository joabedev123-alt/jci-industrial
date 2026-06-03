"use client";

import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5592981387644"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-shadow cursor-pointer"
    >
      <div className="absolute inset-0 rounded-full animate-[ping_2.5s_infinite] bg-[#25D366] opacity-30" />
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="text-white fill-current relative z-10">
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.062-.301-.15-1.264-.468-2.406-1.488-.888-.788-1.487-1.761-1.658-2.059-.173-.301-.018-.461.13-.611.134-.133.301-.35.451-.525.146-.176.196-.301.296-.501.101-.201.05-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.301-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.36z"></path>
        <path d="M20.52 3.449A11.964 11.964 0 0012 .002C5.38.002.002 5.383.002 12.004c0 2.115.552 4.185 1.6 6L.002 24l6.14-1.61c1.8.966 3.82 1.47 5.858 1.47h.005c6.617 0 11.996-5.38 11.996-12.004a11.921 11.921 0 00-3.481-8.407zM12 21.84c-1.79 0-3.542-.482-5.076-1.39l-.364-.216-3.774.99.998-3.682-.236-.376A9.972 9.972 0 012.02 12.004c0-5.512 4.488-10.002 10.003-10.002A9.919 9.919 0 0119.09 4.93a9.922 9.922 0 012.923 7.073c-.001 5.514-4.49 10.005-10.005 10.005h-.008z"></path>
      </svg>
    </motion.a>
  );
}

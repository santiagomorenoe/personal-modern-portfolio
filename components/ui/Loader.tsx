"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mensajes = [
  "Inicializando portfolio...",
  "Cargando experiencias...",
  "Preparando proyectos...",
  "¡Listo para inspirarte!",
];

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [progreso, setProgreso] = useState(0);
  const [mensaje, setMensaje] = useState(0);

  useEffect(() => {
    if (progreso < 100) {
      const timer = setTimeout(() => setProgreso(progreso + 2), 30);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onFinish, 500);
    }
  }, [progreso, onFinish]);

  useEffect(() => {
    if (mensaje < mensajes.length - 1 && progreso > (mensaje + 1) * 25) {
      setMensaje(mensaje + 1);
    }
  }, [progreso, mensaje]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-purple-900 to-blue-900"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-white mb-6">Santi</h1>
        <div className="w-64 h-2 bg-white/20 rounded-full mb-4 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-400 to-blue-400"
            initial={{ width: 0 }}
            animate={{ width: `${progreso}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-white/80 text-lg">{mensajes[mensaje]}</p>
        <span className="text-white/50 mt-2">{progreso}%</span>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;

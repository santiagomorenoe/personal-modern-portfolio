"use client";

import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pb-20 overflow-x-hidden">
      <div>
        <Spotlight
          className="pt-[200px] w-[100vw] md:pt-0 top-[120px] -right-10 md:-right-32 md:-top-20"
          fill="#615FFF"
        />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center items-center relative my-20 z-10 pt-[200px]">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Every Line of Code, a Testament to Quality"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <div className="flex justify-center items-center w-full max-w-3xl mx-auto">
            <motion.p
              className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white/80 capitalize"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              Hi, I&apos;m Santi, a Professional Full Stack Dev & AI Engineer
              student based in Mexico City
            </motion.p>
          </div>

          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.85 }}
          >
            <MagicButton
              title="Download CV"
              icon={<FaLocationArrow />}
              position="right"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

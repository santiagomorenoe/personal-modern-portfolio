import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 overflow-hidden" id="contact">
      <div className="flex flex-col items-center relative">
        {/* background grid */}
        <div className="w-full absolute left-0 -bottom-72">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50 "
          />
        </div>
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s <span className="text-purple">build </span> something great
          together.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out today to start turning your vision into a digital reality.
        </p>
        <a href="mailto:morenoestradasantiago@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Santiago Moreno
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StickyScroll } from "./ui/StickyScrollSection.";
import { certificationsData } from "@/data";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex w-full relative z-20">
        <StickyScroll
          content={certificationsData}
          contentClassName="flex flex-col gap-4"
        />
      </div>
    </section>
  );
};

export default Approach;

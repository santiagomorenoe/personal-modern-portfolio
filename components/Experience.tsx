import React from "react";

import { timelineExperience } from "@/data";
import { Timeline } from "./ui/TimeLine";

const Experience = () => {
  return (
    <div className="py-20 w-full overflow-hidden">
      <h1 className="heading">
        My work & education<span className="text-purple font-libre-baskerville"> experience</span>
      </h1>

      <div className="w-full mt-12">
        <Timeline data={timelineExperience} />
      </div>
    </div>
  );
};

export default Experience;

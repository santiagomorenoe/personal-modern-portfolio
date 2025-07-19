import React from "react";

import { timelineExperience } from "@/data";
import { Timeline } from "./ui/TimeLine";

const Experience = () => {
  return (
    <div className="py-20 w-full overflow-x-hidden">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12">
        <Timeline data={timelineExperience} />
      </div>
    </div>
  );
};

export default Experience;

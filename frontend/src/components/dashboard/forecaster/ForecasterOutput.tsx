import { motion } from "framer-motion";
import ScenarioSlider from "./ScenarioSlider";

type prop = {
  forecastedAverageGrade: string;
};

const forecastedGPA = 4.32; // This value can be dynamically calculated based on the slider input in the future

const ForecasterOutput = ({ forecastedAverageGrade }: prop) => {
  return (
    <div className="flex-1 px-10 py-5">
      <h2 className="text-xl font-medium font-poppins capitalize">
        minimum average grade needed
      </h2>

      <div className="size-[180px] grid place-items-center mx-auto rounded-full conic-gradient my-5">
        <div className="bg-neutral-700 rounded-full size-[160px] grid place-items-center mx-auto">
          <div>
            <p className="text-white text-5xl font-inter font-bold text-center pb-2">
              {forecastedAverageGrade}
            </p>
            <p className="text-white text-xs font-inter font-medium text-center">
              needed in upcoming courses
            </p>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <h3 className="text-lg font-medium font-inter capitalize mb-1">
          personalized AI insight
        </h3>

        {/* Output the AI remark here */}
        <p className="text-sm font-normal font-inter overflow-y-auto max-h-[75px]">
          Based on your remaining courses, you need a minimum grade of 'A' in
          each course to reach your target GPA of 4.5
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium font-inter capitalize mb-1">
          scenario planner
        </h3>

        <p className="text-sm font-normal font-inter">
          Move the slider to adjust your forecasted grade.
        </p>

        <div>
          <ScenarioSlider />
          <div className="flex flex-row justify-between items-center">
            <p className="text-[16px] font-normal font-inter mt-2 text-stone-600">
              This gets you to{" "}
              <span className="font-bold">{forecastedGPA}</span> CGPA!
            </p>

            <motion.button
              type="button"
              transition={{ type: "spring", stiffness: 500 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group mt-3 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl w-full max-w-[150px]"
            >
              <span className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                  />
                </svg>
                Share
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecasterOutput;

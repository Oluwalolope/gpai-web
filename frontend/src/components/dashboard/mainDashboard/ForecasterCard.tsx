import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ForecasterCard = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white rounded-xl shadow-sm py-4 px-8 col-span-2 w-full md:col-span-1">
      <h2 className="text-2xl font-bold font-poppins text-dark-text mb-4">
        GPA Forecaster
      </h2>

      <motion.button
        type="button"
        transition={{ type: "spring", stiffness: 500 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/user/dashboard/forecaster")}
        className="group mt-3 mb-6 px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl hover:scale-105 shadow-xl inline-flex items-center gap-2"
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
        <span className="flex items-center justify-center text-[14px] md:text-[16px]">
          Plan Your Future
        </span>
      </motion.button>

      <p className="text-lg text-slate-700">
        See what grades you need to hit your target GPA
      </p>
    </section>
  );
};

export default ForecasterCard;

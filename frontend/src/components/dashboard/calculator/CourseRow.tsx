import { motion } from "framer-motion";
import type { Course } from "../../../store/UserDashboardContext";
import GradeSelectMenu from "./GradeSelectMenu";


type CourseRowProps = {
  course: Course;
  index: number;
  onCourseChange: (identifier: "name" | "units" | "gradePoint", value: string) => void;
  onRemoveCourse: () => void;
  isRemoveDisabled: boolean;
};

const CourseRow = ({
  course,
  index,
  onCourseChange,
  onRemoveCourse,
  isRemoveDisabled,
}: CourseRowProps) => (
  <motion.div
    layout="position"
    animate={{ opacity: [0, 1], y: [-5, 0], transition: { duration: 0.25 } }}
    className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center"
  >
    <input
      type="text"
      placeholder={`Course ${index + 1} Name`}
      value={course.name}
      onChange={(e) => onCourseChange("name", e.target.value.toUpperCase())}
      className="flex-1 px-3 py-2 rounded-[4px] border outline-transparent border-[#0000003f] hover:border-[#000] focus-within:border-2 focus-within:border-[#3b82f6]"
    />
    <input
      type="text"
      min={0}
      placeholder="Units"
      value={course.units}
      onChange={(e) => onCourseChange("units", e.target.value)}
      className="w-20 px-3 py-2 rounded-[4px] border outline-transparent border-[#0000003f] hover:border-[#000] focus-within:border-2 focus-within:border-[#3b82f6]"
    />
    <GradeSelectMenu onGradePointChange={onCourseChange} storedGradePoint={course.gradePoint} />
    <button
      type="button"
      onClick={onRemoveCourse}
      disabled={isRemoveDisabled}
      className={`ml-2 px-2 py-1 rounded-lg hover:text-red-500 disabled:opacity-10`}
      title="Remove Course"
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
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  </motion.div>
);

export default CourseRow;
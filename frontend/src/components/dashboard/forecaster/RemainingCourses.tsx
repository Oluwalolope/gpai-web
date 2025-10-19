import { useState } from "react";
import CourseRow from "./CourseRow";
import { motion } from "framer-motion";

type Course = { id: number; name: string; units: string };

const RemainingCourses = () => {
  const [remainingCourses, setRemainingCourses] = useState<Course[]>([
    { id: 1, name: "", units: "" },
  ]);

  const handleCourseChange = (
    id: number,
    field: keyof Omit<Course, "id">,
    value: string
  ) => {
    setRemainingCourses((prevRemainingCourses) => {
      const courseList = prevRemainingCourses;
      const updatedCourseList = courseList.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      );
      return updatedCourseList;
    });
  };

  const addCourse = () => {
    setRemainingCourses((prevRemainingCourses) => [
      ...prevRemainingCourses,
      { id: Date.now(), name: "", units: "" },
    ]);
  };

  const removeCourse = (id: number) => {
    setRemainingCourses((prevRemainingCourses) => {
      const courseList = prevRemainingCourses;
      const updatedCourseList = courseList.filter((course) => course.id !== id);
      return updatedCourseList;
    });
  };

  return (
    <div className="mt-6 h-[60%] flex flex-col gap-y-2">
      <h2 className="text-lg font-medium font-poppins capitalize h-[10%]">
        courses remaining
      </h2>

      <form className="pt-4 border-t border-slate-200 h-[90%] flex flex-col justify-between">
        <div className="overflow-y-auto overflow-x-hidden space-y-4 max-h-[100px] mb-3 scroll-smooth">
          {remainingCourses.map((course: Course, index: number) => (
            <CourseRow
              key={course.id}
              course={course}
              index={index}
              onCourseChange={(
                field: keyof Omit<Course, "id">,
                value: string
              ) => handleCourseChange(course.id, field, value)}
              onRemoveCourse={() => {
                removeCourse(course.id);
              }}
              isRemoveDisabled={remainingCourses.length === 1}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => addCourse()}
          className="w-full mt-2 py-2 text-purple-600 border-2 border-dashed border-purple-300 rounded-xl hover:bg-purple-50 font-medium justify-self-end"
        >
          + Add Course
        </button>

        <motion.button
          type="button"
          transition={{ type: "spring", stiffness: 500 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addCourse}
          className="group mt-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl hover:scale-105 shadow-xl w-full"
        >
          <span className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            Forecast My GPA
          </span>
        </motion.button>
      </form>
    </div>
  );
};

export default RemainingCourses;

import { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import UserDashboardContext from "../../../store/UserDashboardContext";

// --- Type Definitions ---
type Course = { id: number; name: string; units: string; score: string };
// type Semester = { id: number; name: string; courses: Course[] };
// type AcademicYear = { id: number; name: string; semesters: Semester[] };

// --- Reusable Helper Functions ---
const getGradePoint = (score: number): number => {
  if (score >= 70) return 5.0;
  if (score >= 60) return 4.0;
  if (score >= 50) return 3.0;
  if (score >= 45) return 2.0;
  if (score >= 40) return 1.0;
  return 0.0;
};
const getGradeLetter = (score: number): string => {
  if (score >= 70) return "A";
  if (score >= 60) return "B";
  if (score >= 50) return "C";
  if (score >= 45) return "D";
  if (score >= 40) return "E";
  return "F";
};
const calculateGPAForCourses = (courses: Course[]): string | null => {
  let totalQualityPoints = 0,
    totalUnits = 0;
  for (const course of courses) {
    const units = parseInt(course.units),
      score = parseInt(course.score);
    if (
      !isNaN(units) &&
      !isNaN(score) &&
      units > 0 &&
      score >= 0 &&
      score <= 100
    ) {
      totalQualityPoints += getGradePoint(score) * units;
      totalUnits += units;
    }
  }
  return totalUnits > 0 ? (totalQualityPoints / totalUnits).toFixed(2) : null;
};
const getGPAColor = (gpaValue: string) => {
  const gpaNum = parseFloat(gpaValue);
  if (gpaNum >= 4.5) return "from-emerald-500 to-green-600";
  if (gpaNum >= 3.5) return "from-blue-500 to-cyan-600";
  if (gpaNum >= 2.5) return "from-yellow-500 to-orange-500";
  return "from-red-500 to-pink-600";
};

// --- Main YearCalculator Component ---
const Calculator = () => {
  const listOfAcademicSessionsRef = useRef<HTMLDivElement>(null);
  const listOfSemestersRef = useRef<HTMLDivElement>(null);
  const listOfCoursesRef = useRef<HTMLDivElement>(null);

  const userDashboardCtx = useContext(UserDashboardContext);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // smooth scrolling
    });
  };

  const scrollToBottomOfCourseList = () => {
    window.scrollBy({
      top: listOfCoursesRef.current!.scrollHeight,
      behavior: "smooth", // smooth scrolling
    });
  };

  const scrollToBottomOfSemester = () => {
    window.scrollBy({
      top: listOfSemestersRef.current!.scrollHeight,
      behavior: "smooth", // smooth scrolling
    });
  };

  const scrollToBottomOfAcademicSession = () => {
    window.scrollTo({
      top: listOfAcademicSessionsRef.current!.scrollHeight,
      behavior: "smooth", // smooth scrolling
    });
  };

  const [cgpa, setCgpa] = useState<string | null>(null);

  // --- State Management ---
  const addYear = () => {
    userDashboardCtx.addAcademicYear();

    // scroll to bottom of list 150ms after the user adds a new Academic Year
    setTimeout(scrollToBottomOfAcademicSession, 150);
  };
  const addSemesterToYear = (yearId: number) => {
    userDashboardCtx.addSemesterToAcademicYear(yearId);

    // scroll to bottom of list 150ms after the user adds a new semester to year
    setTimeout(scrollToBottomOfSemester, 150);
  };
  const addCourseToSemester = (yearId: number, semesterId: number) => {
    userDashboardCtx.addCourseToSemester(yearId, semesterId);

    // scroll to bottom of list 200ms after the user adds a new course
    setTimeout(scrollToBottomOfCourseList, 200);
  };
  const handleCourseChange = (
    yearId: number,
    semesterId: number,
    courseId: number,
    field: keyof Omit<Course, "id">,
    value: string
  ) => {
    userDashboardCtx.handleCourseChange(
      yearId,
      semesterId,
      courseId,
      field,
      value
    );
  };
  // (You can add remove functions similarly if needed)

  const calculateFinalCGPA = () => {
    const allCourses = userDashboardCtx.courseHistory.flatMap((year) =>
      year.semesters.flatMap((semester) => semester.courses)
    );

    const result = calculateGPAForCourses(allCourses);
    setCgpa(result);

    // scroll to the bottom of the screen when user calculates his cgpa
    if (result) {
      setTimeout(scrollToBottom, 200);
    }
  };

  const allCourses = userDashboardCtx.courseHistory.flatMap((year) =>
    year.semesters.flatMap((semester) => semester.courses)
  );

  const totalUnits = allCourses.reduce(
    (sum, course) => sum + (parseInt(course.units) || 0),
    0
  );

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-4 sm:p-8 shadow-2xl shadow-purple-500/10 border border-white/50">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center">
          <svg
            className="w-6 h-6 mr-3 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          Yearly Overview
        </h3>
        <div className="text-right">
          <div className="text-sm text-slate-500">Total Units</div>
          <div className="text-2xl font-bold text-purple-600">{totalUnits}</div>
        </div>
      </div>

      <motion.div
        ref={listOfAcademicSessionsRef}
        layout="position"
        animate={{
          opacity: [0, 1],
          y: [-5, 0],
          transition: { duration: 0.25 },
        }}
        className="space-y-8"
      >
        {userDashboardCtx.courseHistory.map((year) => (
          <div
            key={year.id}
            className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200"
          >
            <div className="flex flex-row justify-between items-center w-full">
              <input
                type="text"
                value={year.name}
                onChange={(e) =>
                  userDashboardCtx.handleAcademicYearChange(year, e)
                }
                className="text-2xl font-extrabold text-gray-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-300 rounded-md p-1 mb-4 w-full"
              />
              <button
                type="button"
                className={`ml-2 px-2 py-1 rounded-lg hover:text-red-500 disabled:opacity-10`}
                onClick={() => userDashboardCtx.removeAcademicYear(year.id)}
                disabled={userDashboardCtx.courseHistory.length === 1}
                title="Remove Academic year"
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>

            <motion.div
              ref={listOfSemestersRef}
              layout="position"
              animate={{
                opacity: [0, 1],
                y: [-5, 0],
                transition: { duration: 0.5 },
              }}
              className="space-y-4"
            >
              {year.semesters.map((semester) => (
                <details
                  key={semester.id}
                  className="p-4 rounded-xl bg-white border border-slate-200 group"
                  open
                >
                  <summary className="font-bold text-lg cursor-pointer text-gray-700 flex justify-between items-center">
                    <span>{semester.name}</span>
                    <div className="inline-flex flex-row gap-4 items-center">
                      <span className="text-sm font-medium text-slate-500">
                        SGP:{" "}
                        <span className="font-bold text-slate-700">
                          {calculateGPAForCourses(semester.courses) || "N/A"}
                        </span>
                      </span>
                      <button
                        type="button"
                        className={`ml-2 px-2 py-1 rounded-lg hover:text-red-500 disabled:opacity-10`}
                        onClick={() =>
                          userDashboardCtx.removeSemesterFromAcademicYear(
                            year.id,
                            semester.id
                          )
                        }
                        disabled={
                          userDashboardCtx.courseHistory[0].semesters.length ===
                          1
                        }
                        title="Remove Semester"
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
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </summary>
                  <div
                    ref={listOfCoursesRef}
                    className="mt-4 pt-4 border-t border-slate-200 space-y-4"
                  >
                    {semester.courses.map((course: Course, index: number) => (
                      <CourseRow
                        key={course.id}
                        course={course}
                        index={index}
                        onCourseChange={(
                          field: keyof Omit<Course, "id">,
                          value: string
                        ) =>
                          handleCourseChange(
                            year.id,
                            semester.id,
                            course.id,
                            field,
                            value
                          )
                        }
                        onRemoveCourse={() =>
                          userDashboardCtx.removeCourseFromSemester(
                            year.id,
                            semester.id,
                            course.id
                          )
                        }
                        isRemoveDisabled={semester.courses.length === 1}
                      />
                    ))}
                    <button
                      onClick={() => addCourseToSemester(year.id, semester.id)}
                      className="w-full mt-2 py-2 text-purple-600 border-2 border-dashed border-purple-300 rounded-xl hover:bg-purple-50 font-medium"
                    >
                      + Add Course
                    </button>
                  </div>
                </details>
              ))}
            </motion.div>
            <button
              onClick={() => addSemesterToYear(year.id)}
              className="w-full mt-4 py-3 text-indigo-600 border-2 border-dashed border-indigo-300 rounded-xl hover:bg-indigo-50 font-semibold"
            >
              + Add Semester to {year.name}
            </button>
          </div>
        ))}
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <button
          onClick={addYear}
          className="group flex items-center justify-center px-8 py-4 text-purple-600 border-2 border-purple-300 rounded-2xl hover:bg-purple-50 font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add Academic Year
        </button>
        <motion.button
          type="button"
          transition={{ type: "spring", stiffness: 500 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={calculateFinalCGPA}
          className="group px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:scale-105 shadow-xl"
        >
          <span className="flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            Calculate Final CGPA
          </span>
        </motion.button>
      </div>

      {cgpa && (
        <div className="mt-12 max-w-lg mx-auto">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 text-center overflow-hidden relative">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${getGPAColor(
                cgpa
              )} opacity-5`}
            ></div>
            <div className="relative z-10">
              <div className="mb-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-medium mb-4">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Calculation Complete
                </div>
              </div>
              <p className="text-lg text-slate-600 mb-2">
                Your Overall CGPA is
              </p>
              <div
                className={`inline-block p-6 rounded-2xl bg-gradient-to-r ${getGPAColor(
                  cgpa
                )} mb-6`}
              >
                <p className="font-bold text-6xl md:text-7xl text-white mb-2">
                  {cgpa}
                </p>
                <p className="text-white/90 text-lg">out of 5.0</p>
              </div>
              <div className="text-sm text-slate-500 mb-6">
                Based on{" "}
                {allCourses.filter((c) => c.name && c.units && c.score).length}{" "}
                courses • {totalUnits} total units
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * CourseRow component for rendering a single course row in the table.
 */
type CourseRowProps = {
  course: Course;
  index: number;
  onCourseChange: (field: keyof Omit<Course, "id">, value: string) => void;
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
      onChange={(e) => onCourseChange("name", e.target.value)}
      className="flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-300"
    />
    <input
      type="number"
      min={0}
      placeholder="Units"
      value={course.units}
      onChange={(e) => onCourseChange("units", e.target.value)}
      className="w-20 px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-300"
    />
    <input
      type="number"
      min={0}
      max={100}
      placeholder="Score"
      value={course.score}
      onChange={(e) => onCourseChange("score", e.target.value)}
      className="w-24 px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-300"
    />
    <span className="w-10 text-center font-bold text-slate-700">
      {course.score !== "" && !isNaN(Number(course.score))
        ? getGradeLetter(Number(course.score))
        : "-"}
    </span>
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

export default Calculator;

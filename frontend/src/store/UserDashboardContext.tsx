import { createContext } from "react";

// --- Type Definitions ---
export type RemainingCourse = { id: number; name: string; units: string };
export type Course = { id: number; name: string; units: string; gradePoint: string };
export type Semester = { id: number; name: string; courses: Course[] };
export type AcademicYear = { id: number; name: string; semesters: Semester[] };

export type UserDashboard = {
  courseHistory: AcademicYear[];
  remainingCourses: RemainingCourse[];

  targetCGPA?: number | string | null;
  gradeScale?: "fourPoint" | "fivePoint";
  handleGradeScaleChange: (gradeScale: 'fourPoint' | 'fivePoint') => void;
  handleTargetCGPAChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  addAcademicYear: () => void;
  removeAcademicYear: (yearId: number) => void;

  addSemesterToAcademicYear: (yearId: number) => void;
  removeSemesterFromAcademicYear: (yearId: number, semesterId: number) => void;

  addCourseToSemester: (yearId: number, semesterId: number) => void;
  removeCourseFromSemester: (yearId: number, semesterId: number, courseId: number) => void;

  addCourseToRemainingCourses: () => void;
  removeCourseFromRemainingCourses: (courseId: number) => void;
  handleRemainingCourseChange: (courseId: number, field: keyof Omit<RemainingCourse, "id">, value: string) => void;

  handleAcademicYearChange: (year: AcademicYear, e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCourseChange: (yearId: number, semesterId: number, courseId: number, field: keyof Omit<Course, "id">, value: string) => void;
};

const UserDashboardContext = createContext<UserDashboard>({
  courseHistory: [],
  remainingCourses: [],
  targetCGPA: null,
  gradeScale: 'fivePoint',
  handleTargetCGPAChange: () => {},
  handleGradeScaleChange: () => {},
  addAcademicYear: () => {},
  removeAcademicYear: () => {},
  addSemesterToAcademicYear: () => {},
  removeSemesterFromAcademicYear: () => {},
  addCourseToSemester: () => {},
  removeCourseFromSemester: () => {},
  handleAcademicYearChange: () => {},
  handleCourseChange: () => {},
  addCourseToRemainingCourses: () => {},
  removeCourseFromRemainingCourses: () => {},
  handleRemainingCourseChange: () => {},
});

export default UserDashboardContext;
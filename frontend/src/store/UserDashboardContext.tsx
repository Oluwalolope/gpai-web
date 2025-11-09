import { createContext } from "react";

// --- Type Definitions ---
export type Course = { id: number; name: string; units: string; gradePoint: string };
export type Semester = { id: number; name: string; courses: Course[] };
export type AcademicYear = { id: number; name: string; semesters: Semester[] };

export type UserDashboard = {
  courseHistory: AcademicYear[];

  targetCGPA?: number | string | null;
  gradeScale?: string;
  handleGradeScaleChange: (gradeScale: string) => void;
  handleTargetCGPAChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  addAcademicYear: () => void;
  removeAcademicYear: (yearId: number) => void;

  addSemesterToAcademicYear: (yearId: number) => void;
  removeSemesterFromAcademicYear: (yearId: number, semesterId: number) => void;

  addCourseToSemester: (yearId: number, semesterId: number) => void;
  removeCourseFromSemester: (yearId: number, semesterId: number, courseId: number) => void;

  handleAcademicYearChange: (year: AcademicYear, e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCourseChange: (yearId: number, semesterId: number, courseId: number, field: keyof Omit<Course, "id">, value: string) => void;
};

const UserDashboardContext = createContext<UserDashboard>({
  courseHistory: [],
  targetCGPA: null,
  gradeScale: '',
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
});

export default UserDashboardContext;
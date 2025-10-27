import type { AcademicYear } from "../../../store/UserDashboardContext";

type Course = { id: number; name: string; units: string; score: string };

const getGradePoint = (score: number): number => {
  if (score >= 70) return 5.0;
  if (score >= 60) return 4.0;
  if (score >= 50) return 3.0;
  if (score >= 45) return 2.0;
  if (score >= 40) return 1.0;
  return 0.0;
};

export const calculateGPAForCourses = (courses: Course[]): string | null => {
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

export const calculateFinalCGPA = (courseHistory: AcademicYear[]) => {
    const allCourses = courseHistory.flatMap(year =>
      year.semesters.flatMap(semester => semester.courses)
    );

    const CGPA = calculateGPAForCourses(allCourses);

    return CGPA;
};
import type { AcademicYear } from "../../../store/UserDashboardContext";

type Course = { id: number; name: string; units: string; gradePoint: string | number };

export const calculateGPAForCourses = (courses: Course[]): string | null => {
  let totalQualityPoints = 0,
    totalUnits = 0;
  for (const course of courses) {
    const units = parseInt(course.units)
    if (!isNaN(units) && units > 0) {
      totalQualityPoints += (course.gradePoint === "" ? 0 : +course.gradePoint) * units;
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


export const getSemesterData = (courseHistory: AcademicYear[]) => {
  const semesterNames: string[] = [];
  const cumulativeCourses: Course[][] = [];
  let accumulatedCourses: Course[] = [];

  courseHistory.forEach((level) => {
    level.semesters.forEach((semester) => {
      const semesterName = `${level.name} ${semester.name.split(" ").splice(0,1)}`;
      semesterNames.push(semesterName);

      accumulatedCourses = [...accumulatedCourses, ...semester.courses];

      cumulativeCourses.push([...accumulatedCourses]);
    });
  });

  return { semesterNames, cumulativeCourses };
}
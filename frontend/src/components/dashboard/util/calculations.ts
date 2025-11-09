import type { AcademicYear } from "../../../store/UserDashboardContext";
import solver from "javascript-lp-solver";
import { gradeScale } from "./constants";

type Course = {
  id: number;
  name: string;
  units: string;
  gradePoint?: string | number;
};
type RemainingCourse = { id: number; name: string; units: string };



type CourseGrade = {
  name: string;
  grade: string;
};

const calculateMaximumAchievableCGPA = (totalUnits: number, maxTotalQualityPoints: number) => {
  return totalUnits > 0 ? (maxTotalQualityPoints / totalUnits).toFixed(2) : null;
};

export const generateFeedback = (courses: CourseGrade[], totalUnits: number, maxTotalQualityPoints: number): string => {
  const maxAchievableCGPA = calculateMaximumAchievableCGPA(totalUnits, maxTotalQualityPoints);
  if (!courses.length) return "No course data available.";

  // Check if target CGPA is unreachable
  const hasInvalid = courses.some(c => c.grade === "N/A");

  if (hasInvalid) {
    return `⚠️ You cannot reach your target CGPA based on your current course data. The maximum achievable CGPA is <strong>${maxAchievableCGPA}</strong>. Please review your course grades or targets.`;
  }

  const topGrades = ["A", "B"];
  const targetA = courses.filter(c => c.grade === "A");
  const targetB = courses.filter(c => c.grade === "B");
  const targetLower = courses.filter(c => !topGrades.includes(c.grade));

  let feedback = `<strong>Based on your remaining courses and the grade targets calculated, here’s what you should aim for:</strong><br><br>`;

  // Courses that need A
  if (targetA.length) {
    const names = targetA.map(c => c.name).join(", ");
    feedback += `⭐ You will need to aim for an <strong>A</strong> in <em>${names}</em>. Stay consistent and maintain focus to achieve this.<br><br>`;
  }

  // Courses that need B
  if (targetB.length) {
    const names = targetB.map(c => c.name).join(", ");
    feedback += `👍 For <em>${names}</em>, a <strong>B</strong> will help you maintain a good GPA. With a bit of extra effort, you can push these to an A.<br><br>`;
  }

  // Courses that need grades below B
  if (targetLower.length) {
    const details = targetLower
      .map(c => `${c.name} (target: ${c.grade})`)
      .join(", ");
    feedback += `💪 For <em>${details}</em>, keep in mind that every effort counts. Focus on steady progress — improvement is a journey, and your determination matters more than perfection.<br><br>`;
  }

  feedback += `🎯 <strong>Stay consistent</strong> with your reading schedule and class preparation. With focus and effort, achieving your target grades is completely within reach.`;

  return feedback.trim();
}


export const calculateGPAForCourses = (courses: Course[]): string | null => {
  let totalQualityPoints = 0;
  let totalUnits = 0;
  for (const course of courses) {
    const units = parseInt(course.units);
    if (!isNaN(units) && units > 0) {
      totalQualityPoints +=
        (course.gradePoint === "" ? 0 : +course.gradePoint!) * units;
      totalUnits += units;
    }
  }
  return totalUnits > 0 ? (totalQualityPoints / totalUnits).toFixed(2) : null;
};

export const calculateFinalCGPA = (courseHistory: AcademicYear[]) => {
  const allCourses = courseHistory.flatMap((year) =>
    year.semesters.flatMap((semester) => semester.courses)
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
      const semesterName = `${level.name} ${semester.name
        .split(" ")
        .splice(0, 1)}`;
      semesterNames.push(semesterName);

      accumulatedCourses = [...accumulatedCourses, ...semester.courses];

      cumulativeCourses.push([...accumulatedCourses]);
    });
  });

  return { semesterNames, cumulativeCourses };
};





export const assignGrades = (courses: RemainingCourse[], gradeValues: number[], scaleType: "fourPoint" | "fivePoint"): { name: string; grade: string }[] => {
  const scale = gradeScale[scaleType];

  return courses.map((course, index) => {
    const value = gradeValues[index];
    const gradeObj = scale.find((g) => g.value === value);
    const grade = gradeObj ? gradeObj.letter : "N/A";
    return { name: course.name, grade };
  });
}


const getMinimumGradePointsLP = (units: number[], targetQualityPoint: number): number[] => {
  // Build LP model
  const model: any = {
    optimize: "sumGrades", // Objective: minimize sum of grades
    opType: "min",
    constraints: {
      totalQuality: { min: targetQualityPoint } // total quality >= target
    },
    variables: {},
  };

  // Add each grade variable (grade0, grade1, grade2...) with constraints
  units.forEach((unit, index) => {
    model.variables[`grade${index}`] = {
      sumGrades: 1,        // coefficient in the objective function
      totalQuality: unit,  // contribution to total quality
    };

    // Add upper and lower bound constraints for each variable
    model.constraints[`minGrade_${index}`] = model.constraints[`minGrade_${index}`] || { min: 0 };
    model.constraints[`maxGrade_${index}`] = model.constraints[`maxGrade_${index}`] || { max: 5 };

    // Link constraints to variables
    model.variables[`grade${index}`][`minGrade_${index}`] = 1;
    model.variables[`grade${index}`][`maxGrade_${index}`] = 1;
  });

  // Solve the LP
  const results = solver.Solve(model);

  // Extract grade points in order (default to 0 if missing)
  const gradePointsArray = units.map((_, index) => Number(results[`grade${index}`] || 0));

  const gradePoints = gradePointsArray.map(grade => Math.round(grade));
  
  return gradePoints;
}

export const calculateMinimumGradeNeededToReachTargetCGPA = (
  courseHistory: AcademicYear[],
  remainingCourses: RemainingCourse[],
  targetCGPA: number | string | null | undefined,
  scaleType: "fourPoint" | "fivePoint"
) => {
  if (!targetCGPA) {
    throw new Error("You need to set a target to forecast your CGPA");
  }

  const allCourses = courseHistory.flatMap((year) =>
    year.semesters.flatMap((semester) => semester.courses)
  );

  let qualityPointsForKnownResults = 0;
  let unitsForKnownResults = 0;

  allCourses.forEach((course) => {
    const units = parseInt(course.units);
    if (!isNaN(units) && units > 0) {
      qualityPointsForKnownResults +=
        (course.gradePoint === "" ? 0 : +course.gradePoint) * units;
      unitsForKnownResults += units;
    }
  });

  const qualityPointsForUnknownResults = 0;
  const unitsForUnknownResults: number[] = [];

  remainingCourses.forEach((course) => {
    const units = parseInt(course.units);
    if (!isNaN(units) && units > 0) {
      unitsForUnknownResults.push(units);
    }
  });

  const totalUnits = unitsForKnownResults + unitsForUnknownResults.reduce((a, b) => a + b, 0);
  const totalQualityPoints =
    qualityPointsForKnownResults + qualityPointsForUnknownResults;


  const maxTotalQualityPoints = qualityPointsForKnownResults + (unitsForUnknownResults.reduce((a, b) => a + b, 0) * 5.0); // assuming 5.0 is the max grade point

  const totalQualityPointsNeeded = (typeof targetCGPA === 'string' ? parseFloat(targetCGPA) : targetCGPA) * totalUnits;

  const totalQualityPointsShortfall = parseInt((totalQualityPointsNeeded - totalQualityPoints).toFixed(2));


  //This returns an array of grade point values
  const result = getMinimumGradePointsLP(unitsForUnknownResults, totalQualityPointsShortfall);

  // This assigns the grades
  const newResult = assignGrades(remainingCourses, result, scaleType);

  // This generates the AI feedback
  const remark = generateFeedback(newResult, totalUnits, maxTotalQualityPoints);

  // This finds the most common grade needed
  const averageGradeNeeded = mostCommonGrade(remainingCourses, result, scaleType);

  return {remark, averageGradeNeeded };
};

export const calculateGPAForSpecificScenarios = (courseHistory: AcademicYear[],
  remainingCourses: RemainingCourse[], gradePointScenario: number) => {

  const allCourses = courseHistory.flatMap((year) =>
    year.semesters.flatMap((semester) => semester.courses)
  );

  let qualityPointsForKnownResults = 0;
  let unitsForKnownResults = 0;

  allCourses.forEach((course) => {
    const units = parseInt(course.units);
    if (!isNaN(units) && units > 0) {
      qualityPointsForKnownResults +=
        (course.gradePoint === "" ? 0 : +course.gradePoint) * units;
      unitsForKnownResults += units;
    }
  });

  const unitsForUnknownResults: number[] = [];

  remainingCourses.forEach((course) => {
    const units = parseInt(course.units);
    if (!isNaN(units) && units > 0) {
      unitsForUnknownResults.push(units);
    }
  });

  const totalUnits = unitsForKnownResults + unitsForUnknownResults.reduce((a, b) => a + b, 0);

  const maxTotalQualityPoints = qualityPointsForKnownResults + (unitsForUnknownResults.reduce((a, b) => a + b, 0) * gradePointScenario);
  
  
  const result = totalUnits > 0 ? (maxTotalQualityPoints / totalUnits).toFixed(2) : null;
  
  return result;
};

export const mostCommonGrade = (
  courses: Course[],
  gradeValues: number[],
  scaleType: "fourPoint" | "fivePoint"
): string => {
  // Get assigned grades
  const assigned = assignGrades(courses, gradeValues, scaleType);

  // Count occurrences of each grade
  const gradeCounts: Record<string, number> = {};
  assigned.forEach(c => {
    gradeCounts[c.grade] = (gradeCounts[c.grade] || 0) + 1;
  });

  // Find the grade with the highest count
  let mostCommon = "";
  let maxCount = 0;
  for (const grade in gradeCounts) {
    if (gradeCounts[grade] > maxCount) {
      maxCount = gradeCounts[grade];
      mostCommon = grade;
    }
  }

  return mostCommon;
}
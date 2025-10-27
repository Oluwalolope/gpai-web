import { useState } from "react";
import type {
  AcademicYear,
  Course,
  Semester,
  UserDashboard,
} from "./UserDashboardContext";
import UserDashboardContext from "./UserDashboardContext";

let storedCourseHistory = [
  {
    id: 1,
    name: "100 Level",
    semesters: [
      {
        id: 1,
        name: "First Semester",
        courses: [{ id: 1, name: "", units: "", score: "" }],
      },
    ],
  },
];


if (localStorage.getItem("courseHistory")) {
    storedCourseHistory = JSON.parse(localStorage.getItem("courseHistory")!);
};


let storedTargetCGPA = null;

if (localStorage.getItem("targetCGPA")) {
    storedTargetCGPA = JSON.parse(localStorage.getItem("targetCGPA")!);
};

const UserDashboardContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [courseHistory, setCourseHistory] =
    useState<AcademicYear[]>(storedCourseHistory);
    
    const [targetCGPA, setTargetCGPA] = useState<number| string | null>(storedTargetCGPA);

  const addAcademicYear = () => {
    setCourseHistory((prevCourseHistory) => {
      const newHistory = [
        ...prevCourseHistory,
        {
          id: Date.now(),
          name: `${prevCourseHistory.length + 1}00 Level`,
          semesters: [
            {
              id: Date.now(),
              name: "First Semester",
              courses: [{ id: 1, name: "", units: "", score: "" }],
            },
          ],
        },
      ];

      // Save to localStorage
      localStorage.setItem("courseHistory", JSON.stringify(newHistory));

      return newHistory;
    });
  };

  const removeAcademicYear = (yearId: number) => {
    setCourseHistory((prevCourseHistory) => {
      const newHistory = prevCourseHistory.filter(year => year.id !== yearId);

      // Save to localStorage
      localStorage.setItem("courseHistory", JSON.stringify(newHistory));

      return newHistory;
    });
  };

  const addSemesterToAcademicYear = (yearId: number) => {
    setCourseHistory((prevCourseHistory) => {
      const newHistory = prevCourseHistory.map((year) =>
        year.id === yearId
          ? {
              ...year,
              semesters: [
                ...year.semesters,
                {
                  id: Date.now(),
                  name: `Semester ${year.semesters.length + 1}`,
                  courses: [{ id: 1, name: "", units: "", score: "" }],
                },
              ],
            }
          : year
      );

      // Save to localStorage
      localStorage.setItem("courseHistory", JSON.stringify(newHistory));

      return newHistory;
    });
  };

  const removeSemesterFromAcademicYear = (yearId: number, semesterId: number) => {
    setCourseHistory((prevCourseHistory) => {
      const newHistory: AcademicYear[] = [];

      prevCourseHistory.forEach(year => {
        if (year.id !== yearId) {
            newHistory.push(year);
        }

        if (year.id === yearId) {
            const updatedSemester = year.semesters.filter(semester => semester.id !== semesterId);

            newHistory.push({
                id: year.id,
                name: year.name,
                semesters: updatedSemester
            });
        }
      });

      const yearIndex = prevCourseHistory.findIndex(year => year.id === yearId);

      
      // if only one semester is in the academic year, remove the entire year

      if (prevCourseHistory[yearIndex].semesters.length === 1) {
          removeAcademicYear(yearId);
      }

      // Save to localStorage
      localStorage.setItem("courseHistory", JSON.stringify(newHistory));
      
      return newHistory;
    });
  };

  const addCourseToSemester = (yearId: number, semesterId: number) => {
    setCourseHistory((prevCourseHistory) => {
      const newHistory = prevCourseHistory.map((year) =>
        year.id === yearId
          ? {
              ...year,
              semesters: year.semesters.map((semester) =>
                semester.id === semesterId
                  ? {
                      ...semester,
                      courses: [
                        ...semester.courses,
                        { id: Date.now(), name: "", units: "", score: "" },
                      ],
                    }
                  : semester
              ),
            }
          : year
      );
      // Save to localStorage
      localStorage.setItem("courseHistory", JSON.stringify(newHistory));

      return newHistory;
    });
  };

  const removeCourseFromSemester = (yearId: number, semesterId: number, courseId: number) => {
    setCourseHistory((prevCourseHistory) => {
      const newHistory: AcademicYear[] = [];

      prevCourseHistory.forEach(year => {
        if (year.id !== yearId) {
            newHistory.push(year);
        }

        if (year.id === yearId) {
            const updatedSemester: Semester[] = [];

            year.semesters.forEach(semester => {
                if (semester.id !== semesterId) {
                    updatedSemester.push(semester);
                };

                if (semester.id === semesterId) {
                    const updatedCourses = semester.courses.filter(course => course.id !== courseId);

                    updatedSemester.push({
                        id: semester.id,
                        name: semester.name,
                        courses: updatedCourses
                    });
                };
            });


            newHistory.push({
                id: year.id,
                name: year.name,
                semesters: updatedSemester
            });
        }
      });

      const yearIndex = prevCourseHistory.findIndex(year => year.id === yearId);
      const semesterIndex = prevCourseHistory[yearIndex].semesters.findIndex(semester => semester.id === semesterId);

      
      // if only one course is in the semester, remove the entire semester
      if (prevCourseHistory[yearIndex].semesters[semesterIndex].courses.length === 1) {
        removeSemesterFromAcademicYear(yearId, semesterId);
      }

      // Save to localStorage
      localStorage.setItem("courseHistory", JSON.stringify(newHistory));
      
      return newHistory;
    });
  };

  const handleAcademicYearChange = (
    year: AcademicYear,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCourseHistory((prevCourseHistory) => {
      const newHistory = prevCourseHistory.map((academicYear) =>
        academicYear.id === year.id
          ? { ...academicYear, name: e.target.value }
          : academicYear
      );

      // Save to localStorage
      localStorage.setItem("courseHistory", JSON.stringify(newHistory));

      return newHistory;
    });
  };
  
  const handleCourseChange = (
      yearId: number,
    semesterId: number,
    courseId: number,
    field: keyof Omit<Course, "id">,
    value: string
  ) => {
    setCourseHistory((prevCourseHistory) => {
        
        const newHistory = prevCourseHistory.map((year) =>
            year.id === yearId
        ? {
            ...year,
            semesters: year.semesters.map((semester) =>
                semester.id === semesterId
            ? {
                ...semester,
                courses: semester.courses.map((course) =>
                    course.id === courseId
                ? { ...course, [field]: value }
                          : course
                      ),
                    }
                  : semester
              ),
            }
          : year
      )

        // Save to localStorage
        localStorage.setItem("courseHistory", JSON.stringify(newHistory));

        return newHistory;
    });
    
};

const handleTargetCGPAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove all non-digit characters
    let value = e.target.value.replace(/\D/g, "");

    // Limit to 3 digits total (5.00)
    if (value.length > 3) {
      value = value.slice(0, 3);
    }

    // Add dot after 1 digits (5.00)
    if (value.length > 1) {
      value = value.slice(0, 1) + "." + value.slice(1);
    }

    localStorage.setItem('targetCGPA', JSON.stringify(value))
  setTargetCGPA(value);
};

  const UserDashboardContextValue: UserDashboard = {
    courseHistory,
    targetCGPA,
    handleTargetCGPAChange,
    addAcademicYear,
    removeAcademicYear,
    addSemesterToAcademicYear,
    removeSemesterFromAcademicYear,
    addCourseToSemester,
    removeCourseFromSemester,
    handleAcademicYearChange,
    handleCourseChange,
  };

  return (
    <UserDashboardContext.Provider value={UserDashboardContextValue}>
      {children}
    </UserDashboardContext.Provider>
  );
};

export default UserDashboardContextProvider;

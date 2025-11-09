type GradeScale = {
  [key: string]: { value: number; letter: string }[];
};

export const gradeScale: GradeScale = {
  fourPoint: [
    { value: 4, letter: "A" },
    { value: 3, letter: "B" },
    { value: 2, letter: "C" },
    { value: 1, letter: "D" },
    { value: 0, letter: "E" },
  ],
  fivePoint: [
    { value: 5, letter: "A" },
    { value: 4, letter: "B" },
    { value: 3, letter: "C" },
    { value: 2, letter: "D" },
    { value: 1, letter: "E" },
    { value: 0, letter: "F" },
  ],
};
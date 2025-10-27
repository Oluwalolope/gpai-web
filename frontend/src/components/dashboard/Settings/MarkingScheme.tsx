import { useRef, useState } from "react";
import { motion } from "framer-motion";
import GradeRow from "./GradeRow";

type Grade = { 
    id: number;
    name: string; 
    minimumScore: string | number;
    points: string | number 
};

type prop = {
  handleForecast: () => void
}

const GRADE_SYSTEM = [
    { id: 1, name: "A", minimumScore: "70" , points: "5" },
    { id: 2, name: "B", minimumScore: "60" , points: "4" },
    { id: 3, name: "C", minimumScore: "50" , points: "3" },
    { id: 4, name: "D", minimumScore: "45" , points: "2" },
    { id: 5, name: "E", minimumScore: "40" , points: "1" },
];

const MarkingScheme = ({ handleForecast }:prop) => {
    const markingSchemeListRef = useRef<HTMLUListElement>(null);
      const [grades, setGrades] = useState<Grade[]>(GRADE_SYSTEM);
    
      const handleGradeChange = (
        id: number,
        field: keyof Omit<Grade, "id">,
        value: string
      ) => {
        setGrades((previousGrades) => {
          const gradeList = previousGrades;
          const updatedGradeList = gradeList.map((grade) =>
            grade.id === id ? { ...grade, [field]: value } : grade
          );
          return updatedGradeList;
        });
      };
    
      const scrollToBottomOfGradeList = () => {
        markingSchemeListRef.current!.scrollTo({
          top: markingSchemeListRef.current!.scrollHeight,
          behavior: "smooth", // smooth scrolling
        });
      };
    
      const addGrade = () => {
        setGrades((previousGrades) => [
          ...previousGrades,
          { id: Date.now(), name: "", minimumScore: "" , points: "" },
        ]);
    
        // scroll to bottom of list 100ms after the user adds a new grade
        setTimeout(scrollToBottomOfGradeList, 100);
      };
    
      const removeGrade = (id: number) => {
        setGrades((previousGrades) => {
          const gradeList = previousGrades;
          const updatedGradeList = gradeList.filter((grade) => grade.id !== id);
          return updatedGradeList;
        });
      };
    

    return (
        <form className="pt-4 border-t border-slate-200 h-[90%] flex flex-col justify-between">
        <motion.ul ref={markingSchemeListRef}  className="overflow-y-auto overflow-x-hidden space-y-4 max-h-[100px] mb-3 scroll-smooth list-none">
          {grades.map((grade: Grade, index: number) => (
            <GradeRow
              key={grade.id}
              grade={grade}
              index={index}
              onGradeChange={(
                field: keyof Omit<Grade, "id">,
                value: string
              ) => handleGradeChange(grade.id, field, value)}
              onRemoveGrade={() => {
                removeGrade(grade.id);
              }}
              isRemoveDisabled={grades.length === 1}
            />
          ))}
        </motion.ul>
        <button
          type="button"
          onClick={addGrade}
          className="w-full mt-2 py-2 text-purple-600 border-2 border-dashed border-purple-300 rounded-xl hover:bg-purple-50 font-medium justify-self-end"
        >
          + Add Course
        </button>

        <motion.button
          type="button"
          transition={{ type: "spring", stiffness: 500 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleForecast}
          className="group mt-3 px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl hover:scale-105 shadow-xl w-full"
        >
          <span className="flex items-center justify-center text-[14px] md:text-[16px]">
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
            Save Changes
          </span>
        </motion.button>
      </form>
    );
}
 
export default MarkingScheme;
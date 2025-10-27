import { motion } from "framer-motion";

type Grade = { 
    id: number;
    name: string; 
    minimumScore: string | number;
    points: string | number 
};

type GradeRowProps = {
  grade: Grade;
  index: number;
  onGradeChange: (field: keyof Omit<Grade, "id">, value: string) => void;
  onRemoveGrade: () => void;
  isRemoveDisabled: boolean;
};

const GradeRow = ({
  grade,
  index,
  onGradeChange,
  onRemoveGrade,
  isRemoveDisabled,
}: GradeRowProps) => (
  <motion.div layout='position' animate={{opacity: [0, 1], y: [-5, 0], transition: { duration: 0.25}}}  className="flex flex-row gap-2 sm:gap-4 items-center">
    <input
      type="text"
      placeholder={`Grade ${index + 1}`}
      value={grade.name}
      onChange={(e) => onGradeChange("name", e.target.value)}
      className="w-[30%] px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-300 uppercase"
    />
    <input
      type="number"
      min={0}
      placeholder="Units"
      value={grade.points}
      onChange={(e) => onGradeChange("points", e.target.value)}
      className="w-[30%] px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-300"
    />
    <input
      type="number"
      min={0}
      max={100}
      placeholder="Score"
      value={grade.minimumScore}
      onChange={(e) => onGradeChange("minimumScore", e.target.value)}
      className="w-[30%] px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-300"
    />
    <button
      type="button"
      onClick={onRemoveGrade}
      disabled={isRemoveDisabled}
      className={`ml-2 px-2 py-1 rounded-lg text-red-500 border border-red-200 hover:bg-red-50 disabled:opacity-50`}
      title="Remove Gradee"
    >
      &times;
    </button>
  </motion.div>
);

export default GradeRow;
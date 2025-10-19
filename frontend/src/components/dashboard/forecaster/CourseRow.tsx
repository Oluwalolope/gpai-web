/**
 * CourseRow component for rendering a single course row in the table.
 */
type Course = { id: number; name: string; units: string; };

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
  <div className="flex flex-row gap-2 justify-between items-center">
    <input
      type="text"
      placeholder={`Course ${index + 1} Name`}
      value={course.name}
      onChange={(e) => onCourseChange("name", e.target.value)}
      className="w-[50%] px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-300"
    />
    <input
      type="number"
      min={0}
      placeholder="Units"
      value={course.units}
      onChange={(e) => onCourseChange("units", e.target.value)}
      className="w-[30%] max-w-[80px] px-3 py-2 flex-1 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-300"
    />

    <button
      type="button"
      onClick={onRemoveCourse}
      disabled={isRemoveDisabled}
      className={`ml-2 px-2 py-1 rounded-lg text-red-500 border border-red-200 hover:bg-red-50 disabled:opacity-50 `}
      title="Remove Course"
    >
      &times;
    </button>
  </div>
);

export default CourseRow;
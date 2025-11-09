import type { AcademicYear } from "../../../../store/UserDashboardContext";
import { calculateGPAForCourses } from "../../util/calculations";

const SessionAnalytics = ({ name, semesters }: AcademicYear) => {
  return (
    <div className="border border-neutral-200 shadow-sm p-6 rounded-md w-full max-w-[350px]">
      <h3 className="text-xl font-semibold font-poppins text-dark-text py-3">{name}</h3>
      {semesters.map((semester, index) => (
        <p key={index}  className="text-lg font-poppins text-dark-text">
          {semester.name}: SGPA {calculateGPAForCourses(semester.courses)}
        </p>
      ))}
    </div>
  );
};

export default SessionAnalytics;

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useContext, useState } from "react";
import UserDashboardContext from "../../../store/UserDashboardContext";
import { gradeScale } from "../util/constants";

type props = {
  storedGradePoint: string;
  onGradePointChange: (
    identifier: "name" | "units" | "gradePoint",
    value: string
  ) => void;
};

type grade = {
  value: number,
  letter: string
};

const GradeSelectMenu = ({ storedGradePoint, onGradePointChange }: props) => {
  const [gradePoint, setGradePoint] = useState(storedGradePoint);
  const userDashboardCtx = useContext(UserDashboardContext);

  const handleChange = (event: SelectChangeEvent) => {
    onGradePointChange("gradePoint", event.target.value);
    setGradePoint(event.target.value);
  };

  const chosenScale: string = userDashboardCtx.gradeScale!.toString();
  const scale: grade[] = gradeScale[chosenScale];

  return (
    <div>
      <FormControl sx={{ minWidth: 30, maxWidth: 60 }} size="small">
        <Select
          value={gradePoint}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <p className="font-medium text-slate-400">Grade</p>
          </MenuItem>
          {scale.map((grade, index) => (
            <MenuItem key={index} value={grade.value}>
              {grade.letter}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default GradeSelectMenu;

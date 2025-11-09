import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useContext } from "react";
import UserDashboardContext from "../../../store/UserDashboardContext";
import { calculateGPAForSpecificScenarios } from "../util/calculations";

const valuetext = (value: number) => {
  return `${value}`;
};

type props = {
  handleForecastedCGPAChange: (value: number) => void;
}

const ScenarioSlider = ({ handleForecastedCGPAChange }: props) => {
  const userDashboardCtx = useContext(UserDashboardContext);

  let marks = [
    {
      value: 0,
      label: "All F's",
    },
    {
      value: 20,
      label: "All E's",
    },
    {
      value: 40,
      label: "All D's",
    },
    {
      value: 60,
      label: "All C's",
    },
    {
      value: 80,
      label: "All B's",
    },
    {
      value: 100,
      label: "All A's",
    },
  ];

  if (userDashboardCtx.gradeScale === "fourPoint") {
    marks = [
      {
        value: 0,
        label: "All E's",
      },
      {
        value: 25,
        label: "All D's",
      },
      {
        value: 50,
        label: "All C's",
      },
      {
        value: 75,
        label: "All B's",
      },
      {
        value: 100,
        label: "All A's",
      },
    ];
  };

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let divider = 20;
    let value = 100;
    value = parseInt(event.target.value);

    if (userDashboardCtx.gradeScale === "fourPoint") {
      divider = 25;
    }

    const gradePointScenario = value / divider;

    const result = parseFloat(calculateGPAForSpecificScenarios(userDashboardCtx.courseHistory, userDashboardCtx.remainingCourses, gradePointScenario)!);

    handleForecastedCGPAChange(result!);
  }

  return (
    <Box>
      <Slider
        aria-label="Custom marks"
        defaultValue={100}
        getAriaValueText={valuetext}
        step={userDashboardCtx.gradeScale === "fivePoint" ? 20 : 25}
        // track={true}
        onChange={handleClick}
        marks={marks}
      />
    </Box>
  );
};

export default ScenarioSlider;

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// const marks = [
//   {
//     value: 0,
//     label: "F",
//   },
//   {
//     value: 16.67,
//     label: "E",
//   },
//   {
//     value: 33.34,
//     label: "D",
//   },
//   {
//     value: 50,
//     label: "C",
//   },
//   {
//     value: 70,
//     label: "B",
//   },
//   {
//     value: 100,
//     label: "A",
//   }
// ];

const marks = [
  {
    value: 0,
    label: "Mostly B's",
  },
  {
    value: 50,
    label: "Mix of A's & B's",
  },
  {
    value: 100,
    label: "Mostly A's",
  }
];

const valuetext = (value: number) => {
  return `${value}`;
};

const ScenarioSlider = () => {
  return (
    <Box>
      <Slider
        aria-label="Custom marks"
        defaultValue={50}
        getAriaValueText={valuetext}
        step={50}
        track={false}
        // valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}

export default ScenarioSlider;
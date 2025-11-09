import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import { useContext, useState } from 'react';
import UserDashboardContext from '../../../store/UserDashboardContext';



const GradeScaleSelectMenu = () => {
  const [gradeScale, setGradeScale] = useState('fivePoint');
  const userDashboardCtx = useContext(UserDashboardContext);

  const handleChange = (event: SelectChangeEvent) => {
    setGradeScale(event.target.value);
    userDashboardCtx.handleGradeScaleChange(event.target.value);
  };

  return (
      <FormControl sx={{ m: 1, width: '100%' }} size="small">
        <Select
          value={gradeScale}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value='fourPoint'>4.0 Scale</MenuItem>
          <MenuItem value='fivePoint'>5.0 Scale</MenuItem>
        </Select>
      </FormControl>
  );
}

export default GradeScaleSelectMenu;
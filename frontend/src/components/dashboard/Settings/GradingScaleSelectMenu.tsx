import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import { useContext, useState } from 'react';
import UserDashboardContext from '../../../store/UserDashboardContext';

// This helps to change the grade from 4 point to a 5 point scale

const GradeScaleSelectMenu = () => {
  const [gradeScale, setGradeScale] = useState<'fourPoint' | 'fivePoint'>('fivePoint');
  const userDashboardCtx = useContext(UserDashboardContext);

  const handleChange = (value: 'fourPoint' | 'fivePoint') => {
    setGradeScale(value);
    userDashboardCtx.handleGradeScaleChange(value);
  };

  return (
      <FormControl sx={{ m: 1, width: '100%' }} size="small">
        <Select
          value={gradeScale}
          onChange={(e) => handleChange(e.target.value)}
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
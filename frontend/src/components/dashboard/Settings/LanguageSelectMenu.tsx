import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';



const LanguageSelectMenu = () => {
  const [language, setLanguage] = useState("english");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: '100%' }} size="small">
        <Select
          value={language}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="english">English</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default LanguageSelectMenu;
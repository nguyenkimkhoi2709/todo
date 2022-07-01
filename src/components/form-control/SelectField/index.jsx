import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');
  const label = "Mô tả 123456"

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <TextField style={{ marginBottom: "12px" }} disabled label="Mô tả" variant='standard' fullWidth/>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={label}
          onChange={handleChange}
        >
          <MenuItem disabled value={10}>Không "</MenuItem>
          <MenuItem value={20}>Có</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
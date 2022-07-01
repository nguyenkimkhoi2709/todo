import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  form: PropTypes.object,
  name: PropTypes.string,

  label: PropTypes.string,
  disabled: PropTypes.bool
};

function PasswordField(props) {
  const { form, name, label, disabled } = props
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  return (
      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ field: { onChange }, fieldState: { invalid, error } }) => (
            <OutlinedInput
              id={name}
              type={showPassword ? 'text' : 'password'}
              label={label}
              onChange={onChange}
              disabled={disabled}
              error={invalid}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          )}

          
        />
      </FormControl>
  );
}

export default PasswordField;
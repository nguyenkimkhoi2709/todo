import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller}  from 'react-hook-form'

InputField.propTypes = {
  form: PropTypes.object,
  name: PropTypes.string,

  label: PropTypes.string,
  disabled: PropTypes.bool
};

function InputField(props) {
  const { form, name, label, disabled } = props

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur }, fieldState: { invalid, error } }) => (
        <TextField
          fullWidth
          label={label}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          disabled={disabled}
          error={invalid}
          helperText={error?.message}
          variant="outlined"
          margin="normal"
        />
      )}
    ></Controller>
      
  );
}

export default InputField;
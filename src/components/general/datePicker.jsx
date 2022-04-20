import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useTheme } from '@mui/material/styles';

// this component still needs to be worked on
export default function BasicDatePicker({ props }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} {...props}>
      <DatePicker
        sx={{
          borderColor: 'none !important',
        }}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            size="small"
            {...params}
            sx={{
              borderColor: theme.palette.divider,
              '&: hover': {
                color: theme.palette.primary.main,
              },
            }}
            style={{
              maxWidth: '200px',
              color: 'text.primary',
              fontSize: '0.85rem !important',
              fontWeight: 600,
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}

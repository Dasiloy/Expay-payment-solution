import React from 'react';
import { useTheme } from '@mui/material';
import {
  MuiInput,
  MuiInputBase,
  MuiPaper,
  MuiIconButton,
  MuiDivider,
  MuiInputAdornment,
} from 'muibase';
import { Iconify } from 'components';
import { FaArrowRight } from 'react-icons/fa';
import { styled, alpha } from '@mui/material/styles';

export const MuiTextArea = ({ placeholder, rows, defaultValue, ...rest }) => {
  return (
    <MuiInput
      multiline
      fullWidth
      rows={rows}
      defaultValue={defaultValue}
      placeholder={placeholder}
      variant="filled"
      InputProps={{ disableUnderline: true }}
      {...rest}
    />
  );
};

export const MuiTextInputField = ({
  label,
  name,
  value,
  autoComplete,
  placeholder,
  id,
  type,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <div>
      <MuiInput
        sx={{ boxShadow: theme.palette.cardShadow }}
        size="small"
        variant="filled"
        type={type || 'text'}
        placeholder={placeholder}
        id={`${id}input`}
        label={label}
        value={value}
        name={name}
        autoComplete={autoComplete}
        InputProps={{ disableUnderline: true }}
        {...rest}
      />
    </div>
  );
};

export const MuiPasswordField = ({ value, ...rest }) => {
  const theme = useTheme();
  return (
    <div>
      <MuiInput
        sx={{ boxShadow: theme.palette.cardShadow }}
        value={value}
        size="small"
        variant="filled"
        name="password"
        label={rest.label || 'Password'}
        type={'password'}
        placeholder={'Password'}
        id="contained-password-input"
        autoComplete="current-password"
        InputProps={{ disableUnderline: true }}
        {...rest}
      />
    </div>
  );
};

export const MuiFilledEmailInputField = ({ name, label, value, placeholder, ...rest }) => {
  const theme = useTheme();
  return (
    <div>
      <MuiInput
        sx={{ boxShadow: theme.palette.cardShadow }}
        size="small"
        value={value}
        name={name}
        label={label}
        type="email"
        variant="filled"
        placeholder={placeholder}
        id="contained-email-input"
        autoComplete="current-email"
        InputProps={{ disableUnderline: true }}
        {...rest}
      />
    </div>
  );
};

export const MuiStyledInput = () => {
  const theme = useTheme();
  return (
    <MuiPaper
      style={{
        boxShadow: 'none',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#7D849D' : theme.palette.divider,
      }}
      component="form"
      sx={{
        p: '2px 6px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '100%',
        background: 'transparent',
      }}
    >
      <MuiInputBase
        sx={{ flex: 1, color: '#fff', fontSize: '0.9rem' }}
        placeholder="Enter your email"
        inputProps={{ 'aria-label': 'get latest info via mail' }}
      />
      <MuiDivider
        sx={{ height: 28, m: 0.5 }}
        style={{ background: theme.palette.mode === 'light' ? '#7D849D' : '' }}
        orientation="vertical"
      />
      <MuiIconButton type="submit" sx={{ p: '10px' }} aria-label="email">
        <FaArrowRight
          style={{ fontSize: '0.9rem', color: theme.palette.mode === 'light' ? '#fff' : '' }}
        />
      </MuiIconButton>
    </MuiPaper>
  );
};

// underlying div for search bar
const SearchbarStyle = styled('div')(({ theme, height }) => ({
  width: '100%',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  height: height || '50px',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  padding: theme.spacing(0, 3),
  border: theme.palette.mode === 'light' ? '' : '1px solid',
  borderColor: alpha(theme.palette.divider, 0.72),
  borderRadius: 8,
  backgroundColor:
    theme.palette.mode === 'light' ? `${alpha('#FAFAFA', 0.92)}` : theme.palette.background.default,
  [theme.breakpoints.up('md')]: {
    height: '55px',
    padding: theme.spacing(0, 2.5),
  },
}));

export const DefaultSearchBar = ({
  placeholder = 'search....',
  fullWidth = false,
  value = 0 || '',
  onChange = () => {},
  ...rest
}) => {
  const { Input } = MuiInputBase;
  return (
    <SearchbarStyle>
      <Input
        autoFocus
        disableUnderline
        fullWidth={fullWidth}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        startAdornment={
          <MuiInputAdornment position="start">
            <Iconify
              icon="eva:search-fill"
              sx={{ color: 'text.disabled', width: 20, height: 20 }}
            />
          </MuiInputAdornment>
        }
        sx={{ mr: 1, fontWeight: 'fontWeightBold', fontSize: '0.85rem !important' }}
        {...rest}
      />
    </SearchbarStyle>
  );
};

export const InputFieldWithIconStart = ({
  icon = '',
  name = '',
  placeholder = 'search....',
  fullWidth = false,
  value = 0 || '',
  onChange = () => {},
  ...rest
}) => {
  const { Input } = MuiInputBase;
  return (
    <SearchbarStyle height={'40px'}>
      <Input
        autoFocus
        disableUnderline
        fullWidth={fullWidth}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        startAdornment={
          <MuiInputAdornment position="start">
            <Iconify icon={icon} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
          </MuiInputAdornment>
        }
        sx={{ mr: 1, fontWeight: 'fontWeightBold', fontSize: '0.85rem !important' }}
        {...rest}
      />
    </SearchbarStyle>
  );
};

export const InputFieldWithIconEnd = ({
  placeholder = 'search....',
  name = '',
  icon = '',
  type = '',
  fullWidth = false,
  value = 0 || '',
  onChange = () => {},
  ...rest
}) => {
  const { Input } = MuiInputBase;
  return (
    <SearchbarStyle height={'40px'}>
      <Input
        autoFocus
        type={type}
        disableUnderline
        fullWidth={fullWidth}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        endAdornment={
          <MuiInputAdornment position="start">
            <Iconify icon={icon} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
          </MuiInputAdornment>
        }
        sx={{ mr: 1, fontWeight: 'fontWeightBold', fontSize: '0.85rem !important' }}
        {...rest}
      />
    </SearchbarStyle>
  );
};

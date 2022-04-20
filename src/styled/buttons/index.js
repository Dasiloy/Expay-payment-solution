import React from 'react';
import { useTheme } from '@mui/material/styles';
import { MuiBox, MuiButton } from 'muibase';

export const PrimaryButton = ({ ...rest }) => {
  return <MuiButton variant={'contained'} {...rest} />;
};

export const OutlinedButton = ({ ...rest }) => {
  return <MuiButton variant={'outlined'} {...rest} />;
};

export const TextButton = ({ ...rest }) => {
  return <MuiButton variant={'text'} {...rest} />;
};

export const ButtonWithIconStart = ({ icon, text, ...rest }) => {
  const theme = useTheme();
  return (
    <MuiButton
      variant="outlined"
      startIcon={icon}
      {...rest}
      size="small"
      sx={{
        color: 'text.primary',
        fontSize: '0.85rem !important',
        fontWeight: 600,
        borderColor: theme.palette.divider,
        '&: hover': {
          color: theme.palette.primary.main,
        },
      }}
    >
      {text}
    </MuiButton>
  );
};

export const ButtonWithIconEnd = ({ icon, text, ...rest }) => {
  const theme = useTheme();
  return (
    <MuiButton
      variant="outlined"
      endIcon={icon}
      {...rest}
      size="small"
      sx={{
        color: 'text.primary',
        fontSize: '0.85rem !important',
        fontWeight: 600,
        borderColor: theme.palette.divider,
        '&: hover': {
          color: theme.palette.primary.main,
        },
      }}
    >
      {text}
    </MuiButton>
  );
};

export const DashBoardButtonGroup = ({
  size = 'small',
  variant = 'text',
  children,
  color = 'dashed',
  ...rest
}) => {
  const { Group } = MuiButton;
  const theme = useTheme();
  return (
    <MuiBox
      sx={{
        border: '1px solid',
        borderColor: theme.palette.divider,
        borderRadius: theme.spacing(1),
      }}
    >
      <Group
        variant={variant}
        size={size}
        color={color}
        aria-label={`${size} button group`}
        {...rest}
      >
        {children}
      </Group>
    </MuiBox>
  );
};

export const DateFilterButton = ({ children, ...rest }) => {
  const theme = useTheme();
  return (
    <MuiButton
      variant="text"
      size="small"
      sx={{
        color: 'text.primary',
        fontSize: '0.85rem !important',
        fontWeight: 600,
        borderColor: theme.palette.divider,
        '&: hover': {
          color: theme.palette.primary.main,
        },
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MuiPopover } from 'muibase';
import { alpha, styled } from '@mui/material/styles';

const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -8,
    zIndex: 1,
    width: 12,
    right: 'calc(35%)',
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: theme.palette.background.default,
    borderRight: `solid 1px ${alpha(theme.palette.grey[300], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[300], 0.12)}`,
  },
}));

export default function MenuPopover({ children, sx, isArrowNot, ...other }) {
  const theme = useTheme();
  return (
    <MuiPopover
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          boxShadow: (theme) => theme.shadows[2],
          border: (theme) => `solid 1px ${theme.palette.grey[100]}`,
          width: other.width || 250,
          overflow: 'inherit',
          ...sx,
        },
      }}
      {...other}
    >
      {!isArrowNot && <ArrowStyle className="arrow" theme={theme} />}
      {children}
    </MuiPopover>
  );
}

MenuPopover.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

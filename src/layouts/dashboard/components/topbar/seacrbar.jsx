import { useState } from 'react';
// material
import { styled, alpha } from '@mui/material/styles';
// muibase
import {
  MuiIconButton,
  MuiInputAdornment,
  MuiInputBase,
  MuiSlide,
  MuiClickAwayListener,
} from 'muibase';
// from styled
import { PrimaryButton } from 'styled';
// component
import { Iconify } from 'components';

// import AppBar height
import { APPBAR_DESKTOP, APPBAR_MOBILE } from 'styled/dashboard/constants';

const SearchbarStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  padding: theme.spacing(0, 3),
  boxShadow: theme.palette.mode === 'light' ? theme.shadows[1] : theme.shadows[2],
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export default function SearchBar() {
  const { Input } = MuiInputBase;
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MuiClickAwayListener onClickAway={handleClose}>
      <div>
        {!isOpen && (
          <MuiIconButton onClick={handleOpen}>
            <Iconify icon="eva:search-fill" width={20} height={20} />
          </MuiIconButton>
        )}

        <MuiSlide direction="down" transitionIn={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <MuiInputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={{ color: 'text.disabled', width: 20, height: 20 }}
                  />
                </MuiInputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold', fontSize: '0.85rem !important' }}
            />
            <PrimaryButton variant="contained" onClick={handleClose}>
              Search
            </PrimaryButton>
          </SearchbarStyle>
        </MuiSlide>
      </div>
    </MuiClickAwayListener>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

// mui components
import {
  MuiToolBar,
  MuiIconButton,
  MuiInputAdornment,
  MuiOutLinedInput,
  MuiToolTip,
} from 'muibase';

// imported styled components
import { SubTitle1 } from 'styled';

// component
import { Iconify } from '.';

const RootStyle = styled(MuiToolBar)(({ theme }) => ({
  height: 60,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0, 2, 2, 0),
}));

const SearchStyle = styled(MuiOutLinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.shadows[1] },
  '& fieldset': {
    borderWidth: '1px !important',
    borderColor: `${theme.palette.grey[500]} !important`,
  },
}));

export default function TableListToolbar({ numSelected, filterTable, onFilterTable }) {
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'text.primary',
          bgcolor: 'secondary.main',
        }),
      }}
    >
      {numSelected > 0 ? (
        <SubTitle1 component="div">{numSelected} selected</SubTitle1>
      ) : (
        <SearchStyle
          sx={{ fontWeight: 'fontWeightBold', fontSize: '0.9rem !important' }}
          value={filterTable}
          onChange={onFilterTable}
          placeholder="Search..."
          size="small"
          startAdornment={
            <MuiInputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.primary' }} />
            </MuiInputAdornment>
          }
        />
      )}

      {numSelected > 0 && (
        <MuiToolTip title="Delete">
          <MuiIconButton>
            <Iconify icon="eva:trash-2-fill" sx={{ color: '#ff1010' }} />
          </MuiIconButton>
        </MuiToolTip>
      )}
    </RootStyle>
  );
}

TableListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/styles';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { SubBody } from 'styled';
import { useTheme } from '@mui/material/styles';
import { Iconify } from '.';
import { downIcon, upIcon } from 'constants';


const StyledButton = styled('button')(({ theme, width }) => ({
  width,
  backgroundColor: theme.palette.background.paper,
  borderColor: theme.palette.divider,
  borderStyle: 'solid',
  borderRadius: theme.spacing(1),
  borderWidth: 1,
  padding: theme.spacing(0.6, 1),
  fontSize: 14,
  fontWeight: theme.typography.fontWeightMedium,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.palette.text.secondary,
}));

export default function CustomSelector({
  selections = [],
  selected = 'select an option',
  width = 140,
  onSelect = () => {},
}) {
  const [open, setOpen] = React.useState(null);
  const [option, setOption] = React.useState(selected);

  const theme = useTheme();

  const handleClose = () => {
    setOpen(null);
  };

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleSelection = (_e, selection) => {
    setOption(selection);
    onSelect && onSelect(selection);
    handleClose();
  };

  return (
    <>
      <StyledButton
        width={width > 140 ? width : 140}
        onClick={handleOpen}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <span>{option}</span>
        <Iconify color={theme.palette.primary.main} icon={open ? upIcon : downIcon} />
      </StyledButton>
      <Menu
        size="small"
        id="basic-menu"
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          sx: {
            width: width > 140 ? width : 140,
            maxWidth: '100%',
            borderRadius: '8px',
          },
        }}
      >
        {selections.map((menu) => (
          <MenuItem
            key={menu.title}
            sx={{ color: 'text.secondary' }}
            onClick={(e) => {
              handleSelection(e, menu.title);
            }}
          >
            <ListItemIcon>
              <Iconify icon={menu.icon} width={16} height={16} color={theme.palette.primary.main} />
            </ListItemIcon>
            <ListItemText
              primary={
                <SubBody fontSize={'14px !important'} fontWeight={menu.title === option && 700}>
                  {menu.title}
                </SubBody>
              }
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

CustomSelector.propTypes = {
  selections: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.string,
};

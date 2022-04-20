import { useRef, useState } from 'react';
import PropTypes, { object } from 'prop-types';

// left as it is for simplicity
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';

// component
import { Iconify } from '.';

export default function UseMoreMenu({
  menus = [],
  onClick = () => {},
  openMenu = () => {},
  open = false,
  anchorEl = null,
}) {
  return (
    <>
      <IconButton onClick={openMenu}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>
      <Menu
        size="small"
        open={open}
        anchorEl={anchorEl}
        onClose={onClick}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {menus.map((menu) => (
          <MenuItem sx={{ color: 'text.secondary' }} onClick={(e) => onClick(e, `${menu.title}`)}>
            <ListItemIcon>
              <Iconify icon={menu.icon} width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary={menu.title} primaryTypographyProps={{ variant: 'body2' }} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

UseMoreMenu.propType = {
  menus: PropTypes.arrayOf(object),
  onClick: PropTypes.func,
};

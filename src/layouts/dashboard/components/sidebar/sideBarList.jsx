import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material/styles';
import { MuiList, MuiDivider } from 'muibase';
import { HeadingSix } from 'styled/typograhphy';


const NavItem = ({ item = {}, path = '' }) => {
  const theme = useTheme();
  const { Item, Icon, Button, Text } = MuiList;
  const router = useRouter();
  const { pathname } = router;

  return (
    <Item style={{ marginBottom: '10px' }}>
      <Button
        onClick={() => router.push(path)}
        sx={{
          borderRadius: '6px',
          background: path === pathname && theme.palette.secondary.main,
          '&:hover': {
            background: theme.palette.secondary.main,
          },
          '&:hover .MuiListItemIcon-root': {
            color: theme.palette.mode !== 'dark' && theme.palette.primary.main,
          },
        }}
      >
        <Icon
          sx={{
            color: path === pathname && theme.palette.mode !== 'dark' && theme.palette.primary.main,
          }}
        >
          {item.icon}
        </Icon>
        <Text primary={<HeadingSix>{item.title}</HeadingSix>} />
      </Button>
    </Item>
  );
};

NavItem.propType = {
  item: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default function SideBarNav({ links = [], merchantExtra = [], isAdmin = false}) {
  return (
    <MuiList disablePadding dense>
      {links.map((link) => (
        <NavItem key={link.path} item={link} path={link.path} />
      ))}
      {!isAdmin && <MuiDivider style={{ marginBottom: '10px' }} />}
      {merchantExtra.map((link) => (
        <NavItem key={link.path} item={link} path={link.path} />
      ))}
    </MuiList>
  );
}

SideBarNav.propType = {
  links: PropTypes.array.isRequired,
  merchantExtra: PropTypes.array,
  isAdmin: PropTypes.bool,
};

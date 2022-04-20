import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { alpha } from '@mui/material/styles';
import { MuiBox, MuiDivider, MuiAvatar, MuiIconButton, MuiMenu } from 'muibase';
// components
import { Iconify } from 'components';
import { MenuPopover } from 'components';
import { SubBody, SubTitle2, OutlinedButton } from 'styled';

// menu link  options
const merchantProfilepopup = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    linkTo: '/merchant/settings',
  },
];

// menu link  options
const adminProfilepopup = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    linkTo: '/profile',
  },
];
export default function AccountPopover({ user = {}, isAdmin = false }) {
  // menu for profile-pop-up
  const MENU_OPTIONS = isAdmin ? adminProfilepopup : merchantProfilepopup;
  const { Item } = MuiMenu;
  const router = useRouter();
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  const handleLink = (link) => {
    handleClose();
    router.push(link);
  };

  return (
    <>
      <MuiIconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 30,
          height: 30,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: '\'\'',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <MuiAvatar src={user.avatarUrl} alt="profilePic" />
      </MuiIconButton>

      <MenuPopover open={Boolean(open)} onClose={handleClose} anchorEl={open} sx={{ width: 300 }}>
        <MuiBox sx={{ my: 2, px: 2.5 }}>
          <SubTitle2 noWrap>{`${user.firstName} ${user.lastName}`}</SubTitle2>
          <SubBody sx={{ color: 'text.secondary', fontSize: '14px !important' }} noWrap>
            {user.email}
          </SubBody>
        </MuiBox>
        <MuiDivider sx={{ my: 2 }} />
        {MENU_OPTIONS.map((option) => (
          <Item
            key={option.label}
            onClick={() => handleLink(option.linkTo)}
            sx={{ typography: 'body2', py: 1.2, px: 2.5 }}
          >
            <Iconify
              icon={option.icon}
              sx={{
                mr: 2,
                width: 20,
                height: 20,
              }}
            />
            <SubBody sx={{ color: 'text.secondary', fontSize: '16px !important' }} noWrap>
              {option.label}
            </SubBody>
          </Item>
        ))}
        <MuiBox sx={{ p: 2, pt: 1.5 }}>
          <OutlinedButton
            href={'#'}
            onClick={handleClose}
            fullWidth
            color="inherit"
            variant="outlined"
            size={'small'}
            disableRipple
          >
            Logout
          </OutlinedButton>
        </MuiBox>
      </MenuPopover>
    </>
  );
}
AccountPopover.propTypes = {
  user: PropTypes.object.isRequired,
};

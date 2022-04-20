import React from 'react';
import { useState } from 'react';
// material
import { MuiList, MuiIconButton, MuiMenu, MuiBox, MuiAvatar } from 'muibase';
// components
import { MenuPopover, Flag } from 'components';
// import currencies
import currencies from 'constants/CURRENCIES';

// modify the currency
const CURRENCIES = currencies.map((currency) => ({
  value: currency.code,
  label: currency.title,
  Icon: () => <Flag code={currency.code} title={currency.title} />,
}));

export default function CurrencyPopover({ sx, ...rest }) {
  const { Text, Icon } = MuiList;
  const { Item } = MuiMenu;
  const [open, setOpen] = useState(null);
  const [activeCurrency, setActiveCurrency] = React.useState('US');

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = (code) => {
    // HANDLE CLICK OUTSIDE THE POPOVER
    if (typeof code === 'object') {
      setActiveCurrency((prevState) => prevState);
      setOpen(null);
      return;
    }
    // handle click within the popover
    setActiveCurrency(code);
    setOpen(null);
  };

  return (
    <>
      <MuiIconButton
        onClick={handleOpen}
        sx={{
          ...sx,
          padding: 0,
          width: 30,
          height: 30,
        }}
      >
        <Flag code={activeCurrency} title="" />
      </MuiIconButton>
      <MenuPopover open={Boolean(open)} onClose={handleClose} anchorEl={open} {...rest}>
        <MuiBox sx={{ py: 1 }}>
          {CURRENCIES.map((option) => {
            const { Icon: CurrencyFlag } = option;
            return (
              <Item
                key={option.value}
                selected={option.value === activeCurrency}
                onClick={() => handleClose(option.value)}
                sx={{ py: 1, px: 2.5 }}
              >
                <Icon>
                  <CurrencyFlag />
                </Icon>
                <Text primaryTypographyProps={{ variant: 'body2' }}>{option.label}</Text>
              </Item>
            );
          })}
        </MuiBox>
      </MenuPopover>
    </>
  );
}

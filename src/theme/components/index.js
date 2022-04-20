export const components = (mode) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 6,
          paddingTop: 6,
          paddingBottom: 6,
        },
        containedPrimary:
          mode === 'light'
            ? {
                color: 'white',
                '&:hover': {
                  color: '#fff',
                  boxShadow: 'none',
                },
              }
            : {
                color: '#fff',
                '&:hover': {
                  color: '#fff',
                },
              },
        containedSecondary: mode === 'light' ? { color: 'black' } : { color: 'white' },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
        input: {
          borderRadius: 5,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    // MuiSelect: {
    //   styleOverrides: {
    //     select: {
    //       display: 'grid',
    //       alignItems: 'center',
    //       padding: '0 12px !important',
    //       '& .Mui-selected': {
    //         backgroundColor: 'transparent',
    //       },
    //     },
    //     selectMenu: {
    //       background: 'none',
    //       height: 'none',
    //       minHeight: 'none',
    //       overflow: 'unset',
    //     },

    // icon: {
    //   display: 'none',
    // },
    // },
    // },
  };
};

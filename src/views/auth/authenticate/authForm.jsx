import React from 'react';
import { useTheme } from '@mui/material';
import { MuiBox, MuiGrid } from 'muibase';
import { MuiAvatar, MuiStack } from 'muibase';
import { Container } from 'components';
import { HeadingSix, PrimaryButton } from 'styled';
import { MuiTextInputField } from 'styled/inputs';
import { Timer } from '../components';
import { merchantUser as user } from 'constants/ACTIVE_USER';

function AuthForm() {
  const theme = useTheme();
  return (
    <MuiBox width="100%" paddingY={10} paddingX={4}>
      <MuiGrid container justifyContent={'center'}>
        <MuiGrid
          item
          xs={12}
          sm={10}
          md={8}
          lg={6}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ textAlign: 'center' }}
        >
          <Container noTopPadding>
            <MuiBox
              marginBottom={4}
              paddingX={3}
              paddingY={2}
              sx={{ border: '1px solid', borderColor: theme.palette.divider, borderRadius: '6px' }}
            >
              <MuiStack direction="row" spacing={3}>
                <MuiAvatar alt={user.firstName} src={user.avatarUrl} />
                <MuiBox textAlign={'left'}>
                  <HeadingSix>{`${user.firstName} ${user.lastName}`}</HeadingSix>
                  <HeadingSix color="text.dashed" style={{ fontSize: '0.80rem' }}>
                    {user.email}
                  </HeadingSix>
                </MuiBox>
              </MuiStack>
            </MuiBox>
            <MuiBox marginX={'auto'}>
              <MuiBox
                width={1}
                component="form"
                sx={{
                  '& .MuiTextField-root': { width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <MuiBox marginBottom={2}>
                  <MuiTextInputField type="text" placeholder={'4 - 6 -8 -0'} fullWidth />
                </MuiBox>
                <MuiBox display={'flex'} justifyContent={'flex-end'} marginBottom={2}>
                  <Timer />
                </MuiBox>
                <PrimaryButton fullWidth href={'/auth/login/authenticate'}>
                  proceed
                </PrimaryButton>
              </MuiBox>
            </MuiBox>
          </Container>
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  );
}

export default AuthForm;

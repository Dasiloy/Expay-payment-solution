import React from 'react';
import { useTheme } from '@mui/material';
import { MuiBox, MuiGrid } from 'muibase';
import { Container } from 'components';
import {  PrimaryButton } from 'styled';
import { MuiTextInputField } from 'styled/inputs';
import {FaArrowRight} from 'react-icons/fa';
function RegisterForm() {
  const theme = useTheme();

  return (
    <MuiBox width='100%' paddingY={10} paddingX={4}>
      <MuiGrid container justifyContent={'center'}>
        <MuiGrid item xs={12} sm={10} md={8} lg={6} justifyContent={'center'} alignItems={'center'} sx={{textAlign:'center'}}>
          <Container noTopPadding>
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
                  <MuiTextInputField type='text' placeholder={'Company Name'} label='Company Name' fullWidth/>
                </MuiBox>
                <MuiBox marginBottom={2}>
                  <MuiTextInputField type='text' placeholder={'Company Website'} label='Company Website' fullWidth/>
                </MuiBox>
                <MuiBox marginBottom={2}>
                  <MuiTextInputField type='text' placeholder={'Company Address'} label='Company Location'  fullWidth/>
                </MuiBox>
                <PrimaryButton fullWidth endIcon={   <FaArrowRight style={{fontSize:'1.2rem', color:theme.palette.mode === 'light' ? '##fff' : '#000'}}/>}>proceed &nbsp;
                </PrimaryButton>
              </MuiBox>
            </MuiBox>
          </Container>
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  );
}

export default RegisterForm;

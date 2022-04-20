import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FormTitle from './formtitle';
import { MuiGrid, MuiBox, MuiIconButton, MuiAvatar } from 'muibase';
import { SubBody, InputFieldWithIconEnd, OutlinedButton, PrimaryButton } from 'styled';

// currently signed in user
import { merchantUser as user } from 'constants/ACTIVE_USER';

export default function Account() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  // state values
  const [isSubmitingChanges, setIsSubmittingChanges] = React.useState(false);
  const [values, setValues] = React.useState({
    ...user,
    confirmPassword: user.password,
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onCancel = () => {
    setValues({
      ...user,
      confirmPassword: user.password,
    });
  };

  const saveChanges = (e) => {
    e.preventDefault();
    setIsSubmittingChanges(true);
    setTimeout(() => {
      setIsSubmittingChanges(false);
    }, 2000);
  };
  return (
    <MuiBox
      width={1}
      component="form"
      sx={{
        '& .MuiTextField-root': { width: '100%' },
      }}
      validate
      autoComplete="off"
    >
      {/* each form segments*/}
      <FormTitle title="Personal information" subtitle="Your personal details" width={8}>
        {/* each input fields are stacks*/}
        <MuiGrid
          container
          marginBottom={2}
          alignItems={'center'}
          sx={{ gridGap: '10px !important' }}
        >
          <MuiGrid item xs={12} md={3}>
            <SubBody color="text.primary" fontSize={'16px !important'} fontWeight={500}>
              Profile Photo :
            </SubBody>
          </MuiGrid>
          <MuiGrid item xs={12} md={8} alignItems={'center'} spacing={2}>
            <MuiIconButton
              sx={{
                padding: 0,
                width: 100,
                height: 100,
              }}
            >
              <MuiAvatar src={values.avatarUrl} alt="profilePic" sx={{ width: 100, height: 100 }} />
            </MuiIconButton>
          </MuiGrid>
        </MuiGrid>
        {/* each input fields are stacks*/}
        <MuiGrid
          container
          marginBottom={2}
          alignItems={'center'}
          sx={{ gridGap: '10px !important' }}
        >
          <MuiGrid item xs={12} md={3}>
            <SubBody color="text.primary" fontSize={'16px !important'} fontWeight={500}>
              Full Name :
            </SubBody>
          </MuiGrid>
          <MuiGrid item container xs={12} md={8} alignItems={'center'} spacing={2}>
            <MuiGrid item xs={12} md={6}>
              <InputFieldWithIconEnd
                placeholder={'john'}
                fullWidth
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </MuiGrid>
            <MuiGrid item xs={12} md={6}>
              <InputFieldWithIconEnd
                placeholder={'Doe'}
                fullWidth
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </MuiGrid>
          </MuiGrid>
        </MuiGrid>
        {/* each input fields are stacks*/}
        <MuiGrid
          container
          marginBottom={2}
          alignItems={'center'}
          sx={{ gridGap: '10px !important' }}
        >
          <MuiGrid item xs={12} md={3}>
            <SubBody color="text.primary" fontSize={'16px !important'} fontWeight={500}>
              Email Address :
            </SubBody>
          </MuiGrid>
          <MuiGrid item xs={12} md={8}>
            <InputFieldWithIconEnd
              placeholder={'mobuinfo@paypal.gmail'}
              fullWidth
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </MuiGrid>
        </MuiGrid>
      </FormTitle>
      {/* each form segment is divided*/}
      <MuiBox bgcolor="#f1f1f1" width={'100%'} height={'1px'} marginY={3} />
      {/* each form segments*/}
      <FormTitle title="Company information" subtitle="Details of your Company" width={8}>
        {/* each input fields are stacks*/}
        <MuiGrid
          container
          marginBottom={2}
          alignItems={'center'}
          sx={{ gridGap: '10px !important' }}
        >
          <MuiGrid item xs={12} md={3}>
            <SubBody color="text.primary" fontSize={'16px !important'} fontWeight={500}>
              Company Name :
            </SubBody>
          </MuiGrid>
          <MuiGrid item xs={12} md={8}>
            <InputFieldWithIconEnd
              placeholder={'frolancer'}
              fullWidth
              type="text"
              name="companyName"
              value={values.companyName}
              onChange={handleChange}
            />
          </MuiGrid>
        </MuiGrid>
        {/* each input fields are stacks*/}
        <MuiGrid
          container
          marginBottom={2}
          alignItems={'center'}
          sx={{ gridGap: '10px !important' }}
        >
          <MuiGrid item xs={12} md={3}>
            <SubBody color="text.primary" fontSize={'16px !important'} fontWeight={500}>
              Address :
            </SubBody>
          </MuiGrid>
          <MuiGrid item xs={12} md={8}>
            <InputFieldWithIconEnd
              placeholder={'United kingdom'}
              fullWidth
              type="text"
              name="companyAddress"
              value={values.companyAddress}
              onChange={handleChange}
            />
          </MuiGrid>
        </MuiGrid>
        {/* each input fields are stacks*/}
        <MuiGrid
          container
          marginBottom={2}
          alignItems={'center'}
          sx={{ gridGap: '10px !important' }}
        >
          <MuiGrid item xs={12} md={3}>
            <SubBody color="text.primary" fontSize={'16px !important'} fontWeight={500}>
              Website :
            </SubBody>
          </MuiGrid>
          <MuiGrid item xs={12} md={8}>
            <InputFieldWithIconEnd
              placeholder={'https//frolancer.com'}
              fullWidth
              type="text"
              name="companyWebsite"
              value={values.companyWebsite}
              onChange={handleChange}
            />
          </MuiGrid>
        </MuiGrid>
      </FormTitle>
      {/* each form segment is divided*/}
      <MuiBox bgcolor="#f1f1f1" width={'100%'} height={'1px'} marginY={3} />
      <FormTitle title="Password and security" subtitle="manage Password" width={8}>
        {/* each input fields are stacks*/}
        <MuiGrid
          container
          marginBottom={2}
          alignItems={'center'}
          sx={{ gridGap: '10px !important' }}
        >
          <MuiGrid item xs={12} md={3}>
            <SubBody color="text.primary" fontSize={'16px !important'} fontWeight={500}>
              Password :
            </SubBody>
          </MuiGrid>
          <MuiGrid item container xs={12} md={8} alignItems={'center'} spacing={2}>
            <MuiGrid item xs={12} md={6}>
              <InputFieldWithIconEnd
                placeholder={'*****'}
                fullWidth
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </MuiGrid>
            <MuiGrid item xs={12} md={6}>
              <InputFieldWithIconEnd
                placeholder={'*****'}
                fullWidth
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
            </MuiGrid>
          </MuiGrid>
        </MuiGrid>
      </FormTitle>
      {/* each form segment is divided*/}
      <MuiBox bgcolor="#f1f1f1" width={'100%'} height={'1px'} marginY={3} />
      <MuiGrid item container spacing={isMd ? 4 : 2} xs={12} md={9} marginTop={1}>
        <MuiGrid item xs={12} md={4}>
          <OutlinedButton onClick={onCancel} fullWidth>
            Cancel
          </OutlinedButton>
        </MuiGrid>
        <MuiGrid item xs={12} md={8}>
          <PrimaryButton loadingButton loading={isSubmitingChanges} onClick={saveChanges} fullWidth>
            Save Changes
          </PrimaryButton>
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  );
}

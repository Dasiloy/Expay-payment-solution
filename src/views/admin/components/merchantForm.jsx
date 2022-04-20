/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MuiBreadcrumbs, MuiBox, MuiGrid, MuiModal } from 'muibase';
import { MuiTextInputField } from 'styled/inputs';
import { CREATE, EDIT } from 'constants';
import { HeadingSix, HeadingThree, OutlinedButton, PrimaryButton } from 'styled';
import { FeedbackModal } from 'components';

InputGroups.propTypes = {
  groupData: PropTypes.array,
  handleChange: PropTypes.func,
  label: PropTypes.string,
};

function InputGroups({ groupData = [], handleChange = () => {}, label = '' }) {
  return (
    <MuiBox>
      <HeadingThree gutterBottom marginBottom={2}>
        {label}
      </HeadingThree>
      <MuiGrid container spacing={4} alignItems={'center'}>
        {groupData.map((input) => {
          const { name, value, placeholder, label, type } = input;
          return (
            <MuiGrid key={label} item xs={12} sm={6}>
              <HeadingSix>{label}</HeadingSix>
              <MuiTextInputField
                type={type}
                placeholder={placeholder}
                label=""
                fullWidth
                name={name}
                value={value}
                onChange={handleChange}
              />
            </MuiGrid>
          );
        })}
      </MuiGrid>
    </MuiBox>
  );
}

function MerchantForm({ merchant = {}, reset = () => {}, action = '' }) {
  // initial form fields
  const formFields = merchant
    ? {
        ...merchant,
        bankName: merchant.bankInfo.name,
        bankAccountNumber: merchant.bankInfo.accountNumber,
      }
    : {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        companyName: '',
        companyAddress: '',
        companyWebsite: '',
        bankName: '',
        bankAccountNumber: '',
        bankInfo: {
          name: '',
          accountNumber: '',
        },
      };
  const [form, setForm] = React.useState({ ...formFields });
  const [active, setActive] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isProvidingFeedback, setIsProvidingFeedback] = React.useState(false);
  const theme = useTheme();

  // update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  // input personal group fields
  const personalGroup = [
    {
      name: 'firstName',
      value: form.firstName,
      placeholder: 'John',
      label: 'First Name',
      type: 'text',
    },
    {
      name: 'lastName',
      value: form.lastName,
      placeholder: 'Doe',
      label: 'Last Name',
      type: 'text',
    },
    {
      name: 'email',
      value: form.email,
      placeholder: 'John@businessgmail.com',
      label: 'Emsail',
      type: 'text',
    },
    {
      name: 'password',
      value: form.password,
      placeholder: '***********',
      label: 'Password',
      type: 'password',
    },
  ];

  // input company group fields
  const companyGroup = [
    {
      name: 'companyName',
      value: form.companyName,
      placeholder: 'John Express limited',
      label: 'Compony Name',
      type: 'text',
    },
    {
      name: 'companyAddress',
      value: form.companyAddress,
      placeholder: 'North Hampshires, United Kingdom',
      label: 'Company Address',
      type: 'text',
    },
    {
      name: 'companyWebsite',
      value: form.companyWebsite,
      placeholder: 'Johnbusiness.com',
      label: 'Company Website',
      type: 'text',
    },
  ];

  // input bank group fields
  const bankGroup = [
    {
      name: 'bankName',
      value: form.bankName,
      placeholder: 'Access bank',
      label: 'Bank Name',
      type: 'text',
    },
    {
      name: 'bankAccountNumber',
      value: form.bankAccountNumber,
      placeholder: '9876546789',
      label: 'Bank Account Number',
      type: 'text',
    },
  ];

  // cancel process
  const onCancel = () => {
    setForm({ ...formFields });
    reset();
  };

  // save process
  const onSaveProcess = () => {
    setIsLoading(true);
    if (action === CREATE) {
      // create merchant
    } else {
      // edit merchant
    }
    setTimeout(() => {
      setIsLoading(false);
      setIsProvidingFeedback(true);
    }, 2000);
  };

  //close process
  const closeProcess = () => {
    setIsProvidingFeedback(() => {
      onCancel();
      return false;
    });
  };
  return (
    <>
      <MuiModal open={isProvidingFeedback} onClose={closeProcess} width={400}>
        <FeedbackModal
          title="Merchant Creation Success"
          content={`A message has been  successfully sent to ${form.companyName} to notify them of their merchant account`}
          onClose={closeProcess}
          timeout={4000}
        />
      </MuiModal>
      <MuiBox>
        <MuiBreadcrumbs>
          <HeadingSix
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            color={active ? theme.palette.primary.main : 'text.dashed'}
            style={{ cursor: 'pointer' }}
            onClick={reset}
          >
            {'Merchants'}
          </HeadingSix>
          {action === EDIT && <HeadingSix color={'text.dashed'}>{merchant.companyName}</HeadingSix>}
          <HeadingSix color={'text.primary'}>{action}</HeadingSix>
        </MuiBreadcrumbs>
        <MuiBox marginY={6}>
          <MuiBox
            width={1}
            component="form"
            sx={{
              paddingLeft: { xs: 0, sm: 0, md: 4, lg: 8, xl: 12 },
              '& .MuiTextField-root': { width: '100%' },
            }}
            validate
            autoComplete="off"
          >
            {/*----- EACH INPUT GROUPS SECTION ----*/}
            <InputGroups
              handleChange={handleChange}
              label={'Personal information'}
              groupData={personalGroup}
            />
            <MuiBox marginBottom={{ xs: 6, md: 8 }} />
            {/*----- EACH INPUT GROUPS SECTION ----*/}
            <InputGroups
              handleChange={handleChange}
              label={'Company information'}
              groupData={companyGroup}
            />
            <MuiBox marginBottom={{ xs: 6, md: 8 }} />
            {/*----- EACH INPUT GROUPS SECTION ----*/}
            <InputGroups
              handleChange={handleChange}
              label={'Payment information'}
              groupData={bankGroup}
            />
            <MuiBox marginBottom={{ xs: 6, md: 8 }} />
            <MuiGrid container spacing={2} justifyContent={'center'}>
              <MuiGrid item xs={6} sm={3}>
                <OutlinedButton
                  fullWidth
                  onClick={() => {
                    onCancel();
                  }}
                >
                  Cancel
                </OutlinedButton>
              </MuiGrid>
              <MuiGrid item xs={6} sm={3}>
                <PrimaryButton
                  fullWidth
                  loadingButton
                  loading={isLoading}
                  onClick={() => {
                    onSaveProcess();
                  }}
                >
                  Save
                </PrimaryButton>
              </MuiGrid>
            </MuiGrid>
          </MuiBox>
        </MuiBox>
      </MuiBox>
    </>
  );
}

MerchantForm.propTypes = {
  merchant: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default MerchantForm;

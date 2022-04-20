import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { MuiBox, MuiModal, MuiStack } from 'muibase';
import { SubBody, TextButton, HeadingSix } from 'styled';
import { TableModalContent, Iconify } from 'components';
import { approveIcon } from 'constants';

const VerifyCard = ({ id, title, content, status, handleupload }) => {
  const theme = useTheme();

  return (
    <MuiBox
      sx={{
        border: '1px solid',
        borderColor: theme.palette.divider,
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <MuiStack>
        <HeadingSix>{title}</HeadingSix>
        <SubBody color="text.dashed" fontWeight={600} fontSize={'14px !important'}>
          {content}
        </SubBody>
      </MuiStack>

      {status === 'Pending' ? (
        <TextButton
          sx={{
            fontSize: '14px !important',
          }}
          onClick={() => handleupload(id)}
        >
          Upload
        </TextButton>
      ) : (
        <Iconify icon={approveIcon} width={24} height={24} color={theme.palette.success.light} />
      )}
    </MuiBox>
  );
};

export default function VerificationPopUp({ user }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // open verification modal
  const openVerificationsModal = () => {
    setIsModalOpen(true);
  };

  // close verification modal
  const closeVerificationsModal = () => {
    setIsModalOpen(false);
  };

  // trigger verification via upload
  const triggerVerification = (id) => {
    switch (id) {
      case 1:
        console.log(id);
        break;
      case 2:
        console.log(id);
        break;
      case 3:
        console.log(id);
        break;
      case 4:
        console.log(id);
        break;
      default:
        break;
    }
  };

  // verification list
  const verificationList = [
    {
      id: 1,
      title: 'Business ID',
      content: 'Upload your business ID card',
      status: 'Uploaded',
    },
    {
      id: 2,
      title: 'Proof of business',
      content: 'Upload your proof of business',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Proof of address',
      content: 'Upload your proof of address',
      status: 'Pending',
    },
    {
      id: 4,
      title: 'Business bank account',
      content: 'Add your business bank account',
      status: 'Pending',
    },
  ];

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <>
      <MuiModal open={isModalOpen} onClose={closeVerificationsModal}>
        <TableModalContent title="Verify Account" onClose={closeVerificationsModal}>
          {verificationList.map((item) => (
            <VerifyCard key={item.id} {...item} handleupload={triggerVerification} />
          ))}
        </TableModalContent>
      </MuiModal>
      <MuiBox
        bgcolor={
          theme.palette.mode === 'light'
            ? theme.palette.secondary.light
            : theme.palette.background.level2
        }
        sx={{
          marginTop: theme.spacing(isMd ? 4 : 2),
          display: 'flex',
          alignItems: isMd ? 'center' : 'flex-start',
          flexDirection: isMd ? 'row' : 'column',
          justifyContent: 'space-between',
          padding: theme.spacing(3, 3),
          boxShadow: theme.shadows[1],
          borderRadius: theme.spacing(1),
        }}
      >
        <SubBody color="text.dashed" fontWeight={600} fontSize={'16px !important'}>
          Your account is pending verification and is set to test mode.
          {isMd && <br />}
          Verify your account to switch to live mode
        </SubBody>
        <TextButton onClick={openVerificationsModal}>VERIFY</TextButton>
      </MuiBox>
    </>
  );
}

VerificationPopUp.propType = {
  user: PropTypes.object,
};

import React from 'react';
import PropTypes from 'prop-types';
import { TableModalContent, Carousel, Image } from 'components';
import { MuiBox, MuiGrid } from 'muibase';
import { MuiTextArea } from 'styled/inputs';
import { HeadingFive, HeadingSix, OutlinedButton, PrimaryButton } from 'styled';

export default function VerificationModal({
  activeItemDetails = {},
  handleMailActions = () => {},
  ...rest
}) {
  const credentialsList = () => {
    return activeItemDetails?.credentials?.map((item, i) => ({
      ...item,
      Render: ({ children }) => (
        <MuiBox marginBottom={3}>
          <Image key={i} imageUrl={item.imageUrl} />
          <MuiBox marginY={1} />
          <MuiBox display={'flex'} alignitems={'center'} justifyContent={'space-between'}>
            <HeadingFive>{`${i + 1}. ${item.title}`}</HeadingFive>
            {children}
          </MuiBox>
        </MuiBox>
      ),
    }));
  };

  return (
    <TableModalContent {...rest} title={'View credentials'}>
      <MuiBox>
        <MuiBox>
          <Carousel list={credentialsList() || []} />
        </MuiBox>
        <MuiBox>
          <HeadingSix gutterBottom>Send message</HeadingSix>
          <MuiTextArea
            rows={2}
            placeholder={`Hello, ${activeItemDetails.companyName}...`}
            variant={'outlined'}
          />
        </MuiBox>
        <MuiGrid container marginTop={2} spacing={2}>
          <MuiGrid item xs={12} md={6}>
            <OutlinedButton fullWidth onClick={() => rest && rest.onClose()}>
              Cancel
            </OutlinedButton>
          </MuiGrid>
          <MuiGrid item xs={12} md={6}>
            <PrimaryButton
              fullWidth
              loadingButton
              loading={rest && rest.loading}
              onClick={handleMailActions}
            >
              Verify
            </PrimaryButton>
          </MuiGrid>
        </MuiGrid>
      </MuiBox>
    </TableModalContent>
  );
}

VerificationModal.propTYpe = {
  activeItemDetails: PropTypes.object,
};

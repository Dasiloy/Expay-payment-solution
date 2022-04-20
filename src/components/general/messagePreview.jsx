import React from 'react';
import PropTypes from 'prop-types';
import { ShadowContainer, Image } from 'components';
import { MuiBox, MuiGrid } from 'muibase';
import { OutlinedButton, PrimaryButton, HeadingSix, HeadingFive, SubBody } from 'styled';

export default function MessagePreview({
  body = '',
  header = '',
  recipient = '',
  imageurl = '',
  isLoading = true,
  onCancel = () => {},
  onSend = () => {},
  sendText = 'Send',
  canceltext = 'Cancel',
  isFullBlown = false,
}) {
  console.log(imageurl);
  if (isFullBlown) {
    return (
      <>
        <ShadowContainer isFullBlown={isFullBlown}>
          <Image imageUrl={imageurl} height={{ xs: 100, sm: 150, md: 250 }} />
          <MuiBox paddingX={3} paddingBottom={2}>
            <MuiBox marginTop={4}>
              <HeadingFive gutterbottom>{header}</HeadingFive>
              <SubBody marginY={1.8} fontSize={'16px !important'}>
                {body}
              </SubBody>
              <HeadingSix>Recipient: {recipient}</HeadingSix>
            </MuiBox>
          </MuiBox>
        </ShadowContainer>
        <MuiGrid container marginTop={4} spacing={2}>
          <MuiGrid item xs={12} md={6}>
            <OutlinedButton
              fullWidth
              onClick={() => {
                onCancel();
              }}
            >
              {canceltext}
            </OutlinedButton>
          </MuiGrid>
          <MuiGrid item xs={12} md={6}>
            <PrimaryButton
              fullWidth
              loadingButton
              loading={isLoading}
              onClick={() => {
                onSend();
              }}
            >
              {sendText}
            </PrimaryButton>
          </MuiGrid>
        </MuiGrid>
      </>
    );
  }
  return (
    <ShadowContainer>
      <Image imageUrl={imageurl} />
      <MuiBox marginTop={4}>
        <HeadingFive gutterbottom>{header}</HeadingFive>
        <SubBody marginY={1} fontSize={'16px !important'}>
          {body}
        </SubBody>
        <HeadingSix>Recipient: {recipient}</HeadingSix>
      </MuiBox>
      <MuiGrid container marginTop={4} spacing={2}>
        <MuiGrid item xs={12} md={6}>
          <OutlinedButton
            fullWidth
            onClick={() => {
              onCancel();
            }}
          >
            {canceltext}
          </OutlinedButton>
        </MuiGrid>
        <MuiGrid item xs={12} md={6}>
          <PrimaryButton
            fullWidth
            loadingButton
            loading={isLoading}
            onClick={() => {
              onSend();
            }}
          >
            {sendText}
          </PrimaryButton>
        </MuiGrid>
      </MuiGrid>
    </ShadowContainer>
  );
}

MessagePreview.propTypes = {
  body: PropTypes.string,
  header: PropTypes.string,
  recipient: PropTypes.string,
  imageUrl: PropTypes.string,
  sendText: PropTypes.string,
  canceltext: PropTypes.string,
  isLoading: PropTypes.bool,
  isFullBlown: PropTypes.bool,
  onSend: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

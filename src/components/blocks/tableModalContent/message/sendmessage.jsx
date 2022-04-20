import React from 'react';
import PropTypes from 'prop-types';
import { TableModalContent, MessagePreviewer } from 'components';
import { MuiBox, MuiGrid } from 'muibase';
import { MuiTextInputField } from 'styled/inputs';
import { OutlinedButton, PrimaryButton, HeadingSix, MuiTextArea } from 'styled';

export default function SendMessage({ activeItemDetails = {}, ...rest }) {
  const { message, handleMessage, setMessage } = rest;
  const [isPreviewing, setIsPreviewing] = React.useState(false);
  const onSend = () => {
    rest.handleSave(() => setIsPreviewing(false));
  };
  const onCancel = () => {
    setIsPreviewing(false);
  };
  React.useEffect(() => {
    setMessage({
      ...message,
      recipient: activeItemDetails.companyName,
    });
  }, []);
  return (
    <TableModalContent {...rest} title={isPreviewing ? 'Preview Message' : 'Send messages'}>
      {isPreviewing ? (
        <MessagePreviewer
          onCancel={onCancel}
          onSend={onSend}
          isLoading={rest.loading}
          canceltext={'Back'}
          {...message}
        />
      ) : (
        <MuiBox>
          <MuiBox marginTop={3}>
            <HeadingSix>Recipient :</HeadingSix>
            <MuiTextInputField
              type="text"
              placeholder={`${activeItemDetails.companyName}`}
              label=""
              fullWidth
              name=" recipient"
              value={message.recipient}
            />
          </MuiBox>
          <MuiBox marginTop={3}>
            <HeadingSix>Message Title :</HeadingSix>
            <MuiTextInputField
              type="text"
              placeholder={'Message Title'}
              label=""
              fullWidth
              name="header"
              value={message.header}
              onChange={handleMessage}
            />
          </MuiBox>
          <MuiBox marginTop={3}>
            <HeadingSix>Enter Message :</HeadingSix>
            <MuiTextArea
              rows={3}
              placeholder={'Enter Message'}
              name="body"
              value={message.body}
              onChange={handleMessage}
            />
          </MuiBox>
          <MuiGrid container marginTop={2} spacing={2}>
            <MuiGrid item xs={12} md={6}>
              <OutlinedButton
                fullWidth
                onClick={() => {
                  rest.onClose();
                }}
              >
                Cancel
              </OutlinedButton>
            </MuiGrid>
            <MuiGrid item xs={12} md={6}>
              <PrimaryButton
                fullWidth
                onClick={() => {
                  setIsPreviewing(true);
                }}
              >
                Preview
              </PrimaryButton>
            </MuiGrid>
          </MuiGrid>
        </MuiBox>
      )}
    </TableModalContent>
  );
}

SendMessage.propTYpe = {
  activeItemDetails: PropTypes.object,
};

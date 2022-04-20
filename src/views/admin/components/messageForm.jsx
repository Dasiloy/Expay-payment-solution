/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MuiBreadcrumbs, MuiBox, MuiGrid, MuiModal } from 'muibase';
import { MuiTextInputField, MuiTextArea } from 'styled/inputs';
import { CREATE, EDIT } from 'constants';
import { HeadingSix, OutlinedButton, PrimaryButton, StyledSelect } from 'styled';
import { FeedbackModal, Container, Uploader, MessagePreviewer } from 'components';

// category for contact
const categoryList = [
  {
    key: '1',
    label: 'Frolancer',
    value: 'frolancer',
  },
  {
    key: '2',
    label: 'Afric Express',
    value: 'afric express',
  },
  {
    key: '3',
    label: 'Afric Drive',
    value: 'afric drive',
  },
];

InputGroups.propTypes = {
  groupData: PropTypes.array,
  handleChange: PropTypes.func,
  label: PropTypes.string,
};

function InputGroups({ groupData = [], handleChange = () => {} }) {
  return (
    <MuiBox>
      <MuiGrid container spacing={4} alignItems={'center'} justifyContent={'center'}>
        {groupData.map((input) => {
          const { name, value, placeholder, label, type } = input;
          if (type === 'media') {
            return (
              <MuiBox sx={{ width: '100%' }} marginBottom={4} key={label}>
                <HeadingSix>{label}</HeadingSix>
                <Uploader
                  handleUpload={(gallery) => handleChange({ target: { name, value, gallery } })}
                  height={150}
                />
              </MuiBox>
            );
          }
          if (type === 'select') {
            return (
              <MuiBox sx={{ width: '100%' }} marginBottom={4} key={label}>
                <HeadingSix>{label}</HeadingSix>
                <StyledSelect
                  label={'Recipient'}
                  selections={categoryList}
                  value={value}
                  name={name}
                  onChange={handleChange}
                  placeholder={placeholder}
                />
              </MuiBox>
            );
          }
          if (type === 'textArea') {
            return (
              <MuiBox sx={{ width: '100%' }} marginBottom={4} key={label}>
                <HeadingSix>{label}</HeadingSix>
                <MuiTextArea
                  rows={4}
                  placeholder={placeholder}
                  fullWidth
                  name={name}
                  value={value}
                  onChange={handleChange}
                />
              </MuiBox>
            );
          }
          return (
            <MuiBox sx={{ width: '100%' }} marginBottom={4} key={label}>
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
            </MuiBox>
          );
        })}
      </MuiGrid>
    </MuiBox>
  );
}

function MessageForm({ message, reset = () => {}, action = '' }) {
  // initial form fields
  const formFields = message ?? {
    content: '',
    title: '',
    media: ['/images/banner.png'],
    recipient: '',
  };
  const [form, setForm] = React.useState({ ...formFields });
  const [active, setActive] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPreviewing, setIsPreviewing] = React.useState(false);
  const [isProvidingFeedback, setIsProvidingFeedback] = React.useState(false);
  const theme = useTheme();
  console.log(form.media[0]);
  // update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'media') {
      const { gallery } = target;
      console.log(gallery);
      setForm({ ...form, [name]: gallery });
    }
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  // input personal group fields
  const messageGroup = [
    {
      name: 'recipient',
      value: form.recipient,
      placeholder: 'John',
      label: 'Recipient',
      type: 'select',
    },
    {
      name: 'title',
      value: form.title,
      placeholder: 'Some issue',
      label: 'Message Title',
      type: 'text',
    },
    {
      name: 'media',
      value: form.media,
      placeholder: '',
      label: 'Add Image',
      type: 'media',
    },
    {
      name: 'content',
      value: form.content,
      placeholder: 'some dummy text',
      label: 'Enter Message',
      type: 'textArea',
    },
  ];

  // cancel process
  const onCancel = () => {
    setForm({ ...formFields });
    reset();
  };

  // save process
  const onSend = () => {
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
          title="Message Sent"
          content={`A message has been  successfully sent to ${form.recipient} `}
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
            {'Messages'}
          </HeadingSix>
          {action === EDIT && <HeadingSix color={'text.dashed'}>{'Create Message'}</HeadingSix>}
          <HeadingSix color={'text.primary'}>{action}</HeadingSix>
        </MuiBreadcrumbs>
        <MuiBox marginBottom={6} marginTop={3}>
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
            {isPreviewing ? (
              <Container isFullscreen={false} width={600} noBottomPadding smallwidth={320}>
                <MessagePreviewer
                  isFullBlown
                  onCancel={() => {
                    setIsPreviewing(false);
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                  onSend={onSend}
                  isLoading={isLoading}
                  canceltext={'Back'}
                  header={form.title}
                  body={form.content}
                  recipient={form.recipient}
                  imageurl={form.media[0]}
                />
              </Container>
            ) : (
              <Container isFullscreen={false} width={450} noBottomPadding smallwidth={320}>
                <InputGroups handleChange={handleChange} groupData={messageGroup} />
                <MuiBox
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  sx={{ maxWidth: { xs: 320, sm: 450 }, gap: '10px' }}
                  marginLeft={{ xs: -3, sm: -4 }}
                  marginTop={3}
                >
                  <MuiBox width={'100%'}>
                    <OutlinedButton
                      fullWidth
                      onClick={() => {
                        onCancel();
                      }}
                    >
                      Cancel
                    </OutlinedButton>
                  </MuiBox>
                  <MuiBox width={'100%'}>
                    <PrimaryButton
                      fullWidth
                      loadingButton
                      loading={isLoading}
                      onClick={() => {
                        setIsPreviewing(true);
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                        });
                      }}
                    >
                      Preview
                    </PrimaryButton>
                  </MuiBox>
                </MuiBox>
              </Container>
            )}
            {/*----- EACH INPUT GROUPS SECTION ----*/}
          </MuiBox>
        </MuiBox>
      </MuiBox>
    </>
  );
}

MessageForm.propTypes = {
  merchant: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default MessageForm;

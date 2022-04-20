import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MuiSlide } from 'muibase';
import { HeadingFour, PrimaryButton, SubBody } from 'styled';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <MuiSlide direction="down" ref={ref} {...props} />;
});

export default function DeleteDialog({
  title = '',
  content = '',
  isDialogOpen = false,
  loading = false,
  closeDialog = () => {},
}) {
  return (
    <div>
      <Dialog
        open={isDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeDialog}
        aria-describedby="delete dialog"
      >
        <DialogTitle>
          <HeadingFour> {title}</HeadingFour>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <SubBody>{content}</SubBody>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: ' 0 14px 14px 0' }}>
          <PrimaryButton color="primary" onClick={() => closeDialog('cancel')}>
            Cancel
          </PrimaryButton>
          <PrimaryButton
            loadingButton
            loading={loading}
            color="error"
            onClick={() => closeDialog('proceed')}
          >
            Proceed
          </PrimaryButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DeleteDialog.propType = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  isDialogOpen: PropTypes.bool,
  closeDialog: PropTypes.func,
};

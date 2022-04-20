import React from 'react';
import Modal from '@mui/material/Modal';
import { MuiBox } from 'muibase';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import PropTypes, { oneOfType } from 'prop-types';

export default function MuiModal({
  open = false,
  onClose = () => {},
  label = '',
  description = '',
  width = 400,
  children,
  ...rest
}) {
  const childrenStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby={label}
      aria-describedby={description}
      {...rest}
    >
      <MuiBox sx={childrenStyles}>{children}</MuiBox>
    </Modal>
  );
}

MuiModal.propType = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  label: PropTypes.string,
  description: PropTypes.string,
  width: PropTypes.number,
  children: oneOfType([PropTypes.node, PropTypes.elementType]).isRequired,
};

MuiModal.UnStyled = ModalUnstyled;

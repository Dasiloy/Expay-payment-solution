import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// mui components
import { MuiTable, MuiStack, MuiCheckbox, MuiModal } from 'muibase';

// import subtitle
import { SubTitle2, TextButton } from 'styled';

// change case from case library
import { sentenceCase } from 'change-case';

// import label and more menu and tableListToolBar
import { Label, VerificationModalContent } from 'components';

// import no found component
import { SearchNotFound } from '../../general';

// import status color variables
import { status } from 'constants';

// import table context values
import { useTableContext } from 'context/tablecontext';

// import feedback modal
import { FeedbackModal } from 'components';

export default function VerificationTableBody() {
  // loading state
  const [loading, setLoading] = useState(false);
  // state control for modals
  const [isOpenModal, setIsOpenModal] = useState(false);
  // state to handle feedback
  const [isProvidingFeedback, setIsProvidingFeedback] = React.useState(false);
  // active menu item details
  const [activeItemDetails, setActiveItemDetails] = useState(null);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { Body, Cell, Row } = MuiTable;
  const {
    filterTable,
    filterTableData,
    selected,
    handleClick,
    emptyRows,
    isDataNotFound,
    page,
    rowsPerPage,
  } = useTableContext();

  // open modal
  const openModal = (item) => {
    setIsOpenModal(true);
    setActiveItemDetails(item);
  };

  // close modal
  const closeModal = () => {
    setIsOpenModal(false);
    setActiveItemDetails(null);
  };

  //close modal for verifying credentials
  const closeProcess = () => {
    setIsProvidingFeedback(() => {
      closeModal();
      return false;
    });
  };

  // handle mail actions
  const handleMailActions = () => {
    setLoading(true);
    // dispatch an action to send mail
    setTimeout(() => {
      setLoading(false);
      setIsProvidingFeedback(true);
    }, 3000);
  };
  return (
    <>
      <MuiModal open={isOpenModal} onClose={closeProcess} width={isMd ? 500 : 320}>
        {isProvidingFeedback ? (
          <FeedbackModal
            title="Message Sent!"
            content={`A mail has been sent to ${activeItemDetails.email}`}
            onClose={closeProcess}
            timeout={4000}
          />
        ) : (
          <VerificationModalContent
            activeItemDetails={activeItemDetails}
            handleMailActions={handleMailActions}
            onClose={closeProcess}
            loading={loading}
          />
        )}
      </MuiModal>
      <Body>
        {filterTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((body) => {
          const { id, companyName, verificationStatus: itemStatus, createdAt, avatarUrl } = body;
          const isItemSelected = selected.indexOf(id) !== -1;
          return (
            <Row selected={isItemSelected} hover key={id} tabIndex={-1} role="checkbox">
              <Cell padding="checkbox">
                <MuiCheckbox
                  checked={isItemSelected}
                  onChange={(event) => handleClick(event, id)}
                />
              </Cell>
              <Cell component="th" scope="row" padding="none">
                <MuiStack direction="row" alignItems="center" spacing={2}>
                  {/* <MuiAvatar alt={companyName} src={avatarUrl} /> */}
                  <SubTitle2 noWrap>{companyName}</SubTitle2>
                </MuiStack>
              </Cell>
              <Cell align="left">
                <SubTitle2 noWrap style={{ color: `${theme.palette.alternate.main}` }}>
                  {new Date(createdAt).toLocaleDateString()}
                </SubTitle2>
              </Cell>
              <Cell align="left">
                <Label variant={'outlined'} color={status[itemStatus]}>
                  {sentenceCase(itemStatus)}
                </Label>
              </Cell>
              <Cell align="left" onClick={(_e) => openModal(body)}>
                <TextButton color={'primary'}>VIEW CREDENTIALS</TextButton>
              </Cell>
            </Row>
          );
        })}
        {emptyRows > 0 && (
          <Row style={{ height: 53 * emptyRows }}>
            <Cell colSpan={6} />
          </Row>
        )}
      </Body>
      {isDataNotFound && (
        <Body>
          <Row>
            <Cell align="center" colSpan={6} sx={{ py: 3 }}>
              <SearchNotFound searchQuery={filterTable} />
            </Cell>
          </Row>
        </Body>
      )}
    </>
  );
}

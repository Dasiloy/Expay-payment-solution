/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// mui components
import { MuiTable, MuiStack, MuiAvatar, MuiCheckbox, MuiModal } from 'muibase';

// import subtitle
import { SubTitle2 } from 'styled';

// import label and more menu and tableListToolBar
import { UseMoreMenu, FeedbackModal } from 'components';

// import not found component
import { SearchNotFound } from '../../general';

// payment history
import { PaymentModalContent, SendMessageModal } from '../tableModalContent';

// import actions controller
import { EDIT, SEE_VENDORS } from 'constants';

// transaction menus
const menu = [
  {
    icon: 'ant-design:edit-twotone',
    title: 'Edit Details',
  },
  {
    icon: 'akar-icons:person-check',
    title: 'View Vendors',
  },
  {
    icon: 'ant-design:mail-outlined',
    title: 'Send message',
  },
  {
    icon: 'icon-park-outline:transaction',
    title: 'Payment history',
  },
];

// import table context values
import { useTableContext } from 'context/tablecontext';

export default function MerchantsTableBody({ handleUpdate }) {
  // anchor element for menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  // state control for modals
  const [isOpenModal, setIsOpenModal] = useState(false);
  // active menu item title
  const [activeMenuItem, setActiveMenuItem] = useState('');
  // active menu item details
  const [activeItemDetails, setActiveItemDetails] = useState(null);
  // snackbar control
  const [isOpenFeedback, setOpenFeedback] = React.useState(false);
  // loading
  const [loading, setLoading] = React.useState(false);
  // message
  const [message, setMessage] = React.useState({
    body: '',
    header: '',
    recipient: '',
    imageurl: '/images/banner.png',
  });

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('sm'), {
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

  // open menu
  const openMenu = (event) => setAnchorEl(event.currentTarget);

  // onclick function to handle menu pop-ups
  const closeMenu = (_e, title) => {
    const foundMenuitem = menu.find((item) => item.title === title);
    if (!foundMenuitem) return;
    setActiveMenuItem(() => {
      if (title === 'Edit Details') {
        handleUpdate({ ...activeItemDetails }, EDIT);
      } else if (title === 'View Vendors') {
        handleUpdate({ ...activeItemDetails }, SEE_VENDORS);
      }
      return title;
    });
    setAnchorEl(null);
    // make sure not to open the modal for the two use cases
    if (title === 'Edit Details' || title === 'View vendors') return;
    setIsOpenModal(true);
  };

  // update message
  const handleMessage = (e) => {
    const { name, value } = e.target;
    setMessage((prevState) => ({ ...prevState, [name]: value }));
  };

  // close modal
  const closeModal = () => {
    setIsOpenModal(false);
    setActiveItemDetails(null);
    setActiveMenuItem('');
    setMessage({
      body: '',
      header: '',
      recipient: '',
      imageurl: '/images/banner.png',
    });
  };

  // handle mail actions
  const handleMailActions = (cb = () => {}) => {
    setLoading(true);
    // dispatch an action to send mail
    setTimeout(() => {
      setLoading(false);
      cb && cb();
      setOpenFeedback(true);
    }, 3000);
  };

  // closeAdminProcess
  const closeProcess = (cb = () => {}) => {
    setOpenFeedback(() => {
      closeModal();
      cb && cb();
      return false;
    });
  };

  return (
    <>
      <MuiModal
        open={isOpenModal}
        onClose={closeModal}
        width={
          isMd && activeMenuItem === 'Send message'
            ? 450
            : isMd && activeMenuItem === 'Payment history'
            ? 800
            : 320
        }
      >
        {activeMenuItem === 'Payment history' && (
          <PaymentModalContent activeItemDetails={activeItemDetails} onClose={closeModal} />
        )}
        {activeMenuItem === 'Send message' && !isOpenFeedback && (
          <SendMessageModal
            activeItemDetails={activeItemDetails}
            onClose={closeModal}
            handleSave={handleMailActions}
            loading={loading}
            handleMessage={handleMessage}
            message={message}
            setMessage={setMessage}
          />
        )}
        {activeMenuItem === 'Send message' && isOpenFeedback && (
          <FeedbackModal
            title="Message sent"
            content={`your message has been  successfully sent to ${activeItemDetails.companyName}`}
            onClose={closeProcess}
            timeout={4000}
          />
        )}
      </MuiModal>
      <Body>
        {filterTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((body) => {
          const { id, companyName, vendors, wallet, createdAt, avatarUrl } = body;
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
                  <MuiAvatar alt={companyName} src={companyName} />
                  <SubTitle2 noWrap>{companyName}</SubTitle2>
                </MuiStack>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap style={{ color: `${theme.palette.alternate.main}` }}>
                  {new Date(createdAt).toLocaleDateString()}
                </SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap>{vendors.length}</SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap>{`$${wallet.balance}`}</SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap>{`$${wallet.totalAmountReceived}`}</SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap>{`${wallet.percentTotal}%`}</SubTitle2>
              </Cell>
              <Cell align="right" onClick={(_e) => setActiveItemDetails(body)}>
                <UseMoreMenu
                  menus={menu}
                  open={Boolean(anchorEl)}
                  onClick={closeMenu}
                  openMenu={openMenu}
                  anchorEl={anchorEl}
                />
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

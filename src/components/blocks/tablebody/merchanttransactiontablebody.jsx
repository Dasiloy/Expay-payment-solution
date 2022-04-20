import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// mui components
import { MuiTable, MuiCheckbox, MuiModal } from 'muibase';

// import subtitle
import { SubTitle2 } from 'styled';

// change case from case library
import { sentenceCase } from 'change-case';

// import label and more menu and tableListToolBar
import { Label, UseMoreMenu } from 'components';

// import no found component
import { SearchNotFound } from '../../general';

// import status color variables
import { status } from 'constants';

// import Transaction Details
import { TransactionDetails } from '../tableModalContent';

// transaction menus
const menu = [
  {
    icon: 'akar-icons:person-check',
    title: 'View vendor',
  },
  {
    icon: 'akar-icons:person-check',
    title: 'View client',
  },
  {
    icon: 'icon-park-outline:transaction',
    title: 'View Transaction',
  },
];

// import table context values
import { useTableContext } from 'context/tablecontext';

export default function MerchantTransactionTableBody({ openVendorProfile }) {
  // anchor element for menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  // state control for modals
  const [isOpenModal, setIsOpenModal] = useState(false);
  // active menu item title
  const [activeMenuItem, setActiveMenuItem] = useState('');
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

  // open menu
  const openMenu = (event) => setAnchorEl(event.currentTarget);

  // onclick function to handle menu pop-ups
  const closeMenu = (_e, title) => {
    setActiveMenuItem(title);
    setAnchorEl(null);
    const foundMenuitem = menu.find((item) => item.title === title);
    if (!foundMenuitem) return;
    if (foundMenuitem.title === 'View Transaction') {
      setIsOpenModal(true);
    } else if (foundMenuitem.title === 'View vendor') {
      openVendorProfile(activeItemDetails, foundMenuitem.title);
    }
  };

  // close modal
  const closeModal = () => {
    setIsOpenModal(false);
    setActiveItemDetails(null);
    setActiveMenuItem('');
  };

  return (
    <>
      <MuiModal open={isOpenModal} onClose={closeModal} width={isMd ? 600 : 300}>
        {activeMenuItem === 'View Transaction' && (
          <TransactionDetails activeItemDetails={activeItemDetails} onClose={closeModal} />
        )}
      </MuiModal>
      <Body>
        {filterTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((body) => {
          const { id, vendor, receiver, merchant, amount, status: itemStatus, date } = body;
          const isItemSelected = selected.indexOf(id) !== -1;

          return (
            <Row selected={isItemSelected} hover key={id} tabIndex={-1} role="checkbox">
              <Cell padding="checkbox">
                <MuiCheckbox
                  checked={isItemSelected}
                  onChange={(event) => handleClick(event, id)}
                />
              </Cell>
              <Cell align="left">
                <SubTitle2 noWrap>{`${merchant.companyName}`}</SubTitle2>
              </Cell>
              <Cell align="left">
                <SubTitle2 noWrap>{receiver}</SubTitle2>
              </Cell>
              <Cell align="left">
                <SubTitle2 noWrap>{`${vendor.firstName} ${vendor.lastName}`}</SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap>{`$${amount}`}</SubTitle2>
              </Cell>
              <Cell align="left">
                <Label variant={'ghost'} color={status[itemStatus]}>
                  {sentenceCase(itemStatus)}
                </Label>
              </Cell>
              <Cell align="left">
                <SubTitle2 noWrap style={{ color: `${theme.palette.alternate.main}` }}>
                  {new Date(date).toLocaleDateString()}
                </SubTitle2>
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

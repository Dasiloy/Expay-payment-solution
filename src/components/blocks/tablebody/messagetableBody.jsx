import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// mui components
import { MuiTable, MuiCheckbox, MuiModal } from 'muibase';

// import subtitle
import { SubTitle2 } from 'styled';

// import label and more menu and tableListToolBar
import { UseMoreMenu } from 'components';

// import no found component
import { SearchNotFound } from '../../general';

// import withdrawal modal
import { WithDrawalModal } from '../tableModalContent';

// transaction menus
const menu = [
  {
    icon: 'codicon:preview',
    title: 'Preview Message',
  },
];

// import table context values
import { useTableContext } from 'context/tablecontext';

export default function MessageTableBody({
  closeWithdrawalModal = () => {},
  isWithdrawalModalOpen = false,
}) {
  // anchor element for menu
  const [anchorEl, setAnchorEl] = React.useState(null);
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
  const closeMenu = (_e) => {
    setAnchorEl(null);
  };

  return (
    <>
      <MuiModal
        open={isWithdrawalModalOpen}
        onClose={closeWithdrawalModal}
        width={isMd ? 450 : 300}
      >
        <WithDrawalModal />
      </MuiModal>
      <Body>
        {filterTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((body) => {
          const { id, title, content, date, recipient } = body;
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
                <SubTitle2 wrap>{`${title}`}</SubTitle2>
              </Cell>
              <Cell align="left">
                <SubTitle2 wrap>{`${content}`}</SubTitle2>
              </Cell>
              <Cell align="left">
                <SubTitle2 noWrap style={{ color: `${theme.palette.alternate.main}` }}>
                  {new Date(date).toLocaleDateString()}
                </SubTitle2>
              </Cell>
              <Cell align="left">
                <SubTitle2 noWrap>{`${recipient.companyName}`}</SubTitle2>
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

MessageTableBody.propType = {
  closeWithdrawalModal: PropTypes.func,
  isWithdrawalModalOpen: PropTypes.bool,
};

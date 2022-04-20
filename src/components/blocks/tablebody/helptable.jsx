import React from 'react';
import { useTheme } from '@mui/material/styles';


// mui components
import { MuiTable, MuiCheckbox } from 'muibase';

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

// transaction menus
const menu = [
  {
    icon: 'akar-icons:person-check',
    title: 'View complainer',
  },
  {
    icon: 'carbon:mail-reply',
    title: 'Send Message',
  },
  {
    icon: 'ant-design:edit-twotone',
    title: 'Change status',
  },
];

// import tablecontext hook
import { useTableContext } from 'context/tablecontext';

export default function HelpTicketTableBody() {
  // anchor element for menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  // active menu item details
  const [activeItemDetails, setActiveItemDetails] = React.useState(null);
  const theme = useTheme();
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
      <Body>
        {filterTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((body) => {
          const { id, name, date, status: itemStatus, topic } = body;
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
                <SubTitle2 noWrap>{name}</SubTitle2>
              </Cell>
              <Cell align="left">
                <SubTitle2 noWrap style={{ color: `${theme.palette.alternate.main}` }}>
                  {new Date(date).toLocaleDateString()}
                </SubTitle2>
              </Cell>
              <Cell align="left">
                <Label variant={'ghost'} color={itemStatus && status && status[itemStatus]}>
                  {sentenceCase(itemStatus)}
                </Label>
              </Cell>
              <Cell align="left">
                <SubTitle2 noWrap>{topic}</SubTitle2>
              </Cell>
              <Cell align="right">
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

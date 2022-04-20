import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// mui components
import { MuiTable, MuiCheckbox, MuiStack, MuiAvatar } from 'muibase';

// import subtitle
import { SubTitle2 } from 'styled';

// change case from case library
import { sentenceCase } from 'change-case';

// import label and more menu and tableListToolBar
import { Label, UseMoreMenu, DeleteDialog } from 'components';

// import no found component
import { Iconify, SearchNotFound } from '../../general';

// import status color variables
import { status, deleteIcon, editIcon } from 'constants';

// import table context values
import { useTableContext } from 'context/tablecontext';
import { EDIT_ADMIN } from 'constants';

// transaction menus
const menu = [
  {
    icon: 'icon-park-outline:transaction',
    title: 'Change status',
  },
  {
    icon: 'akar-icons:person-check',
    title: 'Message Admin',
  },
];

export default function AdminTableBody({
  openDialog = () => {},
  closeDialog = () => {},
  handleUpdate = () => {},
  isDialogOpen = false,
  loading = false,
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
      {/* delete dialog*/}
      <DeleteDialog
        loading={loading}
        isDialogOpen={isDialogOpen}
        closeDialog={closeDialog}
        title={`Are you sure you want to remove ${
          activeItemDetails && activeItemDetails.firstName
        } from the admin list?`}
        content={'NB: This process once confirmed cannot be undone!'}
      />
      <Body>
        {filterTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((body) => {
          const {
            id,
            firstName,
            avatarUrl,
            lastName,
            email,
            title,
            createdAt,
            status: itemStatus,
            onlineStatus,
          } = body;
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
                  <MuiAvatar alt={firstName} src={avatarUrl} />
                  <SubTitle2 wrap>{`${firstName} ${lastName}`}</SubTitle2>
                </MuiStack>
              </Cell>
              <Cell align="left">
                <SubTitle2 wrap>{`${email}`}</SubTitle2>
              </Cell>
              <Cell align="left">
                <SubTitle2 wrap>{`${title}`}</SubTitle2>
              </Cell>
              <Cell align="left">
                <SubTitle2 noWrap style={{ color: `${theme.palette.alternate.main}` }}>
                  {new Date(createdAt).toLocaleDateString()}
                </SubTitle2>
              </Cell>
              <Cell align="left">
                <Label variant={'filled'} color={status[onlineStatus]}>
                  {sentenceCase(onlineStatus)}
                </Label>
              </Cell>
              <Cell align="left">
                <Label variant={'outlined'} color={status[itemStatus]}>
                  {sentenceCase(itemStatus)}
                </Label>
              </Cell>
              <Cell align="right" onClick={() => setActiveItemDetails(body)}>
                <MuiStack direction="row" alignItems="center" spacing={1}>
                  <MuiStack direction="row" alignItems="center" spacing={2}>
                    <Iconify
                      icon={editIcon}
                      color={theme.palette.primary.main}
                      sx={{ cursor: 'pointer' }}
                      onClick={() => handleUpdate(body, EDIT_ADMIN)}
                    />
                    <Iconify
                      icon={deleteIcon}
                      color={theme.palette.error.main}
                      sx={{ cursor: 'pointer' }}
                      onClick={() => openDialog(body)}
                    />
                  </MuiStack>
                  <UseMoreMenu
                    menus={menu}
                    open={Boolean(anchorEl)}
                    onClick={closeMenu}
                    openMenu={openMenu}
                    anchorEl={anchorEl}
                  />
                </MuiStack>
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

AdminTableBody.propType = {
  openDialog: PropTypes.func,
  closeDialog: PropTypes.func,
  isDialogOpen: PropTypes.bool,
  loading: PropTypes.bool,
  handleUpdate: PropTypes.func,
};

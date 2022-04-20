import React from 'react';
import { useTheme } from '@mui/material/styles';

// mui components
import { MuiTable, MuiCheckbox, MuiStack, MuiAvatar } from 'muibase';

// import subtitle
import { SubTitle2 } from 'styled';

// change case from case library
import { sentenceCase } from 'change-case';

// import label and more menu and tableListToolBar
import { Label } from 'components';

// import no found component
import { SearchNotFound } from '../../general';

// import status color variables
import { status } from 'constants';

// transaction menus
const menu = [
  {
    icon: 'fluent:payment-20-regular',
    title: 'Refund payment',
  },
  {
    icon: 'icon-park-outline:transaction',
    title: 'View Transaction details',
  },
  {
    icon: 'akar-icons:person-check',
    title: 'View client',
  },
  {
    icon: 'akar-icons:person-check',
    title: 'View vendor',
  },
];

// import tablecontext hook
import { useTableContext } from 'context/tablecontext';

export default function MerchantVendorTableBody() {
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
  return (
    <>
      <Body>
        {filterTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((body) => {
          const {
            id,
            firstName,
            avatarUrl,
            lastName,
            lastCredit,
            lastCreditDate,
            balanceForeign,
            balanceLocal,
            lastDebit,
            lastDebitDate,
            status: _status,
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
                  <SubTitle2 noWrap>{`${firstName} ${lastName}`}</SubTitle2>
                </MuiStack>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap>{`$${lastCredit}`}</SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap style={{ color: `${theme.palette.alternate.main}` }}>
                  {new Date(lastCreditDate).toLocaleDateString()}
                </SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap>{`$${balanceForeign}`}</SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap>{`#${balanceLocal}`}</SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap>{`#${lastDebit}`}</SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap style={{ color: `${theme.palette.alternate.main}` }}>
                  {new Date(lastDebitDate).toLocaleDateString()}
                </SubTitle2>
              </Cell>
              <Cell align="center">
                <Label variant={'ghost'} color={status[_status]}>
                  {sentenceCase(_status)}
                </Label>
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

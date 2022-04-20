import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// mui components
import { MuiTable, MuiStack, MuiAvatar, MuiCheckbox } from 'muibase';

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

// import table context values
import { useTableContext } from 'context/tablecontext';

export default function VendorProfileHistory() {
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

  return (
    <>
      <Body>
        {filterTableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((body) => {
          const {
            amount,
            commission,
            transactionId: id,
            type,
            description,
            date,
            status: itemStatus,
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
              <Cell align="center">
                <SubTitle2 noWrap>{type}</SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap>{`$${amount}`}</SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap>{`$${commission}`}</SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 wrap textAlign="left">{`${description}`}</SubTitle2>
              </Cell>
              <Cell align="center">
                <SubTitle2 noWrap style={{ color: `${theme.palette.alternate.main}` }}>
                  {new Date(date).toLocaleDateString()}
                </SubTitle2>
              </Cell>
              <Cell align="center">
                <Label variant={'outlined'} color={status[itemStatus]}>
                  {sentenceCase(itemStatus)}
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

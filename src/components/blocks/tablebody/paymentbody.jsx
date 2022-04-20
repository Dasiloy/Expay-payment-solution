import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// mui components
import { MuiTable, MuiStack, MuiCheckbox } from 'muibase';

// import subtitle
import { SubTitle2 } from 'styled';

// import no found component
import { SearchNotFound } from '../../general';

// import table context values
import { useTableContext } from 'context/tablecontext';

export default function PaymentTableBody() {
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
          const { id, amount, createdAt, method } = body;
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
                  <SubTitle2 noWrap>{amount}</SubTitle2>
                </MuiStack>
              </Cell>
              <Cell align="left">
                <SubTitle2 noWrap>{method}</SubTitle2>
              </Cell>
              <Cell align="left">
                <SubTitle2 noWrap style={{ color: `${theme.palette.alternate.main}` }}>
                  {new Date(createdAt).toLocaleDateString()}
                </SubTitle2>
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

import React from 'react';
import PropTypes from 'prop-types';
import { ShadowContainer } from '.';

// mui components
import { MuiTable } from 'muibase';

// import label and more menu and tableListToolBar
import { TableListToolBar } from 'components';

// import sortFilter
import { applySortFilter } from 'utils';

// import genTable Head
import TableHead from './tablehead';

// import table context provider
import TableProvider from 'context/tablecontext';

// import pagination actions component
import TablePaginationActions from './tablePaginationActionComponent';

// import debounce search
import { useDebounceSearch } from 'hooks';
import Scrollbar from './scrollbar';
export default function GenTable({ headData = [], bodyData = [], label = '', children }) {
  // selected rows
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [filterTable, setFilterTable] = React.useState('');
  // update search on table ofter 0.6s
  const debounce = useDebounceSearch(filterTable, 600);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { Container, Pagination } = MuiTable;
  // select or deselect all the rows
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = bodyData.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  // single checkbox effect
  const handleClick = (_event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  //  change page
  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  // change rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // handle table data filter
  const onFilterTable = (event) => {
    setFilterTable(event.target.value);
  };

  // dispatch a refetch by search params
  const filterTableData = applySortFilter(bodyData, label, null, debounce);

  // empty rows
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - bodyData.length) : 0;

  // not found data
  const isDataNotFound = filterTableData.length === 0;

  // rows per page options
  const rowsPerPageOptions = [5, 10, 15, { label: 'All', value: -1 }];

  return (
    <ShadowContainer marginTop={3} marginBottom={4}>
      <TableListToolBar
        numSelected={selected.length}
        filterTable={filterTable}
        onFilterTable={onFilterTable}
      />
      {/*add a container for responsiveness */}
      <Container sx={{ minWidth: 800, marginTop: 2 }}>
        <Scrollbar style={{ maxHeight: '100%' }}>
          {/*table component */}
          <MuiTable size="small">
            {/*table head */}
            <TableHead
              headData={headData}
              bodyData={bodyData}
              selected={selected}
              handleSelectAllClick={handleSelectAllClick}
            />
            <TableProvider
              isDataNotFound={isDataNotFound}
              emptyRows={emptyRows}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={selected}
              handleClick={handleClick}
              filterTable={filterTable}
              filterTableData={filterTableData}
            >
              {children}
            </TableProvider>
          </MuiTable>
          {!isDataNotFound && (
            <Pagination
              colSpan={5}
              rowsPerPageOptions={rowsPerPageOptions}
              component="div"
              count={bodyData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          )}
        </Scrollbar>
      </Container>
    </ShadowContainer>
  );
}

GenTable.propType = {
  headData: PropTypes.array,
  bodyData: PropTypes.array,
  label: PropTypes.string,
  children: PropTypes.node,
};

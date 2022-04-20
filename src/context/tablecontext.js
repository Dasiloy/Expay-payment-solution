import React from 'react';
import PropTypes from 'prop-types';

const TableContext = React.createContext();

export default function TableProvider ({children, filterTable = '',  filterTableData = [], page = 0, rowsPerPage = 5, selected = [], handleClick= () => {}, emptyRows = 0, isDataNotFound = false}) {
  return (
    <TableContext.Provider value={{isDataNotFound, emptyRows, page, rowsPerPage, selected, handleClick, filterTable, filterTableData}}>
      {children}
    </TableContext.Provider>
  );
}

export const useTableContext = () => React.useContext(TableContext);

TableProvider.propType = {
  children:PropTypes.node,
  filterTable:PropTypes.string,
  filterTableData:PropTypes.array,
  page:PropTypes.number,
  rowsPerPage:PropTypes.number,
  selected:PropTypes.array,
  handleClick:PropTypes.func,
  emptyRows:PropTypes.number,
  isDataNotFound:PropTypes.bool,
};

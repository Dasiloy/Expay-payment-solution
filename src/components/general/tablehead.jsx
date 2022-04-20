import React from 'react';
import PropTypes from 'prop-types';

// mui components
import { MuiTable, MuiCheckbox } from 'muibase';
import { SubTitle1, SubBody } from 'styled';

export default function TableHead({
  headData = [],
  selected = 0,
  bodyData = [],
  handleSelectAllClick = () => {},
}) {
  const { Head, Cell, SortLabel, Row } = MuiTable;
  return (
    <Head>
      {/* single row at the table head*/}
      <Row>
        {/* checkbox cell*/}
        <Cell padding="checkbox">
          <MuiCheckbox
            indeterminate={selected.length > 0 && selected.length < bodyData.length}
            checked={bodyData.length > 0 && selected.length === bodyData.length}
            onChange={handleSelectAllClick}
          />
        </Cell>
        {/* cells for table head */}
        {headData.map((head) => (
          <Cell
            key={head.id}
            align={head.alignRight ? 'right' : 'left'}
            // sortDirection={orderBy === headCell.id ? order : false}
          >
            <SubBody nowrap>{head.label}</SubBody>
          </Cell>
        ))}
      </Row>
    </Head>
  );
}

TableHead.propType = {
  headData: PropTypes.array,
  bodyData: PropTypes.array,
  selected: PropTypes.number,
  handleSelectAllClick: PropTypes.func,
};

import PropTypes from 'prop-types';
// material
import { MuiBox } from 'muibase';
import {SubBody, SubTitle1 } from 'styled';

export default function SearchNotFound({ searchQuery = '', ...other }) {
  return (
    <MuiBox {...other}>
      <SubTitle1 gutterBottom align="center" >
        Not found
      </SubTitle1>
      <SubBody align="center">
        No results found for &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or using complete words.
      </SubBody>
    </MuiBox>
  );
}

SearchNotFound.propTypes = {
  searchQuery: PropTypes.string,
};

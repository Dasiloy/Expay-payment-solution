import { MuiBox, MuiStack, MuiButton } from 'muibase';
import React from 'react';
import PropTypes from 'prop-types';
import { HeadingFive, ButtonWithIconStart } from 'styled';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import FilterIcon from '@mui/icons-material/Filter';

export default function FilterGroup({ title, filters }) {
  return (
    <MuiBox
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{ width: '100%' }}
    >
      <HeadingFive>{title}</HeadingFive>
      <MuiStack spacing={2} direction={'row'}>
        <ButtonWithIconStart text={'Add filter'} icon={<FilterIcon />} />
        <ButtonWithIconStart text={'Export'} icon={<UpgradeIcon />} />
      </MuiStack>
    </MuiBox>
  );
}

FilterGroup.propType = {
  title: PropTypes.string.isRequired,
  filters: PropTypes.array,
};

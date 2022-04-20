import React from 'react';
import PropTypes from 'prop-types';
import { StatCard } from 'components';
import { MuiGrid } from 'muibase';

export default function StatList({ stats = [], isThree = false, children }) {
  return (
    <MuiGrid container spacing={2}>
      {children && (
        <MuiGrid item xs={12} sm={6} md={isThree ? 4 : 3}>
          {children}
        </MuiGrid>
      )}
      {stats.length > 0 &&
        stats.map((stat, i) => (
          <MuiGrid key={i} item xs={12} sm={6} md={isThree ? 4 : 3}>
            <StatCard stat={stat} />
          </MuiGrid>
        ))}
    </MuiGrid>
  );
}
StatList.propTypes = {
  stats: PropTypes.array,
  isThree: PropTypes.bool,
  children: PropTypes.node,
};

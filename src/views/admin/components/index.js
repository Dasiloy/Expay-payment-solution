import React from 'react';
import PropTypes from 'prop-types';
import { AdminDashboard } from 'layouts';
function ADashboard({ children }) {
  return <AdminDashboard>{children}</AdminDashboard>;
}

export default ADashboard;
ADashboard.propType = {
  children: PropTypes.node,
};

import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function MuiAccordion ({onChange, expanded, children, ...rest}) {
  return (
    <Accordion expanded={expanded} onChange={onChange} {...rest}>
      {children}
    </Accordion>
  );
}

MuiAccordion.propTypes = {
  expanded: PropTypes.bool,
  onChange :PropTypes.func,
  children : PropTypes.node,
  rest : PropTypes.object,
};

MuiAccordion.Summary = AccordionSummary;
MuiAccordion.Details = AccordionDetails;

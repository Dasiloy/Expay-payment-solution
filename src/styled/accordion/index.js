import React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MuiAccordion } from 'muibase';
import { MuiBox } from 'muibase';
import { HeadingSix, SubBody } from 'styled';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderColor: '#f1f1f1 !important',
  borderTop: '1px solid',
  borderBottom: '1px solid',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordion.Summary expandIcon={<ExpandMoreIcon sx={{}} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'transparent',
  padding: '6px 12px',
}));

const AccordionDetails = styled(MuiAccordion.Details)(({ theme }) => ({
  padding: theme.spacing(theme.palette.mode === 'light' ? 2 : 4, 0, 3, 2),
  borderTop: 'none',
}));

export default function StyledAccordion({ accordionList = [] }) {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <MuiBox marginBottom={2}>
      {accordionList.length > 0 &&
        accordionList.map((item, i) => (
          <Accordion key={i} expanded={expanded === i} onChange={handleChange(i)}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <HeadingSix
                color={expanded === i ? '#00A5D6 !important' : 'default'}
                sx={{ fontsize: 14 }}
                style={{
                  fontWeight: 600,
                }}
              >
                {item.accordionSummary}
              </HeadingSix>
            </AccordionSummary>
            <AccordionDetails>
              <SubBody style={{ fontSize: '15px' }}>{item.accordionDetails}</SubBody>
            </AccordionDetails>
          </Accordion>
        ))}
    </MuiBox>
  );
}

import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MuiAccordion } from 'muibase';
import { MuiBox, MuiGrid } from 'muibase';
import { Title } from 'components';
import { HeadingSix, HeadingTwo, SubBody } from 'styled';

function Faq() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <MuiBox data-aos={'fade-up'} marginTop={1} textAlign="center" id="Faqs">
      <Title title={'ALL YOU NEED TO KNOW'} />
      <HeadingTwo marginTop={5}>FAQs</HeadingTwo>
      <MuiGrid container justifyContent={'center'}>
        <MuiGrid marginTop={isMd ? 8 : 6} item xs={12} sm={10}>
          <MuiBox marginBottom={2}>
            <Accordion>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <HeadingSix sx={{ fontsize: 14 }} style={{ fontWeight: 600 }}>
                  What is AfricExpay and how does it work?
                </HeadingSix>
              </AccordionSummary>
              <AccordionDetails>
                <SubBody style={{ fontSize: '16px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                  lobortis eget.
                </SubBody>
              </AccordionDetails>
            </Accordion>
          </MuiBox>
          <MuiBox marginBottom={2}>
            <Accordion>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <HeadingSix sx={{ fontsize: 14 }} style={{ fontWeight: 600 }}>
                  How would I get jobs and who would give me jobs?
                </HeadingSix>
              </AccordionSummary>
              <AccordionDetails>
                <SubBody style={{ fontSize: '16px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                  lobortis eget.
                </SubBody>
              </AccordionDetails>
            </Accordion>
          </MuiBox>
          <MuiBox marginBottom={2}>
            <Accordion>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <HeadingSix sx={{ fontsize: 14 }} style={{ fontWeight: 600 }}>
                  Can a business request for refund if they are unhappy with the work I did?
                </HeadingSix>
              </AccordionSummary>
              <AccordionDetails>
                <SubBody style={{ fontSize: '16px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                  lobortis eget.
                </SubBody>
              </AccordionDetails>
            </Accordion>
          </MuiBox>
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  );
}

export default Faq;

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
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
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  padding: '6px 12px',
}));

const AccordionDetails = styled(MuiAccordion.Details)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

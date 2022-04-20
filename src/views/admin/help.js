import React from 'react';
import { useTheme } from '@mui/material/styles';
import ADashboard from './components';
import Topbar from './components/topbar';
import { HeadingFour } from 'styled';
import DashboardFilterButtons from './components/dateFilterbuttons';
import StatList from './components/statlist';
import { helpStats } from 'constants';
import { MuiBox, MuiGrid } from 'muibase';
import {
  FilterGroup,
  Table,
  ProgressGroup,
  ShadowContainer,
  TickettableBody,
  GenLineChart,
} from 'components';
import { helpData, HelpTableHeader, ticketList } from 'constants/EXPAY_DATA';
import { lineChartlabels, TICKETS_CHART_DATA } from 'constants/LINE_CHARTS';

export default function ADashboardPageH() {
  const theme = useTheme();
  // modify the help data
  const progressInfo = helpData.map((item) => {
    return {
      ...item,
      height: 6,
      rounded: 6,
      width: '100%',
      progressColor: theme.palette.primary.main,
      containerColor: theme.palette.mode === 'light' ? theme.palette.background.level2 : '#aaa',
    };
  });
  return (
    <ADashboard>
      <Topbar title={'Help & Support'}>
        <DashboardFilterButtons />
      </Topbar>
      <MuiBox marginY={6} />
      <MuiGrid container spacing={4}>
        <MuiGrid item xs={12} md={8}>
          <StatList stats={helpStats} isThree />
          <MuiBox marginBottom={2} />
          <GenLineChart
            title="Tickets"
            labels={lineChartlabels}
            series={TICKETS_CHART_DATA}
            stroke={{ width: [3, 2, 3] }}
            tooltip={{
              shared: true,
              intersect: false,
              y: {
                formatter: (y) => {
                  if (typeof y !== 'undefined') {
                    return `${y.toFixed(0)} tickets`;
                  }
                  return y;
                },
              },
            }}
          />
        </MuiGrid>
        <MuiGrid item xs={12} sm={6} md={4}>
          <FeedbackChart progressInfo={progressInfo} />
        </MuiGrid>
      </MuiGrid>
      <MuiBox marginY={8} />
      <FilterGroup title={'Actions'} />
      <Table headData={HelpTableHeader} bodyData={ticketList} label={'status'}>
        <TickettableBody />
      </Table>
    </ADashboard>
  );
}

const FeedbackChart = ({ progressInfo }) => {
  return (
    <ShadowContainer>
      <MuiBox paddingX={2}>
        <HeadingFour>Feedback Chart</HeadingFour>
        <MuiBox marginTop={6} marginBottom={2} />
        <ProgressGroup isAnimated progressInfo={progressInfo} />
      </MuiBox>
    </ShadowContainer>
  );
};

/* eslint-disable camelcase */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import ADashboard from './components';
import { MuiBox, MuiGrid, MuiStack } from 'muibase';
import Topbar from './components/topbar';
import DashboardFilterButtons from './components/dateFilterbuttons';
import {
  SwitchableStatcard,
  GenLineChart,
  ShadowContainer,
  ProgressGroup,
  GenMapChart,
  GenBarChart,
  CustomSelector,
} from 'components';
import { HeadingFour, TextButton } from 'styled';
import { dashboardStats, MiniHelpTableHeader } from 'constants';
import StatList from './components/statlist';
import ActivityLogList from './components/activityLog';
import MiniHelpTicketTable from './components/mini-help-ticket-table';
import {
  lineChartlabels,
  TOP_PERFORMING_MERCHANTS,
  REVENUE_CHART_DATA,
  USERINFLOW_CHART_DATA,
  locationData,
  mapdata,
  logdata,
} from 'constants/LINE_CHARTS';
import { ticketList } from 'constants/EXPAY_DATA';
import { peopleIcon, transactionIcon } from 'constants';

// chart selection
const chart_selections = [
  {
    title: 'Revenue chart',
    icon: transactionIcon,
  },
  {
    title: 'User inflow chart',
    icon: peopleIcon,
  },
];

// category for users
const user_selections = [
  {
    title: 'All Users',
    icon: peopleIcon,
  },
  {
    title: 'Merchants',
    icon: peopleIcon,
  },
  {
    title: 'Vendors',
    icon: peopleIcon,
  },
];

const location_selections = [
  {
    title: 'All location',
    icon: peopleIcon,
  },
  {
    title: 'Asia',
    icon: peopleIcon,
  },
  {
    title: 'Africa',
    icon: peopleIcon,
  },
  {
    title: 'Australia',
    icon: peopleIcon,
  },
  {
    title: 'Europe',
    icon: peopleIcon,
  },
  {
    title: 'North America',
    icon: peopleIcon,
  },
  {
    title: 'South America',
    icon: peopleIcon,
  },
  {
    title: 'Berlin GER',
    icon: peopleIcon,
  },
];

export default function AdminDashboard() {
  const theme = useTheme();

  // state variables
  const [selectedChart, setSelectedChart] = React.useState('Revenue chart');
  const [selectedUserCategory, setSelectedUserCategory] = React.useState('All Users');
  const [selectedLocation, setSelectedLocation] = React.useState(location_selections[0].title);

  const handleSelectedUserCategory = (option) => {
    setSelectedUserCategory(option);
  };

  const handlechartSelection = (option) => {
    setSelectedChart(option);
  };

  const handleChartlocationSelection = (option) => {
    setSelectedLocation(option);
  };
  // modify the location data
  const progressInfo = locationData.map((item) => {
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
      <Topbar title={'Dashboard'}>
        <MuiStack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <CustomSelector
            selections={user_selections}
            selected={'All Users'}
            onSelect={handleSelectedUserCategory}
            width={140}
          />
          <DashboardFilterButtons />
        </MuiStack>
      </Topbar>
      <MuiBox marginY={6} />
      <StatList stats={dashboardStats ? dashboardStats.slice(3) : []}>
        <SwitchableStatcard
          stats={dashboardStats ? dashboardStats.slice(0, 3) : []}
          currentStat={selectedUserCategory}
        />
      </StatList>
      <MuiBox marginBottom={4} />
      {selectedChart === 'Revenue chart' ? (
        <GenLineChart
          title={'Revenue chart ($)'}
          tooltip={{
            shared: true,
            intersect: false,
            y: {
              formatter: (y) => {
                if (typeof y !== 'undefined') {
                  return `${y.toFixed(0)}`;
                }
                return y;
              },
            },
          }}
          labels={lineChartlabels}
          series={REVENUE_CHART_DATA}
          fill={{ type: ['gradient', 'solid'] }}
          stroke={{ width: [3, 2] }}
          isDollar
        >
          <MuiStack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <CustomSelector
              selections={location_selections}
              selected={'All location'}
              width={180}
              onSelect={handleChartlocationSelection}
            />
            <CustomSelector
              selections={chart_selections}
              selected={'Revenue chart'}
              width={180}
              onSelect={(option) => {
                handlechartSelection(option);
              }}
            />
          </MuiStack>
        </GenLineChart>
      ) : (
        <GenLineChart
          title={'User inflow chart (users)'}
          tooltip={{
            shared: true,
            intersect: false,
            y: {
              formatter: (y) => {
                if (typeof y !== 'undefined') {
                  return `${y.toFixed(0)}`;
                }
                return y;
              },
            },
          }}
          labels={lineChartlabels}
          series={USERINFLOW_CHART_DATA}
          fill={{ type: ['gradient', 'solid'] }}
          stroke={{ width: [3, 2] }}
          isDollar={false}
        >
          <MuiStack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <CustomSelector
              selections={location_selections}
              selected={'All location'}
              onSelect={handleChartlocationSelection}
              width={180}
            />
            <CustomSelector
              selections={chart_selections}
              selected={'Revenue chart'}
              onSelect={(option) => {
                handlechartSelection(option);
              }}
              width={180}
            />
          </MuiStack>
        </GenLineChart>
      )}
      <MuiBox marginBottom={4} />
      <ShadowContainer>
        <MuiGrid container justifyContent={'space-between'} alignItems={'center'} spacing={1}>
          <MuiGrid xs={12} sm={4}>
            <MuiBox sx={{ pl: { xs: 3, lg: 6 }, pt: 3, pr: { xs: 3, sm: 0 } }}>
              <HeadingFour>Audience Map Location</HeadingFour>
              <MuiBox marginTop={6} marginBottom={2} />
              <ProgressGroup isAnimated progressInfo={progressInfo} />
            </MuiBox>
          </MuiGrid>
          <MuiGrid xs={12} sm={8} md={7} sx={{ px: { xs: 3 }, pt: 3 }}>
            <GenMapChart data={mapdata} />
          </MuiGrid>
        </MuiGrid>
      </ShadowContainer>
      <MuiBox marginBottom={4} />
      <MuiGrid container spacing={4}>
        <MuiGrid item xs={12} sm={6} md={5}>
          <ShadowContainer>
            <MuiBox sx={{ px: { xs: 3 }, pt: 1 }}>
              <HeadingFour>Tickets</HeadingFour>
              <MuiBox marginBottom={2} />
              <MiniHelpTicketTable
                headData={MiniHelpTableHeader}
                bodyData={ticketList.slice(0, 2)}
              />
              <MuiBox marginBottom={2} />
              <TextButton fullWidth href={'/admin/help'}>
                See all
              </TextButton>
            </MuiBox>
          </ShadowContainer>
        </MuiGrid>
        <MuiGrid item xs={12} sm={6} md={4}>
          <GenBarChart
            title="Transaction Volume"
            tooltip="Money"
            labels={lineChartlabels}
            series={TOP_PERFORMING_MERCHANTS}
            height={325}
          />
        </MuiGrid>
        <MuiGrid item xs={12} sm={6} md={3}>
          <ShadowContainer>
            <MuiBox sx={{ px: { xs: 3 }, pt: 1 }}>
              <HeadingFour>Activity Log</HeadingFour>
              <MuiBox marginBottom={2} />
              <ActivityLogList loglist={logdata} />
            </MuiBox>
          </ShadowContainer>
        </MuiGrid>
      </MuiGrid>
      <MuiBox marginBottom={2} />
    </ADashboard>
  );
}

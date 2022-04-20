/* eslint-disable camelcase */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { MuiBox, MuiGrid } from 'muibase';
import { HeadingFour } from 'styled';
import {
  WidgetGroup,
  GenLineChart,
  CustomSelector,
  ShadowContainer,
  ProgressGroup,
  GenMapChart,
  GenBarChart,
} from 'components';
import MDashboard from './components';
import {
  lineChartlabels,
  TOP_PERFORMING_MERCHANTS,
  MERCHANT_COMMISSION_CHART_DATA,
  PAYOUTS,
  locationData,
  mapdata,
} from 'constants/LINE_CHARTS';
import { adminWidgets, peopleIcon } from 'constants';

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

export default function MerchantDashboard() {
  const theme = useTheme();

  const [selectedLocation, setSelectedLocation] = React.useState(location_selections[0].title);
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
    <MDashboard title={'Dashboard'} isExtra isDashBoard>
      <ShadowContainer noPadding>
        <WidgetGroup widgets={adminWidgets} showBorder={false} />
      </ShadowContainer>
      <MuiBox marginY={5} />
      <MuiGrid container spacing={4} justifyContent={'space-between'}>
        <MuiGrid item xs={12} md={8}>
          <ShadowContainer>
            <MuiBox sx={{ pl: { xs: 2, lg: 4 }, pt: 1, pr: { xs: 3, sm: 0 } }}>
              <HeadingFour>transaction Location</HeadingFour>
            </MuiBox>
            <MuiGrid container justifyContent={'space-between'} alignItems={'center'} spacing={1}>
              <MuiGrid xs={12} sm={4} md={5}>
                <MuiBox sx={{ pl: { xs: 3, lg: 6 } }}>
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
          <MuiBox>
            <GenLineChart
              colors={[theme.palette.chart.violet[0]]}
              title={'Commission chart'}
              tooltip={{
                shared: true,
                intersect: false,
                y: {
                  formatter: (y) => {
                    if (typeof y !== 'undefined') {
                      return `$${y.toFixed(0)}`;
                    }
                    return y;
                  },
                },
              }}
              labels={lineChartlabels}
              series={MERCHANT_COMMISSION_CHART_DATA}
              fill={{ type: ['gradient'] }}
              stroke={{ width: [3] }}
              isDollar
            >
              <CustomSelector
                selections={location_selections}
                selected={'All location'}
                width={180}
                onSelect={handleChartlocationSelection}
              />
            </GenLineChart>
          </MuiBox>
        </MuiGrid>
        <MuiGrid item xs={12} md={4}>
          <GenBarChart
            colors={[theme.palette.chart.red[0]]}
            title="Payouts"
            tooltip="Money"
            labels={lineChartlabels}
            series={PAYOUTS}
            height={325}
          />
          <MuiBox marginBottom={4} />
          <GenBarChart
            colors={[theme.palette.chart.green[0]]}
            title="Transaction"
            tooltip="Money"
            labels={lineChartlabels}
            series={TOP_PERFORMING_MERCHANTS}
            height={325}
          />
        </MuiGrid>
      </MuiGrid>
      <MuiBox marginBottom={2} />
    </MDashboard>
  );
}

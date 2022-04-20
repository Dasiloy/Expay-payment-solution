import { merge } from 'lodash';
import { useTheme } from '@mui/material/styles';
import useMediaquery from '@mui/material/useMediaQuery';
import { MuiBox } from 'muibase';
import { ShadowContainer } from 'components/general';
import BaseOptionChart from './baseConfig';
import { HeadingFour } from 'styled';

// use dynamic render to solve apexchart SSR issue with window
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function GenBarChart({
  labels = [],
  series = [],
  tooltip = '',
  title = '',
  height = 100,
  colors = [],
  children,
  ...rest
}) {
  const theme = useTheme();
  const isMd = useMediaquery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const chartOptions = merge(BaseOptionChart(), {
    colors,
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '20%', borderRadius: 4 } },
    fill: { type: ['solid', 'solid', 'solid'] },
    labels,
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            if (tooltip === 'Money') {
              return `$${y.toFixed(0)}`;
            }
            return `${y.toFixed(0)} ${tooltip}`;
          }
          return y;
        },
      },
    },
  });

  return (
    <ShadowContainer>
      <MuiBox sx={{ px: { xs: 1, md: 3 }, py: 1 }} {...rest}>
        <div
          style={{
            display: 'flex',
            flexDirection: isMd ? 'row' : 'column-reverse',
            justifyContent: 'space-between',
            alignItems: isMd ? 'center' : '',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '12px',
          }}
        >
          {title && <HeadingFour>{title}</HeadingFour>} {children}
        </div>
        <Chart type="bar" series={series} options={chartOptions} height={height} />
      </MuiBox>
    </ShadowContainer>
  );
}

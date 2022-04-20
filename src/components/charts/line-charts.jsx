import { merge } from 'lodash';
import { useTheme } from '@mui/material/styles';
import useMediaquery from '@mui/material/useMediaQuery';
import { ShadowContainer } from 'components/general';
import BaseOptionChart from './baseConfig';
import { MuiBox } from 'muibase';
import { HeadingFour } from 'styled';

// use dynamic render to solve apexchart SSR issue with window
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function GenLineChart({
  labels = [],
  series = [],
  colors = [],
  title = '',
  fill = { type: ['gradient', 'solid', 'solid'] },
  stroke = { width: [0, 2, 3] },
  tooltip,
  isDollar = false,
  children,
  ...rest
}) {
  const theme = useTheme();
  const isMd = useMediaquery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const chartOptions = merge(BaseOptionChart(), {
    colors,
    stroke,
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill,
    labels,
    xaxis: { type: 'datetime' },
    tooltip,
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
          {title && <HeadingFour>{title}</HeadingFour>}
          {children}
        </div>
        <Chart type="line" series={series} options={chartOptions} height={264} />
      </MuiBox>
    </ShadowContainer>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import BasicDatePicker from 'components/general/datePicker';
import { MuiBox, MuiStack, MuiToolTip } from 'muibase';
import { HeadingTwo, ButtonWithIconStart, DashBoardButtonGroup, DateFilterButton } from 'styled';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Topbar({
  title = '',
  isExtra = false,
  isWithdrawal = false,
  isDashBoard = false,
  openWithdrawal = () => {},
}) {
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const buttons = [
    <DateFilterButton key="1D">1D</DateFilterButton>,
    <DateFilterButton key="7D">7D</DateFilterButton>,
    <DateFilterButton key="30D">30D</DateFilterButton>,
    <DateFilterButton key="1Y">1Y</DateFilterButton>,
    <DateFilterButton key="ALL">All</DateFilterButton>,
    <MuiToolTip
      title={showDatePicker ? 'Click to hide Calendar' : 'Click to Show Calendar'}
      placement="top"
      key="Date"
    >
      <DateFilterButton onClick={() => setShowDatePicker(!showDatePicker)}>
        <CalendarTodayIcon
          sx={{
            color: 'text.primary',
            fontSize: '0.85rem !important',
            fontWeight: 600,
          }}
        />
      </DateFilterButton>
    </MuiToolTip>,
  ];

  return (
    <MuiBox
      marginBottom={3}
      marginTop={5}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      flexWrap={'wrap'}
    >
      <HeadingTwo gutterBottom>{title}</HeadingTwo>
      {isExtra && (
        <MuiStack direction={'row'} alignItems={'center'} spacing={2}>
          {!isDashBoard && (
            <ButtonWithIconStart
              onClick={isWithdrawal ? openWithdrawal : null}
              text={isWithdrawal ? 'Withdraw' : 'Export'}
              icon={isWithdrawal ? <UpgradeIcon /> : <ArrowUpwardIcon />}
            />
          )}
          <DashBoardButtonGroup variant="outlined" size="small">
            {buttons}
          </DashBoardButtonGroup>
          {showDatePicker && <BasicDatePicker data-aos={'fade-left'} />}
        </MuiStack>
      )}
    </MuiBox>
  );
}

export default Topbar;

Topbar.propType = {
  title: PropTypes.string.isRequired,
  isExtra: PropTypes.bool,
  isWithdrawal: PropTypes.bool,
};

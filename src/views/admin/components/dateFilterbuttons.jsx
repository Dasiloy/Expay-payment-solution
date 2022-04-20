import React from 'react';
import BasicDatePicker from 'components/general/datePicker';
import { MuiStack, MuiToolTip } from 'muibase';
import { DashBoardButtonGroup, DateFilterButton } from 'styled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function DateFilterbuttons() {
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
    <MuiStack direction={'row'} alignItems={'center'} spacing={2}>
      <DashBoardButtonGroup variant="outlined" size="small">
        {buttons}
      </DashBoardButtonGroup>
      {showDatePicker && <BasicDatePicker data-aos={'fade-left'} />}
    </MuiStack>
  );
}

DateFilterbuttons.propTypes = {};

export default DateFilterbuttons;

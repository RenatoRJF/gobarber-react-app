import React, { FC } from 'react';
import DayPicker, { DayPickerProps } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { Container } from './styles';

const Calendar: FC<DayPickerProps> = props => (
  <Container>
    <DayPicker
      disabledDays={{ daysOfWeek: [0, 6] }}
      fromMonth={new Date()}
      weekdaysShort={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
      modifiers={{
        available: { daysOfWeek: [1, 2, 3, 4, 5] },
      }}
      {...props}
    />
  </Container>
);

export default Calendar;

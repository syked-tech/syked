import React from 'react';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

// eslint-disable-next-line react/prop-types
export default function DateTimePickerAdapter({ input, meta, ...rest }) {
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker {...input} {...rest} />
      </MuiPickersUtilsProvider>
    </div>
  );
}

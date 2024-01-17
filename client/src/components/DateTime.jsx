import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../styles/components/datetime/Datetime.css'
import { Form, Link } from 'react-router-dom';

export default function DateTime() {
  return (
    <>
      <section className='date-time-picker'>
        <h1 className="hero-title">Select a date and time for your session...</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="datepicker">
            <DatePicker />
          </div>
          <div className="timepicker">
            <TimePicker />
          </div>
        </LocalizationProvider>
        <Link to='/booking/sessiontype'>
          <button id='next-button' value='Next'>Next</button>
        </Link>
      </section>
    </>
  );
}
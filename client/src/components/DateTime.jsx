import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../styles/components/datetime/Datetime.css'
import { Form, Link, useActionData, useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getActiveUser } from '../utils/helpers/common';

export default function DateTime() {

  const res = useActionData()

  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true)

  const [createSessionFormData, setCreateSessionFormData] = useState({
    scheduled_date: '',
    scheduled_time: '',
    owner: getActiveUser(),
  })

  useEffect(() => {
    console.log(isNextButtonDisabled)
  }, [])

  useEffect(() => {
    console.log(createSessionFormData)
  },[createSessionFormData])

  useEffect(() => {
    if (!createSessionFormData.scheduled_date && !createSessionFormData.scheduled_time) {
      setIsNextButtonDisabled(false)
    }
  }, [createSessionFormData])

  function handleDateChange(e) {
    console.log(isNextButtonDisabled)
    setCreateSessionFormData({
      ...createSessionFormData,
      scheduled_date: `${e.$y}-${e.$m + 1}-${e.$D}`
    })
  }
  
  function handleTimeChange(e) {
    console.log(isNextButtonDisabled)
    setCreateSessionFormData({
      ...createSessionFormData,
      scheduled_time: `${e.$H}:${e.$m}`
    })
  }

  return (
    <>
      <section className='date-time-picker'>
        <h1 className="hero-title">Select a date and time for your session...</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker onAccept={handleDateChange} />
          <TimePicker onAccept={handleTimeChange} />
        </LocalizationProvider>
        <Link to='/booking/sessiontype'>
          <button id='next-button' value='Next' type="submit">Next</button>
        </Link>
      </section>
    </>
  );
}
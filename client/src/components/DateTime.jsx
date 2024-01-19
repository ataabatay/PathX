import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../styles/components/datetime/Datetime.css'
import { Form, Link, useActionData, useNavigate, useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getActiveUser } from '../utils/helpers/common';

export default function DateTime() {

  const res = useActionData()
  const navigate = useNavigate()
  const [createSessionFormData, setCreateSessionFormData] = useState({
    scheduled_date: '',
    scheduled_time: '',
    owner: getActiveUser(),
  })
  function handleDateChange(e) {
    setCreateSessionFormData({
      ...createSessionFormData,
      scheduled_date: `${e.$y}-${e.$m + 1}-${e.$D}`
    })
  }
  function handleTimeChange(e) {
    setCreateSessionFormData({
      ...createSessionFormData,
      scheduled_time: `${e.$H}:${e.$m}`
    })
  }
  useEffect(() => {
    if (res?.status === 201) {
      navigate(`/booking/${res.data.id}/sessiontype`)
    }
  },[res, navigate])

  return (
    <>
      <section className='date-time-picker'>
        <h1 className="hero-title">Select a date and time for your session...</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker onAccept={handleDateChange} />
          <TimePicker onAccept={handleTimeChange} />
        </LocalizationProvider>
        <Form className='form' method='POST'>
          <input type="hidden" name='owner' value={createSessionFormData.owner}></input>
          <input type="hidden" name='scheduled_date' value={createSessionFormData.scheduled_date}></input>
          <input type="hidden" name='scheduled_time' value={createSessionFormData.scheduled_time}></input>
          <button id='next-button' value='Next' type="submit">Next</button>
        </Form>
      </section>
    </>
  );
}
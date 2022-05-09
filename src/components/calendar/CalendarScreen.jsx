import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar'

import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { messages } from '../../helpers/calendar-messages-es'
import { CalendarEvent } from './CalendarEvent'

import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarModal } from './CalendarModal'

const localizer = momentLocalizer(moment);
moment.locale('es');

const myEventsList = [{
  title: 'Cumplea;os del jefe',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  bgcolor: '#fafafa',
  notes: 'Comprar el pastel',
  user: {
    _id: '123',
    name: 'Ignacio',
  }
}]

export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClick = (event) => {
    console.log(event);
  }

  const onSelecetEvent = (event) => {
    console.log(event);
  }

  const onViewChange = (event) => {
    setLastView(event);
    localStorage.setItem('lastView', event);
  }

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block'
    }

    return {
      style
    }

  }

  return (
    <div className='calendar-screen'>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelecetEvent}
        onView={onViewChange}
        view={lastView}
        components={{
            event: CalendarEvent
          }}
      />

      <CalendarModal />
    </div>
  )
}

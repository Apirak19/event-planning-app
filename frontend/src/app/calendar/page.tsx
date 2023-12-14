"use client"

import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default class DemoApp extends React.Component {
  render() {
     return (
       <main className='p-2'>
      <FullCalendar
  plugins={[ dayGridPlugin ]}
  dateClick={this.handleDateClick}
  initialView="dayGridMonth"
  weekends={false}
  
  events={[
    { title: 'event 1', date: '2019-04-01' },
    { title: 'event 2', date: '2019-04-02' }
  ]}
/>
      </main>
      
    )
   }
   handleDateClick = (arg: any) => { // bind with an arrow function
      alert(arg.dateStr)
    }
}
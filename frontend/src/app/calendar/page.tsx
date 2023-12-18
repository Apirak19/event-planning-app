"use client";

import React, {useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import {
  CalendarOptions,
  CalendarApi,
} from '@fullcalendar/core'

interface Event {
  title: string;
  start: Date | string;
  allDay: Boolean;
  id: number;
}

export default function Calendar() {
  const [events, setEvents] = useState([
    { title: "event1", id: "1" },
    {title: "event2", id: "2"}
  ])
  const [allEvents, setAllEvents] = useState<Event[]>([])

  function handleDateClick (arg: any){
    // bind with an arrow function
    alert(arg.dateStr);
  };
    return (
      <main className="min-h-screen flex flex-col justify-center items-center">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          // dateClick={this.handleDateClick}
          initialView="dayGridMonth"
          weekends={true}
          nowIndicator={true}
          selectable={true}
          selectMirror={true}
          editable={true}
          droppable={true}
          events={[
            { title: "event 1", date: "2023-12-01" },
            { title: "event 2", date: "2019-04-02" },
          ]}
          />
      </main>
    );
  }


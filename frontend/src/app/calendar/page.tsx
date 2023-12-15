"use client";

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";

interface Event {
  title: string;
  start: Date | string;
  allDay: Boolean;
  id: number;
}

export default class DemoApp extends React.Component {
  render() {
    return (
      <main className="p-24">
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
  handleDateClick = (arg: any) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}

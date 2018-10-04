<template>
  <div class="calendar-page">
    <h3 v-if="!calendarLoaded" id="loading">Loading</h3>
    <div ref="calendar" id="calendar"></div>
  </div>
</template>

<script>
const ApiKey = 'AIzaSyBEDQhf7itA6iAPJ-p0ENiVrO4B6E4xXSU'
const EventsId = '5hgkoqu9stlv78k7tguskqpdsc@group.calendar.google.com'
let Calendar
let Gcal

if (process.browser) {
  Calendar = require('fullcalendar').Calendar
  require('fullcalendar/dist/fullcalendar.min.css')
  require('fullcalendar/dist/plugins/gcal.js')
}

export default {
  name: 'Calendar',
  data: () => ({
    calendarLoaded: false
  }),

  mounted () {
    const self = this
    const calendarEl = this.$refs.calendar
    var calendar = new Calendar(calendarEl, {
      defaultView: 'listYear',

      views: {
        month: { buttonText: 'Month' },
        // listWeek: { buttonText: 'list week' },
        listYear: { buttonText: 'List' }
      },

      header: {
        left: 'title',
        center: '',
        right: 'month,listYear'
      },
      // defaultView: 'listYear',
      displayEventTime: false, // don't show the time column in list view
      googleCalendarApiKey: ApiKey,
      // US Holidays
      events: EventsId,
      eventClick: function (arg) {
        // opens events in a popup window
        window.open(arg.event.url, 'gcalevent', 'width=700,height=600')
        arg.jsEvent.preventDefault() // don't navigate in main tab
      },
      loading: function (bool) {
        self.calendarLoaded = true
      }
    })

    calendar.render()
  }
}
</script>

<style>
#calendar {
  min-width: 100%;
  min-height: 300px;  
}
.fc-scroller {
    min-width: 100% !important;
    min-height: 300px !important;
}
</style>
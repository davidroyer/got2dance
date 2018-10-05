<template>
  <div class="calendar-page">
    <h3 v-if="!calendarLoaded" id="loading">Loading</h3>
    <div ref="calendar" id="calendar"></div>
  </div>
</template>

<script>
const ApiKey = process.env.GOOGLE_API_KEY
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
      defaultView: 'month',

      views: {
        month: { buttonText: 'Month' },
        listWeek: { buttonText: 'List' }
      },

      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,listWeek'
      },

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
    min-width: 92% !important;
    min-height: 300px !important;
}
</style>
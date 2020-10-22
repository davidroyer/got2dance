<template>
  <div class="calendar-page">
    <h3 v-if="!calendarLoaded" id="loading">Loading</h3>
    <div id="calendar" ref="calendar"></div>
  </div>
</template>

<script>
const EventsId = '5hgkoqu9stlv78k7tguskqpdsc@group.calendar.google.com'
let Calendar

if (process.browser) {
  Calendar = require('fullcalendar').Calendar
  require('fullcalendar/dist/plugins/gcal.js')
}

export default {
  name: 'Calendar',
  data: () => ({
    calendarLoaded: false,
  }),

  mounted() {
    const self = this
    const calendarEl = this.$refs.calendar
    const calendar = new Calendar(calendarEl, {
      defaultView: 'month',

      views: {
        month: { buttonText: 'Month' },
        listWeek: { buttonText: 'List' },
      },

      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,listWeek',
      },
      googleCalendarApiKey: process.env.GOOGLE_API_KEY,

      events: EventsId,
      eventClick(arg) {
        // opens events in a popup window
        window.open(arg.event.url, 'gcalevent', 'width=700,height=600')
        arg.jsEvent.preventDefault() // don't navigate in main tab
      },
      loading(bool) {
        self.calendarLoaded = true
      },
    })

    calendar.render()
    console.log(calendar)

    // Use this to update the view on mobile
    // setTimeout(() => {
    //   calendar.changeView('listWeek')
    // }, 1500)
  },
}
</script>

<style lang="scss">
/* purgecss start ignore */
@import 'fullcalendar/dist/fullcalendar.css';
/* purgecss end ignore */
#calendar {
  min-width: 100%;
  min-height: 300px;
}
.fc-scroller {
  min-width: 92% !important;
  min-height: 300px !important;
}
</style>

<template>
	<full-calendar :config="config" :events="events"/>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Calendar',
  data: () => ({
    events: [
      {
        title: 'test',
        allDay: true,
        start: moment(),
        end: moment().add(1, 'd')
      },
      {
        title: 'another test',
        start: moment().add(2, 'd'),
        end: moment()
          .add(2, 'd')
          .add(2, 'h')
      }
    ],
    config: {
      defaultView: 'month',
      eventRender: function(event, element) {
        console.log(event)
      },
      contentHeight: 'auto',
      theme: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month, basicWeek,'
      }
    }
  })
}
</script>

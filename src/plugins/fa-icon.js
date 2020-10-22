import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleRight,
  faChevronRight,
  faCoffee,
  faHeadphones,
  faStar,
  faTimesCircle,
  faWindowClose
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

config.autoAddCss = false

library.add(
  faCoffee,
  faAngleRight,
  faChevronRight,
  faHeadphones,
  faStar,
  faTimesCircle,
  faWindowClose
)

Vue.component('fa-icon', FontAwesomeIcon)

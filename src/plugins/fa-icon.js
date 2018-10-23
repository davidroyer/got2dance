import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faCoffee,
  faAngleRight,
  faChevronRight,
  faHeadphones,
  faStar
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCoffee,
  faAngleRight,
  faChevronRight,
  faHeadphones,
  faStar)

Vue.component('fa-icon', FontAwesomeIcon)

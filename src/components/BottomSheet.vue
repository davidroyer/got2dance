<template>
  <div class="test">
    <button class="px-4 py-2 bg-indigo text-white rounded" @click="toggle">
      Toggle
    </button>
    <transition-slide-up :duration="300">
      <div
        v-show="showBottomSheet"
        class="bottom-sheet z-20 fixed pin-b pin-x p-6 text-white text-center"
      >
        <div class="bottom-sheet-wrapper">
          <div class="bottom-sheet-header">
            <!-- <fa-icon
              class="bottom-sheet-close-btn fa-2x"
              icon="times-circle"
              @click="toggle"
            /> -->

            <h3>Covid-19 Studio Information</h3>
          </div>
          <div class="bottom-sheet-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum
              magnam dicta sunt quam pariatur minima, minus culpa eius maxime?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta
              nihil eveniet cumque vel fugiat iure fugit. Culpa, ducimus
              consequatur.
            </p>
          </div>

          <v-button
            class="bottom-sheet-close-btn"
            @click="$store.commit('toggleBottomSheet')"
          >
            Close
          </v-button>
        </div>
      </div>
    </transition-slide-up>
  </div>
</template>

<script>
import TransitionSlideUp from '@/components/TransitionSlideUp'

export default {
  components: { TransitionSlideUp },
  props: {
    showBottomSheet: {
      type: Boolean,
      required: true
    }
  },
  // data: () => ({
  //   showBottomSheet: false
  // }),

  methods: {
    handleClick() {
      alert('Clicked')
    },

    toggle() {
      this.showBottomSheet = !this.showBottomSheet
    }
  }
}
</script>

<style lang="pcss">
.bottom-sheet {
  background-color: #e6e6e6;
  color: #40526b;
  height: calc(100vh - 80px);

  &-wrapper {
    @apply flex flex-col items-center max-w-md mx-auto;
  }

  &-content {
    text-align: left;
  }

  &-close-btn {
    @apply absolute mb-4 pin-b;
  }
}
</style>

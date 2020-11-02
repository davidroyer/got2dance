<template>
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            facere dolorum in et magnam veritatis error commodi pariatur
            voluptates eveniet!
          </p>
          <p>
            Harum repudiandae voluptatibus illo. Alias in quos recusandae, ab
            consequatur optio quae eius ea repellat repellendus quisquam
            accusantium amet ipsum.
          </p>
          <p>
            Optio dolorum autem dolores sunt aperiam perspiciatis fuga quaerat
            vitae sint excepturi doloribus quas, exercitationem assumenda
            commodi nemo pariatur expedita!
          </p>
          <p>
            Ad qui neque deleniti. Eum cupiditate, esse aperiam excepturi,
            labore sed vitae, eos commodi sunt exercitationem laudantium est
            quibusdam voluptatum?
          </p>
          <p>
            Fuga, repellendus laborum! Tempora reprehenderit soluta natus
            voluptatibus nostrum. Consectetur dolorem nostrum voluptate
            doloribus delectus tempore adipisci iure beatae odit!
          </p>
          <p>
            Iste id quos nostrum magni eos dolorum? Architecto, omnis esse ex
            cumque numquam commodi quos reiciendis ducimus consectetur veniam
            odio!
          </p>
          <p>
            Nostrum quam officia iure quas esse itaque atque repudiandae natus,
            tempore iste, nihil, aliquam consequatur laborum beatae at eum quos.
          </p>
          <p>
            Quis aperiam explicabo, minima temporibus corporis provident quod,
            quaerat iusto id, totam ad numquam sunt ipsum minus vero pariatur
            molestiae!
          </p>
          <p>
            Natus exercitationem delectus quas nulla nisi ipsam, modi, excepturi
            quia tempore fugiat similique, nihil neque repellat quae facere unde
            earum.
          </p>
          <p>
            Error tempora, nulla impedit facere ducimus, natus ullam ea
            voluptatibus illum illo nobis maxime, repellendus sit sint unde eos
            placeat?
          </p>
          <p>
            Magnam voluptas eum voluptatum culpa quae accusamus ducimus ipsa
            natus ipsam aliquam! Tempore quisquam optio ipsum. Enim est tempore
            culpa?
          </p>
          <p>
            Corrupti dolorem iste expedita, possimus odit laborum, recusandae
            aperiam ab neque maiores consequuntur magni, ratione culpa nam totam
            enim quo.
          </p>
          <p>
            Facilis omnis vel voluptates, ea repellendus facere dolorum unde
            doloribus accusamus a soluta tenetur quod quos distinctio repellat
            delectus eius.
          </p>
          <p>
            Repellat sit inventore molestiae explicabo? Fugit, perspiciatis
            nulla corporis voluptatum nostrum, soluta consectetur suscipit neque
            fugiat voluptas fuga facere quas!
          </p>
          <p>
            Vitae temporibus ex quasi deserunt error quis unde quo. Sequi
            similique facere repellendus. Dolor alias quo optio provident.
            Eligendi, error!
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

<style lang="postcss">
.bottom-sheet {
  background-color: #e6e6e6;
  color: #40526b;
  height: calc(100vh - 80px);
  overflow-y: scroll;

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

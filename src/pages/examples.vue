<template>
    <div class="examples p-6 container mx-auto">
        <v-button @click="handleClick">Do Something</v-button>
        <hr class="section-seperator">
        <v-card>
            <v-card-header>
                Card Header
            </v-card-header>
            <v-card-body>
                <fa-icon icon="coffee" size="2x" />
                <fa-icon icon="star" size="4x" />
                <fa-icon icon="headphones" size="6x" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur culpa quibusdam laudantium fugiat autem cumque voluptate. Numquam in repellat, delectus.</p>
            </v-card-body>
        </v-card>
        <hr class="section-seperator">
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  
</div>

<div class="test-example"></div>
        <!-- <MockContent/> -->
    </div>
</template>

<script>
import MockContent from '@/components/MockContent'

export default {
  components: { MockContent },

  methods: {
    handleClick () {
      alert('Clicked')
    }
  }
}
</script>

<style lang="scss">
</style>

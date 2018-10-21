<template lang="html">
  <section class="aria container">
    <pre>{{$data}}</pre>
    <div class="tabs" role="tablist">
      <template v-for="(item, index) in 3">
        <div tabindex="0" @click="setActiveTab(item)" @keyup.enter="setActiveTab(item)" :id="`tab${item}`" class="tab" :class="{active: activeTab == item}" role="tab" :aria-controls="`panel${item}`" :aria-selected="activeTab == item ? 'true' : 'false'" v-text="`Tab ${item}`">
        </div>
      </template>
    </div>

    <div class="panels">
      <template v-for="(item, index) in 3">
        <div tabindex="0" v-show="activeTab == item" :id="`panel${item}`" class="panel" role="tabpanel" :aria-labelledby="`tab${item}`" :aria-hidden="activeTab == item ? 'false' : 'true'">
          <h3>Tab Panel {{item}}</h3>
          <p>When they exist on the same node, v-for has a higher priority than v-if. That means the v-if will be run on each iteration of the loop separately. This can be useful when you want to render nodes for only some items, like below:</p>
        </div>
      </template>
    </div>
<!--
    <div>
      <div>{{ item }}: {{index}} </div>
    </div> -->
    <!-- <div id="panel1" class="panel" role="tabpanel" aria-labelledby="tab1" aria-hidden="false">
      <h3>Tab Panel 1</h3>
    </div>
    <div id="panel2" class="panel" role="tabpanel" aria-labelledby="tab2" aria-hidden="true">
      <h3>Tab Panel 2</h3>
    </div> -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 1
    }
  },
  created () {

  },
  methods: {
    setActiveTab (tabID) {
      console.log(tabID)
      this.activeTab = tabID
    }
  }
}
</script>

<style lang="scss">
  .tabs {
    display: flex;
    width: 100%;
    justify-content: center;
    & > .tab {
        margin: 1em;
        background: #eee;
        padding: .5em 1em;
        cursor: pointer;
        transition: all .15s ease;

        &.active {
          background: #40526b;
          color: white;
        }
    }
  }
</style>

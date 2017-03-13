<template>
  <div id="home">
      <div class="snipmarks-list">
          <br >
        -> {{ $route.params.id }}
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'home',
    computed: mapGetters({
      marker: 'getMarker'
    }),
    methods: {
      ...mapActions([
        'loadMark'
      ])
    },
    mounted () {
      this.$store.dispatch('loadMark')
    }
  }
</script>

<style>
.snipmarks-list {
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.snipmarks-list ul li {
  padding: 20px;
}

.snipmarks-list ul li:hover {
  background-color: #ccc;
  color: #fff;
}
</style>

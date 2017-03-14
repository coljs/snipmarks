<template>
  <div id="home">
    <div class="snipmarks-list">
      <ul>
        <li v-for="marker in markers">
          <router-link :to="{ name: 'Specific Snipmark', params: { id: marker.id } }">{{ marker.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'home',
    computed: mapGetters({
      markers: 'getMarkers'
    }),
    methods: {
      ...mapActions([
        'loadMarks'
      ])
    },
    mounted () {
      this.$store.dispatch('loadMarks')
    }
  }
</script>

<style>
.snipmarks-list {
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.snipmarks-list ul li a {
  color: #999;
  display: block;
  padding: 20px;
  text-decoration: none;
}
.snipmarks-list ul li a:hover {
  color: #fff;
}
.snipmarks-list ul li:hover {
  background-color: #ccc;
  color: #fff;
}
</style>

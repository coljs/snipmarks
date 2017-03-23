<template>
  <div id="home">
    <div class="snipmarks-item">
      <ul>
        <li><strong>Marker name</strong>: {{marker.name}}</li>
        <li><strong>Marker description</strong>: {{marker.description}}</li>
        <li><strong>Marker date</strong>: {{marker.date}}
        <li><strong>Marker link</strong>: {{marker.link}}</li>
      </ul>
  </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'home',
    computed: {
      ...mapGetters({marker: 'getMarker'})
    },
    methods: {
      ...mapActions([
        'loadMark'
      ])
    },
    created () {
      this.$store.dispatch('loadMark', this.$route.params.key)
    }
  }
</script>

<style>
  .snipmarks-item {
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .snipmarks-item ul {
    padding: 20px;
  }
  .snipmarks-item ul li {
    padding: 10px 0;
  }
</style>

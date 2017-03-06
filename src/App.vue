<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
  overflow-y: scroll;
}

body {
  height: 100%;
  font: 13px/1 'Open Sans', sans-serif;
  color: #999;
  background: #eee;
}

a {
  cursor: pointer;
}

ul {
  list-style: none;
}
</style>

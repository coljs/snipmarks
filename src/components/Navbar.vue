<template>
  <div class='header'>
    <router-link to='/' class='title'>
      SnipMarkers
    </router-link>
    <div class='user'>
      <router-link to='/create-snipmarks' class='name'>
        Create SnipMarkers
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style>
.header {
  height: 50px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}

.header .title,
.header .name {
  color: #999;
  text-decoration: none;
}

.header .title {
  padding: 0 30px;
  font: 30px/50px Cookie, sans-serif;
}

.header .user {
  position: absolute;
  top: 17px;
  right: 30px;
  font-weight: 600;
}

.header .name {
  position: relative;
  display: inline-block;
  margin-right: 15px;
  padding-left: 20px;
}

.header .name:before {
  content: '\f007';
  font-family: fontawesome;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

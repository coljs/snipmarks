<template>
  <div id="home">
    <div class="snipmarks-list">
      <ul>
        <li>
          First snipmarker
        </li>
        <li>
          Second snipmarker
        </li>
        <li>
          Third snipmarker
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
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

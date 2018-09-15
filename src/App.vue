<template>
  <div id="app">
    <!--不保留City页面,因为不同-->
    <keep-alive exclude="City">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

</style>

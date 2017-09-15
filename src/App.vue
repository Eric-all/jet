<template>
  <div id="app">
    <img src="./assets/logo.png">
    <rate @onChange="handler"></rate>

    <icon name="apple" style="font-size: 100px" />

    <back-top>
      <div class="ant-back-top-inner">UP</div>
    </back-top>

  </div>
</template>

<script lang="ts">
export default {
  name: 'app',
  methods: {
    handler (val: number) {
      console.log(val)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 1160px;
}
.ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>

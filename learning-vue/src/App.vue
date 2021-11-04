<template>
<div>
  <div>
    hello {{name}}
  </div>
  <h1 :id="greeting" class="underline">{{greeting}}</h1>
  <div v-html="channel"></div>
  <button :disabled="disabled">click me</button>
  <h3 :class="ispromoted && 'promoted' ">promoted movie</h3>
  <h3 :class="issoldout? 'soldout':'new'">sold out?</h3>
  <h3 :class="['new', 'promoted']">newly promoted movie</h3>
  <h3 :class="[ispromoted && 'promoted', issoldout? 'soldout': 'new']">aray of promoted movies</h3>
  <h4 :class="{promoted: ispromoted, new: !issoldout, soldout: issoldout}">checking the movies</h4>
<div :style="hightlight">highight styling</div>
   </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      name: 'ndinda',
      channel: '<b>codeevolution</b>',
      greeting: 'hello world',
      disabled: false,
      ispromoted: true,
      issoldout: true,
      hightlight: {
        fontSize: '50px',
        color: 'yellow',
        padding: '30px'
      }

      }
      }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.underline{
  text-decoration: underline;
}
.promoted{
  font-style: italic;
}
.new{
  color: green;
}
.soldout{
  color: red;
}
</style>

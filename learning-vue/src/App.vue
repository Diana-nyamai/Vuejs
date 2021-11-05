<template>
<div>
  <!-- <div>
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
<div><img :src="logo" alt="logo"></div> -->

<h2 v-if="num === 0">this number is zero</h2>
<h2 v-else-if="num < 0">this number is negative</h2>
<h2 v-else-if="num > 0">this number is positive</h2>
<h2 v-else>this is not a number</h2>
   </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
     num: "diana"
      // name: 'ndinda',
      // channel: '<b>codeevolution</b>',
      // greeting: 'hello world',
      // disabled: false,
      // ispromoted: true,
      // issoldout: true,
      // hightlight: {
      //   fontSize: '50px',
      //   color: 'yellow',
      //   padding: '30px'
      // },
      // logo: 'https://randomuser.me/api/portraits/men/10.jpg'

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
/* .underline{
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
} */
</style>

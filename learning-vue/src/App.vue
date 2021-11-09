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
<div><img :src="logo" alt="logo"></div> introduction to vue and the basics -->

<!-- <h2 v-if="num === 0">this number is zero</h2>
<h2 v-else-if="num < 0">this number is negative</h2>
<h2 v-else-if="num > 0">this number is positive</h2>
<h2 v-else>this is not a number</h2> the conditonal rendering-->

<!-- <h1 v-for="(name,index) in names" :key="name">{{index}} {{name}}</h1>
<h1 v-for="name in fullNames" :key="name.first">{{name.first}} {{name.second}}</h1>

<div v-for="actor in actors" :key="actor.name">
  <h3>{{actor.name}}</h3>
  <h4 v-for="movie in actor.movies" :key="movie" :style="movieColor">{{movie}}</h4>
</div> lists rendering-->

<h1>the sum of the numbers is: {{sum(2,3,4)}}</h1>
<h1>the multiplactaion is: {{ multiply(3)}}</h1>

<h1>{{name}}</h1>
<button @click="changeName">change name</button>

<h1>{{volume}}</h1>
<div>
  <button @click="increament">volume +</button>
  <button @click="decreament">volume -</button>
</div>
   </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      // event handling
      name: 'jeremiah',
      count: 0,
//  methods
     baseMultiplier: 20,
     volume: 0,
      // names: ['diana', 'ndinda', 'nyamai'],
      // fullNames: [
      //   {first: 'diana', second: 'nyamai'},
      //    {first: 'princess', second: 'tiana'},
      //     {first: 'queen', second: 'nyamai'}
        
      // ],
      // actors: [
      //   {
      //     name: 'lee minho',
      //     movies: [ 'the king', 'legend of blue sea']
      //   },
      //   {
      //     name: 'lee jong suk',
      //     movies: ['pinnochio', 'w: two world apart']
      //   },
      //   {
      //     name: 'suzy',
      //     movies: ['startp', 'while you were sleeping']
      //   }
      // ],
      // movieColor: {
      //   color: 'red'
      // lists rendering}

    //  num: "diana" (conditonal rendering data)
    // {
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
//  the basics of vue data}
      }
      },

      methods: {
        changeName(){
           this.name = 'kamama'
        },
        increament(){
          this.volume += 2
        },
        decreament(){
          this.volume -= 2
        },
        sum(a,b,c){
          return a + b + c
        },
        multiply(num){
          return num * this.baseMultiplier
        }
      },
      watch: {
        volume(newValue){
          if(newValue === 16){
            alert('listening music too loud may damage your hearing')
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
.movies{
  color: red;
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
} the basics of vue styling */
</style>

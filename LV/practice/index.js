const app = Vue.createApp({
     data(){
         return{
             name: 'first name is diana',
             age: 23
         }
     },
     methods: {
         changename(second){
             this.name = second
         }
     }
})

app.mount('#app')
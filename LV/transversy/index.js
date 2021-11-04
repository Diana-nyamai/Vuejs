const app = Vue.createApp({
    data(){
        return{
            firstName: 'jeremy',
            secondName: 'kamama',
            email: 'dnyamai.dn@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            pic: './blue.jpg'
        }
    },
    methods: {
        async getUser(){
          const res = await fetch('https://randomuser.me/api')
          const {results} = await res.json()

           console.log(results)

            this.firstName = results[0].name.first
            this.secondName = results[0].name.second
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')
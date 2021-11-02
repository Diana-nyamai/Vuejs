const app = Vue.createApp({
    data(){
        return{
            product: 'shoes',
            description: 'shoes can be worn by any gender',
            green: '../LV/green.jpg',
            img_descr: 'blue',
            instock: 100,
            details: ['50% off', '40% off', '30% off'],
            variants:[
                {id: 4567, color: 'green'},
                {id: 6758, color: 'blue'}
            ]
        }
    }
})
import { createApp, ref, reactive } from 'vue'

createApp({
    setup(){
        // component logic
        // declare some reactive state here.
        const counter = reactive({count: 0})
        const message = ref('Hello World!')
        console.log(message.value)
        return { counter, message }
    }
}).mount('#app')


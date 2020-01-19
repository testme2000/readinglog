<template>
    <div>
        <Booklist />
    </div>
</template>

<script>
    import Booklist from '@/components/booklist.vue'

    export default {
        name: 'Mainboard',
        components: {
            Booklist
        },
        data : function() {
            return {
                status : true
            }
        }        
    }
</script>
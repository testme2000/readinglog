<template>
    <div class="delete">
        <deletebookentry :entry=bookentrydetail />
    </div>
</template>

<script>
import deletebookentry from '@/components/deletebookentry'
export default {
    name: 'deletebook',
    components: {
        deletebookentry
    },
    data() {
        return {
            bookentrydetail: {}
        }
    },
    created() {
        this.bookentrydetail = this.$store.getters.getbookentry(this.$route.params.id);  
    }
}
</script>

<style>

</style>

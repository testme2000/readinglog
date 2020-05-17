<template>
    <div>
        <updatebookentry :entry=this.booktoUpdated></updatebookentry>
    </div>
</template>

<script>
import updatebookentry from '@/components/updatebookentry.vue'
export default {
    name: 'modifybook',
    data() {
        return {
            booktoUpdated : {}
        }
    },
    components: {
        updatebookentry
    },
    created() {
        this.booktoUpdated = this.$store.getters.getbookentry(this.$route.params.id);  
    }
}
</script>

<style>

</style>

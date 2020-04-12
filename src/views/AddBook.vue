<template>
  <div class="about">
    <createbookentry></createbookentry>
  </div>
</template>

<script>
    import createbookentry from '@/components/createbookentry.vue'
    export default {
        name: 'addbook',
        components: {
            createbookentry
        }        
    }
</script>
<template>
    <div>
        <md-table v-model="currentbooklist" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
            <md-table-toolbar>
                <h1 class="md-title">Booklist log as on date</h1>
            </md-table-toolbar>
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Title" md-sort-by="title">{{item.title}}</md-table-cell>
                <md-table-cell md-label="Author" md-sort-by="author">{{item.author}}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
export default {
    name : 'Booklist',
    data : function() {
        return {
            status : true 
        }
    },
    computed : {
        currentbooklist() {
            return this.$store.getters.getbooklist;
        }
    }
}
</script>

<style scoped>
  .md-field {
    max-width: 300px;
  }
</style>

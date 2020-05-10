<template>
    <div>
        <md-table  v-model="currentbooklist" md-card>
            <md-table-toolbar>
                <h1 class="md-title">Booklist log as on date</h1>
            </md-table-toolbar>
            <md-table-row>
                <md-table-head>ID</md-table-head>
                <md-table-head>Titel</md-table-head>
                <md-table-head>Author</md-table-head>
            </md-table-row>
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Id" md-sort-by="id">{{item.displayId}}</md-table-cell>
                <md-table-cell md-label="Title" md-sort-by="title">{{item.title}}</md-table-cell>
                <md-table-cell md-label="Author" md-sort-by="author">{{item.author}}</md-table-cell>
                <md-table-cell>
                    <router-link :to="{ name: 'modifybook', params: { entry : item}}">Update</router-link>    
                </md-table-cell> 
                <md-table-cell>
                    <router-link to="/delete book">Delete</router-link>    
                </md-table-cell> 
            </md-table-row>
        </md-table>
  </div>
</template>


<script>
export default {
    name : 'Booklist',
    data : function() {
        return {
            status : true,
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
    td
    {
        text-align: left;
    }
</style>

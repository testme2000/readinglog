<template>
    <div>
        <md-table  v-model="currentbooklist" md-sort="displayId" md-sort-order="asc" md-card>
            <md-table-toolbar>
                <h1 class="md-title">Booklist log as on date</h1>
            </md-table-toolbar>
            <md-table-row>
                <md-table-head>ID</md-table-head>
                <md-table-head>Title</md-table-head>
                <md-table-head>Author</md-table-head>
            </md-table-row>
            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Id" md-sort-by="displayId">{{item.displayId}}</md-table-cell>
                <md-table-cell md-label="Title" md-sort-by="title">{{item.title}}
                <router-link :to="{ name: 'viewsummary', params: {id : item.internalId}}"><span class="md-body-1">......</span></router-link>
                </md-table-cell>
                <md-table-cell md-label="Author" md-sort-by="author">{{item.author}}</md-table-cell>
                <md-table-cell>
                    <router-link :to="{ name: 'modifybook', params: { id : item.internalId}}">Update</router-link>    
                </md-table-cell> 
                <md-table-cell>
                    <router-link :to="{ name: 'deletebook', params: { id : item.internalId}}">Delete</router-link>    
                </md-table-cell> 
            </md-table-row>
        </md-table>
  </div>
</template>


<script>
//import booksynposis from '@/components/booksynposis'
export default {
    name : 'Booklist',
    data : function() {
        return {
            currentbooklist : this.$store.getters.getbooklist,
            status : true,
            synposisTime : false,
            bookrecord : null,
            activeInternalId : 0
        }
    },
    computed: {
        summaryOn : function() 
        {
            return this.synposisTime;
        },
        isShowSummaryOn()
        {
            let status = false;
            if(this.bookrecord != null && this.activeInternalId != 0)
            {
                if(this.bookrecord.internalId === this.activeInternalId)
                {
                    status = true;
                }
            }
            return status;
        }
    },
    methods : {
        showSummary(internalId) {
            // Fetch book record based upon internal id
            console.log("Show summary count : " + this.debugCount++);
            this.bookrecord = this.$store.getters.getbookentry(internalId);
            this.synposisTime = true;
            this.activeInternalId = internalId;
            this.disableShowSummary = true;
        },
        hideSummary() {
            console.log("Hide summary");
            this.synposisTime = false;
            this.bookrecord = null;
            this.activeInternalId = 0;
            this.disableShowSummary = false;
        }
    }
}
</script>

<style scoped>
    td
    {
        text-align: left;
    }
    .md-dialog .md-dialog-container {
        max-width: 768px;
    }
</style>

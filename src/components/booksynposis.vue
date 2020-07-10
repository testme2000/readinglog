<template>
    <div>
        <md-dialog :md-active.sync="showDialog" :md-fullscreen="false">
            <md-card>
                <md-card-header>
                    <md-card-header-text>
                        <div class="md-title">Summary</div>
                        <div class="md-subhead">{{bookentry.title}}</div>
                    </md-card-header-text>
                    <md-card-media>
                        <img :src="booksummary.imageUrl" alt="Image not available" v-if="booksummary" >
                    </md-card-media>
                </md-card-header>
                <md-card-content>
                    <div v-if="booksummary">
                        {{booksummary.description}}
                    </div>
                </md-card-content>
            </md-card>
            <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog">Close</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
import { getbooksummary } from "../webservicecall"

export default {
    name: 'booksynposis',
    props: {
        bookentry : {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            showDialog : true,
            booksummary : null,
            bookimage : null,
            fetchbooksummary : false
        }
    },
    methods : {
        closeDialog() {
            this.showDialog = false;
            this.fetchbooksummary = false;
            this.$emit('closesynposis');
        }
    },
    created() {
        console.log(this.bookentry);
        getbooksummary(this.bookentry.isbn)
            .then(data => {
                this.booksummary = data;
                this.showDialog = true;
            })
            .catch(error => {
                if(error != "Cancel")
                {
                    alert(error);
                }
            });
    }
}
</script>

<style scoped>
    .md-card-media {
        width: 80px;
        height: 120;
        margin: 15px;
        display: inline-block;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
    
</style>


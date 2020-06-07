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
                        <img :src="booksummary.imageUrl" alt="bookentry.title">
                    </md-card-media>
                </md-card-header>
                <md-card-content>
                    {{booksummary.description}}
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
            booksummary : null
        }
    },
    methods : {
        closeDialog() {
            this.showDialog = false;
            this.$emit('closesynposis');
        }
    },
    mounted() {
        console.log(this.bookentry);
        getbooksummary(this.bookentry.title,this.bookentry.author)
            .then(data => {
                                    IMAGE ISSUE
                    OTHER BOOK RECOCRD NOT FOUND ISSUE

                if(this.booksummary == null)
                {
                    this.booksummary = data;
                }
                else 
                {
                    throw "Cancel";
                }
            })
            .catch(error => {
                if(error != "Cancel")
                {
                    alert(error);
                }
            });
        console.log(this.booksummary);
    }
}
</script>

<template>
    <div>
        <h1 class="md-title">Delete Booklog Entry</h1>
        <form class="md-layout" @submit.prevent="DeleteLogEntry">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                    <div class="md-title">Delete book</div>
                </md-card-header>
                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="title">Title</label>
                                <md-input id="title"  v-model="title"  @click="clearStatus" readonly/>
                            </md-field>
                            <md-field>
                                <label for="author">Author</label>
                                <md-input id="author" v-model="author" @click="clearStatus" readonly/>
                            </md-field>
                        </div>
                    </div>
                </md-card-content>
                <md-card-actions>
                    <md-button type="submit" class="md-primary">Delete Book</md-button>
                </md-card-actions>
                <md-card> 
                    <md-card-content>  
                        <div v-if="errors.length">
                            <b>Validation error</b>
                            <ul>
                                <li v-for="(error,index) in errors" :key="index">
                                    {{error}}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <b v-if="statusmsg">{{statusmsg}}</b>
                        </div>
                    </md-card-content>
                </md-card>
            </md-card>
        </form> 
    </div>
</template>

<script>

import { updatelogentry } from '../webservicecall';

export default {
    name:'deletebookentry',
    props: {
        entry : {
            type: Object,
            required: false
        }
    },
    data: function() {
        return {
            errors : [],
            title: this.entry.title,
            author: this.entry.author,
            internalId : this.entry.internalId,
            statusmsg : ''
        }
    },
    methods : {
        DeleteLogEntry: function(e) {
            this.errors = [];
            this.statusmsg = "";
            // Validate title
            if(this.title.length == 0)
            {
                this.errors.push("Please add the title of the book");
            }
            // Validate author
            if(this.author.length == 0)
            {
                this.errors.push("Please add the author of the book");
            }

            if(!this.errors.length)
            {
                var bookentry = {
                    title : this.title,
                    author : this.author,
                    isbn : "1111111",
                    internalId: this.internalId
                }
                this.statusmsg = "";
                let parent = this;
                updatelogentry(bookentry)
                .then(data => {
                    this.statusmsg = "Book " + data.title + " updated successfully";
                    // Now update the log entry into store
                    parent.$store.dispatch('updatebook',bookentry);
                })
                .catch(err => {
                    this.statusmsg = "Found error : " + err;
                })
                return true;
            }
            e.preventDefault();
        },
        clearStatus()
        {
            console.log("Status get called");
            this.statusmsg = "";
        }
    }
}
</script>

<style>

</style>

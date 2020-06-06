<template>
    <div>
        <md-dialog :md-active.sync="showDialog" :md-fullscreen="false">
            <md-dialog-title>Synposis</md-dialog-title>
                <h3>{{bookentry.title}}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>

                <md-dialog-actions>
                    <md-button class="md-primary" @click="closeDialog">Close</md-button>
                </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
//import { getbooksummary } from "../webservicecall"

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
            booksummary : '',
            bookimage : ''
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
        /*getbooksummary(this.bookentry.title,this.bookentry.author)
            .then(data => {
                this.booksummary = data;
            })
        */
    }
}
</script>

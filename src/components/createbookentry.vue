<template>
    <div>
        <h1 class="md-title">Add book to Reading Log</h1>
        <form class="md-layout">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                    <div class="md-title">Add book</div>
                </md-card-header>
                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label for="title">Title</label>
                                <md-input id="title" v-model="title" />
                            </md-field>
                            <md-field>
                                <label for="author">Author</label>
                                <md-input id="author" v-model="author" />
                            </md-field>
                        </div>
                    </div>
                </md-card-content>
                <md-card-actions>
                    <md-button type="submit" class="md-primary">Add Book</md-button>
                </md-card-actions>
            </md-card>
        </form> 
    </div>
</template>

<script>
export default {
    name: 'createbookentry',
    data() {
        return {
START FORM IMPLEMENATION NOW
        }
    }
}
</script>
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { getreadlog, getbookdestail } from './webservicecall';


export default {
  data()  {
      return {
        loginfo : []
      }
  },
  mounted() {
    this.loadreadinglog();
  },
  methods : {
    loadreadinglog() {
      getreadlog()
        .then( data => {
            this.loginfo = data;
            this.updatebooklist();
        })
        .catch((err => alert(err)));
    },
    updatebooklist() {
      if(this.loginfo.length != 0) {
        // Update all reading log data into booklog store
        let parent = this;
        let count = 1;
        this.loginfo.forEach(element => {
          let bookrecord = {
            "displayId" : count, 
            "internalId" : String(element._id).trim(),
            "title" : String(element.title).trim(),
            "author" : String(element.author).trim(),
            "imageurl" : "./content.jpg"
          }
          // Prepare book cover image url element.isbn
          this.getbookcover(element.isbn);
          parent.$store.dispatch('addbook',bookrecord)
          count += 1;
        });
      }
    },
    getbookcover(isbn) {
      getbookdestail(isbn)
        .then( data => {
          let data1 = data.items[0].volumeInfo.imageLinks.thumbnail
          return data1;
        })
        .catch((error =>  alert(error)));
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

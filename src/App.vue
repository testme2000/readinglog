<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/add book">Add Book</router-link>
      <div>
        <button v-on:click="onTest">Test Google</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { getreadlog,getbookisbn,updatelogentry } from './webservicecall';


export default {
  data()  {
      return {
        loginfo : []
      }
  },
  mounted() {
    this.loadreadinglog();
    this.$root.$on('searchIsbn',(isbnDetail) => {
        /* eslint-disable */
        console.log("Input passed from caller " +  isbnDetail);
        let parent = this;
        let finalResult = JSON.stringify(isbnDetail);
        console.log(finalResult);
        getbookisbn(isbnDetail.name,isbnDetail.author)
          .then((res) => {
            //Debug and trace why res.items not working
            for(var bookitem of res.data.items) {
                let authorFound = false;
                let titleFound = false;
                console.log("Compare the value");
                console.log(bookitem);
                // Verify that author is matched
                if(bookitem.volumeInfo.hasOwnProperty('authors')) {
                let authorValue = bookitem.volumeInfo.authors.join(' ');
                  if(authorValue.includes(isbnDetail.author)) {
                      console.log("Author is found");
                      authorFound = true;
                  }
                }
                // Verify that title is matched
                if(bookitem.volumeInfo.hasOwnProperty('title')) {
                  titleFound = bookitem.volumeInfo.title.includes(isbnDetail.name);
                  console.log("Title status");
                  console.log(titleFound);
                }
                // If both are matching, then get ISBN value
                if(authorFound && titleFound) {
                    let isbnValue = bookitem.volumeInfo.industryIdentifiers[0].identifier;
                    // its time to add it in database
                    var bookentry = {
                      title: isbnDetail.name,
                      author: isbnDetail.author, 
                      isbn : isbnValue,
                      internalId: isbnDetail.internalId
                    }
                    // Now update the log entry into store
                    console.log("Updating bookentry with ISBN");
                    updatelogentry(bookentry);
                    parent.$store.dispatch('updateISBN',bookentry);
                    break;
                }
            }
            console.log(res);
          })
        /* eslint-enable */
    });
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
        this.loginfo.forEach(element => {
          let bookrecord = {
            "title" : String(element.title).trim(),
            "author" : String(element.author).trim(),
            "isbn" : String(element.isbn).trim(),
            "internalId" : String(element._id).trim()
          }
          parent.$store.dispatch('addbook',bookrecord)
        });
      }
    },
    /* eslint-disable */
    search() 
    {
        let book = "test";
        let author = "me";
        this.$worker.run((book,author) => {
          `this.$worker run 2: ${book} ${author}`
          console.log(`Here is book ${book}`);
          
        })
        .then(console.log)
        .catch(console.log);
    },
    onTest() {
          var isbnDetail = {
            name : "From Beirut to Jerusalem",
            author: "Thomas L. Friedman",
            internalId: "5f65230820318b07dc4e786a"
          }
          let parent = this;
          getbookisbn(isbnDetail.name,isbnDetail.author)
          .then((res) => {
            //Debug and trace why res.items not working
            for(var bookitem of res.data.items) {
                let authorFound = false;
                let titleFound = false;
                console.log("Compare the value");
                console.log(bookitem);
                // Verify that author is matched
                let authorValue = bookitem.volumeInfo.authors.join(' ').toLowerCase();
                if(authorValue.includes(isbnDetail.author.toLowerCase())) {
                    console.log("Author is found");
                    authorFound = true;
                }
                // Verify that title is matched
                let titleSearch = bookitem.volumeInfo.title.toLowerCase(); 
                titleFound = titleSearch.includes(isbnDetail.name.toLowerCase());
                console.log("Title status");
                console.log(titleFound);
                // If both are matching, then get ISBN value
                if(authorFound && titleFound) {
                    let isbnValue = bookitem.volumeInfo.industryIdentifiers[0].identifier;
                    // its time to add it in database
                    var bookentry = {
                      title: isbnDetail.name,
                      author: isbnDetail.author, 
                      isbn : isbnValue,
                      internalId: isbnDetail.internalId
                    }
                    // Now update the log entry into store
                    console.log("Updating bookentry with ISBN");
                    updatelogentry(bookentry);
                    parent.$store.dispatch('updateISBN',bookentry);
                    break;
                }
            }
          });
    }
    /* eslint-enable */
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

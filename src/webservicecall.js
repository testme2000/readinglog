import axios from 'axios';


export function getreadlog() {
    return axios.get("http://localhost:3000/readinglog")
                .then(response => response.data);
}

/* eslint-disable no-alert, no-console */
export function getbookdestail(isbn) {
    
    //let urldetail = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
    isbn = "0596156715";
    let urldetail = "https://openlibrary.org/api/volumes/brief/isbn/" + isbn + ".json";
    return axios.get(urldetail, {
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods" : "GET",
          "Access-Control-Allow-Headers" : "Content-Type, Authorization"
          //"Cache-Control" : "max-age=0",
          //"Connection" : "keep-alive"
        },
    })
      .then(response => response.data);
}
/* eslint-enable no-alert */

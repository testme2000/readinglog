import axios from 'axios';
/*
const headers = {
    'Content-Type': 'application/json',
    'Connection': 'keep-alive',
    'crossdomain' : true,
    'Access-Control-Request-Method': 'POST'
}
*/
  


export function getreadlog() {
    return axios.get("http://localhost:3000/readinglog")
                .then(response => response.data);
}

export function createlogentry(data) {
    return axios.post("http://localhost:3000/createlogentry",
    { title: data.title, author : data.author})
    .then( response => response.data);
}

export function updatelogentry(data) {
    return axios.put("http://localhost:3000/updatelog",data)
            .then( response => response.data);
}

/* eslint-disable no-alert, no-console */
export function getbookdestail(isbn) {
    isbn = "0759574731";
    let urldetail = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
    return axios.get(urldetail)
      .then((response) => {
          //let data1 = data.items[0].volumeInfo.imageLinks.thumbnail
          return response.data;
      })
      .catch((error) => {
          alert(error);
      });
}
/* eslint-enable no-alert */

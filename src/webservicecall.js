import axios from 'axios';
//import { response } from 'express';

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

export function deletelogentry(data) {
    console.log("Data passed to delete entry");
    console.log(data);
    let deleteData = {
        "data" : data
    };
    return axios.delete("http://localhost:3000/deletelog",deleteData)
            .then(response => response.data);
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

export function getbooksummary(name,author) {
    let urldetail = "https://www.googleapis.com/books/v1/volumes?q=" + name + "+inauthor:" + author;
    let result = {};
    return axios.get(urldetail)
        .then((response) => {
            result.description = response.data.items[0].volumeInfo.description;
            result.imageUrl = response.data.items[0].volumeInfo.imageLinks.smallThumbnail;
            return result;
        })
        .catch((error) => {
            alert(error);
        });
}


/* eslint-enable no-alert */

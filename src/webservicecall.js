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

export function getbooksummary(isbn) {
    let urldetail = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
    console.log(urldetail);
    let result = {};
    return axios.get(urldetail)
        .then((response) => {
            if(response.data.totalItems != 0)
            {
                //RECORD FETCHING GOING IN CHAIN, ADD CANCEL REQUEST FROM AXIOS
                console.log("First call without anything");
                result.description = response.data.items[0].volumeInfo.description;
                result.imageUrl = response.data.items[0].volumeInfo.imageLinks.smallThumbnail;
                result.Status = true;
            }
            else 
            {
                result.description = "Not Available";
                result.imageUrl = "'@/assets/content.png'";
                result.Status = false;
            }
            return result;
        })
        .catch((error) => {
            alert(error);
        });
}

export function getbookisbn(name,author) {
    let urldetail = "https://www.googleapis.com/books/v1/volumes?q=" + name + "+inauthor:" + author;
    console.log(urldetail);
    return axios.get(urldetail)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            alert(error);
        });
}


/* eslint-enable no-alert */

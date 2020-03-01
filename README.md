# readinglog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/)

### Mongodb details
db name : booklistdb
collection : readinglogcollection

### For book cover jpeg file
https://openlibrary.org/dev/docs/api/read
https://dev.openlibrary.org/api/books.json?bibkeys=ISBN:0201558025&jscmd=data&format=json
http://openlibrary.org/api/volumes/brief/isbn/0596156715.json

GET /api/volumes/brief/isbn/0596156715.json HTTP/1.1
Host: openlibrary.org
Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
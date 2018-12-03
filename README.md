# giantgo-nuxt

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

db.getCollection('contents').find().forEach(function(doc) {
doc.reading.total = doc.reading.total + parseInt(Math.random()*(10000-20000)+10000);
db.contents.save(doc);
});

# my-app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### info about app

Vuex is used to store all data. The call to json file is through axios and stored in the vuex state. Each component gets access to the vuex through mapState. The slider data range works with vue model to bind the data two ways, then transfer the value back to the object and update. This new value then passes through into the list, where a method is used to calculate the font size of the current selected character.

Improvements - with more time. Folder structure for global styles. Import fonts rather than use google fonts. Test on a range of devices for design flaws. Link data slider to be preset to current value of character popularity.

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

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# vue-godfather

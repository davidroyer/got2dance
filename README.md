# Got2Dance Website


## Modules

## Plugins

## Services

## Data

## Configs
This folder consists of several configs to help extract away some settings that will change for each project such as with `site.js` and `theme.js` as well as configs that could remain mostly the same. 

## Build Setup


# Notes

## `meta.js`

This plugin helps to easily create the meta for pages. Used in conjunction with `routes-meta.js` 

## Environmental Variables
The key to getting this to work at runtime using Netlify builds was seting `{systemvars: true;}`

## Things I learned

PurgeCSS doesn't work unless you set `extractCss: true`




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

## Email Setup
- Need to set outgoing port to 465
- Set SSL to on
- Make sure hostname for outgoing is smtpout.secureserver.net
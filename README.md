# Mini Radio

![Radio Mini](https://user-images.githubusercontent.com/187134/29489199-4d6242fc-84e9-11e7-8de2-9fd656a541da.gif)

## Présentation

Lecteur audio des principales stations de radio de Montréal et Québec.

Mini Radio est une petite extension gratuite disponible sur Google Chrome, qui fait jouer les streamings des principales stations de radio de Montréal et Québec.

Un moyen simple, facile d'écouter vos stations et animateurs préférés du Québec au bureau, à la maison ou partout dans le monde.

## Disponible sur Chrome Web Store

[![Disponible sur Chrome Web Store](https://user-images.githubusercontent.com/187134/29489211-91743dec-84e9-11e7-9892-e37b7645ad74.png)](https://chrome.google.com/webstore/detail/mini-radio/klcjochgjlcecbalpokmcldlfhngcnfh?utm_source=github)

## Technical

### Development

```bash
npm install
npm run watch
```

#### Load the extension in Chrome

1. Open Chrome and navigate to chrome://extensions
2. Enable Developer Mode
3. Click on Load unpacked extension
4. Select the extension folder

#### Build the extension

```bash
npm run build
```

#### Package the extension
  
```bash
npm run package
```

#### Testing stations

```bash
npm run test
```

### rPlayer library

This extension utilizes rPlayer, you can find more information about the library on its website: [rplayer.js.org](https://rplayer.js.org/)

### Credits

- Logo: http://www.iconarchive.com/show/qetto-2-icons-by-ampeross/radio-icon.html
- Icons play, stop and volume: https://icomoon.io/#preview-free

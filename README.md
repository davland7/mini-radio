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

[![Valid Stations](https://private-user-images.githubusercontent.com/187134/341990244-8e4df9e1-157d-4d25-805e-598cff912c3d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkwODA2NzUsIm5iZiI6MTcxOTA4MDM3NSwicGF0aCI6Ii8xODcxMzQvMzQxOTkwMjQ0LThlNGRmOWUxLTE1N2QtNGQyNS04MDVlLTU5OGNmZjkxMmMzZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyMlQxODE5MzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNjA3NjhiYzc5ZmJmNWYyYmNlMDQ5MjI5MWMxNDdhNTViODI4ZDFjZDc1Njk1YTY5MGJhNWQwOTQxMzdiMjg0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.UMBOYinPk7riZI6Y3U1RtAekzmNttdrr5YPVnr4z58c)]

### rPlayer library

This extension utilizes rPlayer, you can find more information about the library on its website: [rplayer.js.org](https://rplayer.js.org/)

### Credits

- Logo: http://www.iconarchive.com/show/qetto-2-icons-by-ampeross/radio-icon.html
- Icons play, stop and volume: https://icomoon.io/#preview-free

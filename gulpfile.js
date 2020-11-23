const { src, dest } = require('gulp');

function srcExemple () {
   return src('./*.html')
    .pipe(dest('dossier1/'))
}

module.exports = {
  srcExemple
}
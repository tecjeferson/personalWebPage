const {src, dest, parallel} = require('gulp');
const image = require('gulp-image')

function img(){
    return src('../src/img/*.jpg')
    .pipe(image())
    .pipe(dest('../img/'))
}

exports.default = parallel(img)
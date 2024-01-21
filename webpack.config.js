const path = require('path')

module.exports = {
    mode: 'development',
    entry: './server/routes/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}
const path = require('path')

module.exports = {
    entry: ['./src/index.js'],
    resolve: {
        modules: [
            path.resolve('./node_modules')
        ]
    }
}
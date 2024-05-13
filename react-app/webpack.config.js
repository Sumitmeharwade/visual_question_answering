const webpack = require('webpack');

module.exports = {
    // Other webpack configuration options...

    resolve: {
        fallback: {
            "https": require.resolve("https-browserify"),
            "http": require.resolve("stream-http"),
            "util": require.resolve("util/"),
            "crypto": require.resolve("crypto-browserify") ,
            "buffer": require.resolve("buffer/"),
            "path": require.resolve("path-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "stream": require.resolve("stream-browserify")
            // Add fallbacks for other missing modules as needed
        }
    }
};

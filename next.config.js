// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
        // Custom webpack configuration
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next/',
                        outputPath: 'static/media/',
                        name: '[name].[hash].[ext]',
                    },
                    // options: {
                    //     name: 'assets/[name].[ext]'
                    // }
                }
            ]
        });

        // config.module.rules.push({
        //     test: /\.(mp4|webm)$/i,
        //     use: [
        //         {
        //             loader: 'file-loader',
        //             options: {
        //                 publicPath: '/_next/',
        //                 outputPath: 'static/media/',
        //                 name: '[name].[hash].[ext]',
        //             },
        //         },
        //     ],
        // });


        // You can also modify other webpack options here

        return config;
    }
};

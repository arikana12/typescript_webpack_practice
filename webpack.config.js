nodule.exports = {
    entry:{
        bandle:".src/index.ts"
    },
    output:{
        Path:`${__dirname}/dist`,
        filename:"bandle.js"
    },
    node:"development",//production
    resolve:{
        extensions:[".ts,","js"]
    },
    devServer:{
        static:{
            directory:`${__dirname}/dist`
        }
    }
};
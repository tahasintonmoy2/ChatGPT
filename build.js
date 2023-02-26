const {MSICreator } =require('electron-wix-msi')
const path = require('path')

const APP_DIR = path.resolve(__dirname, './ChatGPT-win32-x64')
const OUT_DIR = path.resolve(__dirname, './windows_installer')

const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory:OUT_DIR,

    description:"ChatGPT by OpenAI",
    name:"ChatGPT Desktop",
    exe:"ChatGPT",
    manufacturer:"Tahasin",
    version:'1.0.0',
    icon:"./icons/icon.ico",

    ui:{
        chooseDirectory:true
    }
})

msiCreator.create().then(function(){
    msiCreator.compile()
})

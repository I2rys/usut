//Dependencies
const Turl = require("turl")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <url>")
    return
}

Turl.shorten(Self_Args[0]).then((url)=>{
    console.log(`New url: ${url}`)
}).catch(()=>{
    console.log("Something went wrong.")
})
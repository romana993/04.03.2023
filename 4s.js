
const http = require('http');
http.createServer((req, res) => {
 
    res.write("Hello World")
    res.end()
     }).listen(2000)

     const figlet = require("figlet")

console.log (
    figlet.textSync("Hello World","Slant", {horizontalLayout:"full"})
)

console.log (
    figlet.textSync("Hello World","Sub-Zero", {horizontalLayout:"full"})
)
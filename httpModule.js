const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
      return  res.end(`<h1>Home page</h1>`)
    }
    if(req.url === "/about"){
       return res.end(`<h1>About</h1>`)
    }

    return res.end(`
        <h1>Oops</h1>
        <p>Page do not exist!</p>
        <a href="/">Back to home page</a>
    `)

})

server.listen(5000)
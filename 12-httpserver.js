const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === `/`) {
        res.end("Welcome!")
        return
    }
    if (req.url === '/about') {
        res.write(loadWidget)
        res.end()
        return
    }
    res.write(`
        <h1>Ooops!</h1>
        <p>We can't fuck you in the ass</p>
        <a href="/">back home</a>
        `)
    res.end()
})

server.listen(5000)


const loadWidget = `
<div class="loading-container">
            <span class="loading-text">Loading...</span>
        </div>
        <style>

        .loading-container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }

        .loading-text {
            color: #333;
            font-size: 24px;
            letter-spacing: 1px;
            animation: loading-fade-in-out 2s ease infinite;
        }

        @keyframes loading-fade-in-out {
            0% { opacity: 0; }
            25% { opacity: 1; }
            75% { opacity: 1; }
            100% { opacity: 0; }
        }
        </style>
`
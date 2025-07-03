const { log } = require('console');
const  {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf-8' , (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result
        writeFile(
            './content/result-sync.txt', 
            `Here is files ${first + ' ' + second + ' '}`,
            {flag: 'a'}, 
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                log(result)
            }
        )
    })
} )
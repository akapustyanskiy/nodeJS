// FS module
// так можно одельные модули получать а не весь модуль
const { log } = require('console');
const  {readFileSync, writeFileSync} = require('fs');
const { arrayBuffer } = require('stream/consumers');

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// Выводит содержимое файла
console.log(first, second);

const resultFileName = 'result-sync.txt'

// если файла res-sync нет то он создастся, если там что-то есть то пропадет и перезапишется
writeFileSync(`./content/${resultFileName}`, `Here is ${first + ' ' + second}`)

// Вот так можно не перезаписывать а только дописать в конец
writeFileSync(
    `./content/${resultFileName.replace('.txt', '-1.txt')}`,
    `Here is files ${first + ' ' + second + ' '}`,
    {flag: 'a'}
)

const result = readFileSync(`./content/${resultFileName}`, 'utf-8')
console.log("Result:\n", result);
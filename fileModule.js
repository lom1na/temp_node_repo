const {readFileSync,writeFileSync} = require('fs');
console.log("Start")
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)

writeFileSync('./content/createFile.txt', 'This is content of file')
console.log("Task complete!")
console.log("Start other task..")
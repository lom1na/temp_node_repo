
const path = require('path');

console.log(path.sep)

const filePath = path.join('./content/', '/subfolder','texst.txt')

console.log(filePath)

 const base = path.basename(filePath)

 console.log(base)

 const  absulete = path.resolve(__dirname,'content','subfolder','texst.txt')

 console.log(absulete)
const { readFile, writeFile } = require('fs');
console.log("Start")
readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err)
        return
    }
    const first = res

    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err)
            return
        }
        const second = res

        writeFile('./content/new.txt',`This is result ${first}, ${second}`,(err,res)=>{
            if(err){
                console.log(err)
                return
            }
        })
        console.log("Task complete")
    })
})

console.log("Start other task..")

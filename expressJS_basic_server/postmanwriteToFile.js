const os = require('os')
const newman = require('newman')
const fs = require('fs')

fs.unlink('responses.txt', (err) => {
    if (err) {
        console.log(err);
    };
})

newman.run({
    collection: require('./expjsTesting.postman_collection.json'),
    reporters: 'cli'
}).on('request', (err, data) => {
    if (err) {
        console.log(err)
    };
    
    let content = `Request Name: ${data.item.name}${os.EOL}
                   Response body: ${data.response.stream.toString()}${os.EOL}`

    fs.appendFile('responses.txt' ,content, (err) => {
        if (err) {
            console.log(err)
        }
    })
});



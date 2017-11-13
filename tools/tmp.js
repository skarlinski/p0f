var fs = require('fs');  // file system
var rstream = fs.createReadStream('/tmp/p0f.log');
dataLength = '';
rstream
  .on('data', function (chunk) {
    console.log(chunk.length)

  })


